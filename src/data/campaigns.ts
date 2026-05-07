export interface FaqItem { q: string; a: string }

export interface Campaign {
  id: string
  slug: string
  name: string
  shortName: string
  tagline: string
  risk: string
  badge: string
  headline: string
  subheadline: string
  description: string
  qualifiers: string[]
  symptoms: string[]
  settlementNote: string
  faqItems: FaqItem[]
  trackdriveToken: string
  // TrackDrive field names for qualifier questions
  tdFields: {
    qualifier1: string  // e.g. "use", "diagnosis"
    qualifier2: string  // e.g. "diagnosed", "injury"
    qualifier3?: string // optional 3rd qualifier
    attorney: string
  }
}

export const campaigns: Campaign[] = [
  {
    id: 'depo',
    slug: 'depo-provera',
    name: 'Depo-Provera (Meningioma)',
    shortName: 'Depo-Provera',
    tagline: 'Brain Tumor Lawsuit',
    risk: 'Meningioma / Brain Tumor',
    badge: 'Depo-Provera Lawsuit',
    headline: 'Did Depo-Provera Cause Your Brain Tumor?',
    subheadline: 'Women who used Depo-Provera for one year or more may be at significantly elevated risk of developing meningioma brain tumors. You may be entitled to compensation.',
    description: 'Recent studies have linked long-term use of Depo-Provera (medroxyprogesterone acetate) injectable contraceptives to a significantly elevated risk of meningioma — a type of brain tumor. If you used Depo-Provera and were later diagnosed with a meningioma or brain tumor, you may be entitled to financial compensation.',
    qualifiers: [
      'I used Depo-Provera for 1 year or more',
      'I was diagnosed with a meningioma or brain tumor',
      'I am experiencing symptoms potentially related to Depo-Provera use',
    ],
    symptoms: ['Persistent headaches', 'Vision or hearing problems', 'Memory issues', 'Seizures', 'Weakness or numbness'],
    settlementNote: '⚖️ Lawsuits are being filed nationwide. Depo-Provera cases are actively being investigated.',
    faqItems: [
      { q: 'What is Depo-Provera?', a: 'Depo-Provera is a brand name for medroxyprogesterone acetate, a progestin-based injectable contraceptive manufactured by Pfizer, typically administered every 3 months.' },
      { q: 'What is a meningioma?', a: 'A meningioma is a tumor that forms on the membranes covering the brain and spinal cord. While often slow-growing, they can cause severe symptoms and may require surgery or radiation.' },
      { q: 'How do I know if I qualify?', a: 'If you used Depo-Provera for one year or more and were diagnosed with a meningioma or intracranial tumor, you may qualify. Submit our free intake form for a no-obligation review.' },
      { q: 'Is there a deadline to file?', a: 'Yes. Statutes of limitations vary by state and may cut off your right to file. Acting quickly is critical. Contact us today for a free eligibility review.' },
    ],
    trackdriveToken: '430e6301d6ff48d1bc3a11a936dc966a',
    tdFields: { qualifier1: 'use', qualifier2: 'diagnosed', attorney: 'attorney' },
  },
  {
    id: 'hair',
    slug: 'hair-relaxer',
    name: 'Hair Relaxer (Cancer)',
    shortName: 'Hair Relaxer',
    tagline: 'Uterine Cancer Lawsuit',
    risk: 'Uterine / Ovarian Cancer',
    badge: 'Hair Relaxer Cancer Lawsuit',
    headline: 'Hair Relaxers Linked to Cancer?',
    subheadline: 'Studies show women who regularly used chemical hair relaxers face a significantly higher risk of uterine and ovarian cancer. You may qualify for compensation.',
    description: 'A landmark NIH study found that women who frequently used chemical hair relaxers, straighteners, or root touch-up products were more than twice as likely to develop uterine cancer. Chemicals found in these products — including formaldehyde, parabens, and phthalates — are known endocrine disruptors.',
    qualifiers: [
      'I used chemical hair relaxers or straighteners regularly',
      'I was diagnosed with uterine, ovarian, or endometrial cancer',
      'I underwent surgery, chemotherapy, or radiation for cancer',
    ],
    symptoms: ['Abnormal uterine bleeding', 'Pelvic pain', 'Unexpected weight loss', 'Bloating', 'Cancer diagnosis after hair relaxer use'],
    settlementNote: '⚖️ Major brands including Dark & Lovely and Soft Sheen are named in lawsuits. Cases consolidating in MDL.',
    faqItems: [
      { q: 'Which products are involved?', a: 'Common brands named in lawsuits include Dark & Lovely, ORS Olive Oil, Just for Me, Motions, and other chemical hair relaxer or straightener products.' },
      { q: 'What cancers are linked?', a: 'Research has linked regular chemical hair relaxer use to uterine cancer, ovarian cancer, and endometrial cancer — particularly with long-term or frequent use.' },
      { q: 'What if I was diagnosed years ago?', a: 'Many statutes of limitations run from when you discovered the link between the product and your injury. You may still have time. Contact us today.' },
      { q: 'Is the case free?', a: 'Yes. We work on a contingency fee basis — you pay nothing unless we win your case.' },
    ],
    trackdriveToken: 'HAIR_TOKEN_PLACEHOLDER',
    tdFields: { qualifier1: 'use', qualifier2: 'diagnosis', attorney: 'attorney' },
  },
  {
    id: 'talc',
    slug: 'talcum-powder',
    name: 'Talcum Powder (Cancer)',
    shortName: 'Talcum Powder',
    tagline: 'Ovarian Cancer Lawsuit',
    risk: 'Ovarian / Mesothelioma Cancer',
    badge: 'Talcum Powder Lawsuit',
    headline: 'Did Talcum Powder Cause Your Cancer?',
    subheadline: 'Talc-based products like baby powder have been linked to ovarian cancer and mesothelioma in thousands of women. J&J has already paid billions.',
    description: 'Johnson & Johnson and other talc manufacturers face thousands of lawsuits alleging their products contained asbestos-contaminated talc, causing ovarian cancer and mesothelioma. J&J has already paid billions in settlements. If you regularly used talcum powder products and were diagnosed, you may be entitled to significant compensation.',
    qualifiers: [
      'I regularly used talcum powder for personal hygiene',
      'I was diagnosed with ovarian cancer or mesothelioma',
      'I used J&J Baby Powder, Shower to Shower, or similar products',
    ],
    symptoms: ['Ovarian cancer diagnosis', 'Abdominal bloating or pain', 'Mesothelioma diagnosis', 'Difficulty breathing', 'Unexpected weight loss'],
    settlementNote: '⚖️ Johnson & Johnson has already paid $9B+ in talc settlements. New cases still being accepted.',
    faqItems: [
      { q: 'What brands are involved?', a: 'Johnson & Johnson Baby Powder and Shower to Shower are the most commonly named products, along with store-brand talc powder products.' },
      { q: 'Has J&J settled talc cases?', a: 'Yes — J&J has reached multi-billion dollar settlements. New cases are still being filed and accepted. The litigation is ongoing.' },
      { q: 'I was diagnosed years ago — can I still file?', a: 'Possibly. The statute of limitations varies by state and the discovery rule may apply. Contact us immediately for a free eligibility review.' },
      { q: 'Do I need proof of purchase?', a: 'No. Many claimants qualify based on their history of use and their diagnosis. Our team will guide you through what documentation helps your case.' },
    ],
    trackdriveToken: '1fea3c19e23d45929d40aaaa58b666e8',
    tdFields: { qualifier1: 'diagnosis', qualifier2: 'injury', qualifier3: 'proof', attorney: 'attorney' },
  },
  {
    id: 'dupixent',
    slug: 'dupixent',
    name: 'Dupixent (Side Effects)',
    shortName: 'Dupixent',
    tagline: 'Serious Side Effects Lawsuit',
    risk: 'Alopecia / Serious Adverse Events',
    badge: 'Dupixent Lawsuit',
    headline: 'Serious Side Effects from Dupixent?',
    subheadline: 'Patients treated with Dupixent have reported unexpected and severe adverse reactions. Legal investigations are active nationwide.',
    description: 'Dupixent (dupilumab) is prescribed for eczema, asthma, and other inflammatory conditions. Reports of severe side effects — including alopecia areata (sudden hair loss), joint pain, and eye complications — have led to growing legal scrutiny.',
    qualifiers: [
      'I was prescribed and used Dupixent (dupilumab)',
      'I experienced sudden or severe hair loss (alopecia)',
      'I suffered other unexpected severe side effects',
    ],
    symptoms: ['Sudden hair loss', 'Eye inflammation (conjunctivitis)', 'Joint pain or arthritis', 'Skin rash or reaction', 'Facial swelling'],
    settlementNote: '⚖️ Legal investigations into Dupixent side effects are ongoing. Cases being reviewed now.',
    faqItems: [
      { q: 'What is Dupixent?', a: 'Dupixent is a biologic drug made by Sanofi/Regeneron, approved to treat moderate-to-severe eczema, asthma, and nasal polyps.' },
      { q: 'What side effects are being investigated?', a: 'Reports include alopecia areata (severe hair loss), eye inflammation, joint disorders, and other serious adverse events not fully disclosed in original labeling.' },
      { q: 'Is there a lawsuit against Dupixent?', a: 'Yes, law firms across the country are actively investigating claims against the manufacturers for failing to adequately warn about these risks.' },
      { q: 'Can I still file if I am still taking Dupixent?', a: 'Yes. You can pursue a legal claim while continuing your current treatment. Consult your doctor about any medical decisions separately.' },
    ],
    trackdriveToken: 'DUPIXENT_TOKEN_PLACEHOLDER',
    tdFields: { qualifier1: 'use', qualifier2: 'side_effects', attorney: 'attorney' },
  },
  {
    id: 'ozempic',
    slug: 'ozempic',
    name: 'Ozempic / Wegovy (GI Injury)',
    shortName: 'Ozempic',
    tagline: 'Gastroparesis Lawsuit',
    risk: 'Gastroparesis / Stomach Paralysis',
    badge: 'Ozempic Lawsuit',
    headline: 'Ozempic or Wegovy Caused Stomach Paralysis?',
    subheadline: 'GLP-1 drugs like Ozempic and Wegovy have been linked to severe gastroparesis, intestinal obstruction, and serious GI injuries.',
    description: 'Ozempic (semaglutide) and Wegovy, manufactured by Novo Nordisk, are GLP-1 receptor agonists used for diabetes and weight loss. Thousands of patients have reported severe gastrointestinal injuries including gastroparesis, severe vomiting, and intestinal blockages.',
    qualifiers: [
      'I took Ozempic, Wegovy, Mounjaro, or a similar GLP-1 drug',
      'I was diagnosed with gastroparesis or stomach paralysis',
      'I was hospitalized for severe vomiting, nausea, or intestinal obstruction',
    ],
    symptoms: ['Severe nausea and vomiting', 'Stomach paralysis (gastroparesis)', 'Intestinal obstruction or ileus', 'Hospitalization', 'Inability to eat solid food'],
    settlementNote: '⚖️ Ozempic lawsuits are among the fastest-growing mass torts of 2025. Cases being filed now.',
    faqItems: [
      { q: 'What drugs are included?', a: 'Ozempic, Wegovy (both semaglutide), Mounjaro and Zepbound (tirzepatide), and other GLP-1 receptor agonist drugs used for diabetes or weight loss.' },
      { q: 'What is gastroparesis?', a: 'Gastroparesis, or stomach paralysis, is a condition where the stomach cannot properly empty itself, causing severe nausea, vomiting, bloating, and inability to eat normally.' },
      { q: 'Do I have to stop taking Ozempic to file a claim?', a: 'No. You can file a claim while still taking the medication. We recommend consulting your doctor about any medical decisions.' },
      { q: 'How much compensation can I receive?', a: 'Compensation varies by case but may include medical expenses, lost wages, pain and suffering, and more. Our attorneys will evaluate your specific situation.' },
    ],
    trackdriveToken: 'OZEMPIC_TOKEN_PLACEHOLDER',
    tdFields: { qualifier1: 'drug', qualifier2: 'diagnosis', attorney: 'attorney' },
  },
  {
    id: 'rideshare',
    slug: 'rideshare',
    name: 'Rideshare Assault (Uber/Lyft)',
    shortName: 'Rideshare Assault',
    tagline: 'Uber / Lyft Assault Lawsuit',
    risk: 'Sexual Assault / Misconduct',
    badge: 'Rideshare Assault Lawsuit',
    headline: 'Assaulted by an Uber or Lyft Driver?',
    subheadline: 'If you were sexually assaulted or harassed by a rideshare driver, you may have legal recourse against Uber or Lyft. Confidential case review available.',
    description: 'Uber and Lyft have faced thousands of lawsuits from passengers who were sexually assaulted or harassed by drivers. Both companies have been accused of failing to adequately screen drivers and protect passengers. If you were a victim of assault during a rideshare trip, you may be entitled to significant compensation.',
    qualifiers: [
      'I was a passenger in an Uber or Lyft vehicle',
      'I experienced sexual assault or unwanted sexual contact by the driver',
      'I experienced harassment, indecent exposure, or other misconduct',
    ],
    symptoms: ['Sexual assault or unwanted contact', 'Harassment or verbal assault', 'Indecent exposure', 'Kidnapping or false imprisonment', 'Emotional trauma'],
    settlementNote: '⚖️ Uber and Lyft have faced thousands of assault lawsuits. Cases being accepted nationwide.',
    faqItems: [
      { q: 'Will my identity be kept confidential?', a: 'Absolutely. All information shared with our team is completely confidential and protected. We handle every case with the utmost discretion and care.' },
      { q: 'What if I did not report the incident to police?', a: 'You may still have a valid legal claim even without a police report. Evidence such as ride receipts, communications, or medical records can support your case.' },
      { q: 'What compensation is available?', a: 'Victims may be entitled to compensation for medical expenses, therapy costs, lost wages, pain and suffering, and punitive damages.' },
      { q: 'How long do I have to file?', a: 'Statutes of limitations vary by state. It is important to act quickly to preserve your rights. Contact us today for a free, confidential review.' },
    ],
    trackdriveToken: '0794668906e64698a855f370dc903a6b',
    tdFields: { qualifier1: 'company', qualifier2: 'conduct', qualifier3: 'proof', attorney: 'attorney' },
  },
]

export const getCampaign = (slug: string) => campaigns.find(c => c.slug === slug)
