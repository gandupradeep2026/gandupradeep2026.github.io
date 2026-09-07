import os
import subprocess
import pypdf

HTML_EN = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pradeep Gandu - Resume</title>
<style>
  @page {
    size: A4 portrait;
    margin: 6.5mm 9mm 6.5mm 9mm;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1a202c;
    background: #ffffff;
    font-size: 8.2pt;
    line-height: 1.30;
  }
  
  /* HEADER */
  .header {
    text-align: center;
    border-bottom: 2px solid #0056b3;
    padding-bottom: 4px;
    margin-bottom: 5px;
  }
  .name {
    font-size: 18pt;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #0f172a;
    text-transform: uppercase;
  }
  .title {
    font-size: 9.8pt;
    font-weight: 700;
    color: #0056b3;
    margin-top: 1px;
    margin-bottom: 2px;
    letter-spacing: 0.02em;
  }
  .contact-bar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 7.7pt;
    color: #334155;
  }
  .contact-bar a {
    color: #0056b3;
    text-decoration: none;
    font-weight: 600;
  }
  .lang-badge {
    font-weight: 700;
    color: #0f172a;
  }
  .sep {
    color: #94a3b8;
    font-weight: bold;
  }

  /* SUMMARY */
  .summary {
    font-size: 7.8pt;
    color: #334155;
    line-height: 1.30;
    margin-bottom: 5px;
    text-align: justify;
  }

  /* SECTION HEADERS */
  .section-title {
    font-size: 8.5pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 1.5px;
    margin-top: 4px;
    margin-bottom: 3.5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .section-title::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 9px;
    background: #0056b3;
    border-radius: 1px;
  }

  /* SKILLS TABLE */
  .skills-table {
    width: 100%;
    margin-bottom: 4px;
    font-size: 7.6pt;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 1px 0;
    vertical-align: top;
  }
  .skill-cat {
    width: 18%;
    font-weight: 700;
    color: #1e293b;
    white-space: nowrap;
  }
  .skill-items {
    width: 82%;
    color: #334155;
  }

  /* PROJECTS */
  .item {
    margin-bottom: 4px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-size: 8.3pt;
    font-weight: 750;
    color: #0f172a;
  }
  .item-title a {
    color: #0f172a;
    text-decoration: none;
  }
  .item-title a:hover {
    color: #0056b3;
  }
  .item-tech {
    font-size: 7.2pt;
    font-weight: 600;
    color: #0284c7;
    margin-left: 3px;
  }
  .item-meta {
    font-size: 7.4pt;
    font-weight: 600;
    color: #64748b;
    white-space: nowrap;
  }
  .bullets {
    padding-left: 11px;
    font-size: 7.6pt;
    color: #334155;
    line-height: 1.25;
  }
  .bullets li {
    margin-bottom: 0.8px;
  }
  .bullets strong {
    color: #0f172a;
  }

  /* TWO COLUMN GRID FOR EXPERIENCE & EDUCATION */
  .grid-2col {
    display: grid;
    grid-template-columns: 58% 40%;
    gap: 10px;
    margin-top: 2px;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">Pradeep Gandu</div>
  <div class="title">Cloud Data Engineer · Automotive Software & AI/ML</div>
  <div class="contact-bar">
    <span>Chemnitz, Germany (Open to Relocation)</span>
    <span class="sep">·</span>
    <span class="lang-badge">German — C1 | English — Fluent</span>
    <span class="sep">·</span>
    <span>+49 176 59677415</span>
    <span class="sep">·</span>
    <span><a href="mailto:gandupradeep2026@gmail.com">gandupradeep2026@gmail.com</a></span>
    <span class="sep">·</span>
    <span><a href="https://linkedin.com/in/pradeep-gandu" target="_blank">LinkedIn</a></span>
    <span class="sep">·</span>
    <span><a href="https://github.com/gandupradeep2026" target="_blank">GitHub</a></span>
    <span class="sep">·</span>
    <span><a href="https://gandupradeep2026.github.io" target="_blank">Portfolio</a></span>
  </div>
</div>

<div class="summary">
  Master's student in Automotive Software Engineering at TU Chemnitz (90/120 ECTS completed) with an engineering focus on cloud data engineering (GCP/AWS), distributed stream processing (Apache Beam, PySpark), and autonomous vehicle systems (CARLA, CAN-Bus UDS). Proven track record developing production-style streaming pipelines, explainable vehicle diagnostics audited on 39k+ real OBD records, and automated CI/CD workflows. Certified German C1 & English Fluent. Eligible for Master Thesis, Working Student, and Full-Time permanent roles in Germany.
</div>

<div class="section-title">Technical Skills</div>
<table class="skills-table">
  <tr>
    <td class="skill-cat">Cloud & Big Data:</td>
    <td class="skill-items"><strong>GCP</strong> (BigQuery, Pub/Sub, Dataflow, Dataproc, Cloud Storage, IAM), <strong>AWS</strong> (EC2, S3, RDS), <strong>Apache Beam</strong>, <strong>PySpark</strong>, Spark SQL, Apache Airflow, HDFS, Parquet.</td>
  </tr>
  <tr>
    <td class="skill-cat">Software & Tools:</td>
    <td class="skill-items"><strong>Python</strong>, <strong>SQL</strong>, FastAPI, Docker, Docker Compose, Pydantic, Streamlit, Linux/Bash, Git/GitHub Actions CI/CD, Pytest, Ruff, MyPy.</td>
  </tr>
  <tr>
    <td class="skill-cat">Automotive & AI:</td>
    <td class="skill-items"><strong>CARLA Simulator</strong>, 3D Trajectories, <strong>CAN-Bus</strong>, <strong>UDS (ISO 14229)</strong>, DBC Networks, SocketCAN, IsolationForest, RAG, Ollama (Qwen3), MCP, YOLOv8.</td>
  </tr>
</table>

<div class="section-title">Selected Technical Projects</div>

<div class="item">
  <div class="item-header">
    <div>
      <span class="item-title"><a href="https://github.com/gandupradeep2026/automotive-telemetry-gcp" target="_blank">Automotive Telemetry Streaming Platform (GCP)</a></span>
      <span class="item-tech">[GCP Pub/Sub, Apache Beam / Dataflow, BigQuery, Airflow, Pytest CI]</span>
    </div>
    <span class="item-meta">2026 · GitHub</span>
  </div>
  <ul class="bullets">
    <li>Architected an event-driven streaming pipeline ingesting CARLA-style telemetry using Pub/Sub attributes and event-time semantics in <strong>Apache Beam</strong>.</li>
    <li>Implemented stateful <code>event_id</code> deduplication, JSON schema validation, and automated Dead-Letter Queue (DLQ) routing for corrupted payloads.</li>
    <li>Engineered partitioned and clustered <strong>BigQuery</strong> tables with mandatory partition filters to optimize analytical performance and cost.</li>
    <li>Orchestrated daily data quality reporting with <strong>Apache Airflow</strong> in Docker Compose with automated verification in GitHub Actions CI.</li>
  </ul>
</div>

<div class="item">
  <div class="item-header">
    <div>
      <span class="item-title"><a href="https://github.com/gandupradeep2026/autosense-ai" target="_blank">AutoSense AI: Predictive Vehicle Diagnostics & Agent</a></span>
      <span class="item-tech">[FastAPI, IsolationForest, RAG, Ollama LLM, MCP, React / Vite]</span>
    </div>
    <span class="item-meta">2026 · GitHub</span>
  </div>
  <ul class="bullets">
    <li>Engineered a pre-fault diagnostic system combining IsolationForest anomaly detection and vehicle baselines to detect degradation before DTCs.</li>
    <li>Audited on <strong>39,779 real OBD records</strong>; developed a 5-of-7 temporal alert stabilization filter reducing nuisance false alarms by <strong>93.44%</strong>.</li>
    <li>Integrated local TF-IDF RAG retrieval for OEM repair procedures and an autonomous agent with MCP tools and deterministic safety gates.</li>
  </ul>
</div>

<div class="item">
  <div class="item-header">
    <div>
      <span class="item-title"><a href="https://github.com/gandupradeep2026/CAN-Bus_diagnostic_and_Health-Monitoring_Simulator_Dashboard" target="_blank">CAN-Bus Diagnostic & Health Simulator</a></span>
      <span class="item-tech">[python-can, UDS (ISO 14229), DBC Network, Streamlit, SocketCAN]</span>
    </div>
    <span class="item-meta">2026 · GitHub</span>
  </div>
  <ul class="bullets">
    <li>Simulated multi-ECU CAN communication (Engine, Dynamics, Battery) using DBC definitions with modulo-16 alive counters and checksum validation.</li>
    <li>Implemented UDS application services (0x10 Session Control, 0x22 Read Data By ID, 0x19 DTC Info) with automated YAML fault injection.</li>
    <li>Maintained <strong>>70% branch test coverage</strong> with strict Ruff, Black, and MyPy quality gates executed in Linux/Windows GitHub Actions CI.</li>
  </ul>
</div>

<div class="item">
  <div class="item-header">
    <div>
      <span class="item-title">Scenario-Centric AD Dataset & Trajectory Pipeline (Master Thesis)</span>
      <span class="item-tech">[CARLA 0.9.x, ADAS, Python, OpenDRIVE, Parquet]</span>
    </div>
    <span class="item-meta">TU Chemnitz · Current</span>
  </div>
  <ul class="bullets">
    <li>Generated highway merge, lane-change, and collision-avoidance scenarios in CARLA, extracting synchronized 3D actor trajectories and road topology.</li>
    <li>Engineered an automated ingestion pipeline structuring raw simulation sensor frames into validated, columnar <strong>Parquet</strong> schemas for ML models.</li>
  </ul>
</div>

<div class="grid-2col">
  <!-- LEFT: PROFESSIONAL EXPERIENCE -->
  <div>
    <div class="section-title">Professional Experience</div>
    
    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Working Student — AI Software Solutions</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">DiPP GmbH</span></div>
        <span class="item-meta">Jan 2025 – Jul 2025<br>Germany</span>
      </div>
      <ul class="bullets">
        <li>Integrated AI & RAG capabilities into CRM with FastAPI, Ollama LLMs, MCP tooling, and IONOS Cloud services.</li>
        <li>Implemented document chunking, embeddings retrieval, and automated technical data workflows.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Translator — German Patent & Technical Data</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">Ascent Staffing (Client: Clarivate Analytics)</span></div>
        <span class="item-meta">Dec 2021 – Jul 2022<br>India</span>
      </div>
      <ul class="bullets">
        <li>Analyzed and translated German patent claims/specifications into English with strict technical terminology validation and QA.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Associate Language Specialist — ML Data</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">GlobalLogic Technologies</span></div>
        <span class="item-meta">Oct 2020 – Dec 2021<br>India</span>
      </div>
      <ul class="bullets">
        <li>Processed German retail datasets for NLP/ML pipelines; performed data annotation, classification, and model evaluation.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Senior Process Executive (Client: Meta / Facebook)</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">Cognizant Technology Solutions</span></div>
        <span class="item-meta">Sep 2017 – May 2019<br>India</span>
      </div>
      <ul class="bullets">
        <li>Automated Marketplace data workflows and human-in-the-loop evaluation; improved accuracy from ~64% to 76%.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Practitioner (Client: Google)</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">Concentrix Daksh Services</span></div>
        <span class="item-meta">Mar 2016 – May 2017<br>India</span>
      </div>
      <ul class="bullets">
        <li>Supported Google Ads automation via quality checks and error analysis; improved results from ~72% to 79%.</li>
      </ul>
    </div>
  </div>

  <!-- RIGHT: EDUCATION -->
  <div>
    <div class="section-title">Education</div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">M.Sc. Automotive Software Engineering</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">TU Chemnitz, Germany</span></div>
        <span class="item-meta">Current<br>90/120 ECTS</span>
      </div>
      <p style="font-size:7.2pt; color:#475569; margin-top:1px;">Thesis: Scenario-Centric Datasets & Trajectories for AD in CARLA.</p>
    </div>

    <div class="item" style="margin-top:3px;">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">M.Tech. Embedded Systems</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">MLR Institute of Technology, India</span></div>
        <span class="item-meta">2017 – 2019<br>First Class (CGPA 7.33)</span>
      </div>
    </div>

    <div class="item" style="margin-top:3px;">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">B.Tech. Electrical & Electronics Eng.</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">JNTU Hyderabad, India</span></div>
        <span class="item-meta">2009 – 2013<br>First Class (62.67%)</span>
      </div>
    </div>

    <div class="section-title" style="margin-top:5px;">Credentials</div>
    <div style="font-size:7.3pt; color:#334155; line-height:1.32;">
      <div>• <strong>Google Cloud Data Engineering Program</strong></div>
      <div>• <strong>Python Essentials 1 & 2</strong> (Cisco / OpenEDG)</div>
      <div>• <strong>SQL Certified</strong> (HackerRank)</div>
    </div>

    <div class="section-title" style="margin-top:5px;">Languages</div>
    <div style="font-size:7.3pt; color:#334155; line-height:1.32;">
      <div>• <strong>German:</strong> C1 (TU Chemnitz UNIcert III / Goethe certified)</div>
      <div>• <strong>English:</strong> C1 / Fluent (Master's conducted in English)</div>
      <div>• <strong>Hindi:</strong> Fluent · <strong>Telugu:</strong> Native</div>
    </div>
  </div>
</div>

</body>
</html>
"""

HTML_DE = """<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>Pradeep Gandu - Lebenslauf</title>
<style>
  @page {
    size: A4 portrait;
    margin: 6.5mm 9mm 6.5mm 9mm;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1a202c;
    background: #ffffff;
    font-size: 8.2pt;
    line-height: 1.30;
  }
  
  /* HEADER */
  .header {
    text-align: center;
    border-bottom: 2px solid #0056b3;
    padding-bottom: 4px;
    margin-bottom: 5px;
  }
  .name {
    font-size: 18pt;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #0f172a;
    text-transform: uppercase;
  }
  .title {
    font-size: 9.8pt;
    font-weight: 700;
    color: #0056b3;
    margin-top: 1px;
    margin-bottom: 2px;
    letter-spacing: 0.02em;
  }
  .contact-bar {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
    font-size: 7.7pt;
    color: #334155;
  }
  .contact-bar a {
    color: #0056b3;
    text-decoration: none;
    font-weight: 600;
  }
  .lang-badge {
    font-weight: 700;
    color: #0f172a;
  }
  .sep {
    color: #94a3b8;
    font-weight: bold;
  }

  /* SUMMARY */
  .summary {
    font-size: 7.8pt;
    color: #334155;
    line-height: 1.30;
    margin-bottom: 5px;
    text-align: justify;
  }

  /* SECTION HEADERS */
  .section-title {
    font-size: 8.5pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 1.5px;
    margin-top: 4px;
    margin-bottom: 3.5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .section-title::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 9px;
    background: #0056b3;
    border-radius: 1px;
  }

  /* SKILLS TABLE */
  .skills-table {
    width: 100%;
    margin-bottom: 4px;
    font-size: 7.6pt;
    border-collapse: collapse;
  }
  .skills-table td {
    padding: 1px 0;
    vertical-align: top;
  }
  .skill-cat {
    width: 20%;
    font-weight: 700;
    color: #1e293b;
    white-space: nowrap;
  }
  .skill-items {
    width: 80%;
    color: #334155;
  }

  /* PROJECTS */
  .item {
    margin-bottom: 4px;
  }
  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1px;
  }
  .item-title {
    font-size: 8.3pt;
    font-weight: 750;
    color: #0f172a;
  }
  .item-title a {
    color: #0f172a;
    text-decoration: none;
  }
  .item-title a:hover {
    color: #0056b3;
  }
  .item-tech {
    font-size: 7.2pt;
    font-weight: 600;
    color: #0284c7;
    margin-left: 3px;
  }
  .item-meta {
    font-size: 7.4pt;
    font-weight: 600;
    color: #64748b;
    white-space: nowrap;
  }
  .bullets {
    padding-left: 11px;
    font-size: 7.6pt;
    color: #334155;
    line-height: 1.25;
  }
  .bullets li {
    margin-bottom: 0.8px;
  }
  .bullets strong {
    color: #0f172a;
  }

  /* TWO COLUMN GRID FOR EXPERIENCE & EDUCATION */
  .grid-2col {
    display: grid;
    grid-template-columns: 58% 40%;
    gap: 10px;
    margin-top: 2px;
  }
</style>
</head>
<body>

<div class="header">
  <div class="name">Pradeep Gandu</div>
  <div class="title">Cloud Data Engineer · Automotive Software & KI/ML</div>
  <div class="contact-bar">
    <span>Chemnitz, Deutschland (umzugsbereit)</span>
    <span class="sep">·</span>
    <span class="lang-badge">Deutsch — C1 | Englisch — Fließend</span>
    <span class="sep">·</span>
    <span>+49 176 59677415</span>
    <span class="sep">·</span>
    <span><a href="mailto:gandupradeep2026@gmail.com">gandupradeep2026@gmail.com</a></span>
    <span class="sep">·</span>
    <span><a href="https://linkedin.com/in/pradeep-gandu" target="_blank">LinkedIn</a></span>
    <span class="sep">·</span>
    <span><a href="https://github.com/gandupradeep2026" target="_blank">GitHub</a></span>
    <span class="sep">·</span>
    <span><a href="https://gandupradeep2026.github.io" target="_blank">Portfolio</a></span>
  </div>
</div>

<div class="summary">
  Masterstudent im Studiengang Automotive Software Engineering an der TU Chemnitz (90/120 ECTS abgeschlossen) mit technischem Schwerpunkt auf Cloud Data Engineering (GCP/AWS), verteilter Datenverarbeitung (Apache Beam, PySpark) und autonomen Fahrsystemen (CARLA, CAN-Bus UDS). Nachgewiesene Praxis bei ereignisgesteuerten Streaming-Pipelines, erklärbarer Fahrzeugdiagnose auf 39k+ realen OBD-Daten und automatisierten CI/CD-Pipelines. Zertifiziertes Deutsch C1 & Englisch Fließend. Berechtigt für Masterarbeit, Werkstudent und Festeinstieg in Deutschland.
</div>

<div class="section-title">Technische Kenntnisse</div>
<table class="skills-table">
  <tr>
    <td class="skill-cat">Cloud & Big Data:</td>
    <td class="skill-items"><strong>GCP</strong> (BigQuery, Pub/Sub, Dataflow, Dataproc, GCS, IAM), <strong>AWS</strong> (EC2, S3, RDS), <strong>Apache Beam</strong>, <strong>PySpark</strong>, Spark SQL, Apache Airflow, HDFS, Parquet.</td>
  </tr>
  <tr>
    <td class="skill-cat">Software & Tools:</td>
    <td class="skill-items"><strong>Python</strong>, <strong>SQL</strong>, FastAPI, Docker, Docker Compose, Pydantic, Streamlit, Linux/Bash, Git/GitHub Actions CI/CD, Pytest, Ruff, MyPy.</td>
  </tr>
  <tr>
    <td class="skill-cat">Automotive & KI:</td>
    <td class="skill-items"><strong>CARLA Simulator</strong>, 3D-Trajektorien, <strong>CAN-Bus</strong>, <strong>UDS (ISO 14229)</strong>, DBC-Netzwerke, SocketCAN, IsolationForest, RAG, Ollama (Qwen3), MCP, YOLOv8.</td>
  </tr>
</table>

<div class="section-title">Ausgewählte Engineering-Projekte</div>

<div class="item">
  <div class="item-header">
    <div>
      <span class="item-title"><a href="https://github.com/gandupradeep2026/automotive-telemetry-gcp" target="_blank">Automotive Telemetrie-Streaming-Plattform (GCP)</a></span>
      <span class="item-tech">[GCP Pub/Sub, Apache Beam / Dataflow, BigQuery, Airflow, Pytest CI]</span>
    </div>
    <span class="item-meta">2026 · GitHub</span>
  </div>
  <ul class="bullets">
    <li>Entwarf eine ereignisgesteuerte Streaming-Pipeline für CARLA-Fahrzeugtelemetrie mit Pub/Sub-Attributen und Event-Time-Semantik in <strong>Apache Beam</strong>.</li>
    <li>Implementierte zustandsbehaftete <code>event_id</code>-Deduplizierung, JSON-Schemavalidierung und automatisierte Dead-Letter-Queue (DLQ).</li>
    <li>Konzipierte partitionierte und geclusterte <strong>BigQuery</strong>-Tabellen mit verpflichtenden Partitionsfiltern zur Abfragekosten-Kontrolle.</li>
    <li>Orchestrierte tägliche Datenqualitäts-DAGs mit <strong>Apache Airflow</strong> in Docker Compose mit automatisierter Verifikation in GitHub Actions CI.</li>
  </ul>
</div>

<div class="item">
  <div class="item-header">
    <div>
      <span class="item-title"><a href="https://github.com/gandupradeep2026/autosense-ai" target="_blank">AutoSense AI: Vorausschauende Fahrzeugdiagnose & Agent</a></span>
      <span class="item-tech">[FastAPI, IsolationForest, RAG, Ollama LLM, MCP, React / Vite]</span>
    </div>
    <span class="item-meta">2026 · GitHub</span>
  </div>
  <ul class="bullets">
    <li>Entwickelte ein Pre-Fault Diagnosesystem mit IsolationForest-Anomalieerkennung zur Erkennung von Bauteildegradation vor DTC-Auslösung.</li>
    <li>Auditiert anhand von <strong>39.779 realen OBD-Datenzeilen</strong>; ein 5-aus-7 zeitlicher Stabilisierungsfilter senkte Fehlalarme um <strong>93,44 %</strong>.</li>
    <li>Integrierte lokales TF-IDF RAG zum Abruf von OEM-Reparaturanleitungen und einen autonomen Agenten mit MCP-Tools und Sicherheits-Gate.</li>
  </ul>
</div>

<div class="item">
  <div class="item-header">
    <div>
      <span class="item-title"><a href="https://github.com/gandupradeep2026/CAN-Bus_diagnostic_and_Health-Monitoring_Simulator_Dashboard" target="_blank">CAN-Bus Diagnose- & Zustands-Simulator</a></span>
      <span class="item-tech">[python-can, UDS (ISO 14229), DBC-Netzwerk, Streamlit, SocketCAN]</span>
    </div>
    <span class="item-meta">2026 · GitHub</span>
  </div>
  <ul class="bullets">
    <li>Simulierte Multi-ECU-CAN-Kommunikation (Motor, Fahrdynamik, Batterie) nach DBC-Definition mit Modulo-16 Zählern und Prüfsummenvalidierung.</li>
    <li>Implementierte UDS-Dienste (0x10 Session Control, 0x22 Read Data By ID, 0x19 DTC Info) mit automatisierter YAML-Fehlerinjektion und Streamlit UI.</li>
    <li>Erzielte <strong>>70 % Branch-Testabdeckung</strong> mit strikten Ruff-, Black- und MyPy-Qualitätsprüfungen in Linux/Windows CI.</li>
  </ul>
</div>

<div class="item">
  <div class="item-header">
    <div>
      <span class="item-title">Szenariozentrierte AD-Datenpipeline & Trajektorien (Masterarbeit)</span>
      <span class="item-tech">[CARLA 0.9.x, ADAS, Python, OpenDRIVE, Parquet]</span>
    </div>
    <span class="item-meta">TU Chemnitz · Aktuell</span>
  </div>
  <ul class="bullets">
    <li>Generierung von Autobahn-Einfädelungs- und Spurwechselszenarien in CARLA, Extraktion synchronisierter 3D-Akteurtrajektorien und Straßenkoordinaten.</li>
    <li>Aufbau einer automatisierten Pipeline zur Strukturierung roher Sensorsimulationsdaten in validierte, spaltenbasierte <strong>Parquet</strong>-Dateien für ML-Modelle.</li>
  </ul>
</div>

<div class="grid-2col">
  <!-- LEFT: BERUFLICHER WERDEGANG -->
  <div>
    <div class="section-title">Beruflicher Werdegang</div>
    
    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Werkstudent — KI-Softwarelösungen</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">DiPP GmbH</span></div>
        <span class="item-meta">Jan. 2025 – Jul. 2025<br>Deutschland</span>
      </div>
      <ul class="bullets">
        <li>Integrierte KI- & RAG-Funktionen in CRM mit FastAPI, Ollama-LLMs, MCP-Tools und IONOS-Cloud-Diensten.</li>
        <li>Implementierte Dokumenten-Chunking, Vektorsuche und automatisierte technische Datenanalysen.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Translator — Deutsche Patent- & Fachdaten</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">Ascent Staffing (Kunde: Clarivate Analytics)</span></div>
        <span class="item-meta">Dez. 2021 – Jul. 2022<br>Indien</span>
      </div>
      <ul class="bullets">
        <li>Analysierte und übersetzte deutsche Patentansprüche ins Englische mit technischer Terminologievalidierung und QA.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Associate Language Specialist — ML-Daten</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">GlobalLogic Technologies</span></div>
        <span class="item-meta">Okt. 2020 – Dez. 2021<br>Indien</span>
      </div>
      <ul class="bullets">
        <li>Verarbeitete deutsche Handelsdaten für NLP/ML-Pipelines; Datenannotation, Klassifikation und Modellevaluation.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Senior Process Executive (Kunde: Meta / Facebook)</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">Cognizant Technology Solutions</span></div>
        <span class="item-meta">Sep. 2017 – Mai 2019<br>Indien</span>
      </div>
      <ul class="bullets">
        <li>Marketplace-Datenworkflows und Human-in-the-Loop-Evaluation; Genauigkeitssteigerung von ~64 % auf 76 %.</li>
      </ul>
    </div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">Practitioner (Kunde: Google)</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">Concentrix Daksh Services</span></div>
        <span class="item-meta">Mär. 2016 – Mai 2017<br>Indien</span>
      </div>
      <ul class="bullets">
        <li>Unterstützte Google Ads-Automatisierung durch Qualitätsprüfungen und Fehleranalysen; Steigerung von ~72 % auf 79 %.</li>
      </ul>
    </div>
  </div>

  <!-- RIGHT: AUSBILDUNG -->
  <div>
    <div class="section-title">Ausbildung</div>

    <div class="item">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">M.Sc. Automotive Software Engineering</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">TU Chemnitz, Deutschland</span></div>
        <span class="item-meta">Aktuell<br>90/120 ECTS</span>
      </div>
      <p style="font-size:7.2pt; color:#475569; margin-top:1px;">Masterarbeit: CARLA-Datenpipeline für Environment Prediction.</p>
    </div>

    <div class="item" style="margin-top:3px;">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">M.Tech. Embedded Systems</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">MLR Institute of Technology, Indien</span></div>
        <span class="item-meta">2017 – 2019<br>First Class (CGPA 7,33)</span>
      </div>
    </div>

    <div class="item" style="margin-top:3px;">
      <div class="item-header">
        <div><strong style="color:#0f172a; font-size:8.0pt;">B.Tech. Electrical & Electronics Eng.</strong><br><span style="color:#0056b3; font-weight:600; font-size:7.4pt;">JNTU Hyderabad, Indien</span></div>
        <span class="item-meta">2009 – 2013<br>First Class (62,67 %)</span>
      </div>
    </div>

    <div class="section-title" style="margin-top:5px;">Zertifikate</div>
    <div style="font-size:7.3pt; color:#334155; line-height:1.32;">
      <div>• <strong>Google Cloud Data Engineering Program</strong></div>
      <div>• <strong>Python Essentials 1 & 2</strong> (Cisco / OpenEDG)</div>
      <div>• <strong>SQL Certified</strong> (HackerRank)</div>
    </div>

    <div class="section-title" style="margin-top:5px;">Sprachkenntnisse</div>
    <div style="font-size:7.3pt; color:#334155; line-height:1.32;">
      <div>• <strong>Deutsch:</strong> C1 (TU Chemnitz UNIcert III / Goethe-Zertifikat)</div>
      <div>• <strong>Englisch:</strong> C1 / Fließend (Masterstudium auf Englisch)</div>
      <div>• <strong>Hindi:</strong> Fließend · <strong>Telugu:</strong> Muttersprache</div>
    </div>
  </div>
</div>

</body>
</html>
"""

def generate_pdf(html_content, output_html, output_pdf):
    with open(output_html, "w", encoding="utf-8") as f:
        f.write(html_content)
    
    edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    cmd = [
        edge_path,
        "--headless",
        "--disable-gpu",
        "--run-all-compositor-stages-before-draw",
        "--no-pdf-header-footer",
        f"--print-to-pdf={os.path.abspath(output_pdf)}",
        f"file:///{os.path.abspath(output_html).replace(os.sep, '/')}"
    ]
    subprocess.run(cmd, check=True)
    
    reader = pypdf.PdfReader(output_pdf)
    num_pages = len(reader.pages)
    print(f"{output_pdf}: {num_pages} page(s)")
    return num_pages

if __name__ == "__main__":
    os.makedirs("assets", exist_ok=True)
    p_en = generate_pdf(HTML_EN, "cv_en.html", "assets/Pradeep_Gandu_CV_EN.pdf")
    p_de = generate_pdf(HTML_DE, "cv_de.html", "assets/Pradeep_Gandu_CV_DE.pdf")
    print("SUCCESS: 1-Page CVs Generated -> EN:", p_en, "DE:", p_de)
