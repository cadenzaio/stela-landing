import styles from "./StelaIdentity.module.css";

type SymbolId = "p02" | "p05";

type Candidate = {
  id: SymbolId;
  code: string;
  source: string;
  name: string;
  premise: string;
};

const candidates: Candidate[] = [
  {
    id: "p02",
    code: "R2-A",
    source: "P02 symbol",
    name: "Diamond origin",
    premise: "Complete diamond geometry with a quiet inner contour, origin point, and short trace.",
  },
  {
    id: "p05",
    code: "R2-B",
    source: "P05 symbol",
    name: "Incised plane",
    premise: "An upright physical surface interrupted by one controlled incision and origin point.",
  },
];

const inscriptionLetters = "STELA".split("");
const inscriptionPositions = [12, 112, 212, 312, 410];

function PrototypeSymbol({ id, label }: { id: SymbolId; label?: string }) {
  return (
    <svg
      className={styles.symbol}
      viewBox="0 0 100 100"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {id === "p02" && (
        <g fill="none" stroke="currentColor" strokeLinecap="square">
          <path d="M50 9L91 50L50 91L9 50Z" strokeWidth="3" />
          <path d="M50 28L72 50L50 72L28 50Z" strokeWidth="2" opacity="0.72" />
          <path d="M43 53L68 46" strokeWidth="2" />
          <circle cx="43" cy="53" r="4" fill="var(--prototype-surface)" strokeWidth="2.5" />
          <circle cx="43" cy="53" r="1.5" fill="currentColor" stroke="none" />
        </g>
      )}
      {id === "p05" && (
        <g fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="3">
          <path d="M28 14H72V39M72 61V86H28V14" />
          <path d="M40 59L76 43" strokeWidth="2" />
          <circle cx="40" cy="59" r="4" fill="var(--prototype-surface)" />
          <circle cx="40" cy="59" r="2" fill="currentColor" stroke="none" />
        </g>
      )}
    </svg>
  );
}

function PrototypeInscription({ label }: { label?: string }) {
  return (
    <svg
      className={styles.inscription}
      viewBox="0 0 520 108"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {inscriptionLetters.map((letter, index) => (
        <text
          key={`${letter}-${index}`}
          x={inscriptionPositions[index]}
          y="70"
          fill="currentColor"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="60"
          fontWeight="400"
        >
          {letter}
        </text>
      ))}
      <path d="M12 91H462" stroke="currentColor" strokeWidth="2" />
      <circle cx="257" cy="91" r="4" fill="var(--prototype-surface)" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PrototypeLockup({ candidate, compact = false }: { candidate: Candidate; compact?: boolean }) {
  return (
    <div className={compact ? styles.compactLockup : styles.lockup} aria-label={`${candidate.code} Stela lockup`}>
      <PrototypeSymbol id={candidate.id} />
      <PrototypeInscription />
    </div>
  );
}

function QrSpecimen() {
  return (
    <span className={styles.qr} aria-hidden="true">
      {Array.from({ length: 25 }, (_, index) => <i key={index} />)}
    </span>
  );
}

function CandidateCard({ candidate }: { candidate: Candidate }) {
  return (
    <article id={candidate.code.toLowerCase()} className={styles.candidate} aria-labelledby={`${candidate.code}-title`}>
      <header className={styles.candidateHeader}>
        <h2 id={`${candidate.code}-title`}>{candidate.code}</h2>
        <span>Shared inscription / symbol comparison</span>
      </header>

      <div className={styles.primaryLockup}>
        <PrototypeLockup candidate={candidate} />
      </div>

      <div className={styles.partsGrid}>
        <figure>
          <div className={styles.symbolSpecimen}>
            <PrototypeSymbol id={candidate.id} label={`${candidate.code} symbol`} />
          </div>
          <figcaption>Candidate symbol</figcaption>
        </figure>
        <figure>
          <div className={styles.inscriptionSpecimen}>
            <PrototypeInscription label="Corrected P01 inscription" />
          </div>
          <figcaption>Corrected P01 inscription</figcaption>
        </figure>
      </div>

      <div className={styles.productionTests}>
        <div className={styles.scaleTest}>
          <span className={styles.testLabel}>Small scale</span>
          {[16, 20, 24].map((size) => (
            <figure key={size}>
              <span style={{ width: size, height: size }}>
                <PrototypeSymbol id={candidate.id} />
              </span>
              <figcaption>{size}px</figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.navTest}>
          <span className={styles.testLabel}>Navbar</span>
          <PrototypeLockup candidate={candidate} compact />
        </div>

        <div className={styles.assetTest}>
          <span className={styles.testLabel}>Physical identity system</span>
          <div className={styles.identityLayers}>
            <figure className={styles.engravingSpecimen}>
              <figcaption>Permanent engraving</figcaption>
              <span>STLA A7K4 92X8 1847</span>
            </figure>
            <figure className={styles.companionLabel}>
              <figcaption>Transparent companion label</figcaption>
              <div className={styles.companionLabelContent}>
                <PrototypeSymbol id={candidate.id} />
                <div>
                  <PrototypeInscription />
                  <span>VERIFY ASSET</span>
                </div>
                <QrSpecimen />
              </div>
            </figure>
          </div>
          <p className={styles.layerNote}>
            The identifier is permanent. The branded label provides recognition and convenient access to its digital record.
          </p>
        </div>
      </div>
    </article>
  );
}

export function StelaIdentity() {
  return (
    <main className={styles.page}>
      <header className={styles.pageHeader}>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a href="/" aria-label="Back to Stela homepage">STELA</a>
        <span>Identity study / Round 2</span>
      </header>

      <section className={styles.intro}>
        <p>Focused symbol comparison</p>
        <h1>One inscription. Two symbols. One decision.</h1>
        <div>
          <p>The P01 inscription is now fixed across both candidates. Its baseline begins and ends with the inscription instead of extending beyond it.</p>
          <p>Review only what changes: the accompanying symbol, its relationship to the inscription, and its performance on the transparent companion label.</p>
        </div>
      </section>

      <section className={styles.board} aria-label="Round two Stela symbol comparison">
        {candidates.map((candidate) => <CandidateCard candidate={candidate} key={candidate.id} />)}
      </section>

      <section className={styles.reviewGuide} aria-labelledby="review-title">
        <div>
          <p>Decision frame</p>
          <h2 id="review-title">Choose the symbol that makes the inscription more Stela.</h2>
        </div>
        <ol>
          <li>Which lockup feels more established and trustworthy?</li>
          <li>Which symbol is more recognizably tied to physical inscription?</li>
          <li>Which symbol remains clearer at 16 and 20 pixels?</li>
          <li>Which companion label would be easier to recognize and trust?</li>
          <li>What unwanted association does either symbol create?</li>
        </ol>
      </section>

      <details className={styles.reveal}>
        <summary>Reveal source concepts after selecting</summary>
        <div className={styles.revealGrid}>
          {candidates.map((candidate) => (
            <article key={candidate.id}>
              <span>{candidate.code}</span>
              <p>{candidate.source}</p>
              <h2>{candidate.name}</h2>
              <p>{candidate.premise}</p>
            </article>
          ))}
        </div>
      </details>
    </main>
  );
}
