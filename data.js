// ============================================================
// DATA FILE — edit freely. Add/verify entries against Wikipedia
// (en.wikipedia.org/wiki/Zubeen_Garg) and official discographies.
// year: null  => shown as "year to verify"
// ============================================================

const ERAS = [
  { id: "all",  label: "All" },
  { id: "90s",  label: "1992–1999 · Rise" },
  { id: "00s",  label: "2000–2009 · Bollywood & Cinema" },
  { id: "10s",  label: "2010–2019 · Icon" },
  { id: "20s",  label: "2020–2026 · Final chapter & tributes" }
];

// type: album | song | film
const SONGS = [
  { year: 1992, title: "Anamika", type: "album", era: "90s", note: "Debut Assamese album at age 19. Fused Bihu/folk with pop, rock and electronics; a turning point for Assamese popular music. Includes \"Gaane Ki Aane\" (composed at 13), \"Pritir Xubaaxe\" and \"Monor Nijanot\"." },
  { year: 1992, title: "Gaane Ki Aane", type: "song", era: "90s", note: "Written at 13; later on Anamika. A celebration/dance favourite." },
  { year: 1992, title: "Monor Nijanot", type: "song", era: "90s", note: "Early heartbreak song from Anamika; still counted among his generational hits." },
  { year: 1993, title: "Ritu", type: "album", era: "90s", note: "Includes \"Tumi Junu Pariba Hun\" and \"Tumi Junaki Hubakh\"." },
  { year: 1995, title: "Ujan Piriti", type: "album", era: "90s", note: "Assamese album; the year he moved to Mumbai." },
  { year: 1996, title: "Chandni Raat", type: "album", era: "90s", note: "Hindi pop album; nominated for Channel V and Screen recognition." },
  { year: null, title: "Maya", type: "album", era: "90s", note: "Assamese album; the title romantic ballad about longing is among his best known." },
  { year: null, title: "Mayabini Ratir Bukut", type: "song", era: "90s", note: "A youth anthem of 90s Assamese pop; often listed among his best." },
  { year: null, title: "Asha / Aasha", type: "album", era: "90s", note: "Assamese album that consolidated his stardom." },
  { year: null, title: "Mukti", type: "album", era: "90s", note: "Assamese album." },
  { year: null, title: "Pakhi", type: "album", era: "90s", note: "Assamese album." },
  { year: null, title: "Japunor Jur / Junaki Mon / Xikoli", type: "album", era: "90s", note: "Further early Assamese albums listed in biographies." },
  { year: null, title: "Jalwa · Yuhi Kabhi · Jadoo · Sparsh", type: "album", era: "90s", note: "Hindi pop albums from his Mumbai years." },
  { year: null, title: "Dil Se (film songs)", type: "film", era: "90s", note: "Among his early Hindi film contributions." },
  { year: null, title: "Fiza · Kaante · Gaddar (film songs)", type: "film", era: "00s", note: "Hindi film contributions before his breakthrough." },

  { year: 2000, title: "Tumi Mur Mathu Mur", type: "film", era: "00s", note: "His directorial debut; he also acted and composed the soundtrack." },
  { year: 2004, title: "Dinabandhu", type: "film", era: "00s", note: "Actor and composer." },
  { year: 2005, title: "Shudhu Tumi", type: "film", era: "00s", note: "Won him the BFJA Best Music Director award." },
  { year: 2006, title: "Ya Ali (Gangster)", type: "song", era: "00s", note: "Composed by Pritam for Mahesh Bhatt's Gangster. His national breakthrough and Global Indian Film Award for Best Playback Singer (Male). GQ reported 100M+ YouTube views." },
  { year: 2007, title: "Zindagi", type: "album", era: "00s", note: "Hindi album released after his Bollywood breakthrough." },
  { year: 2008, title: "Mon Jaai", type: "film", era: "00s", note: "Assamese drama; acted and composed. Songs \"Mon Jai\" and \"Pakhi Pakhi Aei Mon\" remain beloved." },
  { year: 2008, title: "Mon Mane Na", type: "album", era: "00s", note: "Bengali film soundtrack with the title song." },
  { year: 2009, title: "Echoes of Silence", type: "film", era: "00s", note: "Non-feature film score that won the National Film Award for Best Music Direction (55th National Film Awards)." },

  { year: null, title: "Jajabor", type: "song", era: "10s", note: "Regarded as a modern Assamese classic." },
  { year: null, title: "Dure Dure", type: "song", era: "10s", note: "Melancholic song about distance." },
  { year: null, title: "Biyopi Porile", type: "song", era: "10s", note: "A reflective song of separation." },
  { year: null, title: "Soklong", type: "song", era: "10s", note: "Folk-inspired fan favourite." },
  { year: 2017, title: "Mission China", type: "film", era: "10s", note: "He wrote, directed, produced, composed and acted." },
  { year: 2019, title: "Kanchanjangha", type: "film", era: "10s", note: "Actor, director, writer, producer and composer." },

  { year: 2021, title: "Axom Amaar Mone Praane", type: "song", era: "20s", note: "Tribute blending Assamese folk traditions, released as Bandhan Bank's Assam brand ambassador." },
  { year: 2023, title: "Dr. Bezbarua 2", type: "film", era: "20s", note: "Acted and contributed original music." },
  { year: 2025, title: "Roi Roi Binale", type: "film", era: "20s", note: "Among his final screen credits (as Raul)." },
  { year: 2025, title: "Mukha", type: "album", era: "20s", note: "Later release listed on Apple Music." },
  { year: 2025, title: "Rangdhali", type: "album", era: "20s", note: "Later release listed on Apple Music." },
  { year: 2026, title: "Zubeen (Lofi)", type: "album", era: "20s", note: "Posthumous release listed on Apple Music." },
  { year: 2026, title: "Pakhi Meli (Tibra)", type: "song", era: "20s", note: "Song from the film Tibra, as mentioned by the site owner. Verify exact title, year and credits before publishing." }
];

