/* =========================================================
   BILINGUAL DATA (EN & DE) DERIVED FROM CANDIDATE.MD
========================================================= */

const translations = {
    en: {
        // Navigation
        "nav.home": "About",
        "nav.research": "Research",
        "nav.projects": "Systems",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.contact": "Contact",

        // Hero
        "hero.affiliation": "M.Sc. Candidate in Automotive Software Engineering · TU Chemnitz",
        "hero.meta": "Chemnitz, open to relocation · German C1 · English C1 · Full-time from 01/2027",
        "stats.heading": "Master's thesis results",
        "stats.v1": "720",
        "stats.l1": "annotated frames in 6 scenarios",
        "stats.v2": "1,865",
        "stats.l2": "automated consistency checks passed",
        "stats.v3": "0.21 m",
        "stats.l3": "mean FDE at 1 s, constant-velocity baseline",
        "hero.role1": "Data Engineering",
        "hero.role2": "Autonomous Driving Simulation",
        "hero.role3": "Applied Machine Learning",
        "hero.description": "Professional experience with GCP data pipelines (BigQuery, Airflow, PySpark), SQL, Python and RAG systems. Master's student at Technische Universität Chemnitz, with a thesis that generates, annotates and validates scenario-centric datasets for environment prediction in CARLA.",
        "hero.cv": "Download CV",
        "hero.researchBtn": "Master's Thesis",
        "hero.location": "Chemnitz, Germany (Open to Relocation)",
        "hero.germanSpec": "C1 (UNIcert III)",
        "hero.englishSpec": "C1 (Fluent)",
        "hero.statusSpec": "Vollzeit ab 01/2027",

        // Hero Stats

        // Academic Research Spotlight (Master's Thesis)
        "research.label": "RESEARCH",
        "research.title": "Master's Thesis",
        "research.subtitle": "Technische Universität Chemnitz. Supervised by Univ.-Prof. Dr. Wolfram Hardt and Dr. Ariane Heller.",
        "research.phase": "Finalization Phase · Submission Dec 2026",
        "research.thesisTitle": "Generation and Annotation of Scenario-Centric Datasets for Environment Prediction in Autonomous Driving",
        "research.thesisAbstract": "Environment prediction models need datasets whose labels can be trusted. This thesis generates lane-change scenarios in CARLA, records synchronous ground truth, annotates every frame and validates the data at three levels. A constant-velocity baseline then gives a first reference result.",
        "research.p1Title": "Scenario Pipeline",
        "research.p1Desc": "YAML-driven CARLA pipeline recording synchronous 10 FPS ground truth for lane-change scenarios.",
        "research.p2Title": "Annotation",
        "research.p2Desc": "720 frames in 6 Town06 scenarios, labelled with lane-change phase, bumper gaps, lateral offset and TTC.",
        "research.p3Title": "Three-Level Validation",
        "research.p3Desc": "Recorder self-checks plus field, gap and continuity validators. 1,865 automated consistency checks passed in an offline, SHA-256-audited evaluation.",
        "research.p4Title": "Baseline Evaluation",
        "research.p4Desc": "Constant-velocity baseline on 1,278 windows: mean FDE of 0.21 m at 1 s and 1.73 m at 3 s.",

        // Projects Section
        "projects.label": "ENGINEERED SYSTEMS",
        "projects.title": "Selected Projects",
        "projects.subtitle": "Systems I built myself, with the code linked.",
        "projects.filterAll": "All Systems (11)",
        "projects.filterCloud": "Cloud & Distributed Systems",
        "projects.filterAuto": "Automotive & ADAS",
        "projects.filterAI": "Machine Learning & AI",
        "projects.flagship": "⭐ Flagship",
        "projects.liveBadge": "🟢 Live App",
        "projects.btnLive": "Live Demo",
        "projects.btnCode": "GitHub Repository",
        "projects.btnArchitecture": "View Architecture",
        "projects.btnPipelineDetails": "View Pipeline Workflow",

        // Project 1: Automotive Telemetry GCP
        "projects.telemetry.title": "Automotive Telemetry Streaming Platform",
        "projects.telemetry.desc": "Event-driven Google Cloud streaming pipeline ingesting CARLA vehicle telemetry with Apache Beam, Pub/Sub, stateful deduplication, dead-letter routing, and partitioned BigQuery analytics.",
        "projects.telemetry.b1": "Architected end-to-end streaming ingestion using Pub/Sub attributes and event-time semantics in Apache Beam / Dataflow.",
        "projects.telemetry.b2": "Implemented stateful event-ID deduplication and automated dead-letter queue (DLQ) routing for corrupted payloads.",
        "projects.telemetry.b3": "Designed partitioned and clustered BigQuery analytics warehouse with mandatory partition filtering for cost optimization.",
        "projects.telemetry.b4": "Orchestrated daily data quality reporting with Apache Airflow and automated verification via GitHub Actions CI.",

        // Project 2: AutoSense AI
        "projects.autosense.title": "AutoSense AI: Predictive Vehicle Diagnostics",
        "projects.autosense.desc": "Explainable pre-fault vehicle diagnostics system combining IsolationForest anomaly detection, RAG knowledge retrieval, local LLM reasoning (Ollama), MCP tools, and a React telemetry dashboard.",
        "projects.autosense.b1": "Engineered predictive diagnostic baseline detecting abnormal component degradation before DTC fault triggers.",
        "projects.autosense.b2": "Audited on 39,779 real public OBD dataset rows with a 5-of-7 temporal stabilization policy reducing nuisance alerts by 93.4%.",
        "projects.autosense.b3": "Built local RAG pipeline with TF-IDF similarity to retrieve OEM diagnostic troubleshooting procedures.",
        "projects.autosense.b4": "Equipped autonomous agent with MCP tools and deterministic safety gates ensuring evidence-grounded hypotheses.",

        // Project 3: CAN-Bus Simulator
        "projects.canbus.title": "CAN-Bus Diagnostic & Health Simulator",
        "projects.canbus.desc": "In-vehicle network simulator implementing CAN DBC messaging, UDS diagnostic protocols (ISO 14229), fault injection and a real-time Streamlit diagnostic tester.",
        "projects.canbus.b1": "Simulated multi-ECU CAN communication (Engine, Dynamics, Battery) with modulo-16 alive counters and checksum verification.",
        "projects.canbus.b2": "Implemented UDS diagnostic services including Session Control (0x10), Read Data By ID (0x22), and DTC Info (0x19).",
        "projects.canbus.b3": "Engineered automated YAML fault injection for sensor freeze, checksum corruption, and ECU silence scenarios.",
        "projects.canbus.b4": "Tested with Linux SocketCAN & virtual transports; maintained >70% branch coverage with Ruff, Black, and MyPy CI.",

        // Project 4: CARLA Master Thesis Pipeline

        // Project 5: Dataproc / PySpark Retail
        "projects.spark.title": "Dataproc & PySpark Retail Data Warehouse",
        "projects.spark.desc": "Distributed big-data pipeline on Google Cloud Dataproc executing PySpark and Spark SQL transformations across high-volume customer, order, and sales datasets.",
        "projects.spark.b1": "Ingested multi-format raw datasets from GCS buckets and distributed HDFS clusters.",
        "projects.spark.b2": "Optimized query performance by converting semi-structured JSON into compressed, partitioned Parquet columnar formats.",
        "projects.spark.b3": "Leveraged Spark DataFrame DSL and Spark SQL for multi-table relational joins, broadcast joins, and regional unions.",
        "projects.spark.b4": "Aggregated executive retail KPIs and customer summary tables with lazy evaluation and memory management.",

        // Project 6: CARLA Autonomous Driving Scenario Development
        "projects.carlaScenarios.title": "Research Internship: Autonomous Bus Parking System",
        "projects.carlaScenarios.desc": "Multi-bus-stop parking system in CARLA with YOLOv8 at Technische Universität Chemnitz. Grade 1.7.",
        "projects.carlaScenarios.b1": "Built a system in which each bus parks at its own stop, in any arrival order.",
        "projects.carlaScenarios.b2": "Detected bus stops and waiting passengers with YOLOv8, and held the bus until boarding finished.",
        "projects.carlaScenarios.b3": "Matched bus and stop IDs, and overtook obstacles still blocking after a 3 to 4 s wait.",
        "projects.carlaScenarios.b4": "Collected the datasets, trained and evaluated the models, and embedded the result in CARLA.",




        // Project 10: TU Chemnitz Badminton Portal (Live Deployed)
        "projects.tucBadminton.title": "TU Chemnitz Badminton Community Portal",
        "projects.tucBadminton.desc": "Decoupled full-stack athletic community portal for TU Chemnitz Badminton, integrating a React/Vite frontend, Node.js/SQLite backend, tournament registrations, and Cloudflare tunnel connectivity.",
        "projects.tucBadminton.b1": "Architected decoupled full-stack platform with React/Vite SPA on GitHub Pages and an Express/SQLite REST API backend.",
        "projects.tucBadminton.b2": "Integrated Cloudflare Tunnel and Oracle Cloud VM reverse proxy (Nginx) for hybrid server connectivity.",
        "projects.tucBadminton.b3": "Implemented tournament registrations, email-mediated partner requests, and privacy-shielded trainer services.",
        "projects.tucBadminton.b4": "Hardened admin security with salted scrypt hashing, session revocation, and 6-digit cryptographic OTP approval.",

        // Project 11: Comparative Regression Analysis (Machine Learning)
        "projects.regression.title": "Comparative Regression Analysis: Linear, Polynomial & Multi-Variable",
        "projects.regression.desc": "Comparative machine learning framework modeling multi-variable non-linear sales dynamics across Simple Linear, Multiple Linear, and Polynomial regression pipelines with scikit-learn.",
        "projects.regression.b1": "Engineered comparative ML pipelines evaluating Simple Linear, Polynomial (Deg 2), Multiple Linear, and Multi-Variable Polynomial algorithms on 150 business observations.",
        "projects.regression.b2": "Built preprocessing workflows utilizing scikit-learn's PolynomialFeatures, StandardScaler, and Pipeline to prevent data leakage across 80/20 train-test splits.",
        "projects.regression.b3": "Benchmarked performance across R² Score, MAE, and RMSE: Simple Linear (R² = 0.85), Multi-Linear (R² = 0.88), Polynomial (R² = 0.93), and Multi-Polynomial (R² = 0.98, MAE 7.54, RMSE 10.04).",
        "projects.regression.b4": "Generated publication-grade 3-panel comparative visualizations analyzing non-linear seasonal heat curves, multi-variable response surfaces, and 45° actual-vs-predicted parity plots.",

        // About Section
        "about.label": "PROFILE",
        "about.title": "About Me",
        "about.p1": "I am pursuing an M.Sc. in Automotive Software Engineering at Technische Universität Chemnitz (90 / 120 ECTS completed).",
        "about.p2": "My technical engineering focus bridges Cloud Data Platforms, Distributed Big Data (PySpark/Beam), and Automotive Software Systems. I specialize in designing scalable ingestion architectures that convert raw sensor feeds and telemetry into reliable, analytics-ready datasets.",
        "about.p3": "My recent implementations include GCP streaming pipelines (Pub/Sub, Beam, BigQuery, Airflow), CARLA autonomous driving scenario generation, CAN-Bus UDS diagnostic simulators, and explainable AI diagnostic systems audited on real OBD vehicle data.",
        "about.based": "Location",
        "about.location": "Chemnitz, Germany (Open to Relocation)",
        "about.focus": "Engineering Focus",
        "about.focusValue": "Cloud Data · Streaming · AI/ML · Automotive",
        "about.cloud": "Cloud Platforms",
        "about.stack": "Data & Processing Stack",

        // Skills Section
        "skills.label": "TOOLKIT",
        "skills.title": "Technical Skills",
        "skills.subtitle": "Core technologies and tools applied across cloud, big data, automotive systems, and AI engineering.",
        "skills.data.title": "Data Engineering",
        "skills.data.pipeline": "Data Streaming",
        "skills.data.quality": "Data Quality",
        "skills.cloud.title": "Cloud Platforms",
        "skills.auto.title": "Automotive Software",
        "skills.auto.trajectory": "3D Trajectories",
        "skills.auto.annotation": "Dataset Annotation",
        "skills.ai.title": "AI & Machine Learning",
        "skills.spark.title": "Big Data & Orchestration",
        "skills.software.title": "Software Engineering",

        // Experience Section
        "experience.label": "CAREER",
        "experience.title": "Professional Experience",
        "experience.subtitle": "Demonstrated engineering background spanning AI solutions, machine learning data workflows, and corporate client engagements.",
        "experience.germany": "Germany",
        "experience.india": "India",
        "experience.hyderabad": "Hyderabad, India",
        "experience.dipp.date": "Feb 2025 - Sep 2025",
        "experience.dipp.b1": "Integrated AI capabilities into an existing CRM/business platform using Python, FastAPI, and local LLMs via Ollama.",
        "experience.dipp.b2": "Engineered Retrieval-Augmented Generation (RAG) pipelines including text processing, chunking, embeddings, and vector retrieval.",
        "experience.dipp.b3": "Implemented Model Context Protocol (MCP) tooling and IONOS cloud AI services to connect enterprise data with AI components.",
        "experience.ascent.date": "Dec 2021 - Jul 2022",
        "experience.ascent.location": "Client: Clarivate Analytics",
        "experience.ascent.b1": "Analyzed, translated, and normalized German patent abstracts, claims, technical descriptions, and metadata into English.",
        "experience.ascent.b2": "Extracted and validated structured technical patent information under rigorous SLA quality controls.",
        "experience.globallogic.date": "Oct 2020 - Dec 2021",
        "experience.globallogic.b1": "Curated, annotated, cleaned, and classified German retail datasets for machine-learning model training and NLP pipelines.",
        "experience.globallogic.b2": "Utilized Python, Pandas, NumPy, and scikit-learn for dataset preparation, train/test splitting, and hyperparameter tuning.",
        "experience.globallogic.b3": "Evaluated classification models using accuracy, precision, recall, and F1-score matrices to optimize automation workflows.",
        "experience.cognizant.date": "Sep 2017 - Oct 2020",
        "experience.cognizant.b1": "Built ETL/ELT pipelines into layered BigQuery datasets.",
        "experience.cognizant.b2": "Modified BigQuery SQL, Airflow DAGs and PySpark jobs, and built authorized views as part of a team.",
        "experience.cognizant.b3": "Ran unit tests and SIT, and fixed defects in SIT/UAT and production incidents.",
        "experience.concentrix.date": "Mar 2016 - May 2017",
        "experience.concentrix.b1": "Supported automation quality for Google AdWords / Ads processes through systematic data annotation and validation.",
        "experience.concentrix.b2": "Evaluated model predictions, investigated edge-case errors, and supplied verified training datasets.",
        "experience.concentrix.b3": "Helped drive automation accuracy improvements from approximately 72% to 79%.",
        "experience.magus.date": "Jun 2013 - Jun 2015",
        "experience.magus.b1": "Developed full-stack enterprise web application modules using Python, SQL Server, and RESTful web services.",
        "experience.magus.b2": "Integrated external APIs, SOAP/JSON endpoints, and managed deployments on Apache Tomcat and AWS Linux environments.",

        // Education Section
        "education.label": "ACADEMICS",
        "education.title": "Education",
        "education.progress": "In Progress · 90/120 ECTS",
        "education.completed": "Completed · First Class",
        "education.germany": "Germany",
        "education.master.title": "M.Sc. Automotive Software Engineering",
        "education.mtech.title": "M.Tech. Embedded Systems",
        "education.mtech.meta": "India · 2017 - 2019",
        "education.btech.title": "B.Tech. Electrical & Electronics Engineering",
        "education.btech.meta": "India · 2009 - 2013",

        // Certifications & Languages
        "certs.label": "CREDENTIALS",
        "certs.title": "Certifications & Languages",
        "certs.gcp": "Dataproc, PySpark, BigQuery, Pub/Sub & Dataflow pipelines",
        "languages.german": "German",
        "languages.germanLevel": "C1 Certified (TU Chemnitz UNIcert III / Goethe certified)",
        "languages.english": "English",
        "languages.englishLevel": "C1 / Fluent (Professional Working Proficiency; Master's in English)",
        "languages.hindiLevel": "Fluent",
        "languages.teluguLevel": "Native / First Language",

        // Contact
        "contact.label": "LET'S CONNECT",
        "contact.title": "Get in Touch",
        "contact.p1": "I am actively seeking full-time opportunities from January 2027 in Cloud Data Engineering, AI/ML, and Automotive Software Engineering across Germany.",
        "contact.email": "Send Email",
        "contact.copy": "Copy Email Address",
        "contact.location": "Chemnitz, Germany (Open to Relocation)",
        "contact.copied": "Email copied to clipboard!",

        // Footer
        "footer.text": "Designed & built for high-performance engineering roles."
    },

    de: {
        // Navigation
        "nav.home": "Über mich",
        "nav.research": "Forschung",
        "nav.projects": "Systeme",
        "nav.skills": "Kenntnisse",
        "nav.experience": "Berufserfahrung",
        "nav.education": "Ausbildung",
        "nav.contact": "Kontakt",

        // Hero
        "hero.affiliation": "M.Sc. Kandidat in Automotive Software Engineering · TU Chemnitz",
        "hero.meta": "Chemnitz, bundesweit mobil · Deutsch C1 · Englisch C1 · Vollzeit ab 01/2027",
        "stats.heading": "Ergebnisse der Masterarbeit",
        "stats.v1": "720",
        "stats.l1": "annotierte Frames in 6 Szenarien",
        "stats.v2": "1.865",
        "stats.l2": "automatisierte Konsistenzprüfungen bestanden",
        "stats.v3": "0,21 m",
        "stats.l3": "mittlerer FDE bei 1 s, Constant-Velocity-Baseline",
        "hero.role1": "Data Engineering",
        "hero.role2": "Simulation für autonomes Fahren",
        "hero.role3": "Angewandtes Machine Learning",
        "hero.description": "Berufserfahrung mit GCP-Datenpipelines (BigQuery, Airflow, PySpark), SQL, Python und RAG-Systemen. Masterstudent an der Technischen Universität Chemnitz, mit einer Masterarbeit, die szenario-zentrierte Datensätze für die Umfeldprädiktion in CARLA erzeugt, annotiert und validiert.",
        "hero.cv": "Lebenslauf herunterladen",
        "hero.researchBtn": "Masterarbeit",
        "hero.location": "Chemnitz, Deutschland (Bundesweit mobil)",
        "hero.germanSpec": "C1 (UNIcert III)",
        "hero.englishSpec": "C1 (Fließend)",
        "hero.statusSpec": "Vollzeit ab 01/2027",

        // Hero Stats

        // Wissenschaftliche Forschung (Masterarbeit)
        "research.label": "FORSCHUNG",
        "research.title": "Masterarbeit",
        "research.subtitle": "Technische Universität Chemnitz. Betreut von Univ.-Prof. Dr. Wolfram Hardt und Dr. Ariane Heller.",
        "research.phase": "Abschlussphase · Abgabe Dez 2026",
        "research.thesisTitle": "Generierung und Annotation szenariozentrierter Datensätze zur Umgebungsvorhersage im autonomen Fahren",
        "research.thesisAbstract": "Modelle zur Umfeldprädiktion brauchen Datensätze mit verlässlichen Labels. Diese Arbeit erzeugt Spurwechselszenarien in CARLA, zeichnet synchrone Ground Truth auf, annotiert jeden Frame und validiert die Daten auf drei Ebenen. Eine Constant-Velocity-Baseline liefert anschließend ein erstes Referenzergebnis.",
        "research.p1Title": "Szenario-Pipeline",
        "research.p1Desc": "YAML-gesteuerte CARLA-Pipeline mit synchroner 10-FPS-Aufzeichnung der Ground Truth für Spurwechselszenarien.",
        "research.p2Title": "Annotation",
        "research.p2Desc": "720 Frames in 6 Town06-Szenarien, annotiert mit Spurwechselphase, Stoßstangenabständen, lateralem Versatz und TTC.",
        "research.p3Title": "Dreistufige Validierung",
        "research.p3Desc": "Selbstprüfungen des Recorders sowie Feld-, Abstands- und Kontinuitätsvalidatoren. 1.865 automatisierte Konsistenzprüfungen bestanden, offline und mit SHA-256 auditiert.",
        "research.p4Title": "Baseline-Evaluation",
        "research.p4Desc": "Constant-Velocity-Baseline auf 1.278 Fenstern: mittlerer FDE von 0,21 m bei 1 s und 1,73 m bei 3 s.",

        // Projects Section
        "projects.label": "SYSTEM-ENTWICKLUNG",
        "projects.title": "Ausgewählte Projekte",
        "projects.subtitle": "Selbst entwickelte Systeme mit verlinktem Code.",
        "projects.filterAll": "Alle Systeme (11)",
        "projects.filterCloud": "Cloud & Verteilte Systeme",
        "projects.filterAuto": "Automotive & ADAS",
        "projects.filterAI": "Machine Learning & KI",
        "projects.flagship": "⭐ Flagship",
        "projects.liveBadge": "🟢 Live-App",
        "projects.btnLive": "Live-Demo",
        "projects.btnCode": "GitHub Repository",
        "projects.btnArchitecture": "Architektur ansehen",
        "projects.btnPipelineDetails": "Pipeline-Workflow ansehen",

        // Project 1: Automotive Telemetry GCP
        "projects.telemetry.title": "Automotive Telemetrie-Streaming-Plattform",
        "projects.telemetry.desc": "Ereignisgesteuerte Google Cloud Streaming-Pipeline zur Verarbeitung von Fahrzeugtelemetrie mit Apache Beam, Pub/Sub, zustandsbehafteter Deduplizierung, Dead-Letter-Routing und BigQuery-Analytik.",
        "projects.telemetry.b1": "Entwarf End-to-End Streaming-Architektur mit Pub/Sub-Attributen und Event-Time-Semantik in Apache Beam / Dataflow.",
        "projects.telemetry.b2": "Implementierte zustandsbehaftete Event-ID-Deduplizierung und Dead-Letter-Queue (DLQ) für fehlerhafte Payloads.",
        "projects.telemetry.b3": "Konzipierte partitionierte und geclusterte BigQuery-Tabellen mit verpflichtenden Partitionsfiltern zur Kostenoptimierung.",
        "projects.telemetry.b4": "Orchestrierte tägliche Datenqualitätsberichte mit Apache Airflow und automatisierte Verifikation via GitHub Actions CI.",

        // Project 2: AutoSense AI
        "projects.autosense.title": "AutoSense AI: Vorausschauende Fahrzeugdiagnose",
        "projects.autosense.desc": "Erklärbares Pre-Fault Diagnosesystem mit IsolationForest-Anomalieerkennung, RAG-Wissensabfrage, lokalem LLM (Ollama), MCP-Tools und interaktivem React-Dashboard.",
        "projects.autosense.b1": "Entwickelte prädiktive Diagnose-Baseline zur Erkennung abnormaler Bauteildegradation vor dem Auslösen von DTC-Fehlercodes.",
        "projects.autosense.b2": "Validiert anhand von 39.779 realen OBD-Datensätzen mit einer 5-aus-7 Stabilisierungsstrategie (-93,4 % Fehlalarme).",
        "projects.autosense.b3": "Integrierte lokale RAG-Pipeline mit TF-IDF-Ähnlichkeit zum Abruf von OEM-Diagnoseanleitungen.",
        "projects.autosense.b4": "Ausgestattet mit MCP-Diagnose-Tools und deterministischen Sicherheitsprüfungen für evidenzbasierte Hypothesen.",

        // Project 3: CAN-Bus Simulator
        "projects.canbus.title": "CAN-Bus Diagnose- & Zustands-Simulator",
        "projects.canbus.desc": "Simulator für Fahrzeugnetzwerke mit CAN-DBC-Kommunikation, UDS-Diagnose (ISO 14229), Fehlerinjektion und einem Echtzeit-Diagnosetester in Streamlit.",
        "projects.canbus.b1": "Simulierte Multi-ECU-CAN-Kommunikation (Motor, Fahrdynamik, Batterie) mit Modulo-16 Alive-Countern und Prüfsummen.",
        "projects.canbus.b2": "Implementierte UDS-Dienste wie Session Control (0x10), Read Data By ID (0x22) und DTC Info (0x19).",
        "projects.canbus.b3": "Entwickelte automatisierte YAML-Fehlerinjektion für Sensor-Freeze, Checksum-Korruption und ECU-Silence.",
        "projects.canbus.b4": "Getestet mit Linux SocketCAN und virtuellen Kanälen; >70% Testabdeckung mit Ruff, Black und MyPy CI.",

        // Project 4: CARLA Master Thesis Pipeline

        // Project 5: Dataproc / PySpark Retail
        "projects.spark.title": "Dataproc & PySpark Retail Data Warehouse",
        "projects.spark.desc": "Verteilte Big-Data-Pipeline auf Google Cloud Dataproc zur Ausführung von PySpark- und Spark SQL-Transformationen auf großen Kunden- und Auftragsdatensätzen.",
        "projects.spark.b1": "Lud multiformatige Rohdaten aus GCS-Buckets und verteilten HDFS-Clustern.",
        "projects.spark.b2": "Optimierte Abfrageleistung durch Konvertierung von JSON in komprimierte, partitionierte Parquet-Dateien.",
        "projects.spark.b3": "Nutzte Spark DataFrame DSL und Spark SQL für relationale Joins, Broadcast-Joins und regionale Unions.",
        "projects.spark.b4": "Erzeugte aggregierte Retail-Kennzahlen und Kundenübersichten mit optimiertem Speichermanagement.",

        // Project 6: CARLA Autonomous Driving Scenario Development
        "projects.carlaScenarios.title": "Forschungspraktikum: Autonomes Bus-Parksystem",
        "projects.carlaScenarios.desc": "Parksystem für mehrere Bushaltestellen in CARLA mit YOLOv8 an der Technischen Universität Chemnitz. Note 1,7.",
        "projects.carlaScenarios.b1": "Aufbau eines Systems, in dem jeder Bus in beliebiger Ankunftsreihenfolge an seiner Haltestelle parkt.",
        "projects.carlaScenarios.b2": "Erkennung von Haltestellen und wartenden Fahrgästen mit YOLOv8, Weiterfahrt erst nach dem Einstieg.",
        "projects.carlaScenarios.b3": "ID-Abgleich von Bus und Haltestelle, Überholen von Hindernissen nach 3 bis 4 s Wartezeit.",
        "projects.carlaScenarios.b4": "Datensammlung, Training und Evaluation der Modelle sowie Einbindung in CARLA.",




        // Project 10: TU Chemnitz Badminton Portal (Live Deployed)
        "projects.tucBadminton.title": "TU Chemnitz Badminton Community Portal",
        "projects.tucBadminton.desc": "Entkoppeltes Full-Stack-Community-Portal für den Badminton-Sport an der TU Chemnitz mit React/Vite-Frontend, Node.js/SQLite-Backend, Turnierverwaltung und Cloudflare-Tunnel-Anbindung.",
        "projects.tucBadminton.b1": "Entwarf entkoppelte Full-Stack-Architektur mit React/Vite auf GitHub Pages und Express/SQLite REST-API-Backend.",
        "projects.tucBadminton.b2": "Integrierte Cloudflare Tunnel und Oracle Cloud VM Reverse-Proxy (Nginx) für hybride Serveranbindung.",
        "projects.tucBadminton.b3": "Implementierte Turnieranmeldungen, E-Mail-basierte Partnersuche und geschützte Trainer-/Besaitungsdienste.",
        "projects.tucBadminton.b4": "Härtete Admin-Sicherheit durch gesalzenes Scrypt-Hashing, Sitzungswiderruf und 6-stellige kryptografische OTPs.",

        // Project 11: Comparative Regression Analysis (Machine Learning)
        "projects.regression.title": "Vergleichende Regressionsanalyse: Linear, Polynomiell & Multivariat",
        "projects.regression.desc": "Vergleichendes Machine-Learning-Framework zur Modellierung multivariater, nichtlinearer Absatzdynamiken mittels einfacher, multipler und polynomieller Regression mit scikit-learn.",
        "projects.regression.b1": "Entwickelte vergleichende ML-Pipelines zur Evaluation einfacher linearer, polynomieller (Grad 2), multipler und multivariat-polynomieller Regressionsmodelle auf 150 Geschäftsdatensätzen.",
        "projects.regression.b2": "Erstellte Vorverarbeitungs-Pipelines mit scikit-learn (PolynomialFeatures, StandardScaler, Pipeline) zur Vermeidung von Data Leakage bei 80/20-Train-Test-Splits.",
        "projects.regression.b3": "Benchmarking der Gütemaße (R²-Score, MAE, RMSE): Einfache Regression (R² = 0,85), Multiple Regression (R² = 0,88), Polynomiell (R² = 0,93) und Multi-Polynomiell (R² = 0,98, MAE 7,54, RMSE 10,04).",
        "projects.regression.b4": "Erstellte 3-Panel-Visualisierungen zur Analyse nichtlinearer saisonaler Temperaturkurven, multivariater Wirkungszusammenhänge und 45°-Paritätsdiagramme (Ist- vs. Vorhersagewerte).",

        // About Section
        "about.label": "PROFIL",
        "about.title": "Über mich",
        "about.p1": "Derzeit absolviere ich den Masterstudiengang Automotive Software Engineering an der Technischen Universität Chemnitz (90 / 120 ECTS abgeschlossen).",
        "about.p2": "Mein technischer Schwerpunkt verbindet Cloud-Datenplattformen, verteiltes Big Data (PySpark/Beam) und automobile Softwaresysteme. Ich spezialisiere mich auf skalierbare Architekturen, die rohe Sensordaten in zuverlässige, analysebereite Datensätze überführen.",
        "about.p3": "Zu meinen aktuellen Projekten gehören GCP-Streaming-Pipelines (Pub/Sub, Beam, BigQuery, Airflow), CARLA-Szenariogenerierung für autonomes Fahren, CAN-Bus UDS-Simulatoren und erklärbare KI-Fahrzeugdiagnostik auf realen OBD-Daten.",
        "about.based": "Standort",
        "about.location": "Chemnitz, Deutschland (umzugsbereit)",
        "about.focus": "Technischer Fokus",
        "about.focusValue": "Cloud Data · Streaming · KI/ML · Automotive",
        "about.cloud": "Cloud-Plattformen",
        "about.stack": "Daten-Stack",

        // Skills Section
        "skills.label": "TECHNOLOGIEN",
        "skills.title": "Technische Kenntnisse",
        "skills.subtitle": "Technologien und Werkzeuge aus Cloud, Big Data, automobilen Systemen und KI-Engineering.",
        "skills.data.title": "Data Engineering",
        "skills.data.pipeline": "Daten-Streaming",
        "skills.data.quality": "Datenqualität",
        "skills.cloud.title": "Cloud-Plattformen",
        "skills.auto.title": "Automotive Software",
        "skills.auto.trajectory": "3D-Trajektorien",
        "skills.auto.annotation": "Datensatzannotation",
        "skills.ai.title": "KI & Machine Learning",
        "skills.spark.title": "Big Data & Orchestrierung",
        "skills.software.title": "Software Engineering",

        // Experience Section
        "experience.label": "KARRIERE",
        "experience.title": "Berufserfahrung",
        "experience.subtitle": "Erfahrung in Softwareentwicklung, technischen Datenprozessen und Unternehmensprojekten.",
        "experience.germany": "Deutschland",
        "experience.india": "Indien",
        "experience.hyderabad": "Hyderabad, Indien",
        "experience.dipp.date": "Feb. 2025 - Sep. 2025",
        "experience.dipp.b1": "Integrierte KI-Funktionen in eine CRM-/Unternehmensplattform mittels Python, FastAPI und lokaler LLMs über Ollama.",
        "experience.dipp.b2": "Entwickelte Retrieval-Augmented Generation (RAG) Pipelines mit Dokumentenverarbeitung, Chunking und Vektorsuche.",
        "experience.dipp.b3": "Implementierte Model Context Protocol (MCP) Tools und IONOS Cloud KI-Dienste zur Verknüpfung von Geschäftsdaten mit KI.",
        "experience.ascent.date": "Dez. 2021 - Jul. 2022",
        "experience.ascent.location": "Kunde: Clarivate Analytics",
        "experience.ascent.b1": "Analysierte, übersetzte und normalisierte deutsche Patenttexte, Ansprüche, Beschreibungen und Metadaten ins Englische.",
        "experience.ascent.b2": "Extrahierte und validierte strukturierte Fachdaten unter Einhaltung strenger Qualitäts-SLAs.",
        "experience.globallogic.date": "Okt. 2020 - Dez. 2021",
        "experience.globallogic.b1": "Kuratierte, annotierte und bereinigte deutsche Retail-Datensätze für ML-Modelltraining und NLP-Pipelines.",
        "experience.globallogic.b2": "Nutzte Python, Pandas, NumPy und scikit-learn für Datenaufbereitung, Train/Test-Splitting und Hyperparameter-Tuning.",
        "experience.globallogic.b3": "Evaluierte Klassifikationsmodelle anhand von Accuracy, Precision, Recall und F1-Score zur Prozessoptimierung.",
        "experience.cognizant.date": "Sep. 2017 - Okt. 2020",
        "experience.cognizant.b1": "Aufbau von ETL/ELT-Pipelines in mehrschichtige BigQuery-Datasets.",
        "experience.cognizant.b2": "Anpassung von BigQuery-SQL, Airflow-DAGs und PySpark-Jobs, Authorized Views im Team.",
        "experience.cognizant.b3": "Unit-Tests und SIT, Fehlerbehebung in SIT/UAT und bei Produktionsvorfällen.",
        "experience.concentrix.date": "Mär. 2016 - Mai 2017",
        "experience.concentrix.b1": "Unterstützte Automatisierungsqualität bei Google AdWords / Ads durch systematische Datenannotation und Validierung.",
        "experience.concentrix.b2": "Evaluierte Modellvorhersagen, untersuchte Randfälle und stellte geprüfte Trainingsdaten bereit.",
        "experience.concentrix.b3": "Trug zur Steigerung der Automatisierungsqualität von ca. 72 % auf 79 % bei.",
        "experience.magus.date": "Jun. 2013 - Jun. 2015",
        "experience.magus.b1": "Entwickelte Full-Stack Webanwendungsmodule mit Python, SQL Server und RESTful Web Services.",
        "experience.magus.b2": "Integrierte externe APIs, SOAP/JSON-Endpunkte und betreute Bereitstellungen unter Apache Tomcat und AWS Linux.",

        // Education Section
        "education.label": "AUSBILDUNG",
        "education.title": "Ausbildung",
        "education.progress": "In Bearbeitung · 90/120 ECTS",
        "education.completed": "Abgeschlossen · First Class",
        "education.germany": "Deutschland",
        "education.master.title": "M.Sc. Automotive Software Engineering",
        "education.mtech.title": "M.Tech. Embedded Systems",
        "education.mtech.meta": "Indien · 2017 - 2019",
        "education.btech.title": "B.Tech. Electrical & Electronics Engineering",
        "education.btech.meta": "Indien · 2009 - 2013",

        // Certifications & Languages
        "certs.label": "WEITERBILDUNG",
        "certs.title": "Zertifikate & Sprachen",
        "certs.gcp": "Dataproc, PySpark, BigQuery, Pub/Sub und Dataflow-Pipelines",
        "languages.german": "Deutsch",
        "languages.germanLevel": "C1 zertifiziert (TU Chemnitz UNIcert III / Goethe zertifiziert)",
        "languages.english": "Englisch",
        "languages.englishLevel": "C1 / Fließend (Verhandlungssicher im Beruf; Masterstudium auf Englisch)",
        "languages.hindiLevel": "Fließend",
        "languages.teluguLevel": "Erstsprache / Muttersprache",

        // Contact
        "contact.label": "KONTAKT",
        "contact.title": "Kontakt",
        "contact.p1": "Ich suche aktiv nach Vollzeitstellen ab Januar 2027 in den Bereichen Cloud Data Engineering, KI/ML und Automotive Software in ganz Deutschland.",
        "contact.email": "E-Mail senden",
        "contact.copy": "E-Mail-Adresse kopieren",
        "contact.location": "Chemnitz, Deutschland (umzugsbereit)",
        "contact.copied": "E-Mail-Adresse kopiert!",

        // Footer
        "footer.text": "Entwickelt für anspruchsvolle Positionen im Engineering."
    }
};

