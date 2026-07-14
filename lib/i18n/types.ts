export const locales = ["en", "es", "fr", "it", "de", "pt"] as const;

export type Locale = (typeof locales)[number];
export type SupportingPageSlug = "platform" | "applications" | "partners" | "investors" | "contact";

export type ActionCopy = { primary: string; secondary: string };
export type PageHeroCopy = { eyebrow: string; title: string; copy: string; note?: string; actions: ActionCopy };

export type HomeMessages = {
  hero: { eyebrow: string; title: [string, string, string]; copy: string; note: string; explore: string; investor: string };
  visual: {
    aria: string;
    markLabel: string;
    physicalOrigin: string;
    signedProof: string;
    verified: string;
    certificate: string;
    assetLinked: string;
    evidenceRows: string[];
  };
  trust: {
    eyebrow: string;
    title: [string, string, string];
    copy: string;
    emphasis: string;
    physicalAsset: string;
    digitalRecord: string;
    weakLink: string;
    trustAnchor: string;
  };
  mechanism: { eyebrow: string; title: string; intro: string; steps: Array<{ label: string; body: string }> };
  permanence: { eyebrow: string; title: [string, string]; copy: string; emphasis: string; aria: string; stages: string[] };
  marking: {
    eyebrow: string;
    title: string;
    productLine: string;
    copy: string;
    visualAria: string;
    controlledSession: string;
    authorized: string;
    machineActive: string;
    features: string[];
  };
  applications: { eyebrow: string; title: string; intro: string; items: Array<{ tag: string; title: string; body: string }> };
  final: {
    eyebrow: string;
    title: [string, string];
    stageCopy: string;
    ctaTitle: string;
    ctaCopy: string;
    investor: string;
    pilot: string;
    milestones: string[];
  };
};

export type PlatformMessages = {
  metaTitle: string;
  metaDescription: string;
  hero: PageHeroCopy;
  physical: { eyebrow: string; title: string; copy: string; note: string };
  event: { eyebrow: string; title: string; copy: string; sequence: string[]; sequenceLabel: string };
  proof: { eyebrow: string; title: string; copy: string; note: string; sequence: string[]; sequenceLabel: string };
  lifecycle: { eyebrow: string; title: string; copy: string; sequence: string[]; sequenceLabel: string };
  conversion: { title: string; copy: string; actions: ActionCopy };
};

export type ApplicationsMessages = {
  metaTitle: string;
  metaDescription: string;
  hero: PageHeroCopy;
  criteriaTitle: string;
  criteria: string[];
  entries: Array<{ label: string; title: string; copy: string; note?: string; action: string }>;
  conversion: { title: string; copy: string; actions: ActionCopy };
};

export type PartnersMessages = {
  metaTitle: string;
  metaDescription: string;
  hero: PageHeroCopy;
  audiencesTitle: string;
  audiences: string[];
  collaboration: {
    eyebrow: string;
    title: string;
    note: string;
    sequence: string[];
    sequenceLabel: string;
    topics: string[];
  };
  value: { eyebrow: string; title: string; copy: string; outcomes: string[] };
  stage: { eyebrow: string; title: string; copy: string };
  conversion: { title: string; copy: string; actions: ActionCopy };
};

export type InvestorsMessages = {
  metaTitle: string;
  metaDescription: string;
  hero: PageHeroCopy;
  thesis: { eyebrow: string; title: string; copy: string; emphasis: string };
  approach: { eyebrow: string; title: string; sequence: string[]; sequenceLabel: string; copy: string };
  model: { eyebrow: string; title: string; items: string[]; note: string };
  stage: { eyebrow: string; title: string; items: string[] };
  private: { eyebrow: string; title: string; items: string[] };
  conversion: { title: string; copy: string; actions: ActionCopy };
};

export type ContactMessages = {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; title: string; copy: string };
  aside: { eyebrow: string; title: string; copy: string };
  form: {
    reasons: Record<"use-case" | "pilot" | "insurer" | "partner" | "investor" | "brief" | "other", string>;
    legend: string;
    name: string;
    organization: string;
    role: string;
    email: string;
    country: string;
    reason: string;
    message: string;
    messagePlaceholder: string;
    optionalSummary: string;
    assetType: string;
    identificationMethod: string;
    workflow: string;
    scale: string;
    urgency: string;
    deliveryDisclosure: string;
    review: string;
    validated: string;
    thanks: string;
    success: string;
    prototypeNotice: string;
    edit: string;
  };
};

export type Dictionary = {
  localeName: string;
  shell: {
    nav: Record<SupportingPageSlug, string>;
    requestBrief: string;
    briefShort: string;
    openNavigation: string;
    closeNavigation: string;
    mainNavigation: string;
    mobileNavigation: string;
    footerNavigation: string;
    homeLabel: string;
    footerStage: string;
    language: string;
  };
  common: { nextConversation: string };
  home: HomeMessages;
  platform: PlatformMessages;
  applications: ApplicationsMessages;
  partners: PartnersMessages;
  investors: InvestorsMessages;
  contact: ContactMessages;
};
