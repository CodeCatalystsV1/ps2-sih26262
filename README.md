# AIClear — Approval Intelligence
**Integrated AICTE Approval Workflow Automation, Compliance Monitoring and Alert Management System**  
**Smart India Hackathon 2026 | Problem Statement: SIH26262**
> A prototype for evidence-driven institutional approval workflows, proactive compliance tracking, and accountable regulatory operations. This is **not** an official AICTE service.

## 1. Overview
AIClear brings application tracking, compliance checks, deadline management, officer workspaces, inspections, and audit records into one platform.

## 2. Problem Context
AICTE approval processes involve multiple application categories, officers, committees, documents, and timelines.
Operational challenges that this prototype aims to address include:
- Understanding application status and ownership across handoffs.
- Identifying missing, inconsistent, or expired evidence early.
- Separating council processing delays from institution response time.
- Managing inspection reports and supporting evidence consistently.
- Updating compliance criteria as applicable handbook requirements evolve.

## 3. Objectives
- Guide applications through configured, category-dependent workflow routes.
- Monitor deadlines and generate reminders or escalation events.
- Support selected faculty, cadre, intake, and undertaking calculations.
- Track the validity and review status of compliance documents.
- Record important actions in a tamper-evident audit history.
- Extend the prototype with evidence-linked AI document assistance.

## 4. Main Capabilities and Status
| Capability | Purpose | Repository status |
|---|---|---|
| Multi-route workflow | Guarded application stages and transitions | Core modules implemented; full journey needs testing |
| Role-oriented screens | Workspaces for institutions and council actors | Present; production authorization needs hardening |
| Deadline and escalation engine | Due dates, reminders, escalation logic | Implemented; scheduler deployment must be configured |
| Dual-clock accountability | Separates council and institution processing time | Implemented in domain logic; transitions need validation |
| APH calculations | Selected faculty, cadre, and intake checks | Assistive calculations; validate against applicable handbook |
| Compliance monitoring | Documents, undertakings, validity dates | Prototype capabilities present |
| EVC management | Scheduling, observations, and report review | Screens/actions present; test end-to-end |
| Audit hash chain | Detects alterations in recorded events | Hashing and verification logic implemented |
| AI document intelligence | OCR, extraction, rule comparison, evidence links | **Planned**, not confirmed integrated |
| Government SSO / DigiLocker | Verified identity and document integrations | **Planned**; requires authorized access |

## 5. User Roles
| Role | Intended responsibilities |
|---|---|
| `INSTITUTION` | Submit applications, upload evidence, answer deficiencies |
| `REGIONAL_OFFICER` | Scrutinize cases, record remarks, coordinate inspections |
| `EVC_COMMITTEE` | Record inspections and submit findings/evidence |
| `SAC_SHC_MEMBER` | Review referred committee or hearing matters |
| `BUREAU_OFFICER` | Oversee queues, escalations, referrals, and authorized decisions |
| `SYSTEM_ADMIN` | Configure rules, users, demo tools, and audit verification |
Production use requires verified server-side permissions and isolation of each institution's records.

## 6. Application Workflow
```text
Institution submission
       ↓
Configured application route
       ↓
Scrutiny and compliance review
       ├── Deficiency found → Institution correction → Re-review
       ↓
EVC inspection (if applicable)
       ↓
Committee/hearing review (if applicable)
       ↓
Decision by authorized authority
       ↓
Outcome, notifications, and audit events
```

## 7. Proposed AI Document Intelligence
A future document pipeline will perform:
1. Safe PDF/image upload with file-type and integrity checks.
2. Native PDF text extraction or OCR for scanned evidence.
3. Structured extraction of dates, reference numbers, issuer, and other fields.
4. Comparison with versioned, applicable regulatory conditions.
5. Flagging of potential inconsistencies with source references and confidence.
6. Officer acceptance, correction, or rejection of suggested findings.
7. Audit logging of verified outcomes and workflow actions.

## 8. Compliance and SLA Intelligence
The current design tracks stage deadlines, document expiry, undertakings, and configurable reminders.
**Dual-clock tracking** distinguishes time spent in council processing from time awaiting an institution's response.
A planned explainable risk view can prioritize unresolved deficiencies, imminent deadlines, and processing bottlenecks.

## 9. EVC and Audit Safeguards
EVC screens are intended for scheduling visits, recording checklist observations, attaching evidence, and reviewing reports.
The audit system links entries using SHA-256 hash chaining, allowing many unauthorized changes to be detected during verification.
Hash chaining alone does **not** create immutable storage; production requires protected records, access controls, backups, and monitoring.

## 10. Technology Stack
| Layer | Technology |
|---|---|
| Web UI and application APIs | Next.js App Router + TypeScript |
| Styling and visualizations | Tailwind CSS, Recharts, Lucide React |
| Database access | Prisma ORM |
| Local database | SQLite |
| Date handling | date-fns |
| Audit hashing | Node.js `crypto` / SHA-256 |
| Notifications | In-app and configurable email/SMS paths |
| Planned document service | Python FastAPI + PDF extraction/OCR |
| Possible production database | PostgreSQL, after migration and testing |

## 11. Project Structure
```text
aicte-flow/
├── app/                 # Authenticated pages, APIs, layouts, shared UI
├── prisma/              # Data schema and optional seed scripts
├── src/config/          # Route and rule configuration
├── src/lib/             # Auth, workflows, deadlines, APH, audit, notifications
├── scripts/             # Development utilities
├── public/              # Static assets
├── .env.example         # Environment template (if present)
└── package.json         # Dependencies and runnable scripts
```

## 12. Local Setup
**Prerequisites:** Git, npm, and a Node.js version supported by the installed Next.js release (Node.js 20+ is recommended; verify the package requirements).
```bash
git clone <repository-url>
cd aicte-flow
npm install
cp .env.example .env      # only if the file exists
npx prisma db push
npm run seed               # only if configured in package.json
npm run dev
```
Open **http://localhost:3000**. Check `package.json`, `.env.example`, and `prisma/schema.prisma` for the exact scripts and database variables in your checkout.

## 13. Suggested Demo Flow
1. Sign in with a configured institution account and inspect an application.
2. Switch to a regional officer, review information, and record a deficiency if the action works.
3. Respond as the institution and verify that state and dual-clock indicators change.
4. Demonstrate an EVC checklist/report using a seeded case, where available.
5. Run a deadline evaluation or demo-clock tick if the repository supports it.
6. Review an expiring document and its linked compliance record.
7. Open audit history and run hash-chain verification.

## 14. Testing and Production Readiness
Validate permissions, institution-level access boundaries, allowed stage transitions, deadline behavior, and audit checks.
Run only scripts that exist in `package.json`, such as `npx tsc --noEmit`, `npm test`, and `npm run build`.
Before real deployment, replace demo authentication, verify statutory rules, secure file storage, configure workers and messaging providers, and complete privacy/security reviews.

## 15. Roadmap
1. **Stabilize the prototype:** Confirm role journeys, seeded data, scrutiny, EVC, deadlines, and audit behavior.
2. **Add document intelligence:** Integrate extraction, OCR, structured findings, and human review.
3. **Govern rules:** Add handbook section references, academic-year versions, approvals, and regression tests.
4. **Add explainable prioritization:** Show evidence-backed bottleneck and deadline reasons.
5. **Harden for deployment:** Secure identity, PostgreSQL, protected storage, observability, backups, and authorized integrations.

---
**AIClear — Evidence-linked. Rule-driven. Human-authorized.**
