import {
  ArrowRight,
  Camera,
  CarProfile,
  Check,
  Clock,
  Fingerprint,
  IdentificationCard,
  MapPin,
  Minus,
  PenNibStraight,
  SealCheck,
  ShieldCheck,
  SolarPanel,
  UserCircleCheck,
  X,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { StelaMark } from "@/components/brand/StelaMark";
import { SiteFooter, SiteHeader } from "@/components/site/SiteShell";
import { contactPath, pagePath, type Locale } from "@/lib/i18n/config";

const processMedia = [
  {
    number: "01",
    icon: PenNibStraight,
    image: "/images/stela-process-mark-v2.jpg",
  },
  {
    number: "02",
    icon: Fingerprint,
    image: "/images/stela-process-record-v1.jpg",
  },
  {
    number: "03",
    icon: SealCheck,
    image: "/images/stela-process-verify-v2.jpg",
  },
];

const outcomeIcons = [ShieldCheck, IdentificationCard, SealCheck, Clock];

const methods = [
  {
    method: "Labels & printed codes",
    permanent: false,
    field: true,
    controlled: false,
    evidence: false,
    linked: "partial",
    later: "partial",
  },
  {
    method: "Acid etching",
    permanent: true,
    field: true,
    controlled: false,
    evidence: false,
    linked: false,
    later: false,
  },
  {
    method: "Sandblasting",
    permanent: true,
    field: "partial",
    controlled: false,
    evidence: false,
    linked: false,
    later: false,
  },
  {
    method: "Industrial laser",
    permanent: true,
    field: false,
    controlled: "partial",
    evidence: "partial",
    linked: "partial",
    later: "partial",
  },
  {
    method: "Stela",
    permanent: true,
    field: true,
    controlled: true,
    evidence: true,
    linked: true,
    later: true,
    featured: true,
  },
];

const homepageCopy = {
  en: {
    hero: {
      eyebrow: "Permanent asset identification",
      title: "Permanent identity for physical assets.",
      lede: "Stela uses controlled diamond marking to place a permanent identifier directly on vehicle glass and solar panels, then links it to a secure digital record that can be verified throughout the asset lifecycle.",
      see: "See how it works",
      pilot: "Discuss a pilot",
      status: "Currently in development, technical validation, and pilot preparation.",
      imageAlt: "A permanent Stela identifier and QR code applied along the lower border of a vehicle windshield",
      certificateAria: "Example Stela vehicle verification",
      verification: "Stela verification",
      verified: "Vehicle identity verified",
      identifier: "Identifier",
      identifierStatus: "Identifier status",
      confirmed: "Confirmed",
      session: "Marking session",
      authorized: "Authorized",
      evidence: "Evidence",
      evidenceValue: "Time · Location · Photos",
    },
    problem: {
      eyebrow: "The identity problem",
      title: "A digital record is only as reliable as its connection to the physical asset.",
      paragraphs: [
        "Physical identifiers can deteriorate, be removed, or replaced. Documentation can become incomplete, and digital records can lose their connection to the asset they describe.",
        "When that happens, owners, insurers, buyers, and authorities may have information—but no reliable way to confirm that it belongs to the asset in front of them.",
      ],
      emphasis: "Stela creates a permanent connection between physical assets and their verifiable digital identity.",
      flowAria: "A removable identifier creates an identity gap that Stela replaces with a permanent linked identity",
      asset: "Physical asset",
      removable: "Removable identifier",
      lost: "Can be lost or replaced",
      gap: "Identity gap",
      unknown: "Unknown asset",
      permanent: "Permanent Stela identity",
      linked: "Identifier + linked record",
    },
    process: {
      eyebrow: "How it works",
      title: "Mark. Record. Verify.",
      intro: "A single controlled process creates a permanent physical identifier, records its origin, and enables future verification throughout the asset's lifecycle.",
      steps: [
        { label: "Mark", descriptor: "Permanent physical identifier.", title: "Create a permanent identifier.", copy: "A trained operator applies a unique identifier directly to an approved area of the physical asset." },
        { label: "Record", descriptor: "Secure evidence captured.", title: "Record its origin.", copy: "The marking session securely records the asset, operator, equipment, location, timestamp, and supporting evidence in one verified record." },
        { label: "Verify", descriptor: "Trusted identity confirmed.", title: "Verify it at any time.", copy: "Authorized users can verify the asset's identity during insurance claims, inspections, ownership transfers, maintenance, recovery, or retirement." },
      ],
      qualification: "Each material and application will be technically validated before commercial deployment.",
    },
    applications: {
      eyebrow: "Where Stela starts",
      title: "Built for assets where trusted identity matters.",
      vehicleLabel: "Vehicle glass",
      vehicleTitle: "Permanent identity for vehicle glass.",
      vehicleCopy: "For vehicle owners, insurers, fleet operators, lenders, and recovery authorities.",
      vehicleAction: "Explore vehicle applications",
      solarLabel: "Solar energy",
      solarTitle: "Permanent identity for every panel.",
      solarCopy: "For manufacturers, installers, owners, financiers, insurers, and maintenance providers.",
      solarAction: "Explore solar applications",
    },
    value: {
      eyebrow: "Value over time",
      title: "A permanent identity creates value throughout the asset lifecycle.",
      intro: "The identifier continues to provide value whenever an asset changes ownership, location, condition, or operational status.",
      outcomes: ["Make tampering immediately visible.", "Accelerate the recovery of stolen assets.", "Strengthen insurance verification.", "Preserve trusted identity throughout the asset lifecycle."],
      qualification: "These are the benefits Stela is being built to deliver. They will be tested through technical validation and pilot programs.",
    },
    system: {
      eyebrow: "More than a mark",
      title: "The mark identifies the asset. The record proves its origin.",
      copy: "The physical identifier uniquely identifies the asset. The Stela record documents who created it, when, where, and under what authorization. Whenever verification is required, that origin evidence can be retrieved and confirmed.",
      action: "See the full Stela platform",
      origin: "Origin recorded",
      evidence: [["Operator", "Authorized"], ["Evidence", "Captured"], ["Location", "Recorded"], ["Timestamp", "Signed"]],
      record: "Stela record",
      linked: "Asset identity linked",
      questionsLabel: "Together, Stela helps answer:",
      questions: ["Which physical asset does this identifier belong to?", "Who marked it, and under whose authority?", "When and where was it marked?", "What evidence was captured?", "Has its ownership, condition, or status changed?"],
    },
    comparison: {
      eyebrow: "Identification methods",
      title: "A permanent mark alone is not a complete identity system.",
      intro: "Permanence is only one part of trusted identification. A complete system also records the origin of the identifier and enables reliable verification throughout the asset's lifecycle.",
      aria: "Comparison of physical identification methods",
      headings: ["Method", "Permanent", "Portable", "Authorized", "Origin evidence", "Linked record", "Verification"],
      methods: ["Labels & printed codes", "Acid etching", "Sandblasting", "Industrial laser", "Stela"],
      supported: "Supported",
      varies: "Varies",
      excluded: "Not included",
      qualification: "Performance will be tested under controlled conditions before claims are made about specific materials or marking methods.",
    },
    experience: {
      eyebrow: "Built from experience",
      title: "Built on decades of practical asset protection.",
      copy: "Stela builds on decades of experience protecting vehicles through permanent diamond marking. That practical knowledge now informs a modern system combining controlled field operations, secure digital records, and lifecycle verification.",
      principles: ["Controlled marking", "Authorized operations", "Later verification"],
    },
    development: {
      eyebrow: "Building with partners",
      title: "Building with the industries we serve.",
      copy: "Stela is in pre-commercial development. We are working with partners to test the marking system, refine each material-specific process, shape the evidence workflow, and prepare the platform for regulated use.",
      partners: [
        ["Pilot partners", "Insurers, asset owners, fleets, solar operators, and industry groups helping us test real use cases."],
        ["Validation partners", "Glass, vehicle, solar, laboratory, and technical specialists helping us prove what works."],
        ["Strategic partners", "Organizations helping with development, market access, and the path to regulated deployment."],
      ],
      identity: "Permanent asset identification",
      cta: "Could your assets benefit from permanent identity?",
      ctaCopy: "Tell us what the asset is, how it is identified today, and what becomes difficult when that identity is lost, removed, or disputed.",
      action: "Discuss your use case",
    },
  },
  es: {
    hero: {
      eyebrow: "Identificación permanente de activos",
      title: "Identidad permanente para activos físicos.",
      lede: "Stela utiliza marcado controlado con diamante para colocar un identificador permanente directamente sobre el vidrio de vehículos y paneles solares, y lo vincula a un registro digital seguro que puede verificarse durante todo el ciclo de vida del activo.",
      see: "Ver cómo funciona",
      pilot: "Comentar un piloto",
      status: "Actualmente en desarrollo, validación técnica y preparación de pilotos.",
      imageAlt: "Identificador permanente Stela y código QR aplicados junto al borde inferior del parabrisas de un vehículo",
      certificateAria: "Ejemplo de verificación de vehículo Stela",
      verification: "Verificación Stela",
      verified: "Identidad del vehículo verificada",
      identifier: "Identificador",
      identifierStatus: "Estado del identificador",
      confirmed: "Confirmado",
      session: "Sesión de marcado",
      authorized: "Autorizada",
      evidence: "Evidencia",
      evidenceValue: "Hora · Ubicación · Fotos",
    },
    problem: {
      eyebrow: "El problema de identidad",
      title: "Un registro digital solo es fiable si sigue conectado al activo físico.",
      paragraphs: [
        "Los identificadores físicos pueden deteriorarse, retirarse o sustituirse. La documentación puede quedar incompleta y los registros digitales pueden perder su conexión con el activo que describen.",
        "Cuando eso ocurre, propietarios, aseguradoras, compradores y autoridades pueden tener información, pero no una forma fiable de confirmar que pertenece al activo que tienen delante.",
      ],
      emphasis: "Stela crea una conexión permanente entre los activos físicos y su identidad digital verificable.",
      flowAria: "Un identificador extraíble crea una brecha de identidad que Stela sustituye por una identidad permanente vinculada",
      asset: "Activo físico",
      removable: "Identificador extraíble",
      lost: "Puede perderse o sustituirse",
      gap: "Brecha de identidad",
      unknown: "Activo desconocido",
      permanent: "Identidad permanente Stela",
      linked: "Identificador + registro vinculado",
    },
    process: {
      eyebrow: "Cómo funciona",
      title: "Marcar. Registrar. Verificar.",
      intro: "Un único proceso controlado crea un identificador físico permanente, registra su origen y permite verificarlo durante todo el ciclo de vida del activo.",
      steps: [
        { label: "Marcar", descriptor: "Identificador físico permanente.", title: "Crear un identificador permanente.", copy: "Un operador formado aplica un identificador único directamente sobre una zona aprobada del activo físico." },
        { label: "Registrar", descriptor: "Evidencia segura capturada.", title: "Registrar su origen.", copy: "La sesión registra de forma segura el activo, operador, equipo, ubicación, hora y evidencia asociada en un único registro verificado." },
        { label: "Verificar", descriptor: "Identidad de confianza confirmada.", title: "Verificarlo en cualquier momento.", copy: "Los usuarios autorizados pueden verificar la identidad durante siniestros, inspecciones, transferencias, mantenimiento, recuperación o retirada." },
      ],
      qualification: "Cada material y aplicación se validará técnicamente antes de su despliegue comercial.",
    },
    applications: {
      eyebrow: "Dónde empieza Stela",
      title: "Diseñado para activos donde la identidad de confianza importa.",
      vehicleLabel: "Vidrio de vehículos",
      vehicleTitle: "Identidad permanente para el vidrio del vehículo.",
      vehicleCopy: "Para propietarios, aseguradoras, operadores de flotas, financiadores y autoridades de recuperación.",
      vehicleAction: "Explorar aplicaciones para vehículos",
      solarLabel: "Energía solar",
      solarTitle: "Identidad permanente para cada panel.",
      solarCopy: "Para fabricantes, instaladores, propietarios, financiadores, aseguradoras y proveedores de mantenimiento.",
      solarAction: "Explorar aplicaciones solares",
    },
    value: {
      eyebrow: "Valor a lo largo del tiempo",
      title: "Una identidad permanente crea valor durante todo el ciclo de vida del activo.",
      intro: "El identificador sigue aportando valor cuando el activo cambia de propietario, ubicación, condición o estado operativo.",
      outcomes: ["Hacer visible de inmediato cualquier manipulación.", "Acelerar la recuperación de activos robados.", "Reforzar la verificación para seguros.", "Preservar una identidad fiable durante todo el ciclo de vida del activo."],
      qualification: "Estos son los beneficios que Stela está diseñada para ofrecer. Se comprobarán mediante validación técnica y programas piloto.",
    },
    system: {
      eyebrow: "Más que una marca",
      title: "La marca identifica el activo. El registro demuestra su origen.",
      copy: "El identificador físico distingue el activo de forma única. El registro Stela documenta quién lo creó, cuándo, dónde y bajo qué autorización. Cuando se necesita verificarlo, esa evidencia de origen puede recuperarse y confirmarse.",
      action: "Ver la plataforma Stela completa",
      origin: "Origen registrado",
      evidence: [["Operador", "Autorizado"], ["Evidencia", "Capturada"], ["Ubicación", "Registrada"], ["Marca temporal", "Firmada"]],
      record: "Registro Stela",
      linked: "Identidad del activo vinculada",
      questionsLabel: "En conjunto, Stela ayuda a responder:",
      questions: ["¿A qué activo físico pertenece este identificador?", "¿Quién lo marcó y bajo qué autoridad?", "¿Cuándo y dónde fue marcado?", "¿Qué evidencia se capturó?", "¿Ha cambiado su propiedad, condición o estado?"],
    },
    comparison: {
      eyebrow: "Métodos de identificación",
      title: "Una marca permanente por sí sola no es un sistema de identidad completo.",
      intro: "La permanencia es solo una parte de una identificación fiable. Un sistema completo también registra el origen del identificador y permite verificarlo durante todo el ciclo de vida del activo.",
      aria: "Comparación de métodos de identificación física",
      headings: ["Método", "Permanente", "Portátil", "Autorizado", "Evidencia de origen", "Registro vinculado", "Verificación"],
      methods: ["Etiquetas y códigos impresos", "Grabado con ácido", "Arenado", "Láser industrial", "Stela"],
      supported: "Incluido",
      varies: "Variable",
      excluded: "No incluido",
      qualification: "El rendimiento se comprobará en condiciones controladas antes de realizar afirmaciones sobre materiales o métodos de marcado específicos.",
    },
    experience: {
      eyebrow: "Construido desde la experiencia",
      title: "Basado en décadas de protección práctica de activos.",
      copy: "Stela parte de décadas de experiencia protegiendo vehículos mediante marcado permanente con diamante. Ese conocimiento práctico impulsa ahora un sistema moderno que combina operaciones controladas en campo, registros digitales seguros y verificación durante el ciclo de vida.",
      principles: ["Marcado controlado", "Operaciones autorizadas", "Verificación posterior"],
    },
    development: {
      eyebrow: "Construyendo con socios",
      title: "Construyendo con los sectores a los que servimos.",
      copy: "Stela se encuentra en desarrollo precomercial. Trabajamos con socios para probar el sistema de marcado, perfeccionar cada proceso según el material, definir el flujo de evidencia y preparar la plataforma para usos regulados.",
      partners: [
        ["Socios piloto", "Aseguradoras, propietarios, flotas, operadores solares y asociaciones sectoriales que nos ayudan a probar casos reales."],
        ["Socios de validación", "Especialistas en vidrio, vehículos, energía solar, laboratorios y tecnología que nos ayudan a demostrar qué funciona."],
        ["Socios estratégicos", "Organizaciones que apoyan el desarrollo, el acceso al mercado y el camino hacia un despliegue regulado."],
      ],
      identity: "Identificación permanente de activos",
      cta: "¿Podrían sus activos beneficiarse de una identidad permanente?",
      ctaCopy: "Cuéntenos qué activo es, cómo se identifica hoy y qué se vuelve difícil cuando esa identidad se pierde, se elimina o se disputa.",
      action: "Comentar su caso de uso",
    },
  },
} as const;

export function StelaHomepagePrototype({ locale = "en" }: { locale?: Locale }) {
  return (
    <main className="stela-prototype">
      <SiteHeader />
      <Hero locale={locale} />
      <Applications locale={locale} />
      <IdentityProblem locale={locale} />
      <Process locale={locale} />
      <Value locale={locale} />
      <CompleteSystem locale={locale} />
      <Comparison locale={locale} />
      <Experience locale={locale} />
      <Development locale={locale} />
      <SiteFooter />
    </main>
  );
}

function Hero({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].hero;

  return (
    <section id="top" className="prototype-hero">
      <picture className="prototype-hero-picture">
        <source media="(max-width: 560px)" srcSet="/images/stela-home-hero-art-mobile-v8.jpg" />
        <source media="(max-width: 1100px)" srcSet="/images/stela-home-hero-art-tablet-v7.jpg" />
        <img
          src="/images/stela-home-hero-art-desktop-v7.jpg"
          alt={t.imageAlt}
          className="prototype-hero-image"
        />
      </picture>
      <div className="prototype-hero-wash" aria-hidden="true" />

      <div className="prototype-shell prototype-hero-inner">
        <div className="prototype-hero-copy">
          <p className="prototype-eyebrow prototype-eyebrow-light">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="prototype-hero-lede">{t.lede}</p>
          <div className="prototype-actions">
            <a href="#how-it-works" className="prototype-button prototype-button-light">
              {t.see} <ArrowRight aria-hidden="true" />
            </a>
            <Link href={contactPath(locale, "pilot")} className="prototype-button prototype-button-ghost">
              {t.pilot}
            </Link>
          </div>
          <p className="prototype-status">
            <span aria-hidden="true" />
            {t.status}
          </p>
        </div>

        <aside className="prototype-hero-certificate" aria-label={t.certificateAria}>
          <div className="prototype-hero-certificate-header">
            <span>{t.verification}</span>
            <SealCheck weight="duotone" aria-hidden="true" />
          </div>
          <h2>{t.verified}</h2>
          <dl>
            <div>
              <dt>{t.identifier}</dt>
              <dd>STLA A7K4 92X8</dd>
            </div>
            <div>
              <dt>{t.identifierStatus}</dt>
              <dd className="is-confirmed">{t.confirmed}</dd>
            </div>
            <div>
              <dt>{t.session}</dt>
              <dd>{t.authorized}</dd>
            </div>
            <div>
              <dt>{t.evidence}</dt>
              <dd>{t.evidenceValue}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function IdentityProblem({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].problem;

  return (
    <section id="identity-problem" className="prototype-problem">
      <div className="prototype-shell prototype-problem-grid">
        <div className="prototype-section-heading">
          <p className="prototype-eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
        </div>
        <div className="prototype-problem-copy">
          {t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <strong>{t.emphasis}</strong>
        </div>
      </div>
    </section>
  );
}

function Process({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].process;
  const steps = processMedia.map((media, index) => ({
    ...media,
    ...t.steps[index],
  }));

  return (
    <section id="how-it-works" className="prototype-process">
      <div className="prototype-shell">
        <div className="prototype-section-heading prototype-heading-split">
          <div>
            <p className="prototype-eyebrow prototype-eyebrow-light">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <p>{t.intro}</p>
        </div>

        <ol className="prototype-process-list">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.number}>
                <div className="process-photo">
                  <Image src={step.image} alt="" fill unoptimized sizes="(max-width: 800px) 100vw, 33vw" />
                  <span>{step.number}</span>
                </div>
                <div className="process-copy">
                  <Icon weight="duotone" aria-hidden="true" />
                  <p>{step.label}</p>
                  <strong className="process-descriptor">{step.descriptor}</strong>
                  <h3>{step.title}</h3>
                  <span>{step.copy}</span>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="prototype-qualification">{t.qualification}</p>
      </div>
    </section>
  );
}

function Applications({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].applications;

  return (
    <section id="applications" className="prototype-applications">
      <div className="prototype-shell">
        <div className="prototype-section-heading">
          <p className="prototype-eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
        </div>
      </div>
        <div className="prototype-application-grid">
          <article>
          <Image src="/images/stela-application-vehicle-inspection-v2.jpg" alt="A contemporary vehicle being reviewed at a professional insurance assessment facility" fill unoptimized sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="application-shade" aria-hidden="true" />
          <div>
            <CarProfile weight="duotone" aria-hidden="true" />
            <p>{t.vehicleLabel}</p>
            <h3>{t.vehicleTitle}</h3>
            <span>{t.vehicleCopy}</span>
            <Link href={`${pagePath(locale, "applications")}#vehicles`}>{t.vehicleAction} <ArrowRight aria-hidden="true" /></Link>
          </div>
        </article>
        <article>
          <Image src="/images/stela-application-solar-sunrise-v4.jpg" alt="Rows of installed solar panels in early daylight" fill unoptimized sizes="(max-width: 800px) 100vw, 50vw" />
          <div className="application-shade" aria-hidden="true" />
          <div>
            <SolarPanel weight="duotone" aria-hidden="true" />
            <p>{t.solarLabel}</p>
            <h3>{t.solarTitle}</h3>
            <span>{t.solarCopy}</span>
            <Link href={`${pagePath(locale, "applications")}#renewable-energy`}>{t.solarAction} <ArrowRight aria-hidden="true" /></Link>
          </div>
        </article>
      </div>
    </section>
  );
}

function Value({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].value;

  return (
    <section id="value" className="prototype-value">
      <div className="prototype-shell">
        <div className="prototype-section-heading prototype-heading-split">
          <div>
            <p className="prototype-eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <p>{t.intro}</p>
        </div>
        <ul className="prototype-outcomes">
          {t.outcomes.map((outcome, index) => {
            const Icon = outcomeIcons[index];
            return (
              <li key={outcome}>
                <span>0{index + 1}</span>
                <Icon weight="duotone" aria-hidden="true" />
                <h3>{outcome}</h3>
              </li>
            );
          })}
        </ul>
        <p className="prototype-qualification prototype-qualification-dark">{t.qualification}</p>
      </div>
    </section>
  );
}

function CompleteSystem({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].system;
  const evidenceIcons = [UserCircleCheck, Camera, MapPin, Clock];

  return (
    <section id="complete-system" className="prototype-system">
      <div className="prototype-shell prototype-system-grid">
        <div className="prototype-system-copy">
          <p className="prototype-eyebrow prototype-eyebrow-light">{t.eyebrow}</p>
          <h2>{t.title}</h2>
          <p>{t.copy}</p>
          <Link href={pagePath(locale, "platform")}>{t.action} <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="system-evidence">
          <div className="system-evidence-top">
            <span>STLA A7K4 92X8 1847</span>
            <strong>{t.origin}</strong>
          </div>
          <div className="system-evidence-grid">
            {t.evidence.map(([label, value], index) => {
              const Icon = evidenceIcons[index];
              return (
                <div key={label}>
                  <Icon weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              );
            })}
          </div>
          <div className="system-certificate">
            <StelaMark variant="full" size="small" />
            <div><span>{t.record}</span><strong>{t.linked}</strong></div>
            <SealCheck aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="prototype-shell system-questions">
        <p>{t.questionsLabel}</p>
        <ol>
          {t.questions.map((question, index) => (
            <li key={question}><span>0{index + 1}</span> {question}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Comparison({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].comparison;

  return (
    <section id="comparison" className="prototype-comparison">
      <div className="prototype-shell">
        <div className="prototype-section-heading prototype-heading-split">
          <div>
            <p className="prototype-eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <p>{t.intro}</p>
        </div>
        <div className="comparison-table" role="region" aria-label={t.aria} tabIndex={0}>
          <table>
            <thead>
              <tr>
                {t.headings.map((heading) => <th key={heading} scope="col">{heading}</th>)}
              </tr>
            </thead>
            <tbody>
              {methods.map((item, index) => (
                <tr key={item.method} data-featured={item.featured || undefined}>
                  <th scope="row">{item.featured && <StelaMark size="small" tone="dark" />} {t.methods[index]}</th>
                  <FeatureCell value={item.permanent} label={t.headings[1]} labels={t} />
                  <FeatureCell value={item.field} label={t.headings[2]} labels={t} />
                  <FeatureCell value={item.controlled} label={t.headings[3]} labels={t} />
                  <FeatureCell value={item.evidence} label={t.headings[4]} labels={t} />
                  <FeatureCell value={item.linked} label={t.headings[5]} labels={t} />
                  <FeatureCell value={item.later} label={t.headings[6]} labels={t} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="prototype-qualification prototype-qualification-dark">{t.qualification}</p>
      </div>
    </section>
  );
}

function FeatureCell({
  value,
  label,
  labels,
}: {
  value: boolean | "partial";
  label: string;
  labels: { supported: string; varies: string; excluded: string };
}) {
  if (value === true) {
    return <td className="feature-cell feature-cell-yes" data-label={label}><Check weight="bold" aria-hidden="true" /><span>{labels.supported}</span></td>;
  }

  if (value === "partial") {
    return <td className="feature-cell feature-cell-partial" data-label={label}><Minus weight="bold" aria-hidden="true" /><span>{labels.varies}</span></td>;
  }

  return <td className="feature-cell feature-cell-no" data-label={label}><X weight="bold" aria-hidden="true" /><span>{labels.excluded}</span></td>;
}

function Experience({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].experience;
  const principleIcons = [PenNibStraight, Fingerprint, SealCheck];

  return (
    <section id="experience" className="prototype-experience">
      <Image src="/images/stela-material-light.webp" alt="" fill unoptimized sizes="100vw" />
      <div className="prototype-experience-shade" aria-hidden="true" />
      <div className="prototype-shell prototype-experience-inner">
        <p className="prototype-eyebrow prototype-eyebrow-light">{t.eyebrow}</p>
        <h2>{t.title}</h2>
        <p>{t.copy}</p>
        <div className="experience-principles">
          {t.principles.map((principle, index) => {
            const Icon = principleIcons[index];
            return <span key={principle}><Icon aria-hidden="true" /> {principle}</span>;
          })}
        </div>
      </div>
    </section>
  );
}

function Development({ locale }: { locale: Locale }) {
  const t = homepageCopy[locale].development;

  return (
    <section id="partners" className="prototype-development">
      <div className="prototype-shell">
        <div className="prototype-development-grid">
          <div>
            <p className="prototype-eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
            <p>{t.copy}</p>
          </div>
          <ul>
            {t.partners.map(([title, copy]) => (
              <li key={title}><Check aria-hidden="true" /><div><strong>{title}</strong><span>{copy}</span></div></li>
            ))}
          </ul>
        </div>

        <div className="prototype-final-cta">
          <div>
            <StelaMark variant="full" size="display" tone="light" />
            <p>{t.identity}</p>
          </div>
          <h2>{t.cta}</h2>
          <p>{t.ctaCopy}</p>
          <Link href={contactPath(locale, "pilot")} className="prototype-button prototype-button-light">
            {t.action} <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