const FILMS = [
  ["Tumi Mur Mathu Mur", "2000", "Director, actor, composer"],
  ["Dinabandhu", "2004", "Actor, composer"],
  ["Mon Jaai", "2008", "Actor, composer"],
  ["Echoes of Silence (non-feature)", "2009", "Music — National Film Award"],
  ["Mission China", "2017", "Writer, director, producer, composer, actor"],
  ["Kanchanjangha", "2019", "Actor, director, writer, producer, composer"],
  ["Dr. Bezbarua 2", "2023", "Actor, composer"],
  ["Roi Roi Binale", "2025", "Actor (Raul)"]
];

// ---------- GALLERY ----------
// Put image files into /images and set src. Credit each properly.
const GALLERY = [
  { src: "images/zubeen-1.jpg", caption: "Zubeen Garg on stage", credit: "Add photo credit / licence" },
  { src: "images/zubeen-2.jpg", caption: "Early years", credit: "Add photo credit / licence" },
  { src: "images/zubeen-3.jpg", caption: "In the studio", credit: "Add photo credit / licence" },
  { src: "images/zubeen-4.jpg", caption: "With fans", credit: "Add photo credit / licence" },
  { src: "images/zubeen-5.jpg", caption: "Mission China era", credit: "Add photo credit / licence" },
  { src: "images/zubeen-6.jpg", caption: "Tribute, Guwahati", credit: "Add photo credit / licence" }
];

// ---------- DEATH CASE TIMELINE ----------
const CASE_TIMELINE = [
  { date: "19 Sep 2025", tag: "sg", text: "Garg dies in Singapore after a yacht outing near Lazarus Island, during the North East India Festival where he was to perform." },
  { date: "23 Sep 2025", tag: "pub", text: "Funeral near Guwahati draws enormous crowds; cremated with state honours." },
  { date: "Oct 2025", tag: "as", text: "60+ FIRs across Assam; CID forms a Special Investigation Team, which sends officers to Singapore." },
  { date: "17 Oct 2025", tag: "sg", text: "Singapore Police warn of false online claims; investigation ongoing." },
  { date: "12 Dec 2025", tag: "as", text: "SIT files chargesheet after 83 days naming seven accused." },
  { date: "18 Dec 2025", tag: "sg", text: "Singapore Police again address online speculation." },
  { date: "Jan 2026", tag: "sg", text: "Singapore coroner's inquiry hears 35 witnesses incl. yacht captain, passengers, paramedics." },
  { date: "25 Mar 2026", tag: "sg", text: "State Coroner rules accidental drowning; no foul play, coercion or poisoning." },
  { date: "1 Apr 2026", tag: "sg", text: "Singapore Police formally conclude their investigation." },
  { date: "May 2026", tag: "as", text: "Charges framed against the seven accused; all plead not guilty. Gauhati HC sets up a fast-track sessions court." },
  { date: "8 Jun 2026", tag: "as", text: "Trial scheduled to begin." },
  { date: "Oct 2026", tag: "as", text: "HC grants bail to Amritprabha Mahanta and Sandipan Garg; family meets Governor seeking speedy trial; Assam moves Supreme Court against bail." },
  { date: "30 Nov 2026", tag: "as", text: "Supreme Court hearing listed on the bail challenges." }
];

// ---------- ACCUSED (allegations only) ----------
const ACCUSED = [
  { name: "Shyamkanu Mahanta", role: "Chief organiser, North East India Festival", charges: "Murder (BNS 103), common intention, criminal conspiracy, extortion, cheating, destruction of evidence", alleg: "Alleged to have supplied alcohol against medical advice, arranged the yacht trip, failed to arrange medical support." },
  { name: "Siddharth Sharma", role: "Manager", charges: "Murder, common intention, criminal conspiracy, criminal breach of trust", alleg: "Alleged to have allowed swimming while intoxicated and without safety equipment; alleged failure to address epilepsy history." },
  { name: "Shekhar Jyoti Goswami", role: "Band member", charges: "Murder, common intention, criminal conspiracy, criminal breach of trust", alleg: "Alleged to have encouraged him into the water and not intervened." },
  { name: "Amritprabha Mahanta", role: "Singer & band member (on bail)", charges: "Murder, common intention, criminal conspiracy, destruction of evidence", alleg: "Alleged continuous supply of alcohol and encouraging fatigued swimming. The High Court observed, in granting bail, that materials then before it did not establish a prima facie case on murder/conspiracy." },
  { name: "Sandipan Garg", role: "Cousin; suspended Assam Police DSP (on bail)", charges: "Culpable homicide not amounting to murder (BNS 105)", alleg: "Alleged to have instigated the long swim and failed to rescue." },
  { name: "Nandeswar Bora", role: "Personal security officer", charges: "Criminal conspiracy, criminal breach of trust", alleg: "Financial-irregularity allegations." },
  { name: "Prabin / Paresh Baishya", role: "Personal security officer", charges: "Criminal conspiracy, criminal breach of trust", alleg: "Financial-irregularity allegations." }
];
