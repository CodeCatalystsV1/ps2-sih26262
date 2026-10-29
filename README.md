# APPROVIA
### Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System
**Smart India Hackathon 2026 | Problem Statement ID: SIH26262**

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.2%20(Turbopack)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-6.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Unit Tests](https://img.shields.io/badge/Unit_Tests-13%2F13_Passed-0D9488?style=for-the-badge&logo=vitest)](file:///)
[![Design System](https://img.shields.io/badge/Glassmorphism-Orange_%2B_Navy_%2B_Teal-EA580C?style=for-the-badge)](file:///)
[![SHA-256 Audit](https://img.shields.io/badge/Audit_Chain-SHA--256_Tamper_Evident-1E293B?style=for-the-badge)](file:///)

---

> **Regulatory Compliance & Transparency Notice:**  
> AIClear is an evidence-driven regulatory workflow automation prototype engineered for the Smart India Hackathon 2026 (Problem Statement SIH26262). It assists AICTE scrutiny officers, regional committees, and institutions with automated Approval Process Handbook (APH) compliance checks, dual-clock SLA tracking, and cryptographic auditability. Final statutory approval authority strictly rests with designated AICTE competent authorities.

---

## 📌 Interactive Quick Navigation

- [✨ 1. Executive Summary & Problem Context](#-1-executive-summary--problem-context)
- [🎨 2. Design System & Glassmorphism UI](#-2-design-system--glassmorphism-ui)
- [🎭 3. Interactive Personas & Live Demo Accounts](#-3-interactive-personas--live-demo-accounts)
- [⚙️ 4. Core Innovations & Operational Engines](#️-4-core-innovations--operational-engines)
  - [⏱️ Dual-Clock SLA Accountability](#️-dual-clock-sla-accountability)
  - [🔒 Cryptographic SHA-256 Audit Trail](#-cryptographic-sha-256-audit-trail)
  - [📊 Animated Circular Compliance Ring](#-animated-circular-compliance-ring)
  - [📜 AICTE APH Norms & Route Engine](#-aicte-aph-norms--route-engine)
- [🔄 5. Multi-Route Workflow Architecture](#-5-multi-route-workflow-architecture)
- [🛠️ 6. Quickstart & Local Installation](#️-6-quickstart--local-installation)
- [🧪 7. Test Suite & Verification Results](#-7-test-suite--verification-results)
- [📂 8. Project Structure & Directory Tree](#-8-project-structure--directory-tree)
- [🛡️ 9. Statutory Safeguards & Production Roadmap](#️-9-statutory-safeguards--production-roadmap)

---

## ✨ 1. Executive Summary & Problem Context

AICTE receives tens of thousands of institutional approval applications annually spanning new institute setups, intake expansions, faculty cadre audits, conditional undertakings, and Expert Visit Committee (EVC) physical inspections. Traditional paper or decoupled portal workflows suffer from:
1. **Opaque Ownership:** Lack of clear status and stage accountability between regional officers and institutions.
2. **Deficiency Ping-Pong:** Applications cycling indefinitely without separating council review time from institutional reply delays.
3. **Inspection Bottlenecks:** Difficulties in queuing, scheduling, and verifying geo-tagged EVC observation reports.
4. **Audit Vulnerability:** Risk of post-decision manipulation without cryptographic proof of record integrity.

### 💡 The AIClear Solution
AIClear unites all stakeholders into a single, high-contrast, responsive regulatory portal featuring:
- **6 Discrete Stakeholder Workspaces** with automated persona switching.
- **Dual-Clock Processing Metrics** separating AICTE review time from institutional deficiency response time.
- **Cryptographic SHA-256 Audit Chain** with on-demand tamper-detection and integrity break testing.
- **Automated APH Norm Engine** validating teacher-student ratios (1:20), cadre proportions, built-up areas, and land zoning.
- **Glassmorphic GovTech UI** with the AICTE logo watermark, floating cards, animated compliance rings, and full reduced-motion accessibility.

---

## 🎨 2. Design System & Glassmorphism UI

The authenticated AIClear portal features a modern **Orange + Midnight Navy + Pure White + Compliance Teal** aesthetic with transparent glassmorphism:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       AICLEAR GLASSMORPHIC PALETTE                          │
├───────────────┬───────────────┬─────────────────────────────┬───────────────┤
│ PRIMARY       │ MIDNIGHT NAVY │ FROSTED GLASS               │ COMPLIANCE    │
│ ORANGE        │ (Sidebar/Gov) │ (Cards & Containers)        │ TEAL          │
│ #EA580C       │ #0B1220       │ rgba(255, 255, 255, 0.72)   │ #0D9488       │
│ Active Pills, │ Structural    │ Backdrop-Filter: blur(14px) │ APH Verified, │
│ CTAs, Focus   │ Anchor        │ Soft Multi-Layer Shadows    │ SHA-256 Pass  │
└───────────────┴───────────────┴─────────────────────────────┴───────────────┘
```

### ✨ Key Visual Highlights
* **Translucent Frosted Glass:** Dashboard cards, KPI grids, compliance containers, and regional worklists utilize `rgba(255, 255, 255, 0.72)` with `backdrop-filter: blur(14px)`.
* **Subtle AICTE Watermark:** The official high-resolution AICTE crest (`/logo.png`) rests gracefully in the background at an optimized ~11% opacity (`pointer-events: none`), gently showing through translucent glass panels.
* **Floating Card Elevation:** Interactive resting cards lift 4px on hover (`transform: translateY(-4px)`) accompanied by a dual-layer warm amber glow (`box-shadow: 0 20px 40px -4px rgba(234, 88, 12, 0.14)`).
* **Solid Legacy Fallback:** Fully backward-compatible for browsers lacking `backdrop-filter` via `@supports not (backdrop-filter: blur(14px))` solid `#FFFFFF` fallback.
* **Strict Scope Isolation:** All styling is encapsulated inside `.app-shell`, ensuring the public authentication login page remains **100% clean and unmodified**.

---

## 🎭 3. Interactive Personas & Live Demo Accounts

Switch between pre-configured regulatory personas with a single click using the persona selector or the topbar dropdown:

| Persona | Role Key | Focus & Workspace Capabilities |
| :--- | :--- | :--- |
| **Apex Institute of Technology** | `INSTITUTION` | Submit applications, upload PDF evidence, monitor health ring, answer deficiency notices. |
| **Dr. R. K. Sharma (Southern)** | `REGIONAL_OFFICER` | Scrutinize applications, issue deficiency memos, assign EVC inspection visits. |
| **Prof. Sunita Rao** | `EVC_COMMITTEE` | Conduct physical inspections, complete infrastructure checklists, submit EVC reports. |
| **Justice V. K. Mohan** | `SAC_SHC_MEMBER` | Preside over appellate hearings, review SAC/SHC dockets, recommend approval/rejection. |
| **Joint Director P. V. Nair** | `BUREAU_OFFICER` | High-level bureau oversight, L2/L3 escalation resolution, final competent authority decisions. |
| **National System Administrator** | `ADMIN` | System clock time travel, rule catalog management, SHA-256 tamper break simulation. |

<details>
<summary><b>👉 Click to expand interactive walkthrough sequences for each persona</b></summary>

### 🎓 1. Institution Persona Journey
1. Navigate to `/dashboard` & observe the live **Compliance Ring** score (APH Norms, Documents, Undertakings).
2. Click **+ New Application** (`/applications/new`) to initiate an approval request (e.g., *Extension of Approval* or *New Programme*).
3. Check the **Pending Compliance Items** section to upload valid lease deeds or conditional compliance undertakings.

### 🏛️ 2. Regional Officer Persona Journey
1. Review the **Regional Worklist** displaying active files sorted by strict SLA deadline urgency.
2. Open any active application to view the **Dual-Clock Bar** (AICTE Council Review Time vs. Institution Reply Time).
3. Trigger an action gate: **Advance to Next Stage**, **Return with Deficiency Notice**, or **Queue EVC Visit**.

### 🔍 3. EVC Committee Persona Journey
1. Visit the **EVC Queue** at `/evc` to inspect assigned institutional campuses.
2. Complete the physical inspection form, score infrastructure parameters, and submit the final EVC recommendation.

### ⚖️ 4. SAC / SHC Appellate Committee Journey
1. Open the appellate docket at `/dashboard` to review contested cases.
2. Examine the recorded deficiency history and committee recommendation before rendering a hearing verdict.

### 🛡️ 5. Bureau Officer & Admin Journey
1. Monitor national pendency across all 8 AICTE regions.
2. Navigate to `/audit` to verify the cryptographic SHA-256 tamper-evident hash chain.
3. Access the **System Clock** to simulate time travel and test automated SLA deadline escalations.

</details>

---

## ⚙️ 4. Core Innovations & Operational Engines

### ⏱️ Dual-Clock SLA Accountability
Traditional portals penalize regulatory bodies for institutional delays. AIClear introduces **Dual-Clock Processing**:
* **Council Review Clock:** Ticks only while an application is under scrutiny by AICTE regional officers or committees.
* **Institution Deficiency Clock:** Ticks when an application is returned for corrections (7-day standard response window).
* **Live Visual Breakdown:** A segmented glass progress bar illustrates the exact percentage distribution of processing time.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               DUAL-CLOCK PROCESSING TIME BREAKDOWN                          │
├──────────────────────────────────────────────┬──────────────────────────────┤
│ 🟦 Council Review Time: 14d (64%)            │ 🟩 Institution Response: 8d  │
└──────────────────────────────────────────────┴──────────────────────────────┘
```

---

### 🔒 Cryptographic SHA-256 Audit Trail
Every critical mutation (stage transition, deficiency memo, document upload, decision record) is committed to an immutable append-only hash chain:

$$\text{Hash}_n = \text{SHA-256}\Big(\text{Seq}_n \parallel \text{Timestamp} \parallel \text{ActorRole} \parallel \text{Action} \parallel \text{PayloadHash} \parallel \text{Hash}_{n-1}\Big)$$

<details>
<summary><b>👉 Click to view interactive Audit Verification & Tamper Simulation details</b></summary>

* **On-Demand Verification:** The `/audit` page recalculates hashes sequentially from Sequence #1 to verify chain integrity.
* **Tamper Simulation Test:** Admins can click **"Integrity Break Test"** to inject a simulated alteration into a past record.
* **Real-time Detection:** Chain verification immediately identifies the exact sequence where the cryptographic link was broken.
* **Instant Restore:** One-click rollback restores original hashes and returns status to **Chain Verified**.

</details>

---

### 📊 Animated Circular Compliance Ring
Developed in [app/components/dashboard/ComplianceRing.tsx](file:///d:/SIH-ps2/SIH---26262/aicte-flow/app/components/dashboard/ComplianceRing.tsx):
* **Live Count-Up Animation:** Scores animate dynamically from 0 to target value on page mount.
* **SVG Dashoffset Physics:** Smooth 900ms cubic-bezier circular stroke progression.
* **Tri-Tier Health Thresholds:**
  * 🟢 **$\ge 80\%$ Healthy:** Compliance Verified (Teal `#0D9488`).
  * 🟡 **$60\% - 79\%$ At Risk:** Approaching Expiry / Inspection Due (Amber `#F59E0B`).
  * 🔴 **$< 60\%$ Critical:** Statutory Deficiency Detected (Red `#DC2626`).
* **Decomposed Pillar Scores:** Visualizes granular sub-scores for APH Norms, Statutory Documents, and Conditional Undertakings.

---

### 📜 AICTE APH Norms & Route Engine
AIClear includes built-in calculators adhering to the official AICTE Approval Process Handbook:
* **Standard Intake & Division Rules:** Verifies maximum approved batch quotas.
* **Faculty-Student Ratio (FSR):** Automatically computes required faculty at the benchmark ratio of **1:20**, enforcing strict ceiling round-up.
* **Cadre Proportion Norms:** Verifies required ratios of Professors : Associate Professors : Assistant Professors ($1 : 2 : 6$).
* **Land & Built-up Area Verification:** Validates mega/urban/rural zoning minimums.

---

## 🔄 5. Multi-Route Workflow Architecture

Every application category is routed through a deterministic, policy-governed state machine:

```text
       [ Institution Submits Application ]
                        │
                        ▼
            [ ROUTE SELECTION ENGINE ]
       ┌────────────────┼────────────────┐
       ▼                ▼                ▼
 [ ROUTE 1 ]      [ ROUTE 2 ]      [ ROUTE 3 ]
Scrutiny Only    Scrutiny + EVC   Scrutiny + EVC + SAC/SHC
       │                │                │
       ▼                ▼                ▼
   [ SCRUTINY ] ──Deficiency?──► [ 7-Day Institution Correction ]
       │                                 │
       │◄────────Correction Re-submitted─┘
       ▼
 [ EVC Inspection ] (If Route Requires)
       │
       ▼
 [ SAC/SHC Hearing ] (If Route Requires or Contested)
       │
       ▼
 ╔════════════════════════════════════════════════════════╗
 ║        HUMAN REGULATORY GATE: DECISION PENDING         ║
 ║  Strictly requires authorized Competent Authority sig  ║
 ╚════════════════════════════════════════════════════════╝
       ├── APPROVED ──────────► Approval Letter Issued
       ├── REJECTED ──────────► Rejection Order + Right to Appeal
       └── EXTENSION_GRANTED ─► Conditional Undertakings Logged
```

---

## 🛠️ 6. Quickstart & Local Installation

### Prerequisites
* **Node.js:** v20.x or v22.x LTS (Node.js 24 supported)
* **Package Manager:** `npm` (v10+)
* **Operating System:** Windows, macOS, or Linux

### ⚡ Rapid Local Setup (3 Commands)

```bash
# 1. Clone repository & enter directory
git clone https://github.com/your-org/aicte-flow.git
cd aicte-flow

# 2. Install dependencies & initialize local SQLite database
npm install
npx prisma db push
npm run seed

# 3. Start high-performance Next.js Turbopack development server
npm run dev
```

Open your browser at **[http://localhost:3000](http://localhost:3000)** to launch the portal.

<details>
<summary><b>👉 Click to view environment variables and seed credentials</b></summary>

### Environment Configuration (`.env`)
```ini
DATABASE_URL="file:./dev.db"
NODE_ENV="development"
PORT=3000
```

### Pre-Seeded Demonstration Accounts
| Persona | Email / Account ID | Default Role |
| :--- | :--- | :--- |
| Apex Institute of Technology | `inst_apex` | `INSTITUTION` |
| Dr. R. K. Sharma | `ro_southern` | `REGIONAL_OFFICER` |
| Prof. Sunita Rao | `evc_expert1` | `EVC_COMMITTEE` |
| Justice V. K. Mohan | `sac_member1` | `SAC_SHC_MEMBER` |
| Joint Director P. V. Nair | `bureau_officer1` | `BUREAU_OFFICER` |
| System Administrator | `admin` | `ADMIN` |

*Note: In the demo environment, clicking any persona card on the login page autofills credentials and grants immediate role-scoped access.*

</details>

---

## 🧪 7. Test Suite & Verification Results

AIClear enforces zero-regression test verification for regulatory stage gates, APH formulas, and route catalogs:

### Run Automated Unit Tests
```bash
npm test
```

### Test Suite Execution Output
```text
> aicte-flow@0.1.0 test
> tsx --test src/**/*.test.ts

▶ APH assistive calculations
  ✔ recognizes positive standard intake divisions (0.88ms)
  ✔ rounds required faculty up at the 1:20 benchmark (1.11ms)
✔ APH assistive calculations (3.42ms)

▶ APH route catalogues (SIH26262)
  ✔ defines all five PS route combinations (6.22ms)
  ✔ ends every route at DECISION_PENDING (human gate) (0.20ms)
  ✔ maps application types onto known routes (0.17ms)
✔ APH route catalogues (SIH26262) (7.55ms)

▶ getNextStage
  ✔ walks ONLY_SCRUTINY without skipping the decision gate (0.26ms)
  ✔ walks SCRUTINY_EVC_SAC_SHC in handbook order (0.12ms)
  ✔ treats RE_SCRUTINY as SCRUTINY for progression (0.08ms)
  ✔ supports ONLY_EVC and EVC_SAC_SHC without inventing scrutiny (0.14ms)
  ✔ returns an empty path and no next stage for unknown routes or stages (0.67ms)
  ✔ does not advance beyond the human decision gate on any route (0.18ms)
✔ getNextStage (1.78ms)

▶ stage action gates
  ✔ blocks free advance from EVC_QUEUE, EVC_SCHEDULED, and DECISION_PENDING (0.26ms)
  ✔ allows RO advance at scrutiny / EVC report; blocks return at decision (0.15ms)
✔ stage action gates (0.51ms)

ℹ tests 13 | suites 4 | pass 13 | fail 0 | cancelled 0 | duration_ms 473.35ms
```

### Production Build Verification
```bash
npx next build
```
```text
▲ Next.js 16.4.2 (Turbopack)
✓ Compiled successfully in 1311ms
✓ Finished TypeScript in 4.2s (0 errors)
✓ Generating static pages (14/14) in 338ms
✓ Finalizing page optimization ...
```

---

## 📂 8. Project Structure & Directory Tree

```text
aicte-flow/
├── app/
│   ├── (app)/                       # Authenticated Portal Workspace
│   │   ├── layout.tsx               # AppShell (Sidebar, Topbar, Watermark injection)
│   │   ├── dashboard/page.tsx       # Role-adaptive dashboards (Regional, Bureau, Inst)
│   │   ├── applications/            # Application lifecycle & Dual-Clock views
│   │   ├── audit/                   # SHA-256 Tamper-evident verification interface
│   │   ├── documents/               # Statutory document repository & expiry tracking
│   │   ├── escalations/             # SLA deadline monitor & L1-L3 escalation queue
│   │   ├── evc/                     # Expert Visit Committee inspection management
│   │   ├── reports/                 # Regional pendency & regulatory CSV exports
│   │   └── undertakings/            # Conditional compliance undertaking manager
│   ├── components/
│   │   ├── dashboard/               # ComplianceRing & animated health visualizers
│   │   ├── login/                   # BrandPanel & LoginForm (Preserved public UI)
│   │   └── shared/                  # ChartContainer, EmptyState, Modal dialogs
│   ├── globals.css                  # Design system tokens, glassmorphism, animations
│   └── page.tsx                     # Public authentication gateway & persona switcher
├── prisma/
│   ├── schema.prisma                # Relational schema (Applications, Users, Deadlines)
│   └── seed.ts                      # Multi-role test fixture database seeder
├── public/
│   └── logo.png                     # Official AICTE crest (Used in watermark & branding)
├── src/
│   ├── config/                      # Approval rules, SLA thresholds, stage catalogs
│   └── lib/                         # APH calculation engine, cryptographic audit logic
├── package.json                     # Project manifest, script runners, dependencies
└── README.md                        # Project documentation & SIH 2026 handbook
```

---

## 🛡️ 9. Statutory Safeguards & Production Roadmap

<details>
<summary><b>👉 Click to view production hardening and statutory compliance guarantees</b></summary>

### ⚖️ Statutory Human Authorization Safeguard
* **No Automated Approvals:** In strict adherence to AICTE regulations, automated algorithms only compute advisory compliance scores and flag discrepancies.
* **Human Signature Requirement:** Advance past `DECISION_PENDING` strictly requires authentication by designated AICTE officers.

### 🚀 Production Deployment Roadmap
1. **SSO & DigiLocker Gateway:** Integration with Jan Parichay (National Single Sign-On) and DigiLocker API for instant statutory certificate verification.
2. **PostgreSQL Migration:** Transition from local SQLite to high-availability PostgreSQL with read replicas and row-level security (RLS).
3. **Geo-Fenced EVC Telemetry:** Mobile PWA companion app with GPS coordinate verification and tamper-proof photo timestamping for campus inspection visits.
4. **AI Evidence Extraction:** Fast OCR pipeline extracting land area, building permits, and fire safety validity dates from scanned PDFs with confidence scores.

</details>

---

<div align="center">

### APPROVIA
**Rule-Driven · Evidence-Linked · Human-Authorized**

*Developed for Smart India Hackathon 2026 | Problem Statement SIH26262*

</div>