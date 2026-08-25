/* =========================================================
   BILINGUAL PORTFOLIO
========================================================= */

const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.education": "Education",
        "nav.contact": "Contact",

        "hero.eyebrow": "Hello, I'm",
        "hero.role1": "Data Engineer",
        "hero.role2": "AI / ML",
        "hero.role3": "Automotive Software",
        "hero.description": "I build data pipelines, cloud-based data solutions, AI applications and scenario-centric datasets for autonomous-driving systems.",
        "hero.projects": "View Projects",
        "hero.cv": "View CV",
        "hero.contact": "Contact Me",
        "hero.location": "Chemnitz, Germany",

        "about.label": "ABOUT",
        "about.title": "About Me",
        "about.p1": "I am currently pursuing a Master's degree in Automotive Software Engineering at Technische Universität Chemnitz.",
        "about.p2": "My technical work spans data engineering, cloud platforms, AI/ML and autonomous-driving applications. I particularly enjoy designing structured data-processing workflows and converting raw data into reliable, usable datasets.",
        "about.p3": "My current work includes GCP-based data engineering, Spark and PySpark processing, AI applications and CARLA-based scenario generation and dataset annotation. I have also worked with GCP- and AWS-based cloud concepts in professional and project environments.",
        "about.based": "Based in",
        "about.location": "Chemnitz, Germany",
        "about.focus": "Current focus",
        "about.focusValue": "Data Engineering · Cloud · AI · Automotive",
        "about.cloud": "Cloud",
        "about.stack": "Data stack",

        "skills.label": "TOOLKIT",
        "skills.title": "Technical Skills",
        "skills.subtitle": "Technologies and concepts I have worked with across professional, academic and personal projects.",
        "skills.data.title": "Data Engineering",
        "skills.data.pipeline": "Data Pipelines",
        "skills.data.quality": "Data Quality",
        "skills.cloud.title": "Cloud Platforms",
        "skills.spark.title": "Spark & Big Data",
        "skills.spark.aggregations": "Aggregations",
        "skills.ai.title": "AI & Machine Learning",
        "skills.ai.evaluation": "Model Evaluation",
        "skills.auto.title": "Automotive",
        "skills.auto.scenario": "Scenario Generation",
        "skills.auto.trajectory": "Trajectories",
        "skills.auto.annotation": "Dataset Annotation",
        "skills.auto.lane": "Lane Changes",
        "skills.auto.merge": "Merge Scenarios",
        "skills.auto.validation": "Data Validation",
        "skills.software.title": "Software & Systems",

        "experience.label": "CAREER",
        "experience.title": "Professional Experience",
        "experience.subtitle": "Professional experience across software, structured-data, technical and AI-assisted environments.",
        "experience.germany": "Germany",
        "experience.india": "India",
        "experience.hyderabad": "Hyderabad, India",
        "experience.dipp.date": "Jan 2025 - Jul 2025",
        "experience.dipp.b1": "Worked with AI-assisted software solutions and technical-information processing workflows.",
        "experience.dipp.b2": "Analysed technical workflows, outputs and error patterns.",
        "experience.dipp.b3": "Supported structured technical documentation and project activities.",
        "experience.ascent.date": "Dec 2021 - Jul 2022",
        "experience.ascent.location": "Client assignment: Clarivate Analytics",
        "experience.ascent.b1": "Worked with structured technical information in quality-focused processing workflows.",
        "experience.ascent.b2": "Supported formatting, validation and consistency-oriented tasks.",
        "experience.globallogic.date": "Oct 2020 - Dec 2021",
        "experience.globallogic.b1": "Worked with structured datasets, data preparation and quality-oriented workflows.",
        "experience.globallogic.b2": "Performed systematic data checking, validation and error analysis.",
        "experience.globallogic.b3": "Supported data-oriented analysis and technical documentation.",
        "experience.cognizant.date": "Sep 2017 - May 2019",
        "experience.cognizant.b1": "Worked with structured business, process and system data.",
        "experience.cognizant.b2": "Supported data maintenance, process tracking and quality controls.",
        "experience.cognizant.b3": "Documented process results and operational information.",
        "experience.concentrix.date": "Mar 2016 - May 2017",
        "experience.concentrix.b1": "Worked in structured digital and process-oriented operational workflows.",
        "experience.concentrix.b2": "Supported data quality, issue analysis and structured information handling.",
        "experience.magus.date": "Jun 2013 - Jun 2015",
        "experience.magus.b1": "Gained professional experience in a software-engineering environment.",
        "experience.magus.b2": "Supported technical software and project-related activities.",

        "projects.label": "PROJECTS",
        "projects.title": "Featured Projects",
        "projects.subtitle": "Selected practical projects across cloud data engineering, AI and autonomous-driving technologies.",
        "projects.telemetry.title": "Automotive Telemetry Streaming Platform",
        "projects.telemetry.desc": "Designed a cloud-based architecture for ingesting, validating and storing vehicle telemetry data.",
        "projects.telemetry.b1": "Created Pub/Sub topics and subscriptions.",
        "projects.telemetry.b2": "Designed partitioned and clustered BigQuery tables.",
        "projects.telemetry.b3": "Created a separate path for invalid events.",
        "projects.telemetry.b4": "Worked with IAM and GCP command-line tools.",
        "projects.spark.title": "Dataproc / PySpark Retail Data Pipeline",
        "projects.spark.desc": "Built an end-to-end Spark ETL workflow using customer, order and salesman datasets.",
        "projects.spark.b1": "Loaded JSON data from GCS and HDFS.",
        "projects.spark.b2": "Converted source datasets to Parquet.",
        "projects.spark.b3": "Combined regional datasets using UNION.",
        "projects.spark.b4": "Joined customer, order and salesman data and generated an aggregated Retail Summary.",
        "projects.thesis.year": "Master Thesis",
        "projects.thesis.title": "Scenario-Centric Autonomous Driving Dataset Pipeline",
        "projects.thesis.desc": "Developing a CARLA-based dataset-generation and annotation pipeline for environment prediction.",
        "projects.thesis.b1": "Generated highway lane-change and merge scenarios.",
        "projects.thesis.b2": "Recorded actor trajectories and lane information.",
        "projects.thesis.b3": "Generated structured scene and frame annotations.",
        "projects.thesis.b4": "Implemented dataset quality and continuity checks.",
        "projects.yolo.desc": "Trained and evaluated a computer-vision model for bicycle detection using approximately 1,000 images.",
        "projects.yolo.b1": "Prepared and validated image datasets.",
        "projects.yolo.b2": "Trained and evaluated a YOLOv8 model.",
        "projects.yolo.b3": "Achieved approximately 0.51 mAP50.",
        "projects.yolo.b4": "Analysed inference errors and model results.",
        "projects.interview.title": "AI Interview Practice Agent",
        "projects.interview.desc": "Built a local AI interview-practice workflow with speech input, local LLM processing and structured feedback.",
        "projects.interview.b1": "Added speech-to-text using Whisper.",
        "projects.interview.b2": "Integrated local Qwen3 through Ollama.",
        "projects.interview.b3": "Implemented text-to-speech feedback.",
        "projects.interview.b4": "Built API endpoints using FastAPI.",
        "projects.jobmatch.title": "AI Job Match Agent",
        "projects.jobmatch.desc": "Developed an AI application for CV-to-job matching using structured LLM outputs and rule-based fallbacks.",
        "projects.jobmatch.b1": "Implemented structured skill matching.",
        "projects.jobmatch.b2": "Integrated local LLM processing.",
        "projects.jobmatch.b3": "Added JSON Schema and Pydantic validation.",
        "projects.jobmatch.b4": "Developed rule-based fallback behaviour.",

        "education.label": "EDUCATION",
        "education.title": "Education",
        "education.progress": "In Progress",
        "education.completed": "Completed",
        "education.germany": "Germany",
        "education.master.title": "Master - Automotive Software Engineering",
        "education.master.ects": "90 / 120 ECTS completed",
        "education.master.thesis": "Current thesis: Generation and Annotation of Scenario-Centric Datasets for Environment Prediction in Autonomous Driving",
        "education.mtech.title": "M.Tech - Embedded Systems",
        "education.mtech.meta": "India · 2017 - 2019",
        "education.mtech.grade": "First Class · CGPA 7.33",
        "education.btech.title": "B.Tech - Electrical & Electronics Engineering",
        "education.btech.meta": "India · 2009 - 2013",
        "education.btech.grade": "First Class · 62.67%",

        "certs.label": "LEARNING",
        "certs.title": "Certifications & Programs",
        "certs.gcp": "Data engineering, GCP, Dataproc, PySpark and Spark SQL",
        "certs.german": "German language certification",

        "languages.label": "LANGUAGES",
        "languages.title": "Languages",
        "languages.german": "German",
        "languages.germanLevel": "Goethe B1 certified",
        "languages.english": "English",
        "languages.englishLevel": "IELTS B2",
        "languages.teluguLevel": "First language",

        "contact.label": "CONTACT",
        "contact.title": "Let's Connect",
        "contact.p1": "I am interested in opportunities in data engineering, cloud technologies, AI/ML and automotive software.",
        "contact.p2": "If you would like to discuss a position, technical project or collaboration, feel free to contact me.",
        "contact.email": "Email Me",
        "contact.cv": "CV",
        "contact.location": "Chemnitz, Germany",

        "footer.text": "Built with HTML, CSS & JavaScript."
    },

    de: {
        "nav.home": "Startseite",
        "nav.about": "Über mich",
        "nav.skills": "Kenntnisse",
        "nav.experience": "Berufserfahrung",
        "nav.projects": "Projekte",
        "nav.education": "Ausbildung",
        "nav.contact": "Kontakt",

        "hero.eyebrow": "Hallo, ich bin",
        "hero.role1": "Data Engineer",
        "hero.role2": "KI / Machine Learning",
        "hero.role3": "Automotive Software",
        "hero.description": "Ich entwickle Datenpipelines, cloudbasierte Datenlösungen, KI-Anwendungen und szenariozentrierte Datensätze für Systeme des autonomen Fahrens.",
        "hero.projects": "Projekte ansehen",
        "hero.cv": "Lebenslauf ansehen",
        "hero.contact": "Kontakt",
        "hero.location": "Chemnitz, Deutschland",

        "about.label": "ÜBER MICH",
        "about.title": "Über mich",
        "about.p1": "Derzeit absolviere ich einen Masterstudiengang in Automotive Software Engineering an der Technischen Universität Chemnitz.",
        "about.p2": "Meine technische Arbeit umfasst Data Engineering, Cloud-Plattformen, KI/Machine Learning und Anwendungen für autonomes Fahren. Besonders gerne entwickle ich strukturierte Datenverarbeitungsprozesse und überführe Rohdaten in zuverlässige, nutzbare Datensätze.",
        "about.p3": "Aktuell arbeite ich mit GCP-basiertem Data Engineering, Spark und PySpark, KI-Anwendungen sowie CARLA-basierter Szenariogenerierung und Datensatzannotation. Darüber hinaus habe ich mit GCP- und AWS-basierten Cloud-Konzepten in beruflichen und projektbezogenen Umgebungen gearbeitet.",
        "about.based": "Standort",
        "about.location": "Chemnitz, Deutschland",
        "about.focus": "Aktueller Fokus",
        "about.focusValue": "Data Engineering · Cloud · KI · Automotive",
        "about.cloud": "Cloud",
        "about.stack": "Daten-Stack",

        "skills.label": "TECHNOLOGIEN",
        "skills.title": "Technische Kenntnisse",
        "skills.subtitle": "Technologien und Konzepte, mit denen ich in beruflichen, akademischen und persönlichen Projekten gearbeitet habe.",
        "skills.data.title": "Data Engineering",
        "skills.data.pipeline": "Datenpipelines",
        "skills.data.quality": "Datenqualität",
        "skills.cloud.title": "Cloud-Plattformen",
        "skills.spark.title": "Spark & Big Data",
        "skills.spark.aggregations": "Aggregationen",
        "skills.ai.title": "KI & Machine Learning",
        "skills.ai.evaluation": "Modellevaluierung",
        "skills.auto.title": "Automotive",
        "skills.auto.scenario": "Szenariogenerierung",
        "skills.auto.trajectory": "Trajektorien",
        "skills.auto.annotation": "Datensatzannotation",
        "skills.auto.lane": "Spurwechsel",
        "skills.auto.merge": "Merge-Szenarien",
        "skills.auto.validation": "Datenvalidierung",
        "skills.software.title": "Software & Systeme",

        "experience.label": "KARRIERE",
        "experience.title": "Berufserfahrung",
        "experience.subtitle": "Berufserfahrung in Software-, Daten-, technischen und KI-gestützten Arbeitsumgebungen.",
        "experience.germany": "Deutschland",
        "experience.india": "Indien",
        "experience.hyderabad": "Hyderabad, Indien",
        "experience.dipp.date": "Jan. 2025 - Jul. 2025",
        "experience.dipp.b1": "Arbeitete mit KI-gestützten Softwarelösungen und Workflows zur Verarbeitung technischer Informationen.",
        "experience.dipp.b2": "Analysierte technische Abläufe, Ergebnisse und Fehlermuster.",
        "experience.dipp.b3": "Unterstützte strukturierte technische Dokumentation und Projektaktivitäten.",
        "experience.ascent.date": "Dez. 2021 - Jul. 2022",
        "experience.ascent.location": "Kundeneinsatz: Clarivate Analytics",
        "experience.ascent.b1": "Arbeitete mit strukturierten technischen Informationen in qualitätsorientierten Verarbeitungsprozessen.",
        "experience.ascent.b2": "Unterstützte Formatierung, Validierung und konsistenzorientierte Aufgaben.",
        "experience.globallogic.date": "Okt. 2020 - Dez. 2021",
        "experience.globallogic.b1": "Arbeitete mit strukturierten Datensätzen, Datenaufbereitung und qualitätsorientierten Workflows.",
        "experience.globallogic.b2": "Führte systematische Datenprüfung, Validierung und Fehleranalyse durch.",
        "experience.globallogic.b3": "Unterstützte datenorientierte Analysen und technische Dokumentation.",
        "experience.cognizant.date": "Sep. 2017 - Mai 2019",
        "experience.cognizant.b1": "Arbeitete mit strukturierten Geschäfts-, Prozess- und Systemdaten.",
        "experience.cognizant.b2": "Unterstützte Datenpflege, Prozessverfolgung und Qualitätskontrollen.",
        "experience.cognizant.b3": "Dokumentierte Prozessergebnisse und operative Informationen.",
        "experience.concentrix.date": "Mär. 2016 - Mai 2017",
        "experience.concentrix.b1": "Arbeitete in strukturierten digitalen und prozessorientierten operativen Workflows.",
        "experience.concentrix.b2": "Unterstützte Datenqualität, Problemanalyse und strukturierte Informationsverarbeitung.",
        "experience.magus.date": "Jun. 2013 - Jun. 2015",
        "experience.magus.b1": "Sammelte Berufserfahrung in einer Software-Engineering-Umgebung.",
        "experience.magus.b2": "Unterstützte technische Software- und projektbezogene Aktivitäten.",

        "projects.label": "PROJEKTE",
        "projects.title": "Ausgewählte Projekte",
        "projects.subtitle": "Ausgewählte praktische Projekte aus Cloud Data Engineering, KI und Technologien für autonomes Fahren.",
        "projects.telemetry.title": "Automotive Telemetry Streaming Platform",
        "projects.telemetry.desc": "Entwarf eine cloudbasierte Architektur zur Aufnahme, Validierung und Speicherung von Fahrzeugtelemetriedaten.",
        "projects.telemetry.b1": "Erstellte Pub/Sub Topics und Subscriptions.",
        "projects.telemetry.b2": "Entwarf partitionierte und geclusterte BigQuery-Tabellen.",
        "projects.telemetry.b3": "Erstellte einen separaten Verarbeitungspfad für ungültige Events.",
        "projects.telemetry.b4": "Arbeitete mit IAM und GCP-Kommandozeilenwerkzeugen.",
        "projects.spark.title": "Dataproc / PySpark Retail Data Pipeline",
        "projects.spark.desc": "Entwickelte einen durchgängigen Spark-ETL-Workflow mit Kunden-, Auftrags- und Vertriebsdaten.",
        "projects.spark.b1": "Lud JSON-Daten aus GCS und HDFS.",
        "projects.spark.b2": "Konvertierte Quelldatensätze in Parquet.",
        "projects.spark.b3": "Kombinierte regionale Datensätze mit UNION.",
        "projects.spark.b4": "Verknüpfte Kunden-, Auftrags- und Vertriebsdaten und erzeugte eine aggregierte Retail Summary.",
        "projects.thesis.year": "Masterarbeit",
        "projects.thesis.title": "Szenariozentrierte Datenpipeline für autonomes Fahren",
        "projects.thesis.desc": "Entwickle eine CARLA-basierte Pipeline zur Datensatzgenerierung und Annotation für Environment Prediction.",
        "projects.thesis.b1": "Generierte Autobahn-Szenarien für Spurwechsel und Merge-Manöver.",
        "projects.thesis.b2": "Erfasste Akteurstrajektorien und Spurinformationen.",
        "projects.thesis.b3": "Erzeugte strukturierte Szenen- und Frame-Annotationen.",
        "projects.thesis.b4": "Implementierte Prüfungen für Datenqualität und Kontinuität.",
        "projects.yolo.desc": "Trainierte und evaluierte ein Computer-Vision-Modell zur Fahrraderkennung mit ungefähr 1.000 Bildern.",
        "projects.yolo.b1": "Bereitete Bilddatensätze auf und validierte sie.",
        "projects.yolo.b2": "Trainierte und evaluierte ein YOLOv8-Modell.",
        "projects.yolo.b3": "Erreichte ungefähr 0,51 mAP50.",
        "projects.yolo.b4": "Analysierte Inferenzfehler und Modellergebnisse.",
        "projects.interview.title": "KI Interview Practice Agent",
        "projects.interview.desc": "Entwickelte einen lokalen KI-Workflow für Interviewtraining mit Spracheingabe, lokalem LLM und strukturiertem Feedback.",
        "projects.interview.b1": "Implementierte Speech-to-Text mit Whisper.",
        "projects.interview.b2": "Integrierte Qwen3 lokal über Ollama.",
        "projects.interview.b3": "Implementierte Text-to-Speech-Feedback.",
        "projects.interview.b4": "Entwickelte API-Endpunkte mit FastAPI.",
        "projects.jobmatch.title": "AI Job Match Agent",
        "projects.jobmatch.desc": "Entwickelte eine KI-Anwendung zum Abgleich von Lebenslauf und Stellenanzeige mit strukturierten LLM-Ausgaben und regelbasierten Fallbacks.",
        "projects.jobmatch.b1": "Implementierte strukturiertes Skill-Matching.",
        "projects.jobmatch.b2": "Integrierte lokale LLM-Verarbeitung.",
        "projects.jobmatch.b3": "Ergänzte JSON-Schema- und Pydantic-Validierung.",
        "projects.jobmatch.b4": "Entwickelte regelbasiertes Fallback-Verhalten.",

        "education.label": "AUSBILDUNG",
        "education.title": "Ausbildung",
        "education.progress": "In Bearbeitung",
        "education.completed": "Abgeschlossen",
        "education.germany": "Deutschland",
        "education.master.title": "Master - Automotive Software Engineering",
        "education.master.ects": "90 / 120 ECTS abgeschlossen",
        "education.master.thesis": "Aktuelle Masterarbeit: Generation and Annotation of Scenario-Centric Datasets for Environment Prediction in Autonomous Driving",
        "education.mtech.title": "M.Tech - Embedded Systems",
        "education.mtech.meta": "Indien · 2017 - 2019",
        "education.mtech.grade": "First Class · CGPA 7,33",
        "education.btech.title": "B.Tech - Electrical & Electronics Engineering",
        "education.btech.meta": "Indien · 2009 - 2013",
        "education.btech.grade": "First Class · 62,67 %",

        "certs.label": "WEITERBILDUNG",
        "certs.title": "Zertifikate & Programme",
        "certs.gcp": "Data Engineering, GCP, Dataproc, PySpark und Spark SQL",
        "certs.german": "Deutsch-Sprachzertifikat",

        "languages.label": "SPRACHEN",
        "languages.title": "Sprachen",
        "languages.german": "Deutsch",
        "languages.germanLevel": "Goethe B1 zertifiziert",
        "languages.english": "Englisch",
        "languages.englishLevel": "IELTS B2",
        "languages.teluguLevel": "Erstsprache",

        "contact.label": "KONTAKT",
        "contact.title": "Kontakt aufnehmen",
        "contact.p1": "Ich interessiere mich für Positionen in Data Engineering, Cloud-Technologien, KI/Machine Learning und Automotive Software.",
        "contact.p2": "Wenn Sie mit mir über eine Position, ein technisches Projekt oder eine Zusammenarbeit sprechen möchten, freue ich mich über Ihre Nachricht.",
        "contact.email": "E-Mail senden",
        "contact.cv": "Lebenslauf",
        "contact.location": "Chemnitz, Deutschland",

        "footer.text": "Erstellt mit HTML, CSS & JavaScript."
    }
};


