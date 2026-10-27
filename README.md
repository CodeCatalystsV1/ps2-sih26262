# AIClear — Approval Intelligence
### Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System

[![Smart India Hackathon 2026](https://img.shields.io/badge/SIH-2026-orange.svg)](https://www.sih.gov.in/)
[![Problem Statement](https://img.shields.io/badge/Problem%20Statement-SIH26262-blue.svg)](https://www.sih.gov.in/)
[![Theme](https://img.shields.io/badge/Theme-Smart%20Automation%20%2F%20e--Governance-green.svg)](https://www.sih.gov.in/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-6.19.3-indigo.svg)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Audit Chain](https://img.shields.io/badge/Audit%20Ledger-SHA--256%20Chained-red.svg)](https://nodejs.org/api/crypto.html)

---

## 1. Project Overview & Executive Summary

**AIClear (Approval Intelligence)** is an enterprise-grade digital governance and workflow orchestration platform architected specifically for the **All India Council for Technical Education (AICTE)**, Ministry of Education, Government of India. Developed for **Smart India Hackathon 2026 (Problem Statement SIH26262)**, AIClear modernizes and automates the multi-tiered institutional approval lifecycle, continuous compliance monitoring, and time-bound alert management across technical education institutions nationwide.

The platform codifies the statutory guidelines of the **AICTE Approval Process Handbook (APH)** into a deterministic, high-throughput digital pipeline. It transforms traditional, manual administrative handoffs into an intelligent, transparent, and auditable governance system that guarantees statutory compliance while accelerating institutional approvals.

### Executive Highlights
- **Multi-Route Deterministic State Machine:** Automatically routes institutional applications across 5 distinct statutory pathways (`ONLY_SCRUTINY`, `SCRUTINY_EVC`, `EVC_SAC_SHC`, `ONLY_EVC`, and `SCRUTINY_EVC_SAC_SHC`) governed by strict ACID transactional boundaries.
- **Generic Deadline & SLA Escalation Engine:** A unified producer-consumer engine (`DeadlineItem` + `tick()`) that evaluates stage timelines, inspection schedules, conditional undertakings, and statutory document renewals with multi-tier hierarchical escalations (L1 Regional Officer &rarr; L2 Bureau Officer &rarr; L3 AICTE Headquarters).
- **Dual-Clock Administrative Transparency:** Distinctly tracks and separates **Council Officer Processing Time** from **Institution Deficiency Rectification Time**, pinpointing operational bottlenecks and eliminating ambiguous delays.
- **Explainable Compliance Health Score (0–100):** Real-time composite scoring evaluating quantitative faculty-to-student ratios (FSR), cadre ratios, standard intake divisions, infrastructure readiness, and active undertaking compliances.
- **Cryptographic SHA-256 Audit Ledger:** Every state transition, document submission, deficiency return, and inspection remark is chained using cryptographic SHA-256 hashes (`H_n = SHA256(H_{n-1} + Payload)`), providing tamper-evident auditability and tribunal-grade legal defensibility.
- **Human-in-the-Loop Sovereign Governance:** Rigorous regulatory safeguard ensuring no application is ever autonomously approved or rejected by automated logic; applications halt at `DECISION_PENDING` where only an authorized Bureau Officer can execute the final statutory decision with mandatory written remarks.

---

## 2. Problem Statement & Objectives

### Problem Context: SIH26262
AICTE is charged with regulating, planning, and ensuring coordinated development of technical and management education throughout India. Managing approvals for thousands of technical institutes offering Engineering, Technology, Architecture, Pharmacy, Management, and Applied Arts requires handling high-volume statutory filings within strict academic calendar windows.

The prevailing operational workflow faces critical structural challenges:
1. **Manual File Routing & Process Opacity:** Applications traverse physical desks or disparate email channels between Scrutiny Committees, Expert Visit Committees (EVC), and Standing Advisory/Hearing Committees (SAC/SHC), creating administrative delays without centralized tracking.
2. **Reactive Compliance & Mid-Session Violations:** Critical statutory compliances—such as registered land lease deeds (30-year / 99-year validity), Fire Safety NOCs, Building Stability Certificates, and conditional approval undertakings—are audited only at submission. Expirations occurring mid-session frequently go undetected.
3. **Diffused Accountability & Ambiguous Timelines:** When an application is delayed, it is historically difficult to isolate whether the delay stemmed from administrative backlogs in Regional Offices (RO) or institutional delay in addressing deficiencies.
4. **Ad-Hoc Inspection Evidence & Integrity Risks:** EVC inspections require rigid evidence integrity, conflict-of-interest prevention, and tamper-resistant documentation to withstand judicial review.
5. **Rigid Regulatory Configurations:** Academic calendars and APH guidelines evolve annually. Hard-coded approval rules require code re-deployments, risking inconsistencies across administrative regions.

### Objectives of AIClear
- **Automate Multi-Route Approval Lifecycles:** Map every institution application type to its statutory APH path, enforcing zero-skip sequential stage gates.
- **Establish Proactive Surveillance:** Continuously monitor year-round document validities and conditional undertakings via automated T-minus proactive alerts (-90, -60, -30, -7, -3, -1, 0 days).
- **Enforce Operational Accountability:** Institutionalize dual-clock accountability to measure officer pendency versus institution deficiency response time.
- **Ensure Cryptographic Defensibility:** Guarantee that every administrative action, uploaded document, and inspection remark is permanently verifiable via an immutable SHA-256 hash ledger.
- **Equip Decision-Makers with Explainable Intelligence:** Provide assistive compliance cards, APH ratio analyzers, and composite health scores without compromising human regulatory sovereignty.

---

## 3. Proposed Solution

AIClear solves these challenges through a modular, high-reliability architecture:

```
+----------------------------------------------------------------------------------------------------+
|                                    A I C l e a r   P L A T F O R M                                 |
+----------------------------------------------------------------------------------------------------+
|                                                                                                    |
|  [ Institutional Intake & Portal ]                                                                 |
|   - Multi-program application filing (New, EoA, Intake, Closure)                                  |
|   - Structured data ingestion (Cadre, Faculty, Built-up area, Infrastructure)                     |
|   - Real-time deficiency response workspace with mandatory justification                          |
|                                                                                                    |
|  [ Intelligent Approval State Machine ]                                                            |
|   - 5 Statutory APH Processing Routes                                                              |
|   - Dynamic route escalation (e.g., Scrutiny -> SAC/SHC referral)                                  |
|   - Terminal human decision gate (DECISION_PENDING -> DECIDED)                                     |
|                                                                                                    |
|  [ Generic Deadline & SLA Engine ]                                                                 |
|   - Single polymorphic DeadlineItem entity for all time-bound actions                              |
|   - Unified tick(now) evaluator for stage SLAs, EVC visits, undertakings, and NOCs                 |
|   - Multi-tier escalation manager (L1 -> L2 -> L3) with automated role alerts                      |
|                                                                                                    |
|  [ Assistive AI & APH Norms Engine ]                                                               |
|   - Faculty:Student ratio check (1:20 norm) with ceiling rounding                                  |
|   - Cadre composition balance (1 Professor : 2 Associate : 6 Assistant)                           |
|   - Approved intake standard division validation (multiples of 30 / 60)                            |
|   - AI Document Intelligence Pipeline (OCR, NER, Evidence-linking, Human Review)                   |
|                                                                                                    |
|  [ EVC Inspection & Evidence Management ]                                                          |
|   - Conflict-cleared committee allocation & schedule tracking                                      |
|   - Geo-referenced photo/video evidence repository                                                 |
|   - Standardized inspection rubric scoring and deficiency documentation                            |
|                                                                                                    |
|  [ Continuous Year-Round Compliance Surveillance ]                                                 |
|   - Proactive lease deed & safety NOC expiry tracking                                              |
|   - Conditional approval undertaking milestone enforcement                                         |
|   - Dynamic Institution Compliance Health Score (0-100)                                            |
|                                                                                                    |
|  [ Cryptographic Integrity & Security ]                                                            |
|   - SHA-256 hash-chained append-only audit ledger                                                  |
|   - Real-time cryptographic chain integrity verification & tamper simulation                       |
|   - Strict Role-Based Access Control (RBAC) across 6 administrative tiers                          |
|                                                                                                    |
+----------------------------------------------------------------------------------------------------+
```

---

## 4. Key Features & Differentiators

| Feature | Conventional AICTE Approval Methods | AIClear Platform Innovation |
|---|---|---|
| **Workflow Routing** | Manual file transfers, unstandardized stage progressions across regional offices. | Automated multi-route state machine enforcing 5 statutory APH routes with atomic ACID stage transitions. |
| **SLA Tracking & Escalations** | Fragmented offline calendars; delays identified reactively after deadlines elapse. | Generic `DeadlineItem` engine running unified `tick()` evaluation with proactive T-minus reminders and automated L1/L2/L3 escalations. |
| **Delay Attribution** | Total elapsed days recorded as a single opaque figure; disputes over who caused the delay. | **Dual-Clock Accountability:** Separates Council Officer review time from Institution deficiency response time. |
| **Document Surveillance** | Validations conducted only during annual approval windows; mid-session expirations unnoticed. | Year-round automated surveillance tracking lease deed, Fire NOC, and Building Stability expirations with automated alerts. |
| **Compliance Verification** | Manual calculator checks of faculty, cadre, and intake numbers by individual officers. | **Assistive APH Compliance Engine:** Real-time computation of FSR (1:20), cadre proportions (1:2:6), and standard division multiples. |
| **Inspection Management** | Paper-based inspection sheets, physical photo albums, manual report handoffs. | Digital EVC workspace with inspection scheduling, rubric observations, evidence uploads, and post-visit review workflows. |
| **Audit & Legal Integrity** | Relational database logs vulnerable to retroactive modification or administrative tampering. | **Cryptographic SHA-256 Hash Chained Ledger:** Tamper-evident hash chain guaranteeing legal defensibility in tribunal disputes. |
| **Human-in-the-Loop Sovereign Gate** | Risk of opaque automated approvals or arbitrary rejections without documented rationale. | Mandatory stop at `DECISION_PENDING`; only an authorized Bureau Officer can execute `DECIDED` with mandatory written remarks (&ge;10 chars). |

---

## 5. Stakeholders & Role-Based Access Control (RBAC)

AIClear enforces strict separation of concerns across 6 distinct organizational roles:

```
                                  +----------------------+
                                  |    SYSTEM_ADMIN      |
                                  +----------+-----------+
                                             |
                         +-------------------+-------------------+
                         |                                       |
              +----------v-----------+               +-----------v----------+
              |    BUREAU_OFFICER    |               |   SAC_SHC_MEMBER     |
              +----------+-----------+               +----------------------+
                         |
              +----------v-----------+
              |   REGIONAL_OFFICER   |
              +----+------------+----+
                   |            |
      +------------v---+    +---v------------------+
      | EVC_COMMITTEE  |    |     INSTITUTION      |
      +----------------+    +----------------------+
```

### RBAC Responsibility Matrix

| Role | Operational Scope | Permissions & Capabilities | Key Restrictions |
|---|---|---|---|
| `SYSTEM_ADMIN` | National | Platform configuration, simulated system clock control, APH regulatory rules editor, user directory, audit chain verification and tamper testing. | Cannot approve or reject institutional applications. |
| `BUREAU_OFFICER` | Apex / All Regions | High-level national surveillance, L2/L3 escalation resolution, SAC/SHC committee referral, and **sole statutory authority to execute final decisions** (`DECIDED`). | Cannot conduct initial scrutiny or submit EVC reports directly. |
| `REGIONAL_OFFICER` | Regional Jurisdiction | Application scrutiny, returning applications for deficiency correction with mandatory remarks, scheduling EVC visits, reviewing EVC reports, verifying undertaking proofs, and approving document renewals. | Cannot grant final statutory approval; restricted to assigned geographic region. |
| `EVC_COMMITTEE` | Inspection Specific | Conducting on-site/virtual inspections, evaluating campus infrastructure against rubrics, uploading evidence, and submitting structured inspection reports. | Read-only access to general applications; cannot alter approval routes or make final statutory determinations. |
| `SAC_SHC_MEMBER` | Quasi-Judicial / Appellate | Reviewing referred and disputed applications, conducting appellate hearings, evaluating institutional appeals, and recording committee recommendations. | Operates only on applications routed to the `SAC_SHC` stage; cannot bypass scrutiny or EVC stages. |
| `INSTITUTION` | Institutional Entity | Submitting approval applications, reviewing deficiency observations, uploading compliance evidence, responding to queries, submitting conditional undertakings, and tracking live status. | Strictly isolated to own institution's data; cannot access internal council remarks or other institutions' records. |

---

## 6. Complete System Architecture

AIClear is structured as a resilient, multi-tiered architecture designed for strict transactional consistency, high availability, and separation of regulatory concerns.

```mermaid
graph TB
    subgraph Presentation_Layer["Presentation Layer (Client & UI Shell)"]
        UI_Login["Persona & Auth Gate<br/>(BrandPanel & LoginForm)"]
        UI_Dash["Role Dashboards<br/>(Admin, RO, Bureau, Inst, EVC, SAC)"]
        UI_Apps["Application Center<br/>(Stepper, Norms Card, Dual-Clock)"]
        UI_Surveillance["Compliance & Documents<br/>(Lease & NOC Tracker, Undertakings)"]
        UI_Audit["Cryptographic Audit Viewer<br/>(Hash Ledger & Tamper Demo)"]
        UI_Engine["Engine Controller<br/>(Time Travel & SLA Tick Monitor)"]
    end

    subgraph API_Layer["Application & Middleware Layer (Next.js 16 App Router)"]
        MW_Auth["Authentication & RBAC Middleware<br/>(requireRole, canActOnApplication)"]
        API_App["/api/applications/*<br/>(Create, Advance, Return, Decide)"]
        API_Doc["/api/documents/* & /api/undertakings/*<br/>(Upload, Verify, Track)"]
        API_Evc["/api/evc/*<br/>(Schedule, Submit Report)"]
        API_Engine["/api/engine/tick<br/>(Unified SLA & Escalation Evaluator)"]
        API_Audit["/api/audit/verify<br/>(Cryptographic Chain Verifier)"]
    end

    subgraph Domain_Core["Domain Logic & Processing Engines"]
        SM["Workflow State Machine<br/>(routes.ts, workflow.ts)<br/>5 APH Routes & Transition Guards"]
        DE["Generic Deadline Engine<br/>(tick.ts)<br/>SLA Rules, Reminders, Escalations"]
        APH_Engine["APH Assistive Norms Engine<br/>(aph.ts)<br/>FSR 1:20, Cadre 1:2:6, Div Multiples"]
        DC_Engine["Dual-Clock Engine<br/>(dualClock.ts)<br/>Officer vs Institution Time Accounting"]
        Notify_Engine["Notification Dispatcher<br/>(notify.ts)<br/>In-App, Ethereal, SMTP/Resend, SMS Gateway"]
        Audit_Ledger["Audit Engine<br/>(audit.ts)<br/>SHA-256 Chained Append-Only Ledger"]
    end

    subgraph AI_Intelligence_Subsystem["AI Document Intelligence Subsystem (Target Architecture)"]
        DOC_Ingest["Document Ingestion<br/>(PDF/TIFF Parser & Sanitizer)"]
        OCR_Engine["Dual-Path OCR Engine<br/>(Digital PDF Parser + Tesseract OCR)"]
        NER_Model["Regulatory NER & Field Extractor<br/>(Survey No, Acreage, Expiry Dates, Stability Load)"]
        Rule_Validator["APH Rule Cross-Referencing<br/>(Extracted Values vs Statutory Minimums)"]
        Evidence_Link["Evidence-Linked Finding Engine<br/>(Bounding Box Coordinates & Highlight Overlays)"]
    end

    subgraph Persistence_Layer["Data & Storage Layer"]
        DB[(Relational DB / SQLite & Prisma ORM)<br/>Applications, Stages, Observations, Deadlines, Rules]
        Audit_Store[(Immutable Hash Chain Storage)<br/>Cryptographic Block Sequence]
        File_Storage[(Document & Evidence Repository)<br/>Local Storage / Production S3 Bucket]
    end

    %% Wiring
    Presentation_Layer --> API_Layer
    API_Layer --> MW_Auth
    MW_Auth --> Domain_Core
    MW_Auth --> AI_Intelligence_Subsystem
    
    Domain_Core --> DB
    Domain_Core --> Audit_Store
    Domain_Core --> Notify_Engine
    AI_Intelligence_Subsystem --> File_Storage
    AI_Intelligence_Subsystem --> APH_Engine
    Audit_Ledger --> Audit_Store
```

### Architectural Component Responsibilities
1. **Presentation Layer:** Built with Next.js 16 App Router and Tailwind CSS v4, providing responsive, persona-tailored interfaces. Employs micro-animations, SLA status chips, dual-clock visualizations, and real-time Recharts dashboards.
2. **Middleware & Security Boundary:** Server-side authentication (`src/lib/auth.ts`) validates session tokens, enforces institutional data isolation, and guarantees that only authorized roles execute state-altering endpoints.
3. **Workflow State Machine:** Encapsulates the 5 statutory APH routes. Uses atomic database transactions (`prisma.$transaction`) to transition stages, create deficiency observations, update dual-clock timestamps, and record audit entries simultaneously.
4. **Generic Deadline & SLA Engine:** Runs on a producer-consumer architecture. Entities generating deadlines write to `DeadlineItem`; the `tick(now)` evaluator scans active deadlines, emits T-minus notifications, and handles multi-tier escalations.
5. **Cryptographic Audit Ledger:** Computes SHA-256 digests over prior hashes, actor IDs, actions, and JSON payloads. Any alteration to historical database records breaks hash continuity and is detected immediately by the verification algorithm.

---

## 7. End-to-End Application Workflow

The application workflow guarantees zero-skip compliance with AICTE's Approval Process Handbook.

```mermaid
sequenceDiagram
    autonumber
    actor Inst as Institution
    actor RO as Regional Officer
    actor EVC as EVC Committee
    actor SAC as SAC/SHC Member
    actor BO as Bureau Officer
    participant Engine as Generic Deadline Engine
    participant Ledger as SHA-256 Audit Ledger

    Note over Inst, BO: Phase 1: Intake & Initial Routing
    Inst->>RO: Submit Application (New / Extension / Intake Increase)
    Note right of Inst: Auto-assigned to 1 of 5 APH Routes<br/>(e.g., SCRUTINY_EVC_SAC_SHC)
    RO->>Ledger: Log Stage: SCRUTINY (SHA-256 Block n)
    Engine->>Engine: Spawn DeadlineItem (15-Day Scrutiny SLA)

    Note over Inst, RO: Phase 2: Scrutiny & Deficiency Handling
    alt Scrutiny Deficiencies Identified
        RO->>Inst: Return Application (Mandatory Deficiencies >= 10 chars)
        RO->>Ledger: Log Deficiencies & Transition to RETURNED
        Note over Inst: Dual-Clock: Institution Clock Starts Ticking
        Engine->>Engine: Spawn DeadlineItem (7-Day Institution Response Window)
        Inst->>RO: Submit Deficiency Clarifications & Re-Uploads
        Note over RO: Dual-Clock: Officer Clock Resumes (RE_SCRUTINY, 7 Days)
    else Compliant Application
        RO->>RO: Approve Scrutiny Checklist
    end

    Note over RO, EVC: Phase 3: EVC Scheduling & Campus Verification
    RO->>RO: Move to EVC_QUEUE (5-Day Scheduling SLA)
    RO->>EVC: Schedule Inspection & Assign Independent Experts
    Engine->>Engine: Spawn DeadlineItem (20-Day Inspection Window)
    EVC->>EVC: Conduct On-Site/Virtual Campus Verification
    EVC->>RO: Upload Geotagged Photos & Submit Inspection Report
    RO->>RO: Review EVC Report (7-Day Review SLA)

    Note over RO, SAC: Phase 4: Standing Appellate Review (If Required)
    opt Complex / Disputed / New Institution Cases
        RO->>SAC: Advance to SAC_SHC Stage (10-Day SLA)
        SAC->>SAC: Conduct Quasi-Judicial Hearing & Record Minutes
    end

    Note over BO, Ledger: Phase 5: Sovereign Statutory Decision
    RO->>BO: Advance Application to DECISION_PENDING
    Note over BO: Terminal Sovereign Gate: System Halts Automation
    BO->>BO: Review Full Audit Dossier & APH Health Score
    BO->>Inst: Execute Final Statutory Decision (DECIDED: Approved / Rejected)
    BO->>Ledger: Append Final Decision Block (SHA-256 Block n+x)
    Engine->>Engine: Close Active Deadlines & Emit Final Multi-Channel Alert

    Note over Inst, Engine: Phase 6: Continuous Year-Round Compliance
    Engine->>Engine: Ongoing Surveillance of Lease Deeds, NOCs & Undertakings
    opt Expiration within 30 Days (T-30)
        Engine->>Inst: Dispatch Proactive Expiration Warning (Email/SMS/In-App)
        Engine->>RO: Alert Regional Officer of Impending Non-Compliance
    end
```

---

## 8. AI Document Intelligence Pipeline

The proposed AI Document Intelligence Pipeline automates the analysis of complex, multi-page regulatory filings (Registered Lease Deeds, Land Use Certificates, PWD Building Stability Certificates, Fire Safety NOCs, and Affiliation Documents), transforming unstructured PDFs into structured, evidence-linked compliance metrics.

```mermaid
flowchart TD
    subgraph Ingestion["1. Secure Ingestion & Preprocessing"]
        Doc_Upload["Institutional Document Upload<br/>(PDF, TIFF, JPEG)"]
        Sanitize["MIME & Magic Byte Validation<br/>Antivirus & File Integrity Check"]
        Doc_Upload --> Sanitize
    end

    subgraph Dual_Extraction["2. Dual-Path Text & Vision Extraction"]
        Type_Check{"Document Type?"}
        Sanitize --> Type_Check
        Type_Check -->|"Digital PDF"| Native_Parser["Native PDF Text Stream Parser<br/>(pdf-parse / PDF.js)"]
        Type_Check -->|"Scanned / Image PDF"| Preproc["Image Binarization, Deskew<br/>& Noise Reduction"]
        Preproc --> OCR["OCR Vision Engine<br/>(Tesseract.js / AWS Textract)"]
    end

    subgraph NER_Validation["3. Regulatory NER & Cross-Referencing Engine"]
        Tokenize["Text Chunking & Layout Tokenization"]
        Native_Parser --> Tokenize
        OCR --> Tokenize
        NER_Model["Domain-Specific NER & Key-Value Extraction<br/>(Survey Nos, Acreage, Expiry Dates, Stability Loads)"]
        Tokenize --> NER_Model
        APH_Rules["APH Statutory Rules Knowledge Base<br/>(Min Land by Category, Validity Spans)"]
        NER_Model --> Cross_Ref["Automated Compliance Cross-Referencing"]
        APH_Rules --> Cross_Ref
    end

    subgraph Evidence_Linking["4. Evidence Linking & Verification Overlay"]
        Coord_Mapper["Bounding Box Coordinate Mapper<br/>(Page, x, y, width, height)"]
        Cross_Ref --> Coord_Mapper
        Confidence{"Confidence >= 85%?"}
        Coord_Mapper --> Confidence
        Confidence -->|"Yes"| Auto_Flag["Pass Assistive Verification Card"]
        Confidence -->|"No / Mismatch"| Discrepancy["Generate Highlighted Discrepancy Observation"]
    end

    subgraph Human_Review["5. Human-in-the-Loop Officer Interface & Audit"]
        Side_By_Side["Side-by-Side Review Workspace<br/>(Document Preview + Extracted Values)"]
        Auto_Flag --> Side_By_Side
        Discrepancy --> Side_By_Side
        Officer_Action["Officer Decision<br/>(Accept / Modify / Reject Extraction)"]
        Side_By_Side --> Officer_Action
        Audit_Log["Append Cryptographic Finding<br/>to SHA-256 Audit Ledger"]
        Officer_Action --> Audit_Log
    end
```

### Technical Processing Stages

#### 1. Ingestion & Preprocessing
Uploaded documents undergo rigorous MIME verification, magic byte validation, and SHA-256 checksum calculation. Scanned documents pass through an OpenCV-based preprocessing pipeline that applies adaptive binarization, deskewing (Hough transform), and background noise reduction to optimize character recognition.

#### 2. Dual-Path Text & Vision Extraction
- **Path A (Digital Born PDFs):** Extracts embedded text layers, font hierarchies, and vector coordinate tables directly via native parsing, avoiding OCR overhead.
- **Path B (Scanned Land Deeds & NOCs):** High-resolution OCR processing leveraging layout-aware optical character recognition to extract multi-column legal text, official stamps, and tabular data.

#### 3. Domain-Specific Regulatory NER
The natural language extraction engine targets critical statutory entities:
- **Land Deeds:** Survey numbers, village/taluka names, total plot area in acres/hectares, lease start date, lease end date (flagging leases < 30 years), and lessor/lessee identity verification.
- **Fire & Safety NOCs:** Issuing authority (e.g., State Fire Service), certificate reference number, validity duration, building height restrictions, and fire hydrant operational clearances.
- **Building Stability Certificates:** Registered Structural Engineer licence number, live load capacity ($kN/m^2$), earthquake resistance zone classification, and building occupancy certification.

#### 4. Evidence-Linked Findings & Coordinate Mapping
Extracted entities are not treated as isolated text strings; each entity retains its exact visual coordinates (`pageNumber`, `boundingBox: { x, y, width, height }`). When an observation is generated (e.g., *"Lease validity is 22 years, below statutory requirement of 30 years"*), clicking the finding in the Scrutiny Workspace immediately renders the PDF with the relevant clause highlighted.

#### 5. Human-in-the-Loop Sovereign Review
The system generates **assistive findings only**. Extracted values are presented alongside confidence scores in a split-screen viewer. The Regional Officer can accept, adjust, or invalidate any finding before formal deficiency issuance.

---

## 9. Regulatory Rules Engine (Versioning & Effective Dates)

The AIClear Regulatory Rules Engine enforces strict separation between statutory norms and operational SLAs, allowing runtime reconfiguration without code alterations.

### Regulatory Norms vs. Operational SLAs

```
                                  +------------------------------------+
                                  |     AIClear Regulatory Engine      |
                                  +-----------------+------------------+
                                                    |
                         +--------------------------+--------------------------+
                         |                                                     |
            +------------v------------+                           +------------v------------+
            |  Statutory APH Norms    |                           |     Operational SLAs    |
            | (Quantitative Criteria) |                           |  (Academic Calendars)   |
            +------------+------------+                           +------------+------------+
                         |                                                     |
            - Faculty:Student (>= 1:20)                           - Scrutiny SLA: 15 Days
            - Cadre Ratio (1:2:6)                                 - Re-Scrutiny SLA: 7 Days
            - Intake Divisions (30/60 multiples)                  - EVC Scheduled SLA: 20 Days
            - Lab Built-up Area Heuristics                        - Response Window: 7 Days
                         |                                                     |
                         +--------------------------+--------------------------+
                                                    |
                                      +-------------v-------------+
                                      | Database-Backed Config    |
                                      | (RuleConfig Table)        |
                                      | Versioned by Academic Yr  |
                                      +---------------------------+
```

### Implemented Rule Configurations (`RuleConfig`)
Defaults seeded in `src/config/rules.ts` are dynamically loaded from the database at runtime:

```typescript
export const ALERT_RULES = {
  STAGE_TIMELINE: {
    reminders: [-3, -1, 0], // Days before deadline
    overdueEveryDays: 2,     // Post-deadline reminder frequency
    escalate: [
      { afterOverdueDays: 1, level: 1 },  // Escalates to Regional Officer (L1)
      { afterOverdueDays: 5, level: 2 },  // Escalates to Bureau Officer (L2)
      { afterOverdueDays: 10, level: 3 }  // Escalates to Member Secretary / HQ (L3)
    ]
  },
  EVC_SCHEDULING: {
    reminders: [-2, 0],
    overdueEveryDays: 2,
    escalate: [
      { afterOverdueDays: 1, level: 1 },
      { afterOverdueDays: 4, level: 2 }
    ]
  },
  UNDERTAKING: {
    reminders: [-30, -15, -7, -1, 0],
    overdueEveryDays: 7,
    escalate: [
      { afterOverdueDays: 1, level: 1 },
      { afterOverdueDays: 15, level: 2 },
      { afterOverdueDays: 30, level: 3 }
    ]
  },
  DOCUMENT_EXPIRY: {
    reminders: [-90, -60, -30, -7, 0],
    overdueEveryDays: 7,
    escalate: [
      { afterOverdueDays: 1, level: 1 },
      { afterOverdueDays: 15, level: 2 },
      { afterOverdueDays: 30, level: 3 }
    ]
  }
};
```

---

## 10. Compliance Monitoring, SLA Tracking & Explainable Risk

### Generic Deadline Engine Architecture
All time-bound regulatory entities are modeled as polymorphic records in the `DeadlineItem` table:

```
[ Application Stages ] ---+
[ EVC Visits         ] ---+---> [ DeadlineItem Producer ]
[ Undertakings       ] ---+                |
[ Document Validity  ] ---+                v
                                 [ DeadlineItem Table ]
                                           |
                                  tick(currentTime)
                                           |
                                           v
                          +----------------+----------------+
                          |                                 |
                          v                                 v
               [ Multi-Channel Alerts ]           [ Tiered Escalations ]
               (In-App, Email, SMS)               (L1 -> L2 -> L3 Events)
```

### Dual-Clock Administrative Transparency
To eliminate disputes regarding delay culpability, AIClear runs two parallel, mutually exclusive clocks on every application:

$$\text{Total Processing Duration} = T_{\text{Council}} + T_{\text{Institution}}$$

1. **Council Officer Clock ($T_{\text{Council}}$):** Active while the application resides in `SCRUTINY`, `RE_SCRUTINY`, `EVC_QUEUE`, `EVC_REPORT`, `SAC_SHC`, or `DECISION_PENDING`. Pauses immediately if an application is returned for deficiencies.
2. **Institution Deficiency Clock ($T_{\text{Institution}}$):** Starts the moment a Regional Officer executes `returnApplication`. Measures the exact calendar duration taken by the institution to address deficiencies and re-submit.

### Explainable Compliance Health Score (0–100)
Every institution is assigned a dynamic Compliance Health Score computed across three transparent regulatory dimensions:

```
+------------------------------------------------------------------------------+
|                COMPOSITE COMPLIANCE HEALTH SCORE (0 - 100)                   |
+------------------------------------------------------------------------------+
|                                                                              |
|  1. APH Quantitative Norms (40% Weight)                                      |
|     - Faculty-to-Student Ratio (>= 1:20 required)                            |
|     - Cadre Composition Balance (1 Prof : 2 Assoc : 6 Asst)                  |
|     - Approved Standard Intake Divisions (30 / 60 unit multiples)            |
|                                                                              |
|  2. Statutory Document Validity (30% Weight)                                 |
|     - Registered Land Lease Deed (>= 30 years remaining)                     |
|     - State Fire Department Safety Clearance / NOC                           |
|     - PWD / Registered Engineer Building Stability Certificate               |
|     - University Affiliation & NOC Letters                                   |
|                                                                              |
|  3. Conditional Undertaking Compliance (30% Weight)                          |
|     - Timely submission of mandatory compliance affidavits                   |
|     - Resolution of conditional approval stipulations                        |
|     - Verification and closure by Regional Officers                          |
|                                                                              |
+------------------------------------------------------------------------------+
```
*Note: The Compliance Health Score functions as an assistive administrative indicator and does not represent a statutory accreditation grade.*

---

## 11. EVC Inspection & Evidence Management

The Expert Visit Committee (EVC) module digitizes physical and virtual campus inspections:

```
+-----------------------------------------------------------------------------------+
|                            EVC INSPECTION LIFECYCLE                               |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  1. Scheduling & Allocation                                                       |
|     - Triggered automatically when an application enters EVC_QUEUE                |
|     - Conflict-of-interest clearance (experts cannot inspect home institutions)   |
|     - Inspection date and mode (Physical / Hybrid Virtual) locked into calendar   |
|                                                                                   |
|  2. Evidence Capture & Rubric Verification                                        |
|     - Geotagged and timestamped photo/video uploads                               |
|     - Infrastructure validation: Computer centers, laboratories, libraries,      |
|       barrier-free access ramps, and safety equipment                             |
|     - Direct equipment invoice and bill-of-materials cross-checking               |
|                                                                                   |
|  3. Report Synthesis & Review Workflow                                            |
|     - Standardized inspection rubric scoring (Satisfactory / Deficiency)          |
|     - Multi-expert digital signatures and joint recommendation submission         |
|     - Direct handoff into EVC_REPORT stage for Regional Officer review            |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

---

## 12. Audit Integrity & Security Architecture

### Cryptographic SHA-256 Chained Ledger
AIClear records all state transitions, document submissions, deficiency issuances, and inspection remarks in a cryptographically chained audit log.

Every entry ($Block_n$) computes its hash from the preceding block's hash:

$$H_n = \text{SHA-256}\Big(H_{n-1} \parallel \text{Timestamp} \parallel \text{ActorId} \parallel \text{Action} \parallel \text{EntityType} \parallel \text{EntityId} \parallel \text{Payload}\Big)$$

```
+-----------------------+       +-----------------------+       +-----------------------+
|        BLOCK 1        |       |        BLOCK 2        |       |        BLOCK 3        |
|-----------------------|       |-----------------------|       |-----------------------|
| Index: 1              |       | Index: 2              |       | Index: 3              |
| Prev:  0000000000...  |       | Prev:  4f8a2b1c9d...  |       | Prev:  8e7d6c5b4a...  |
| Action: APP_SUBMITTED | ----> | Action: RETURN_DEFIC. | ----> | Action: STAGE_ADVANCE |
| Actor: inst.coep      |       | Actor: ro.central     |       | Actor: ro.central     |
| Hash:  4f8a2b1c9d...  |       | Hash:  8e7d6c5b4a...  |       | Hash:  1a2b3c4d5e...  |
+-----------------------+       +-----------------------+       +-----------------------+
```

### Verification & Tamper Detection
- **Integrity Verifier (`/api/audit/verify`):** Performs an $O(N)$ linear traversal from the genesis block ($H_0 = 0^{64}$) to the latest record, recomputing every hash digest. Any modified byte, altered timestamp, or deleted record produces an immediate hash mismatch.
- **Interactive Tamper Demonstration:** The Audit Center includes a live verification dashboard allowing evaluators to simulate unauthorized direct database mutations and observe instant cryptographic detection with visual block identification.

---

## 13. Technology Stack

| Layer | Technology | Version | Architectural Rationale |
|---|---|---|---|
| **Core Framework** | Next.js (App Router) | `16.4.2` | Server-Side Rendering (SSR), React Server Components (RSC), and low-latency API routes. |
| **Language** | TypeScript | `5.0+` | End-to-end static typing, strict null checking, and type-safe database schemas. |
| **Styling & Design** | Tailwind CSS | `v4` | Modern CSS tokens, zero-runtime overhead, responsive layouts, and unified color palette. |
| **Database & ORM** | Prisma ORM + SQLite / PostgreSQL | `6.19.3` | Schema-driven migrations, declarative relations, and atomic transactions (`prisma.$transaction`). |
| **Data Visualization** | Recharts | `3.10.1` | Performant SVG-based compliance charts, SLA tracking bars, and regional breakdown graphs. |
| **Date & Time Handling** | `date-fns` | `4.4.0` | Modular, immutable date manipulation coupled with centralized `getNow()` simulation. |
| **Cryptographic Hashing** | Node.js Crypto | Native | SHA-256 digest computation for append-only tamper-evident audit chaining. |
| **Outbound Messaging** | Nodemailer / Resend / SMS APIs | `10.2.1` | Resilient dual-mode alerts: Ethereal test sandbox for local evaluation; live SMTP/SMS for production. |
| **Icons & UI Assets** | Lucide React | `1.61.0` | Consistent, accessible iconography across all dashboards and workflows. |

---

## 14. Repository Structure

The repository structure matches the codebase layout:

```
aicte-flow/
├── app/
│   ├── (app)/
│   │   ├── admin/                # Admin control center (Clock simulator, APH rules editor, user directory)
│   │   ├── applications/         # Application center (Search, filters, new intake form, detail view)
│   │   │   ├── [id]/             # Multi-route stage stepper, timeline, observations, action panel
│   │   │   └── new/              # Institutional intake form with live APH norm pre-checks
│   │   ├── audit/                # Cryptographic audit viewer, chain verifier, and tamper demo
│   │   ├── dashboard/            # Role-specific dashboard routing (Admin, RO, Bureau, Inst, EVC, SAC)
│   │   ├── documents/            # Registered lease deed and NOC expiration surveillance tracker
│   │   ├── escalations/          # Hierarchical escalation resolution center (L1, L2, L3)
│   │   ├── evc/                  # EVC inspection queue, expert scheduling, and report submission
│   │   ├── notifications/        # Notification center (In-app inbox and outbound delivery log)
│   │   ├── reports/              # 6 analytical governance reports with RFC-4180 CSV export
│   │   ├── undertakings/         # Conditional approval compliance tracker and verification
│   │   └── layout.tsx            # Authenticated application shell (Sidebar, topbar, role switcher)
│   ├── api/                      # RESTful API route handlers
│   │   ├── admin/                # Clock simulation and rules mutation endpoints
│   │   ├── applications/         # Application lifecycle mutations (advance, return, decide, refer)
│   │   ├── audit/                # Cryptographic chain verification endpoint
│   │   ├── auth/                 # Cookie-based session switcher and authentication
│   │   ├── documents/            # Document renewal and status updates
│   │   ├── engine/               # tick() SLA and escalation evaluator endpoint
│   │   ├── escalations/          # Escalation resolution endpoints
│   │   ├── evc/                  # EVC visit scheduling and report submissions
│   │   ├── evidence/             # File upload and evidence linking handlers
│   │   ├── notifications/        # In-app notification management and live dispatch testing
│   │   ├── reports/              # CSV report generation handlers
│   │   └── undertakings/         # Undertaking evidence submission and verification
│   ├── components/               # Reusable UI component modules
│   │   ├── applications/         # Application cards, stage badges, and timeline widgets
│   │   ├── login/                # BrandPanel and LoginForm authentication cards
│   │   └── shared/               # Navigation, modals, metric badges, and SLA chips
│   ├── globals.css               # Design system tokens, Tailwind CSS v4 directives, SLA chip styles
│   ├── layout.tsx                # Root HTML layout and font definitions
│   └── page.tsx                  # AIClear unified landing and login page
├── prisma/
│   ├── schema.prisma             # Relational database schema with optimized indexes
│   └── seed.ts                   # Seed script generating 8 regions, ~60 institutions, ~200 applications
├── public/                       # Static public assets, logos, and emblems
├── scripts/
│   └── tick.ts                   # Standalone CLI runner for the generic deadline engine
├── src/
│   ├── config/
│   │   └── rules.ts              # APH route catalogs, stage timelines, norm defaults, alert rules
│   └── lib/
│       ├── aph.test.ts           # Unit tests for APH ratio and division calculations
│       ├── aph.ts                # APH compliance formulas (FSR, cadre, intake multiples)
│       ├── audit.ts              # Cryptographic SHA-256 hash chaining and ledger verification
│       ├── auth.ts               # Server-side authentication, role guards, and resource permissions
│       ├── clock.ts              # Simulated system clock provider (getNow)
│       ├── db.ts                 # Prisma Client singleton
│       ├── dualClock.ts          # Dual-clock computation (Officer vs Institution time accounting)
│       ├── format.ts             # Date and string formatting utilities
│       ├── notify.ts             # Multi-channel notification dispatcher (In-app, Ethereal, SMTP, SMS)
│       ├── engine/
│       │   └── tick.ts           # Core deadline, SLA reminder, and escalation evaluation engine
│       └── workflow/
│           ├── routes.test.ts    # Unit tests for APH stage progression and decision gates
│           ├── routes.ts         # Route state machine definitions and stage transition rules
│           └── workflow.ts       # Atomic stage transition execution logic and guards
├── .env.example                  # Environment configuration template
├── package.json                  # Project manifest, dependencies, and execution scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── README.md                     # Technical architecture and documentation
```

---

## 15. Installation & Local Setup

### Prerequisites
- **Node.js:** `v18.17.0` or higher (Node 20+ LTS recommended)
- **Package Manager:** `npm` (included with Node.js)
- **Git:** Installed and configured

### Step-by-Step Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-org>/aicte-flow.git
cd aicte-flow

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env

# 4. Initialize database and seed mock data
# Pushes the Prisma schema to SQLite and seeds ~200 realistic applications
npm run seed

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to access the platform.

---

## 16. Environment Variables & Database Configuration

AIClear includes a zero-friction local setup utilizing an embedded SQLite database (`file:./dev.db`). External messaging gateways operate in a local simulation sandbox by default, with plug-and-play support for production providers.

### Environment Variable Reference (`.env`)

```ini
# ==============================================================================
# DATABASE CONFIGURATION
# ==============================================================================
# Local SQLite database path (default for evaluation)
DATABASE_URL="file:./dev.db"

# Production PostgreSQL connection string (when migrating)
# DATABASE_URL="postgresql://aicte_user:secure_password@localhost:5432/aicte_db?schema=public"

# ==============================================================================
# AUTHENTICATION & EVALUATION MODE
# ==============================================================================
# Enables one-click persona switching on login page (true for hackathon demo)
ALLOW_DEMO_AUTH="1"

# ==============================================================================
# NOTIFICATION & OUTBOUND GATEWAY CONFIGURATION (OPTIONAL)
# If left unset, the system runs in Zero-Setup Sandbox Mode (logs to delivery tab)
# ==============================================================================

# Option A: Resend API (Recommended for live email delivery)
# RESEND_API_KEY="re_123456789"
# EMAIL_FROM="AIClear <onboarding@resend.dev>"

# Option B: Standard SMTP Relay (NIC, Gmail, College Server)
# SMTP_HOST="smtp.gmail.com"
# SMTP_PORT="587"
# SMTP_USER="notifications@aicte-india.org"
# SMTP_PASS="your-16-character-app-password"
# SMTP_SECURE="false"

# Option C: Fast2SMS (India Domestic SMS Delivery)
# FAST2SMS_API_KEY="your_fast2sms_api_key"

# Option D: Twilio SMS Gateway (International SMS Delivery)
# TWILIO_ACCOUNT_SID="ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
# TWILIO_AUTH_TOKEN="your_auth_token"
# TWILIO_PHONE_NUMBER="+1234567890"
```

---

## 17. Development, Testing & Build Commands

| Command | Purpose & Output |
|---|---|
| `npm run dev` | Starts the Next.js local development server with Turbopack at `http://localhost:3000`. |
| `npm run seed` | Runs `prisma db push` to sync schema and executes `prisma/seed.ts` to populate ~200 applications, 8 regions, and the initial audit ledger. |
| `npm run tick` | Manually triggers the Generic Deadline & SLA Engine CLI (`scripts/tick.ts`), evaluating all deadlines and processing escalations against the current clock. |
| `npm test` | Runs the automated test suite (`tsx --test src/**/*.test.ts`), executing all 13 unit tests for APH calculations, route integrity, and decision gate boundaries. |
| `npm run build` | Generates the optimized Prisma client and compiles the Next.js production build bundle. |
| `npm start` | Launches the compiled production application server. |

### Verification of Automated Test Suite

```bash
$ npm test

> aicte-flow@0.1.0 test
> tsx --test src/**/*.test.ts

▶ APH assistive calculations
  ✔ recognizes positive standard intake divisions (0.62ms)
  ✔ rounds required faculty up at the 1:20 benchmark (0.15ms)
✔ APH assistive calculations (1.61ms)
▶ APH route catalogues (SIH26262)
  ✔ defines all five PS route combinations (8.70ms)
  ✔ ends every route at DECISION_PENDING (human gate) (0.24ms)
  ✔ maps application types onto known routes (0.24ms)
✔ APH route catalogues (SIH26262) (10.23ms)
▶ getNextStage
  ✔ walks ONLY_SCRUTINY without skipping the decision gate (0.41ms)
  ✔ walks SCRUTINY_EVC_SAC_SHC in handbook order (0.16ms)
  ✔ treats RE_SCRUTINY as SCRUTINY for progression (0.10ms)
  ✔ supports ONLY_EVC and EVC_SAC_SHC without inventing scrutiny (0.21ms)
  ✔ returns an empty path and no next stage for unknown routes or stages (0.72ms)
  ✔ does not advance beyond the human decision gate on any route (0.19ms)
✔ getNextStage (2.16ms)
▶ stage action gates
  ✔ blocks free advance from EVC_QUEUE, EVC_SCHEDULED, and DECISION_PENDING (0.24ms)
  ✔ allows RO advance at scrutiny / EVC report; blocks return at decision (0.15ms)
✔ stage action gates (0.49ms)
ℹ tests 13
ℹ suites 4
ℹ pass 13
ℹ fail 0
```

---

## 18. Demo Scenarios & Walkthrough Guide

The platform includes demo personas accessible via one-click role cards on the login page or through the top navigation switcher.

### Demo Personas Reference

| Role | Demo Identity | Primary Evaluation Surface |
|---|---|---|
| **System Admin** | `admin@demo.aicte` | Time Travel Clock, APH Rules Editor, Audit Verifier |
| **Bureau Officer** | `bo.alpha@demo.aicte` | National Oversight Dashboard, Final Decision Gate (`DECIDED`) |
| **Regional Officer (Central)** | `ro.central.alpha@demo.aicte` | Central Region Scrutiny Queue, Deficiency Issuance, EVC Scheduling |
| **Regional Officer (Southern)** | `ro.southern.alpha@demo.aicte` | Southern Region Scrutiny Queue, Document Renewals |
| **EVC Committee** | `evc.member1@demo.aicte` | Inspection Workspace, Evidence Uploads, Inspection Reports |
| **SAC/SHC Member** | `sac.member@demo.aicte` | Standing Hearing Committee Appellate Hearing Dossier |
| **Institution (COEP Tech Univ)** | `inst.coep@demo.aicte` | Application Intake, Deficiency Rectification, Undertaking Upload |

---

### Step-by-Step Evaluation Scenarios

#### Scenario 1: Scrutiny Review & Deficiency Return Loop
1. Log in as **Regional Officer (Central)** (`ro.central.alpha@demo.aicte`).
2. Navigate to **Applications** &rarr; Select an application in `SCRUTINY` stage.
3. Review the **APH Norms Card** (inspecting FSR, cadre ratio, and intake divisions).
4. Click **Return for Deficiency** &rarr; Enter specific remarks (minimum 10 characters, e.g., *"Cadre ratio deficit: Associate Professor count below 1:2:6 norm"*).
5. Confirm return. Notice the application transitions to `RETURNED`.
6. Observe the **Dual-Clock Indicator**: Officer review time stops; Institution deficiency clock starts running.
7. Switch persona to **Institution (COEP Tech Univ)** &rarr; Open the returned application &rarr; Notice the deficiency banner &rarr; Submit clarification &rarr; Application returns to Regional Officer in `RE_SCRUTINY`.

#### Scenario 2: EVC Scheduling, Inspection & Report Workflow
1. Log in as **Regional Officer** &rarr; Open an application in `EVC_QUEUE`.
2. Click **Schedule EVC Visit** &rarr; Set inspection date, select committee members, and confirm.
3. Switch persona to **EVC Committee** (`evc.member1@demo.aicte`) &rarr; Navigate to **EVC Inspections**.
4. Access the scheduled inspection &rarr; Fill the inspection rubric &rarr; Upload inspection evidence &rarr; Submit Final Report.
5. Switch back to **Regional Officer** &rarr; Access `EVC_REPORT` stage &rarr; Review findings &rarr; Advance application.

#### Scenario 3: Time-Travel SLA Escalation via Clock Simulator
1. Log in as **System Admin** (`admin@demo.aicte`) &rarr; Navigate to **Admin Control Center**.
2. Observe current system time and active deadline items in the **Engine Status** panel.
3. Advance the simulated clock by **+16 days** using the fast-forward controls.
4. Click **Trigger Tick Evaluation** (or execute `npm run tick` in terminal).
5. Switch persona to **Bureau Officer** (`bo.alpha@demo.aicte`) &rarr; Navigate to **Escalations**.
6. Observe that overdue regional scrutiny applications have automatically triggered **Level 2 / Level 3 Escalations** with alert logs.

#### Scenario 4: Year-Round Surveillance (Lease Deed & Fire NOC Expiry)
1. Log in as **Regional Officer** &rarr; Navigate to **Documents** (`/documents`).
2. Filter by status: **Expiring in 30 Days**.
3. Inspect institutions with red warning badges indicating registered land leases or Fire NOCs nearing expiration.
4. Click **View Institution Dossier** &rarr; Review active conditional undertakings and dynamic **Compliance Health Score**.

#### Scenario 5: Cryptographic Audit Verification & Tamper Simulation
1. Log in as **System Admin** &rarr; Navigate to **Audit Center** (`/audit`).
2. Click **Verify Chain Integrity** &rarr; Observe complete validation across all historical blocks ($H_0 \to H_n$).
3. Click **Simulate Database Tampering** &rarr; This alters a byte in a historical block's payload.
4. Run **Verify Chain Integrity** again &rarr; Observe the immediate cryptographic failure alert highlighting the exact compromised block ID, demonstrating legal defensibility.

---

## 19. Deployment Architecture

AIClear is architected for zero-downtime deployment on modern cloud platforms or government infrastructure (such as NIC MeghRaj Cloud).

```mermaid
graph TB
    subgraph Client_Access["Client Access Layer"]
        DNS["DNS / Cloudflare WAF<br/>(DDoS Protection & SSL Termination)"]
    end

    subgraph App_Cluster["Application Compute Cluster (Vercel / AWS ECS / MeghRaj)"]
        LB["Application Load Balancer"]
        Node1["Next.js Node Instance 1"]
        Node2["Next.js Node Instance 2"]
        Cron_Worker["Worker Container<br/>(Scheduled tick() SLA Daemon)"]
    end

    subgraph Managed_Data["Data & Persistence Tier"]
        PG[(PostgreSQL Primary<br/>ACID Multi-Route State Machine)]
        PG_Replica[(PostgreSQL Read Replica<br/>Analytics & CSV Exports)]
        Redis[(Redis Cache & BullMQ<br/>Notification & SLA Job Queue)]
        S3[(Object Storage / S3 / MinIO<br/>Encrypted PDF & Evidence Vault)]
    end

    subgraph Govt_Gateways["External Government Gateways"]
        SSO["Jan Parichay / MeriPehchan<br/>(National SSO OIDC)"]
        DigiLocker["DigiLocker API<br/>(Land Deeds & Building NOCs)"]
        SMS_GW["NIC SMS Gateway<br/>(Official Notification Relay)"]
    end

    DNS --> LB
    LB --> Node1
    LB --> Node2
    Node1 --> PG
    Node2 --> PG
    Node1 --> Redis
    Node2 --> Redis
    Cron_Worker --> PG
    Cron_Worker --> Redis
    Node1 --> S3
    PG --> PG_Replica
    
    Node1 -.-> SSO
    Node1 -.-> DigiLocker
    Cron_Worker -.-> SMS_GW
```

### Production Deployment Strategy
1. **Containerized Edge Deployment:** Next.js App Router deployed via Docker containers behind an Application Load Balancer with auto-scaling based on CPU and request latency.
2. **Database Engine:** Transition from local SQLite to Managed PostgreSQL with connection pooling (e.g., PgBouncer) and automated daily snapshots.
3. **Background Worker Engine:** The `tick()` SLA evaluator runs as a scheduled micro-daemon (via cron or Redis-backed BullMQ) executing every 60 seconds.
4. **Document Storage:** Institutional evidence files stored in S3-compliant object storage with AES-256 server-side encryption and signed URLs.

---

## 20. Limitations, Assumptions & Production-Readiness Considerations

To ensure full technical transparency for hackathon evaluation, the platform distinguishes between current evaluation implementations and planned production integrations:

### 1. Database Engine
- **Current Evaluation State:** Uses embedded SQLite (`prisma/dev.db`) to enable zero-setup, self-contained local evaluation without requiring external database installation.
- **Production Requirement:** Transition to PostgreSQL for production environments supporting thousands of concurrent regional officers and institutional applicants. The Prisma schema is database-agnostic and requires only updating the `provider` line in `prisma/schema.prisma`.

### 2. Authentication & Identity
- **Current Evaluation State:** Cookie-based session switcher (`aicte_user_id`) enabled via `ALLOW_DEMO_AUTH=1` to facilitate seamless evaluation across all 6 administrative personas without password friction.
- **Production Requirement:** Integration with Government of India National SSO (**Jan Parichay / MeriPehchan**) via OpenID Connect (OIDC) with mandatory multi-factor authentication (MFA).

### 3. Outbound Messaging Gateways
- **Current Evaluation State:** Resilient dual-mode engine logging outbound alerts to the in-app Delivery Log and local Ethereal test inbox, preventing runtime failures if external API keys are omitted.
- **Production Requirement:** Direct integration with the National Informatics Centre (**NIC SMS Gateway**) and CDAC email relays for official `.gov.in` domain dispatch.

### 4. Document Storage & Verification
- **Current Evaluation State:** Uploaded files and evidence are stored on local disk under the application root, with metadata tracked in Prisma.
- **Production Requirement:** Production S3/MinIO bucket integration combined with direct **DigiLocker** API adapters to pull verified digital deeds and certificates directly from state land registries.

---

## 21. Implementation Status & Strategic Roadmap

### Feature Implementation Matrix

| Component / Subsystem | Current Repository Status | Evidence / File Location |
|---|---|---|
| **Multi-Route State Machine** | **Fully Implemented** | `src/lib/workflow/routes.ts`, `workflow.ts` |
| **Generic Deadline & SLA Engine** | **Fully Implemented** | `src/lib/engine/tick.ts`, `scripts/tick.ts` |
| **Dual-Clock Accountability** | **Fully Implemented** | `src/lib/dualClock.ts`, `app/(app)/applications/[id]` |
| **Assistive APH Norms Engine** | **Fully Implemented** | `src/lib/aph.ts`, `src/lib/aph.test.ts` |
| **Cryptographic SHA-256 Ledger** | **Fully Implemented** | `src/lib/audit.ts`, `app/api/audit/verify` |
| **Multi-Tiered Escalation Manager** | **Fully Implemented** | `app/(app)/escalations`, `src/config/rules.ts` |
| **Simulated Clock Controller** | **Fully Implemented** | `src/lib/clock.ts`, `app/(app)/admin` |
| **Multi-Channel Notification Sandbox**| **Fully Implemented** | `src/lib/notify.ts`, `app/(app)/notifications` |
| **Role-Specific Dashboards (6 Roles)**| **Fully Implemented** | `app/(app)/dashboard`, `components/*` |
| **Automated Unit Test Suite** | **Fully Implemented (13/13 Pass)** | `src/lib/aph.test.ts`, `src/lib/workflow/routes.test.ts` |
| **AI Document OCR & Extraction Pipeline**| **Architectural Target** | Detailed in Section 8 of this document |
| **National SSO (Jan Parichay)** | **Roadmap Integration** | Ready for OIDC provider configuration |

### Multi-Phase Evolution Roadmap

```
                                  A I C l e a r   R O A D M A P
+---------------------------------------------------------------------------------------------------+
|  PHASE 1: Core Foundation (Current Hackathon Deliverable)                                          |
|  - Multi-route deterministic approval state machine (5 APH routes)                                |
|  - Generic Deadline & SLA Engine with L1/L2/L3 escalations                                         |
|  - Dual-clock accountability and APH compliance health scoring                                    |
|  - Cryptographic SHA-256 hash-chained tamper-evident audit ledger                                  |
|  - 6 role-based dashboards with live system clock simulation                                      |
+---------------------------------------------------------------------------------------------------+
                                                |
                                                v
+---------------------------------------------------------------------------------------------------+
|  PHASE 2: Advanced AI & Cloud Hardening (Q3 2026)                                                 |
|  - Production deployment of Dual-Path OCR & Regulatory NER Pipeline                               |
|  - Bounding box evidence linking overlay in Scrutiny Workspace                                    |
|  - Migration from SQLite to Managed PostgreSQL with PgBouncer connection pooling                  |
|  - Integration with AWS S3 / MinIO for encrypted object storage                                   |
+---------------------------------------------------------------------------------------------------+
                                                |
                                                v
+---------------------------------------------------------------------------------------------------+
|  PHASE 3: National Infrastructure Integrations (Q4 2026 - Q1 2027)                                |
|  - National SSO integration (Jan Parichay / MeriPehchan OIDC)                                     |
|  - DigiLocker API integration for automated land lease deed and NOC verification                  |
|  - Hardware-based digital signatures (Aadhaar e-Sign / DSC tokens) for EVC reports                |
|  - Direct integration with NIC SMS Gateway and CDAC national email relays                         |
+---------------------------------------------------------------------------------------------------+
```

---

## 22. SIH Submission Summary & Contribution Guidelines

### Smart India Hackathon 2026 Submission Summary
- **Project Name:** AIClear — Approval Intelligence
- **Problem Statement ID:** SIH26262
- **Problem Statement Title:** Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System
- **Organization / Ministry:** All India Council for Technical Education (AICTE), Ministry of Education
- **Category:** Software Edition
- **Domain:** Smart Automation / e-Governance / EdTech

### Contribution Guidelines
1. **Branching Model:** Follow trunk-based development with short-lived feature branches:
   - Feature additions: `feat/feature-name`
   - Bug fixes: `fix/bug-description`
   - Documentation updates: `docs/documentation-topic`
2. **Code Standards:**
   - Enforce strict TypeScript typing (`noImplicitAny: true`).
   - All database mutations altering stage state must be wrapped in `prisma.$transaction`.
   - Every mutation must invoke `createAuditLogEntry()` to maintain SHA-256 hash-chain continuity.
3. **Testing Requirements:**
   - Execute `npm test` before committing any changes. Ensure all test suites pass without regression.
   - Run `npm run build` to verify that production bundling compiles without TypeScript or Turbopack errors.

---

### Verification & Submission Git Commands

To commit and push this completed documentation to the submission repository:

```bash
# Verify modified and untracked files
git status

# Stage the documentation and related UI improvements
git add README.md app/

# Commit with conventional commit message
git commit -m "docs: complete comprehensive technical architecture and SIH 2026 README"

# Push to the official submission branch
git push origin main
```

---

*AIClear — Transforming AICTE Institutional Approvals through Autonomous Workflows, Proactive Compliance, and Cryptographic Accountability.*
