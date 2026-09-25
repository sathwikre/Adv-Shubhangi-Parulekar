export const PROFILE = {
  name: "Adv. Shubhangi Prasad Parulekar",
  shortName: "Adv. Parulekar",
  firm: "Parulekar & Associates",
  title: "Criminal Defence Advocate",
  since: 2008,
  phone: "8308825029",
  phoneHref: "tel:+918308825029",
  whatsapp: "https://wa.me/918308825029",
  email: "spparulekar@gmail.com",
  instagram: "https://www.instagram.com/spparulekar/",
  linkedin: "https://www.linkedin.com/in/parulekar-and-associates-160197108",
  maps: "https://maps.google.com/?q=Amit+Court+Condominium+Shivajinagar+Pune+411005",
  addressLines: [
    "308, 3rd Floor, Amit Court Condominium",
    "Shivajinagar, Pune – 411005",
    "Maharashtra, India",
  ],
};

export const CASES_DATA = [
  { id: "a", title: "State v/s Mahesh Gawade and others", act: "u/s 302 of IPC", category: "ipc" },
  { id: "b", title: "State v/s Balasaheb Galphade and others", act: "u/s 302 of IPC", category: "ipc" },
  { id: "c", title: "State v/s Motilal Chavan and others", act: "u/s 302 of IPC", category: "ipc" },
  { id: "d", title: "State v/s Rahul Kumbare", act: "u/s 302 of IPC", category: "ipc" },
  { id: "e", title: "State v/s Kunal Balu Londhe", act: "POCSO", category: "pocso" },
  { id: "f", title: "State v/s Vishal Salve", act: "u/s 376 of IPC", category: "ipc" },
  { id: "g", title: "State v/s Usha Dukre", act: "u/s 302 of IPC", category: "ipc" },
  { id: "h", title: "State v/s Jagdish Hirarugi", act: "POCSO", category: "pocso" },
  { id: "i", title: "State v/s Deepak Amale", act: "MCOCA", category: "mcoc" },
  { id: "j", title: "State v/s Harish Garad", act: "POCSO", category: "pocso" },
] as const;

export const PRACTICE_AREAS = [
  { id: "01", title: "Criminal Trials", desc: "Full trial defence — strategy, cross-examination, and closing — before Sessions Courts across Pune district." },
  { id: "02", title: "Bail & Anticipatory Bail", desc: "Regular bail, anticipatory bail, and remand hearings at trial courts and before the Bombay High Court." },
  { id: "03", title: "Bombay High Court Appeals", desc: "Appellate-side criminal work: appeals, revisions, and writ petitions since 2008." },
  { id: "04", title: "POCSO Defence", desc: "Representation before designated Special POCSO Courts, with public legal literacy on the statute." },
  { id: "05", title: "MCOCA Matters", desc: "Special-court defence under the Maharashtra Control of Organised Crime Act." },
  { id: "06", title: "NDPS Act", desc: "Trial and procedural defence under the Narcotic Drugs and Psychotropic Substances Act." },
  { id: "07", title: "Body Offences", desc: "Sessions trials in homicide, assault, and allied IPC offences including ss. 302 and 307." },
  { id: "08", title: "Economic Offences", desc: "Cheating, criminal breach of trust, MPID and allied financial-crime prosecutions." },
  { id: "09", title: "POSH Advisory", desc: "Workplace POSH consulting, sensitisation sessions, and institutional training." },
  { id: "10", title: "Legal Aid & Amicus", desc: "Panel work for DLSA, MSLSA (Bombay High Court), Yerawada Central Prison, and amicus assignments." },
];

export const MEDIA = [
  {
    kind: "youtube" as const,
    featured: true,
    id: "kpBG-bgECL8",
    title: "The Shocking Reality of POCSO Cases in India",
    outlet: "Sarva Kaahi · Marathi Podcast",
    blurb: "A long-form conversation on how POCSO trials actually unfold — evidence, procedure, and the gap between public perception and courtroom reality.",
    href: "https://youtu.be/kpBG-bgECL8",
  },
  {
    kind: "youtube" as const,
    featured: false,
    id: "NdPUAjRas8k",
    title: "POCSO कायदा नेमका काय आहे?",
    outlet: "Sakal · Kaydyacha Panchanama",
    blurb: "A focused explainer on the Protection of Children from Sexual Offences Act for Sakal’s legal-awareness series.",
    href: "https://www.youtube.com/shorts/NdPUAjRas8k",
  },
  {
    kind: "article" as const,
    featured: false,
    id: "sakal-ep05",
    title: "Kaydyacha Panchanama EP-05 — POCSO provisions the public must know",
    outlet: "eSakal · 5 December 2025",
    blurb: "Adv. Parulekar appears in Sakal’s Kaydyacha Panchanama series to unpack frequently misunderstood POCSO provisions.",
    href: "https://www.esakal.com/videos/pocso-act-awareness-child-protection-law-kaidyacha-panchanama-advocate-shubhangi-parulekar-legal-guidance-explained-kr13",
  },
  {
    kind: "radio" as const,
    featured: false,
    id: "air",
    title: "Maintenance & Welfare of Senior Citizens Act, 2007",
    outlet: "All India Radio",
    blurb: "Broadcast lectures on statutory protections, maintenance tribunals, and the rights of elders under the 2007 Act.",
    href: "#contact",
  },
  {
    kind: "talk" as const,
    featured: false,
    id: "posh-nmiet",
    title: "Expert session on the POSH Act, 2013",
    outlet: "NMIET · ICC with Rotary Club of Talegaon Dabhade",
    blurb: "Workplace awareness and sensitisation as Legal Expert, Trainer, and POSH Consultant.",
    href: "https://www.linkedin.com/posts/pcet-nmiet_nmiet-poshact-poshact2013-activity-7499326696433713152-95M-",
  },
];

export const FAQS = [
  {
    q: "How do I book a chamber consultation?",
    a: "Call or WhatsApp +91 8308825029, write to spparulekar@gmail.com, or send a short non-confidential note through the form. Urgent bail and listing matters are best handled by telephone.",
  },
  {
    q: "Which courts does the chamber appear in?",
    a: "District & Sessions Courts at Pune, Khed and Baramati; the Bombay High Court (Appellate Side) since 2008; and, through Parulekar & Associates, related work before the High Court at Goa and the Supreme Court of India.",
  },
  {
    q: "Should I send case papers on this website?",
    a: "No. Do not upload FIRs, medical papers, or other confidential records through a web form. Bring documents to chamber, or share them only after a direct instruction from counsel.",
  },
  {
    q: "Does a past acquittal mean a similar result later?",
    a: "No. Every case turns on its own facts, evidence and law. Outcomes listed here are historical records, not a promise of future results.",
  },
];
