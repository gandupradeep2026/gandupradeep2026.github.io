/* =========================================================
   BILINGUAL DATA (EN & DE) DERIVED FROM CANDIDATE.MD
========================================================= */

const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.snapshot": "Recruiter Fast-Track",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.contact": "Contact",

        // Hero
        "hero.status": "Available for Master Thesis / Full-Time in Germany",
        "hero.eyebrow": "Hello, I'm",
        "hero.role1": "Cloud Data Engineer",
        "hero.role2": "AI / Machine Learning",
        "hero.role3": "Automotive Software",
        "hero.description": "M.Sc. student at TU Chemnitz architecting event-driven data streaming pipelines, cloud big-data platforms on GCP & AWS, and AI-driven autonomous vehicle diagnostic systems.",
        "hero.projects": "View Projects",
        "hero.cv": "Download CV",
        "hero.snapshotBtn": "⚡ 30s Summary",
        "hero.location": "Chemnitz, Germany",

        // Hero Stats
        "stats.ects": "ECTS · TU Chemnitz",
        "stats.cloud": "Cloud & Dataflow",
        "stats.repos": "Projects with CI/CD",
        "stats.languages": "German C1 · English Fluent",
        "stats.languagesValue": "C1 · Fluent",

        // Recruiter Fast-Track (Snapshot)
        "snapshot.badge": "Recruiter Fast-Track",
        "snapshot.title": "30-Second Candidate Summary",
        "snapshot.subtitle": "Essential facts for tech recruiters, hiring managers, and engineering leads.",
        "snapshot.targetRolesTitle": "Target Roles",
        "snapshot.targetRolesDesc": "Cloud Data Engineer · Data Platform Engineer · AI/ML Engineer · Automotive Software Engineer",
        "snapshot.locationTitle": "Location & Mobility",
        "snapshot.locationDesc": "Chemnitz, Germany · Willing to relocate nationwide (Munich, Stuttgart, Berlin, Frankfurt, etc.) · Hybrid or Remote",
        "snapshot.visaTitle": "Work Authorization & Availability",
        "snapshot.visaDesc": "Legal resident in Germany (§16b AufenthG). Immediately available for Working Student (up to 20h/wk) or Master Thesis. Permanent full-time available from Jan 01, 2027 (immediately upon thesis submission Dec 28, 2026), with immediate dual-track onboarding as working student or project associate. 18-month German Jobseeker Visa (§20 Abs. 3 Nr. 1) & EU Blue Card with NO labor market priority check.",
        "snapshot.langTitle": "Verified Language Proficiencies",
        "snapshot.langDesc": "German: C1 (TU Chemnitz UNIcert III / Niveau C1 passed 31.08.2026; Goethe certified) · English: C1 / Fluent (Professional working proficiency; international master's degree in English) · Hindi: Fluent · Telugu: Native",
        "snapshot.stackTitle": "Core Technology Stack",
        "snapshot.stackDesc": "GCP (BigQuery, Pub/Sub, Dataflow, Dataproc, GCS, IAM), AWS (EC2, S3, RDS), Apache Beam, PySpark, Spark SQL, Python, SQL, CARLA Simulator, Docker, Apache Airflow, Linux/Bash, UDS (ISO 14229), CAN-Bus, CI/CD Actions",
        "snapshot.btnProjects": "Explore Flagship Projects",
        "snapshot.copyEmail": "Copy Email Address",

        // Projects Section
        "projects.label": "PORTFOLIO",
        "projects.title": "Featured Engineering Projects",
        "projects.subtitle": "Verified, production-grade projects across event-driven cloud data pipelines, predictive AI, and autonomous systems.",
        "projects.filterAll": "All Projects (6)",
        "projects.filterCloud": "Cloud & Data Engineering",
        "projects.filterAuto": "Automotive & ADAS",
        "projects.filterAI": "AI & Diagnostics",
        "projects.flagship": "⭐ Flagship",
        "projects.thesis.badge": "🎓 Master Thesis",
        "projects.btnCode": "GitHub Repository",
        "projects.btnArchitecture": "View Architecture 📐",
        "projects.btnThesisDetails": "Explore Thesis Architecture 📐",
        "projects.btnPipelineDetails": "View Pipeline Workflow 📐",
        "projects.btnScenarioDetails": "View Scenario Specs 📐",

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
        "projects.canbus.desc": "Production-quality in-vehicle network simulator implementing CAN DBC messaging, UDS diagnostic protocols (ISO 14229), fault injection, and a real-time Streamlit diagnostic tester.",
        "projects.canbus.b1": "Simulated multi-ECU CAN communication (Engine, Dynamics, Battery) with modulo-16 alive counters and checksum verification.",
        "projects.canbus.b2": "Implemented UDS diagnostic services including Session Control (0x10), Read Data By ID (0x22), and DTC Info (0x19).",
        "projects.canbus.b3": "Engineered automated YAML fault injection for sensor freeze, checksum corruption, and ECU silence scenarios.",
        "projects.canbus.b4": "Tested with Linux SocketCAN & virtual transports; maintained >70% branch coverage with Ruff, Black, and MyPy CI.",

        // Project 4: CARLA Master Thesis Pipeline
        "projects.thesis.title": "Scenario-Centric AD Dataset & Trajectory Pipeline",
        "projects.thesis.desc": "High-fidelity simulation and data pipeline in CARLA generating structured, annotated multi-agent trajectory datasets for environment prediction in automated driving.",
        "projects.thesis.b1": "Generated complex highway lane-change and high-speed merge scenarios using CARLA Scenario Runner.",
        "projects.thesis.b2": "Extracted synchronized ground-truth actor trajectories, velocities, headings, and road topology coordinates.",
        "projects.thesis.b3": "Constructed automated pipeline transforming raw simulation sensor frames into structured JSON and Parquet schemas.",
        "projects.thesis.b4": "Implemented strict temporal continuity and collision-free validation routines for ML training data readiness.",

        // Project 5: Dataproc / PySpark Retail
        "projects.spark.title": "Dataproc & PySpark Retail Data Warehouse",
        "projects.spark.desc": "Distributed big-data pipeline on Google Cloud Dataproc executing PySpark and Spark SQL transformations across high-volume customer, order, and sales datasets.",
        "projects.spark.b1": "Ingested multi-format raw datasets from GCS buckets and distributed HDFS clusters.",
        "projects.spark.b2": "Optimized query performance by converting semi-structured JSON into compressed, partitioned Parquet columnar formats.",
        "projects.spark.b3": "Leveraged Spark DataFrame DSL and Spark SQL for multi-table relational joins, broadcast joins, and regional unions.",
        "projects.spark.b4": "Aggregated executive retail KPIs and customer summary tables with lazy evaluation and memory management.",

        // Project 6: CARLA Autonomous Driving Scenario Development
        "projects.carlaScenarios.title": "CARLA Autonomous Driving Scenario Development",
        "projects.carlaScenarios.desc": "Engineered complex autonomous vehicle control logic and multi-agent simulation scenarios in CARLA including pedestrian detection, traffic-light interaction, and collision avoidance.",
        "projects.carlaScenarios.b1": "Developed multiple autonomous driving scenarios in CARLA: pedestrian crossing, traffic-light detection, and vehicle following.",
        "projects.carlaScenarios.b2": "Implemented dynamic vehicle-control behaviour responding to road users, speed regulations, and emergency braking.",
        "projects.carlaScenarios.b3": "Engineered overtaking, safe lane changing, and multi-bus-stop navigation and stopping sequences.",
        "projects.carlaScenarios.b4": "Calibrated sensor inputs, weather models, and simulation maps for reproducible test scenarios.",

        // About Section
        "about.label": "PROFILE",
        "about.title": "About Me",
        "about.p1": "I am pursuing an M.Sc. in Automotive Software Engineering at Technische Universität Chemnitz (90 / 120 ECTS completed).",
        "about.p2": "My technical engineering focus bridges Cloud Data Platforms, Distributed Big Data (PySpark/Beam), and Automotive Software Systems. I specialize in designing scalable ingestion architectures that convert raw sensor feeds and telemetry into reliable, analytics-ready datasets.",
        "about.p3": "My recent implementations include production-style GCP streaming pipelines (Pub/Sub, Beam, BigQuery, Airflow), CARLA autonomous driving scenario generation, CAN-Bus UDS diagnostic simulators, and explainable AI diagnostic systems audited on real OBD vehicle data.",
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
        "skills.auto.scenario": "Scenario Runner",
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
        "experience.dipp.date": "Jan 2025 - Jul 2025",
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
        "experience.cognizant.date": "Sep 2017 - May 2019",
        "experience.cognizant.b1": "Supported Facebook Marketplace automation through human-in-the-loop ML evaluation, metadata processing, and validation.",
        "experience.cognizant.b2": "Reviewed automated classification outputs, corrected errors, and provided human feedback to train ML algorithms.",
        "experience.cognizant.b3": "Contributed to measurably improving Facebook Marketplace automation accuracy from ~64% to 76%.",
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
        "contact.title": "Ready to Add Value to Your Team",
        "contact.p1": "I am actively seeking Master Thesis, Working Student, or Full-Time opportunities in Cloud Data Engineering, AI/ML, and Automotive Software Engineering across Germany.",
        "contact.email": "Send Email",
        "contact.copy": "Copy Email Address",
        "contact.location": "Chemnitz, Germany (Open to Relocation)",
        "contact.copied": "Email copied to clipboard!",

        // Footer
        "footer.text": "Designed & built for high-performance engineering roles."
    },

    de: {
        // Navigation
        "nav.home": "Startseite",
        "nav.snapshot": "Recruiter Schnellübersicht",
        "nav.projects": "Projekte",
        "nav.skills": "Kenntnisse",
        "nav.experience": "Berufserfahrung",
        "nav.education": "Ausbildung",
        "nav.contact": "Kontakt",

        // Hero
        "hero.status": "Verfügbar für Masterarbeit / Vollzeit in Deutschland",
        "hero.eyebrow": "Hallo, ich bin",
        "hero.role1": "Cloud Data Engineer",
        "hero.role2": "KI / Machine Learning",
        "hero.role3": "Automotive Software",
        "hero.description": "Masterstudent an der TU Chemnitz mit Schwerpunkt auf ereignisgesteuerten Streaming-Pipelines, Cloud-Datenplattformen auf GCP & AWS und KI-gestützten Diagnosesystemen für autonome Fahrzeuge.",
        "hero.projects": "Projekte ansehen",
        "hero.cv": "Lebenslauf herunterladen",
        "hero.snapshotBtn": "⚡ 30s Übersicht",
        "hero.location": "Chemnitz, Deutschland",

        // Hero Stats
        "stats.ects": "ECTS · TU Chemnitz",
        "stats.cloud": "Cloud & Dataflow",
        "stats.repos": "Projekte mit CI/CD",
        "stats.languages": "Deutsch C1 · Englisch Fließend",
        "stats.languagesValue": "C1 · Fließend",

        // Recruiter Fast-Track (Snapshot)
        "snapshot.badge": "Recruiter Schnellübersicht",
        "snapshot.title": "30-Sekunden Kandidaten-Profil",
        "snapshot.subtitle": "Wichtigste Fakten für technische Recruiter, Hiring Manager und Teamleiter.",
        "snapshot.targetRolesTitle": "Zielpositionen",
        "snapshot.targetRolesDesc": "Cloud Data Engineer · Data Platform Engineer · AI/ML Engineer · Automotive Software Engineer",
        "snapshot.locationTitle": "Standort & Mobilität",
        "snapshot.locationDesc": "Chemnitz, Deutschland · Deutschlandweit umzugsbereit (München, Stuttgart, Berlin, Frankfurt usw.) · Hybrid oder Remote",
        "snapshot.visaTitle": "Arbeitserlaubnis & Verfügbarkeit",
        "snapshot.visaDesc": "Rechtmäßiger Aufenthalt in Deutschland (§16b AufenthG). Ab sofort verfügbar als Werkstudent (bis zu 20 Std./Woche) oder für eine Masterarbeit. Vollzeit-Festeinstieg ab dem 01. Januar 2027 (sofort nach Abgabe der Masterarbeit am 28.12.2026), gerne mit sofortigem Dual-Track Einstieg als Werkstudent oder Projektmitarbeiter. 18-monatiger Anspruch auf Arbeitsplatzsuche-Visum (§20 Abs. 3 Nr. 1) & Blaue Karte EU ohne Vorrangprüfung.",
        "snapshot.langTitle": "Verifizierte Sprachkenntnisse",
        "snapshot.langDesc": "Deutsch: C1 (TU Chemnitz UNIcert III / Niveau C1 bestanden am 31.08.2026; Goethe zertifiziert) · Englisch: C1 / Fließend (Verhandlungssicher im Beruf; internationales englischsprachiges Masterstudium) · Hindi: Fließend · Telugu: Muttersprache",
        "snapshot.stackTitle": "Technologie-Kernstack",
        "snapshot.stackDesc": "GCP (BigQuery, Pub/Sub, Dataflow, Dataproc, GCS, IAM), AWS (EC2, S3, RDS), Apache Beam, PySpark, Spark SQL, Python, SQL, CARLA Simulator, Docker, Apache Airflow, Linux/Bash, UDS (ISO 14229), CAN-Bus, CI/CD Actions",
        "snapshot.btnProjects": "Flagship-Projekte ansehen",
        "snapshot.copyEmail": "E-Mail-Adresse kopieren",

        // Projects Section
        "projects.label": "PORTFOLIO",
        "projects.title": "Ausgewählte Engineering-Projekte",
        "projects.subtitle": "Verifizierte Projekte aus den Bereichen ereignisgesteuerte Cloud-Datenpipelines, prädiktive KI und autonome Systeme.",
        "projects.filterAll": "Alle Projekte (6)",
        "projects.filterCloud": "Cloud & Data Engineering",
        "projects.filterAuto": "Automotive & ADAS",
        "projects.filterAI": "KI & Diagnostik",
        "projects.flagship": "⭐ Flagship",
        "projects.thesis.badge": "🎓 Masterarbeit",
        "projects.btnCode": "GitHub Repository",
        "projects.btnArchitecture": "Architektur ansehen 📐",
        "projects.btnThesisDetails": "Masterarbeits-Architektur 📐",
        "projects.btnPipelineDetails": "Pipeline-Workflow ansehen 📐",
        "projects.btnScenarioDetails": "Szenario-Spezifikation 📐",

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
        "projects.canbus.desc": "Hochwertiger Bordnetz-Simulator mit CAN DBC-Nachrichten, UDS-Diagnoseprotokoll (ISO 14229), Fehlerinjektion und Streamlit-Echtzeit-Tester.",
        "projects.canbus.b1": "Simulierte Multi-ECU-CAN-Kommunikation (Motor, Fahrdynamik, Batterie) mit Modulo-16 Alive-Countern und Prüfsummen.",
        "projects.canbus.b2": "Implementierte UDS-Dienste wie Session Control (0x10), Read Data By ID (0x22) und DTC Info (0x19).",
        "projects.canbus.b3": "Entwickelte automatisierte YAML-Fehlerinjektion für Sensor-Freeze, Checksum-Korruption und ECU-Silence.",
        "projects.canbus.b4": "Getestet mit Linux SocketCAN und virtuellen Kanälen; >70% Testabdeckung mit Ruff, Black und MyPy CI.",

        // Project 4: CARLA Master Thesis Pipeline
        "projects.thesis.title": "Szenariozentrierte AD-Datenpipeline & Trajektorien",
        "projects.thesis.desc": "Hochpräzise Simulation und Datenpipeline in CARLA zur Generierung strukturierter, annotierter Multi-Agenten-Trajektoriendatensätze für Environment Prediction im autonomen Fahren.",
        "projects.thesis.b1": "Generierte komplexe Autobahn-Spurwechsel- und Einfädelungsszenarien mit CARLA Scenario Runner.",
        "projects.thesis.b2": "Extrahierte synchronisierte Ground-Truth Trajektorien, Geschwindigkeiten, Gierraten und Straßenkoordinaten.",
        "projects.thesis.b3": "Entwickelte Pipeline zur Transformation roher Simulations-Sensordaten in strukturierte JSON- und Parquet-Dateien.",
        "projects.thesis.b4": "Implementierte zeitliche Kontinuitäts- und Kollisionsprüfungen für ML-Trainingsbereitschaft.",

        // Project 5: Dataproc / PySpark Retail
        "projects.spark.title": "Dataproc & PySpark Retail Data Warehouse",
        "projects.spark.desc": "Verteilte Big-Data-Pipeline auf Google Cloud Dataproc zur Ausführung von PySpark- und Spark SQL-Transformationen auf großen Kunden- und Auftragsdatensätzen.",
        "projects.spark.b1": "Lud multiformatige Rohdaten aus GCS-Buckets und verteilten HDFS-Clustern.",
        "projects.spark.b2": "Optimierte Abfrageleistung durch Konvertierung von JSON in komprimierte, partitionierte Parquet-Dateien.",
        "projects.spark.b3": "Nutzte Spark DataFrame DSL und Spark SQL für relationale Joins, Broadcast-Joins und regionale Unions.",
        "projects.spark.b4": "Erzeugte aggregierte Retail-Kennzahlen und Kundenübersichten mit optimiertem Speichermanagement.",

        // Project 6: CARLA Autonomous Driving Scenario Development
        "projects.carlaScenarios.title": "CARLA Szenariodesign für autonomes Fahren",
        "projects.carlaScenarios.desc": "Entwicklung komplexer Fahrzeugsteuerungslogik und Multi-Agenten-Simulationsszenarien in CARLA inklusive Fußgängererkennung, Ampelsteuerung und Kollisionsvermeidung.",
        "projects.carlaScenarios.b1": "Entwickelte diverse Szenarien in CARLA: Fußgängerüberwege, Ampelerkennung und Fahrzeugfolgeverhalten.",
        "projects.carlaScenarios.b2": "Implementierte dynamisches Steuerungsverhalten in Reaktion auf Verkehrsteilnehmer und Notbremsungen.",
        "projects.carlaScenarios.b3": "Konzipierte Überholmanöver, sichere Spurwechsel und Haltestellen-Navigationsabläufe.",
        "projects.carlaScenarios.b4": "Kalibrierte Sensordaten, Wettermodelle und Simulationskarten für reproduzierbare Testläufe.",

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
        "skills.auto.scenario": "Szenariogenerierung",
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
        "experience.dipp.date": "Jan. 2025 - Jul. 2025",
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
        "experience.cognizant.date": "Sep. 2017 - Mai 2019",
        "experience.cognizant.b1": "Unterstützte die Facebook Marketplace Automatisierung durch Human-in-the-Loop ML-Evaluation und Validierung.",
        "experience.cognizant.b2": "Überprüfte automatische Klassifikationsergebnisse, korrigierte Fehler und lieferte Feedback für Algorithmen.",
        "experience.cognizant.b3": "Trug zur messbaren Steigerung der Facebook Marketplace Automatisierungsgenauigkeit von ~64 % auf 76 % bei.",
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
        "contact.title": "Bereit für Ihr Team",
        "contact.p1": "Ich suche aktiv nach Positionen für Masterarbeit, Werkstudententätigkeit oder Festeinstieg in den Bereichen Cloud Data Engineering, KI/ML und Automotive Software in ganz Deutschland.",
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

    carla: {
        en: {
            title: "Scenario-Centric AD Dataset & Trajectory Pipeline",
            subtitle: "Master Thesis at TU Chemnitz · CARLA 0.9.x · ADAS · OpenDRIVE",
            flow: `[CARLA High-Fidelity Autonomous Driving Simulator]
                                │
                                ▼
         [CARLA Scenario Runner: Highway Merges & Lane Changes]
                                │
                                ▼
         [Sensor Synchronization & Actor Trajectory Extraction Engine]
            ├─ 3D Actor Coordinates (X, Y, Z, Roll, Pitch, Yaw)
            ├─ Dynamic Kinematics (Velocity Vectors, Accelerations)
            └─ Road Network Topology (Lane IDs, OpenDRIVE Geometry)
                                │
                                ▼
         [Temporal Continuity & Quality Verification Layer]
            ├─ Collision-Free Ground Truth Checks
            └─ Frame-by-Frame Continuity Validation
                                │
                                ▼
         [Structured Dataset Output: Partitioned Parquet & JSON]`,
            challenges: [
                "Synchronizing multi-modal simulation sensor data at deterministic fixed timesteps in CARLA.",
                "Extracting 3D trajectory ground-truth from complex highway merge scenarios for environment prediction models.",
                "Enforcing strict data schema validation to eliminate simulation artifacts prior to model training."
            ],
            metrics: [
                { val: "90 / 120", label: "ECTS Completed at TU Chemnitz" },
                { val: "CARLA 0.9.x", label: "Simulation Platform" },
                { val: "Parquet", label: "Columnar Storage Schema" }
            ],
            githubUrl: "https://github.com/gandupradeep2026"
        },
        de: {
            title: "Szenariozentrierte AD-Datenpipeline & Trajektorien",
            subtitle: "Masterarbeit an der TU Chemnitz · CARLA 0.9.x · ADAS · OpenDRIVE",
            flow: `[CARLA Simulator für autonomes Fahren]
                                │
                                ▼
         [CARLA Scenario Runner: Autobahn-Merges & Spurwechsel]
                                │
                                ▼
         [Sensorsynchronisation & Akteur-Trajektorienextraktion]
            ├─ 3D-Koordinaten (X, Y, Z, Roll, Pitch, Yaw)
            ├─ Dynamische Kinematik (Geschwindigkeitsvektoren, Beschleunigung)
            └─ Straßennetzwerktopologie (Spur-IDs, OpenDRIVE-Geometrie)
                                │
                                ▼
         [Validierungsschicht für zeitliche Kontinuität & Qualität]
            ├─ Kollisionsfreie Ground-Truth Prüfungen
            └─ Kontinuitätsprüfung von Frame zu Frame
                                │
                                ▼
         [Strukturierte Datensätze: Partitioniertes Parquet & JSON]`,
            challenges: [
                "Präzise Synchronisation multimodaler Sensordaten bei deterministischer Taktung in CARLA.",
                "Extraktion verlässlicher 3D-Trajektorien aus Autobahn-Einfädelungsszenarien für Vorhersagemodelle.",
                "Automatisierte Validierungsroutinen zur Eliminierung von Simulationsartefakten."
            ],
            metrics: [
                { val: "90 / 120", label: "ECTS an der TU Chemnitz" },
                { val: "CARLA 0.9.x", label: "Simulationsplattform" },
                { val: "Parquet", label: "Spaltenbasiertes Speicherformat" }
            ],
            githubUrl: "https://github.com/gandupradeep2026"
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

    carlaScenarios: {
        en: {
            title: "CARLA Autonomous Driving Scenario Development",
            subtitle: "Python · CARLA Simulator · ADAS Vehicle-Control Logic · Scenario Development",
            flow: `[CARLA Open-Source Autonomous Driving Simulation Environment]
                                │
                                ▼
         [Scenario Configuration & Road Environment Setup]
            ├─ Town Maps, Weather Models & Actor Spawning
            ├─ Pedestrians, Bicycles, Surrounding Vehicles & Buses
            └─ Traffic Signal Systems & Zebra-Crossing Infrastructure
                                │
                                ▼
         [Vehicle Control Logic & Decision-Making Layer]
            ├─ Dynamic Distance Monitoring & Collision Avoidance
            ├─ Controlled Overtaking & Lane-Change Execution
            └─ Bus-Stop Navigation & Precision Parking Manoeuvres
                                │
                                ▼
         [Continuous Evaluation: Telemetry Logs & Performance Metrics]`,
            challenges: [
                "Developing deterministic autonomous vehicle-control behavior in response to unexpected pedestrian crossings and traffic signals.",
                "Implementing multi-agent decision logic for safe overtaking and lane-change maneuvers without simulator collisions.",
                "Calibrating sensor detection parameters across diverse simulated weather and lighting conditions."
            ],
            metrics: [
                { val: "9+ Scenarios", label: "Implemented Driving Scenarios" },
                { val: "CARLA", label: "Simulation Platform" },
                { val: "Python", label: "Vehicle Control Logic" }
            ],
            githubUrl: "https://github.com/gandupradeep2026"
        },
        de: {
            title: "CARLA Szenariodesign für autonomes Fahren",
            subtitle: "Python · CARLA Simulator · ADAS Fahrzeugsteuerungslogik · Szenariodesign",
            flow: `[CARLA Simulationsumgebung für autonomes Fahren]
                                │
                                ▼
         [Szenariokonfiguration & Umgebungsparameter]
            ├─ Karten, Wettermodelle & Akteur-Spawning
            ├─ Fußgänger, Fahrräder, Umgebungsfahrzeuge & Busse
            └─ Ampelsysteme & Zebrastreifen-Infrastruktur
                                │
                                ▼
         [Fahrzeugsteuerungslogik & Entscheidungsschicht]
            ├─ Dynamische Abstandsüberwachung & Kollisionsvermeidung
            ├─ Kontrollierte Überhol- & Spurwechselmanöver
            └─ Haltestellen-Navigation & Einparksequenzen
                                │
                                ▼
         [Evaluation & Logging von Telemetriedaten]`,
            challenges: [
                "Deterministische Fahrzeugreaktionen auf plötzliche Fußgängerquerungen und Ampelschaltungen.",
                "Multi-Agenten-Entscheidungslogik für sichere Überhol- und Spurwechselmanöver ohne Kollisionen.",
                "Feinabstimmung von Sensorerfassungen unter wechselnden Wetter- und Lichtbedingungen."
            ],
            metrics: [
                { val: "9+ Szenarien", label: "Implementierte Szenarien" },
                { val: "CARLA", label: "Simulationsplattform" },
                { val: "Python", label: "Steuerungslogik" }
            ],
            githubUrl: "https://github.com/gandupradeep2026"
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