const languageConfig = {
    en: {
        htmlLang: "en",
        cv: "assets/Pradeep_Gandu_CV_EN.pdf",
        title: "Pradeep Gandu | Portfolio"
    },
    de: {
        htmlLang: "de",
        cv: "assets/Pradeep_Gandu_CV_DE.pdf",
        title: "Pradeep Gandu | Portfolio"
    }
};


function setLanguage(language) {
    const lang = translations[language] ? language : "en";

    document.documentElement.lang = languageConfig[lang].htmlLang;
    document.title = languageConfig[lang].title;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang][key] !== undefined) {
            element.textContent = translations[lang][key];
        }
    });

    const cvButton = document.getElementById("cvButton");
    const contactCvButton = document.getElementById("contactCvButton");

    if (cvButton) {
        cvButton.href = languageConfig[lang].cv;
    }

    if (contactCvButton) {
        contactCvButton.href = languageConfig[lang].cv;
    }

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    localStorage.setItem("portfolioLanguage", lang);
}


const langEn = document.getElementById("langEn");
const langDe = document.getElementById("langDe");

if (langEn) {
    langEn.addEventListener("click", () => setLanguage("en"));
}

if (langDe) {
    langDe.addEventListener("click", () => setLanguage("de"));
}


/* -----------------------------
   Automatic Footer Year
----------------------------- */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* -----------------------------
   Mobile Navigation
----------------------------- */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        });
    });
}


/* -----------------------------
   Profile Photo Fallback
----------------------------- */

const profilePhoto = document.getElementById("profilePhoto");
const photoFallback = document.getElementById("photoFallback");

if (profilePhoto && photoFallback) {
    profilePhoto.addEventListener("error", () => {
        profilePhoto.style.display = "none";
        photoFallback.style.display = "flex";
    });
}


/* -----------------------------
   Scroll Reveal
----------------------------- */

const revealTargets = document.querySelectorAll(
    ".skill-card, " +
    ".timeline-item, " +
    ".project-card, " +
    ".education-card, " +
    ".cert-card, " +
    ".language-card, " +
    ".highlight-box"
);

revealTargets.forEach((element) => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    revealTargets.forEach((element) => revealObserver.observe(element));
} else {
    revealTargets.forEach((element) => element.classList.add("visible"));
}


/* -----------------------------
   Initial Language
----------------------------- */

const savedLanguage = localStorage.getItem("portfolioLanguage");
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("de") ? "de" : "en";

setLanguage(savedLanguage || browserLanguage);

console.log("Pradeep Gandu bilingual portfolio loaded successfully.");