/* =========================================================
   PROJECT ARCHITECTURE DEEP-DIVE MODAL DATA
========================================================= */

const projectArchitectures = {
    telemetry: {
        en: {
            title: "Automotive Telemetry Streaming Platform",
            subtitle: "Google Cloud Platform · Apache Beam · Pub/Sub · BigQuery · Airflow",
            flow: `[CARLA / Synthetic Vehicle Producer]
                  │
                  ▼ (JSON Event Payload + Attributes)
        [Google Cloud Pub/Sub: Ingestion Topic]
                  │
                  ▼ (Streaming Read & Event-Time Timestamps)
         [Apache Beam / Dataflow Streaming Job]
            ├─► [JSON Schema Draft 2020-12 Validation]
            │      └─► (Invalid Payload) ──► [BigQuery DLQ Table + Pub/Sub DLQ]
            │
            ├─► [Stateful event_id Deduplication (Fixed Window)]
            │      └─► (Repeated event_id) ──► [BigQuery Duplicates Table]
            │
            └─► [1-Minute Fixed Window Metrics Aggregation]
                   ├─► [BigQuery: telemetry_events (Partitioned by Day & Clustered)]
                   └─► [BigQuery: telemetry_minute_metrics (Aggregated Stats)]
                  │
                  ▼
         [Apache Airflow Daily Orchestration & Data Quality DAG]`,
            challenges: [
                "Handling out-of-order vehicle events and late data arrival using event-time semantics rather than ingestion time.",
                "Preventing costly BigQuery full-table scans through strict partitioned tables with mandatory partition filters.",
                "Implementing stateful beam transforms to discard duplicated telemetry IDs while routing malformed payloads to a dead-letter queue."
            ],
            metrics: [
                { val: "100%", label: "Schema Validation Enforced" },
                { val: "0 Full Scans", label: "Partition Filter Enforcement" },
                { val: "4 Tests", label: "Automated Pytest & CI Passed" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/automotive-telemetry-gcp"
        },
        de: {
            title: "Automotive Telemetrie-Streaming-Plattform",
            subtitle: "Google Cloud Platform · Apache Beam · Pub/Sub · BigQuery · Airflow",
            flow: `[Fahrzeug-Simulator / Producer]
                  │
                  ▼ (JSON-Payload & Attribute)
        [Google Cloud Pub/Sub: Ingestion Topic]
                  │
                  ▼ (Streaming Read & Event-Time Zeitstempel)
         [Apache Beam / Dataflow Streaming-Pipeline]
            ├─► [JSON Schema Draft 2020-12 Validierung]
            │      └─► (Ungültige Daten) ──► [BigQuery Dead-Letter Queue]
            │
            ├─► [Zustandsbehaftete event_id-Deduplizierung]
            │      └─► (Duplikate) ──► [BigQuery Duplikate-Tabelle]
            │
            └─► [1-Minuten Zeitfenster-Aggregation]
                   ├─► [BigQuery: telemetry_events (Tagespartitioniert)]
                   └─► [BigQuery: telemetry_minute_metrics (Minuten-KPIs)]
                  │
                  ▼
         [Apache Airflow: Tägliche Qualitätsprüfungen & DAG]`,
            challenges: [
                "Verarbeitung von verzögert eintreffenden Telemetriedaten unter Verwendung von Event-Time-Semantik statt Ingestion-Time.",
                "Vermeidung teurer Full-Table-Scans in BigQuery durch erzwungene Partitionsfilter und Clustering nach Fahrzeug-ID.",
                "Zustandsbehaftete Deduplizierung zur Elimination doppelter Ereignisse bei gleichzeitiger Dead-Letter-Isolierung korrupter Payloads."
            ],
            metrics: [
                { val: "100 %", label: "Schema-Validierung" },
                { val: "0 Scans", label: "Erzwungene Partitionsfilter" },
                { val: "4 Tests", label: "Pytest & CI/CD bestanden" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/automotive-telemetry-gcp"
        }
    },

    autosense: {
        en: {
            title: "AutoSense AI: Predictive Vehicle Diagnostics",
            subtitle: "FastAPI · IsolationForest · Local Ollama LLM · RAG · React Dashboard",
            flow: `[Vehicle / OBD Telemetry Stream]
                  │
                  ▼
         [FastAPI Backend & SQLite Store]
            ├─► [Personalized Statistical Baseline Model]
            ├─► [IsolationForest Anomaly Detector]
            │      │
            │      ▼
            ├─► [Pre-Fault Explainability Engine (Feature Attribution)]
            ├─► [Temporal Alert Stabilization (5-of-7 Policy Filter)]
            │      │
            │      ▼
            ├─► [Local RAG: OEM DTC Knowledge Retrieval (TF-IDF Cosine)]
            ├─► [Autonomous Diagnostic Agent (Ollama Local LLM + MCP Tools)]
            │      │
            │      ▼
            └─► [Deterministic DTC Safety Gate]
                  │
                  ▼
        [Interactive React / Vite Telemetry & Diagnostic Dashboard]`,
            challenges: [
                "Detecting subtle abnormal component degradation before conventional DTC fault thresholds are crossed.",
                "Eliminating nuisance alerts on real driving datasets: designed a 5-of-7 temporal filter that reduced false alarms by 93.44% on 39,779 real OBD records.",
                "Preventing LLM hallucinations in automotive safety diagnostics through deterministic post-generation safety gates."
            ],
            metrics: [
                { val: "39,779", label: "Real OBD Rows Audited" },
                { val: "-93.4%", label: "Nuisance Alerts Reduced" },
                { val: "69 / 69", label: "Safety Checks Passed" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/autosense-ai"
        },
        de: {
            title: "AutoSense AI: Vorausschauende Fahrzeugdiagnose",
            subtitle: "FastAPI · IsolationForest · Lokales Ollama LLM · RAG · React Dashboard",
            flow: `[Fahrzeugtelemetrie / OBD-Datenstrom]
                  │
                  ▼
         [FastAPI Backend & SQLite-Datenbank]
            ├─► [Personalisierte statistische Baseline]
            ├─► [IsolationForest-Anomaliedetektor]
            │      │
            │      ▼
            ├─► [Erklärbarkeits-Engine (Feature Attribution)]
            ├─► [Zeitliche Alert-Stabilisierung (5-aus-7 Richtlinie)]
            │      │
            │      ▼
            ├─► [Lokales RAG: Abruf von OEM-DTC-Diagnosedaten]
            ├─► [Autonomer Diagnose-Agent (Ollama LLM + MCP-Tools)]
            │      │
            │      ▼
            └─► [Deterministisches Sicherheits-Gate]
                  │
                  ▼
        [Interaktives React / Vite Telemetrie-Dashboard]`,
            challenges: [
                "Erkennung gradueller Bauteilverschlechterung noch vor dem Setzen statischer DTC-Schwellenwerte.",
                "Dramatische Reduzierung von Fehlalarmen bei realer Fahrt: Ein 5-aus-7 Stabilisierungsfilter senkte Fehlalarme um 93,44 % bei 39.779 realen OBD-Datenzeilen.",
                "Vermeidung von LLM-Halluzinationen in sicherheitskritischer Fahrzeugdiagnostik durch deterministische Sicherheitsprüfungen."
            ],
            metrics: [
                { val: "39.779", label: "Reale OBD-Daten auditiert" },
                { val: "-93,4 %", label: "Fehlalarme reduziert" },
                { val: "69 / 69", label: "Sicherheitsprüfungen bestanden" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/autosense-ai"
        }
    },

    canbus: {
        en: {
            title: "CAN-Bus Diagnostic & Health Simulator",
            subtitle: "python-can · UDS (ISO 14229) · DBC Network · Streamlit Dashboard · SocketCAN",
            flow: `[DBC Vehicle Network Configuration: Engine (0x100), Dynamics (0x101), Battery (0x300)]
                                  │
                                  ▼
         [Multi-ECU Simulation Core with Modulo-16 Counters & Checksums]
                                  │
         ┌────────────────────────┴────────────────────────┐
         ▼                                                 ▼
[Automated YAML Fault Scheduler]                  [Transport Layer]
 (Overheating, ECU Silence, CRC Error)             ├─ In-Memory Transport
                                                   ├─ Virtual CAN (python-can)
                                                   └─ Linux SocketCAN / vcan0
                                  │
                                  ▼
                 [UDS Application Layer (ISO 14229)]
                  ├─ 0x10: Diagnostic Session Control
                  ├─ 0x22: Read Data By Identifier
                  ├─ 0x19: Read DTC Information
                  └─ 0x14: Clear Diagnostic Information
                                  │
                                  ▼
           [Streamlit Real-Time Diagnostic Tester & Monitor]`,
            challenges: [
                "Implementing accurate automotive communication timing across multiple concurrent ECU simulators.",
                "Decoding binary CAN payload frames according to DBC definitions with custom bit-level packing.",
                "Building UDS diagnostic service handlers and enforcing state machines (default vs extended sessions)."
            ],
            metrics: [
                { val: ">70%", label: "Branch Test Coverage" },
                { val: "3 ECUs", label: "Concurrent Simulated ECUs" },
                { val: "100%", label: "Ruff, Black & MyPy CI Green" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/CAN-Bus_diagnostic_and_Health-Monitoring_Simulator_Dashboard"
        },
        de: {
            title: "CAN-Bus Diagnose- & Zustands-Simulator",
            subtitle: "python-can · UDS (ISO 14229) · DBC-Netzwerk · Streamlit Dashboard · SocketCAN",
            flow: `[DBC-Fahrzeugnetzwerk: Motor (0x100), Fahrdynamik (0x101), Batterie (0x300)]
                                  │
                                  ▼
         [Multi-ECU Simulationskern mit Modulo-16 Zählern & Prüfsummen]
                                  │
         ┌────────────────────────┴────────────────────────┐
         ▼                                                 ▼
[Automatisierte YAML-Fehlerinjektion]             [Transportschicht]
 (Überhitzung, ECU-Ausfall, Prüfsummenfehler)     ├─ In-Memory Transport
                                                   ├─ Virtuelles CAN (python-can)
                                                   └─ Linux SocketCAN / vcan0
                                  │
                                  ▼
                 [UDS Anwendungsschicht (ISO 14229)]
                  ├─ 0x10: Diagnostic Session Control
                  ├─ 0x22: Read Data By Identifier
                  ├─ 0x19: Read DTC Information
                  └─ 0x14: Clear Diagnostic Information
                                  │
                                  ▼
           [Streamlit Echtzeit-Diagnosetester & Monitor]`,
            challenges: [
                "Präzises Timing der zyklischen CAN-Nachrichtenübertragung über mehrere simulierte Steuergeräte.",
                "Bitgenaue Dekodierung und Serialisierung binärer CAN-Frames anhand von DBC-Netzwerkspezifikationen.",
                "Implementierung von UDS-Diagnosediensten mit sauberer Zustandsverwaltung (Standard- vs. Extended-Session)."
            ],
            metrics: [
                { val: ">70 %", label: "Branch-Testabdeckung" },
                { val: "3 ECUs", label: "Simulierte Steuergeräte" },
                { val: "100 %", label: "Ruff, Black & MyPy CI" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/CAN-Bus_diagnostic_and_Health-Monitoring_Simulator_Dashboard"
        }
    },

    pyspark: {
        en: {
            title: "Dataproc & PySpark Retail Big Data Warehouse",
            subtitle: "Google Cloud Dataproc · PySpark · Spark SQL · GCS · Apache Parquet",
            flow: `[Distributed Raw Storage: GCS Buckets & HDFS Clusters]
         (Customers JSON, Orders JSON, Sales Data)
                                │
                                ▼
         [Dataproc Distributed PySpark Processing Engine]
            ├─ Schema Enforcement & Type Casting
            ├─ Semi-Structured JSON Conversion to Columnar Parquet
            ├─ Multi-table Relational Joins & Broadcast Optimization
            └─ Regional Dataset Union & Aggregation
                                │
                                ▼
         [Spark SQL Analytical KPI Mart & Summary Tables]`,
            challenges: [
                "Transforming nested semi-structured JSON data into optimized Parquet columnar files for fast analytical queries.",
                "Optimizing join operations between large transaction logs and small dimension tables using broadcast joins.",
                "Managing memory and lazy evaluation partitions to prevent out-of-memory errors on large dataset loads."
            ],
            metrics: [
                { val: "PySpark", label: "Distributed Execution" },
                { val: "Parquet", label: "Columnar Storage Format" },
                { val: "Dataproc", label: "Managed GCP Cluster" }
            ],
            githubUrl: "https://github.com/gandupradeep2026"
        },
        de: {
            title: "Dataproc & PySpark Retail Big Data Warehouse",
            subtitle: "Google Cloud Dataproc · PySpark · Spark SQL · GCS · Apache Parquet",
            flow: `[Verteilte Rohdaten: GCS Buckets & HDFS Cluster]
         (Kunden-JSON, Bestellungen-JSON, Vertriebsdaten)
                                │
                                ▼
         [Dataproc PySpark Verarbeitungs-Cluster]
            ├─ Schema-Validierung & Typkonvertierung
            ├─ Konvertierung von JSON in spaltenbasiertes Parquet
            ├─ Relationale Joins & Broadcast-Optimierung
            └─ Regionale Datenzusammenführung (UNION)
                                │
                                ▼
         [Spark SQL Analyse-Tabellen & Retail-Zusammenfassungen]`,
            challenges: [
                "Transformation verschachtelter JSON-Rohdaten in komprimiertes Parquet für signifikante Abfragebeschleunigung.",
                "Optimierung relationaler Joins zwischen großen Transaktionsdaten und Dimensionsdaten mittels Broadcast-Joins.",
                "Effizientes Partitionierungs- und Speichermanagement bei verteilter Spark-Ausführung."
            ],
            metrics: [
                { val: "PySpark", label: "Verteilte Ausführung" },
                { val: "Parquet", label: "Spaltenbasiertes Format" },
                { val: "Dataproc", label: "Verwalteter GCP-Cluster" }
            ],
            githubUrl: "https://github.com/gandupradeep2026"
        }
    },

    tucBadminton: {
        en: {
            title: "TU Chemnitz Badminton Community Portal",
            subtitle: "React / Vite · Node.js / Express · SQLite · Cloudflare Tunnel · Oracle Cloud VM / Nginx",
            flow: `[GitHub Pages Production SPA (React / Vite + Tailwind)]
                                  │
                                  ▼ (HTTPS REST API Requests)
          [Cloudflare Tunnel / Oracle Cloud VM Nginx Reverse Proxy]
                                  │
                                  ▼ (Port 5000)
                 [Express.js REST API Backend Core]
              ├─ Salted Scrypt Passwords & 6-Digit Cryptographic OTP
              ├─ Tournament Registration & Partner Email Matcher
              ├─ Privacy-Shielded Trainer & Stringer Directory
              └─ Document Storage & Media Upload Service
                                  │
                                  ▼
             [SQLite Relational Database (badminton_community.db)]`,
            challenges: [
                "Architecting a decoupled hybrid deployment bridging static GitHub Pages hosting with a private home server/cloud VM backend without CORS bottlenecks.",
                "Designing a zero-client-leakage admin password recovery flow requiring a cryptographically generated 6-digit numeric OTP and server-console audit verification.",
                "Implementing private trainer & stringer mediation allowing user contact inquiries without public email or phone number harvesting."
            ],
            metrics: [
                { val: "Live", label: "Production on GitHub Pages" },
                { val: "Decoupled", label: "Vite SPA + Express Core" },
                { val: "2-Step OTP", label: "Hardened Admin Security" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/tuc-badminton-website"
        },
        de: {
            title: "TU Chemnitz Badminton Community Portal",
            subtitle: "React / Vite · Node.js / Express · SQLite · Cloudflare Tunnel · Oracle Cloud VM / Nginx",
            flow: `[GitHub Pages Produktions-SPA (React / Vite + Tailwind)]
                                  │
                                  ▼ (HTTPS REST-API Anfragen)
          [Cloudflare Tunnel / Oracle Cloud VM Nginx Reverse-Proxy]
                                  │
                                  ▼ (Port 5000)
                 [Express.js REST-API Backend-Kern]
              ├─ Gesalzenes Scrypt-Passworthashing & 6-stellige OTPs
              ├─ Turnieranmeldungen & E-Mail-basierte Partnersuche
              ├─ Datenschutzkonformes Trainer- & Besaitungsverzeichnis
              └─ Dokumentenspeicher & Upload-Dienst
                                  │
                                  ▼
             [SQLite Relationale Datenbank (badminton_community.db)]`,
            challenges: [
                "Entwurf einer entkoppelten Hybrid-Architektur zwischen statischem GitHub Pages Hosting und privatem Home-Server/Cloud-VM Backend ohne CORS-Probleme.",
                "Konzeption eines token-sicheren Passwort-Reset-Workflows mit kryptografischem 6-stelligem Einmalcode (OTP) und Konsolenverifikation.",
                "Realisierung einer geschützten Vermittlung für Trainer und Schlägerbesaiter zum Schutz privater Kontaktdaten vor Scraping."
            ],
            metrics: [
                { val: "Live", label: "Produktives GitHub Pages Deployment" },
                { val: "Entkoppelt", label: "Vite SPA + Express Backend" },
                { val: "2-Schritt OTP", label: "Gehärtete Administrator-Sicherheit" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/tuc-badminton-website"
        }
    },
    regressionAnalysis: {
        en: {
            title: "Comparative Regression & Non-Linear Modeling Framework",
            subtitle: "Python · scikit-learn · PolynomialFeatures · StandardScaler · Matplotlib · Seaborn",
            flow: `[Simulated Business Sales Dataset (150 Samples: Temp + Ad Budget)]
                                  │
                                  ▼ (80/20 Train-Test Stratified Split)
          [Feature Engineering & Preprocessing Pipeline]
       ├─ PolynomialFeatures (degree=2, include_bias=False)
       ├─ StandardScaler (Feature Normalization & Zero Data Leakage)
       └─ Multi-Feature Design Matrix Construction
                                  │
                                  ▼ (Parallel Model Fitting & Optimization)
          ┌───────────────┬───────────────┬───────────────┐
          ▼               ▼               ▼               ▼
    [Simple Linear]  [Multi-Linear]  [Polynomial 2]  [Poly-Multi 2]
      (R² = 0.85)     (R² = 0.88)     (R² = 0.93)     (R² = 0.98)
      (RMSE = 30.1)   (RMSE = 26.2)   (RMSE = 20.4)   (RMSE = 10.0)
          └───────────────┼───────────────┴───────────────┘
                                  │
                                  ▼
         [Residual Analysis, Benchmarking & Parity Plots]
     ├─ Held-Out Evaluation: R², MAE (7.54), RMSE (10.04)
     ├─ Non-Linear Seasonal Curve vs. Linear Underfitting Analysis
     └─ Actual vs. Predicted 45° Parity Verification (y = y_pred)`,
            challenges: [
                "Preventing polynomial over-parameterization and feature explosion while accurately capturing non-linear seasonal temperature spikes.",
                "Decoupling interaction effects between linear marketing spend and quadratic ambient temperature without introducing multicollinearity instabilities.",
                "Structuring reproducible scikit-learn pipeline transformations ensuring test-set isolation and zero preprocessing data leakage."
            ],
            metrics: [
                { val: "0.98 R²", label: "Multi-Polynomial Fit" },
                { val: "7.54 MAE", label: "Held-Out Test Accuracy" },
                { val: "4 Models", label: "Rigorous ML Benchmark" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/regression-analysis"
        },
        de: {
            title: "Vergleichende Regressionsanalyse & Nichtlineare Modellierung",
            subtitle: "Python · scikit-learn · PolynomialFeatures · StandardScaler · Matplotlib · Seaborn",
            flow: `[Simulierter Vertriebsdatensatz (150 Stichproben: Temp + Budget)]
                                  │
                                  ▼ (80/20 Train-Test-Split)
          [Feature-Engineering & Vorverarbeitungs-Pipeline]
       ├─ PolynomialFeatures (degree=2, include_bias=False)
       ├─ StandardScaler (Normalisierung & kein Data Leakage)
       └─ Aufbau der multivariaten Design-Matrix
                                  │
                                  ▼ (Paralleles Modelltraining & Fitting)
          ┌───────────────┬───────────────┬───────────────┐
          ▼               ▼               ▼               ▼
    [Einfach Linear] [Multi-Linear]  [Polynomiell 2] [Multi-Poly 2]
      (R² = 0,85)     (R² = 0,88)     (R² = 0,93)     (R² = 0,98)
      (RMSE = 30,1)   (RMSE = 26,2)   (RMSE = 20,4)   (RMSE = 10,0)
          └───────────────┼───────────────┴───────────────┘
                                  │
                                  ▼
         [Residuenanalyse, Benchmarking & Paritätsdiagramme]
     ├─ Testset-Evaluation: R², MAE (7,54), RMSE (10,04)
     ├─ Analyse nichtlinearer Saisonkurven vs. linearem Underfitting
     └─ 45°-Paritätsdiagramme von Ist- und Modell-Vorhersagewerten`,
            challenges: [
                "Verhinderung von Overfitting und Feature-Explosion bei gleichzeitiger präziser Erfassung quadratischer Temperatur-Nachfragespitzen.",
                "Entkopplung von Interaktionseffekten zwischen linearem Marketingbudget und nichtlinearen saisonalen Temperatureinflüssen.",
                "Aufbau strikter scikit-learn Pipeline-Transformationen zur vollständigen Vermeidung von Data Leakage zwischen Trainings- und Testdaten."
            ],
            metrics: [
                { val: "0,98 R²", label: "Multi-Polynomieller Fit" },
                { val: "7,54 MAE", label: "Testset-Fehlerminimierung" },
                { val: "4 Modelle", label: "Systematischer Benchmark" }
            ],
            githubUrl: "https://github.com/gandupradeep2026/regression-analysis"
        }
    }
};

/* =========================================================
   LANGUAGE & THEME CONFIGURATION
========================================================= */

const languageConfig = {
    en: {
        htmlLang: "en",
        cv: "assets/Pradeep_Gandu_CV_EN.pdf",
        title: "Pradeep Gandu | Cloud Data & Automotive Software Engineer"
    },
    de: {
        htmlLang: "de",
        cv: "assets/Pradeep_Gandu_CV_DE.pdf",
        title: "Pradeep Gandu | Cloud Data & Automotive Software Engineer"
    }
};

let currentLanguage = "en";

function setLanguage(language) {
    currentLanguage = translations[language] ? language : "en";
    const lang = currentLanguage;

    document.documentElement.lang = languageConfig[lang].htmlLang;
    document.title = languageConfig[lang].title;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (translations[lang][key] !== undefined) {
            element.textContent = translations[lang][key];
        }
    });

    const cvButton = document.getElementById("cvButton");
    if (cvButton) {
        cvButton.href = languageConfig[lang].cv;
    }

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
    });

    localStorage.setItem("portfolioLanguage", lang);
}

const langEn = document.getElementById("langEn");
const langDe = document.getElementById("langDe");

if (langEn) langEn.addEventListener("click", () => setLanguage("en"));
if (langDe) langDe.addEventListener("click", () => setLanguage("de"));


/* =========================================================
   DARK / LIGHT THEME TOGGLE
========================================================= */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function getInitialTheme() {
    const saved = localStorage.getItem("portfolioTheme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon) {
        themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
    localStorage.setItem("portfolioTheme", theme);
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
    });
}

applyTheme(getInitialTheme());


/* =========================================================
   PROJECT CATEGORY FILTERS
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const selectedFilter = btn.dataset.filter;

        projectCards.forEach((card) => {
            const categories = card.dataset.category || "";
            if (selectedFilter === "all" || categories.includes(selectedFilter)) {
                card.classList.remove("is-hidden");
            } else {
                card.classList.add("is-hidden");
            }
        });
    });
});


/* =========================================================
   ARCHITECTURE & DEEP-DIVE MODAL
========================================================= */

const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalBody = document.getElementById("modalBody");
const modalTriggers = document.querySelectorAll(".modal-trigger-btn");

function openArchitectureModal(projectId) {
    const projectData = projectArchitectures[projectId];
    if (!projectData) return;

    const data = projectData[currentLanguage] || projectData.en;

    let challengesList = data.challenges.map(c => `<li>${c}</li>`).join("");
    let metricsHtml = data.metrics.map(m => `
        <div class="modal-metric-card">
            <div class="modal-metric-val">${m.val}</div>
            <div class="modal-metric-label">${m.label}</div>
        </div>
    `).join("");

    const challengeTitle = currentLanguage === "de" ? "Wichtigste technische Herausforderungen & Lösungen:" : "Key Technical Challenges & Solutions:";
    const architectureTitle = currentLanguage === "de" ? "System-Architektur & Datenfluss:" : "System Architecture & Data Flow:";
    const repoTitle = currentLanguage === "de" ? "Quellcode auf GitHub ansehen" : "View Source on GitHub";

    modalBody.innerHTML = `
        <h2 class="modal-title">${data.title}</h2>
        <p class="modal-subtitle">${data.subtitle}</p>

        <h4 class="modal-section-title">${architectureTitle}</h4>
        <div class="modal-flow-box"><pre>${data.flow}</pre></div>

        <h4 class="modal-section-title">${challengeTitle}</h4>
        <ul class="project-bullets" style="margin-bottom: 24px;">
            ${challengesList}
        </ul>

        <div class="modal-metrics-grid">
            ${metricsHtml}
        </div>

        <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border); display: flex; justify-content: flex-end;">
            <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn primary-btn">
                <span>${repoTitle}</span>
                <svg class="btn-arrow" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    `;

    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeArchitectureModal() {
    if (projectModal) {
        projectModal.classList.remove("is-open");
        projectModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
}

modalTriggers.forEach((btn) => {
    btn.addEventListener("click", () => {
        const projectId = btn.dataset.project;
        openArchitectureModal(projectId);
    });
});

if (modalClose) modalClose.addEventListener("click", closeArchitectureModal);

if (projectModal) {
    projectModal.addEventListener("click", (e) => {
        if (e.target === projectModal) {
            closeArchitectureModal();
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal && projectModal.classList.contains("is-open")) {
        closeArchitectureModal();
    }
});


/* =========================================================
   COPY EMAIL TO CLIPBOARD WITH TOAST
========================================================= */

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");
const copyButtons = document.querySelectorAll(".copy-email-btn");

function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const email = btn.dataset.email || "gandupradeep2026@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            const msg = currentLanguage === "de" ? "E-Mail-Adresse in die Zwischenablage kopiert!" : "Email copied to clipboard!";
            showToast(msg);
        }).catch(() => {
            showToast(email);
        });
    });
});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

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


/* =========================================================
   ACTIVE NAV SCROLLSPY
========================================================= */

const sections = document.querySelectorAll("main > section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
            currentSection = sec.getAttribute("id");
        }
    });

    navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }
    });
});


/* =========================================================
   PROFILE PHOTO FALLBACK
========================================================= */

const profilePhoto = document.getElementById("profilePhoto");
const photoFallback = document.getElementById("photoFallback");

if (profilePhoto && photoFallback) {
    profilePhoto.addEventListener("error", () => {
        profilePhoto.style.display = "none";
        photoFallback.style.display = "flex";
    });
}


/* =========================================================
   AUTOMATIC FOOTER YEAR
========================================================= */

const currentYear = document.getElementById("currentYear");
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   INITIALIZATION
========================================================= */

const savedLanguage = localStorage.getItem("portfolioLanguage");
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("de") ? "de" : "en";

setLanguage(savedLanguage || browserLanguage);

console.log("Pradeep Gandu Recruiter-Optimized Portfolio loaded successfully.");
