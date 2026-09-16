# แผนงานปรับปรุงเว็บไซต์ "Forge Solutions Lab"
### (สำหรับส่งต่อให้ AI Coding Assistant นำไปแก้ไขโค้ดจริงใน Repo)

---

## 0. บริบทโปรเจกต์ (Context — ต้องอ่านก่อนเริ่มแก้โค้ด)

- นี่คือเว็บโปรไฟล์ของบริษัทสมมติชื่อ **Forge Solutions Lab** ที่สร้างขึ้นเพื่องานในชั้นเรียนวิชา **Machine Learning** (ไม่ใช่บริษัทจริง) แต่ต้องทำให้ **ดูสมจริงเหมือนบริษัท AI/Data จริง** ทุกส่วน (โครงสร้าง, เนื้อหา, การเขียนคำ, ดีไซน์)
- Repo: `Forge-Solutions-Lab.github.io` — GitHub Pages (Org/User Site)
- Stack ปัจจุบัน: **React 18 + TypeScript + Vite + Tailwind CSS + Lucide Icons**
- ปัญหาหลักตอนนี้: เว็บทั้งหน้าถูกออกแบบให้เป็น **หน้าขายโปรเจกต์เดียว** (Gen Ticket / AI Proactive Support for Data Center) ไม่ใช่หน้า **Company Profile** ที่บอกว่าเราคือบริษัทอะไร ทำอะไรได้บ้าง
- **กฎสำคัญที่ AI ต้องทำตาม**:
  1. ห้ามลบเนื้อหาของโปรเจกต์เดิม (Gen Ticket / Data Center AI) ทิ้ง — ให้ **ย้าย** ไปไว้เป็น "Featured Project" ใบแรกในหมวด Portfolio แทน เพราะยังไม่มีโปรเจกต์อื่นมาแทน (จะใส่ลวกๆ ไปก่อน แล้วค่อยเปลี่ยนทีหลัง)
  2. ห้ามแก้ชื่อสมาชิกทีมและตำแหน่งที่มีอยู่แล้วใน `Team.tsx` — ใช้ข้อมูลเดิมทั้งหมด แก้แค่ "การนำเสนอ" ให้ดูเป็นมืออาชีพขึ้น (ดูข้อ 5)
  3. เนื้อหาที่เป็น "ตัวตนบริษัท" (About/Services/Tech Stack) ให้อิงจากเนื้อหาที่เรียนในวิชา Machine Learning จริง (สรุปไว้ในข้อ 1 ด้านล่าง) เพื่อให้เว็บดู "มีความรู้จริงหนุนหลัง" ไม่ใช่มโนขึ้นมาลอยๆ

---

## 1. เนื้อหาบริษัท (Company Content) — อิงจากเนื้อหาวิชา ML ที่เรียน

จากสไลด์ `Introduction to Machine Learning` และ `Concept Learning` เราดึงแก่นมาตั้งเป็น "ความเชี่ยวชาญ" ของบริษัทได้ดังนี้ ใช้เป็น copy พร้อมวางในเว็บได้เลย:

### 1.1 Positioning ของบริษัท
> **Forge Solutions Lab** เป็นบริษัทด้าน AI, Machine Learning และ Data Engineering ที่เน้นสร้างระบบที่ "เรียนรู้และแม่นยำขึ้นจากข้อมูลจริง" ไม่ใช่แค่ระบบตามกฎตายตัว — สอดคล้องกับนิยาม ML ที่ว่า *"a computer program improves its performance at some task through experience and data"*

### 1.2 Hero Section (Copy พร้อมใช้)
```text
Headline (EN):  We Build Systems That Learn From Experience
Sub-headline (TH): เราออกแบบและพัฒนาโซลูชัน AI, Machine Learning และ Data Pipeline
                    ที่ฉลาดขึ้นทุกครั้งที่มีข้อมูลใหม่เข้ามา — จากแนวคิด Task, Performance, Experience (T-P-E)
                    ที่เป็นหัวใจของ Machine Learning สู่ระบบที่ใช้งานได้จริงในธุรกิจ

CTA 1: ดูผลงานของเรา (Projects)
CTA 2: ติดต่อเรา (Contact)
```
> หมายเหตุ: การเล่นกับคำว่า "Learn From Experience" คือการดึงนิยาม ML ที่สอนในคาบแรกมาทำเป็น Tagline บริษัทโดยตรง — ให้คงคำนี้ไว้เป็นแกนของ Branding

### 1.3 About Us (Copy พร้อมใช้)
```text
About Us

Forge Solutions Lab ก่อตั้งขึ้นเพื่อนำหลักการ Machine Learning และ Data Engineering
มาแก้ปัญหาทางธุรกิจจริง เราเชื่อว่าระบบที่ดีต้องมี "ประสบการณ์ (Experience)"
เป็นตัวขับเคลื่อน ไม่ใช่แค่กฎที่เขียนตายตัว

ทีมของเราทำงานตั้งแต่การออกแบบ Pipeline ข้อมูล ไปจนถึงการสร้างโมเดล AI
และระบบอัตโนมัติที่ช่วยให้ทีมปฏิบัติงานตัดสินใจได้เร็วและแม่นยำขึ้น

Mission: เปลี่ยนข้อมูลดิบให้เป็นระบบที่ตัดสินใจได้ด้วยตัวเอง
Vision: เป็นพาร์ทเนอร์ด้าน AI ที่ธุรกิจไว้ใจให้ระบบ "เรียนรู้" แทนคน
```

### 1.4 Services / Expertise (4 การ์ด — อิงเนื้อหาที่เรียนจริงในวิชา)

| # | ชื่อบริการ | เนื้อหาอธิบาย (ผูกกับสไลด์ที่เรียน) |
|---|---|---|
| 1 | **Machine Learning Model Development** | ออกแบบระบบ ML โดยยึดกรอบ Well-Posed Learning Problem (Task / Performance / Experience) เพื่อให้ทุกโมเดลมีเป้าหมายวัดผลได้ชัดเจนตั้งแต่ต้น |
| 2 | **Concept Learning & Rule-Based Decision Systems** | สร้างระบบตัดสินใจที่เรียนรู้ขอบเขต "แนวคิด" จากตัวอย่างจริง (อิง Find-S / Candidate Elimination / Version Space) เหมาะกับ Business Rule ที่ต้องปรับตามข้อมูลใหม่ เช่น เกณฑ์ตรวจจับความผิดปกติ (SLA Threshold Rules) |
| 3 | **Data Engineering & Pipeline (Medallion Architecture)** | วางระบบข้อมูลแบบ Bronze → Silver → Gold ให้ข้อมูลดิบกลายเป็นข้อมูลพร้อมใช้ทางธุรกิจ |
| 4 | **AI Agent, RAG & Automation** | สร้างระบบ AI Agent ที่ใช้ RAG และ Text-to-SQL ในการดึงบริบทและตอบสนองอัตโนมัติ พร้อม Human-in-the-loop เพื่อความปลอดภัย |

> ข้อ 2 คือจุดขายเฉพาะตัวที่ไม่มีบริษัททั่วไปพูดถึง — ให้เน้นในเว็บเพราะโยงกับเนื้อหาวิชา Concept Learning โดยตรง (Find-S, Candidate Elimination, Version Space, General-to-Specific Ordering) ทำให้ About/Services ดูมีฐานความรู้จริงรองรับ ไม่ใช่ buzzword ลอยๆ

### 1.5 Technology Stack (รวมของเดิม + เติมจากวิชา)
```text
AI / Machine Learning
  Python, scikit-learn, Concept Learning & Rule Induction,
  RAG (Retrieval-Augmented Generation), Text-to-SQL, LangChain

Data Engineering
  Medallion Architecture (Bronze/Silver/Gold), ETL/ELT, SQL

Frontend
  React, TypeScript, Vite, Tailwind CSS

Backend / Infra
  Node.js / FastAPI, PostgreSQL, Docker, AWS, GitHub Actions
```

### 1.6 Featured Project (ใส่ของเดิมไปก่อนแบบลวกๆ ตามที่ตกลง — ห้ามลบทิ้ง)

ย้ายเนื้อหาโปรเจกต์เดิมทั้งหมด (จาก `Hero.tsx`, `Problem.tsx`, `Solution.tsx`, `KeyFeatures.tsx`, `Stats.tsx`, `TrustedStandards.tsx`) ไปเป็น **1 การ์ดโปรเจกต์เด่น** ในหมวด Projects โดยสรุปเป็น:

```text
ชื่อโปรเจกต์: AI Proactive Support & Automated Ticket Generation Engine
             (Gen Ticket Engine — Data Center Monitoring)

สรุปสั้น: ระบบแจ้งเตือนและออกตั๋วงานอัตโนมัติสำหรับ Data Center แบบ 24/7
         เปลี่ยนงาน Ops จากเชิงรับ (Reactive) เป็นเชิงรุก (Proactive)

Pipeline: IoT Sensor → Medallion Pipeline (Bronze/Silver/Gold)
          → AI Analysis (RAG + Text-to-SQL + SLA Rules)
          → Human-in-the-Loop → Automated Email Ticket

ผลลัพธ์:
  - ลดเวลาตรวจสอบแบบ Manual ลง 95%
  - ความแม่นยำการจำแนก Alert 99.4%
  - ประมวลผลเฉลี่ย 0.3 วินาที/ครั้ง
  - ทำงานตลอด 24/7

Tag: [ AI Agent ]  [ Data Pipeline ]  [ RAG ]  [ Enterprise ]
สถานะ: MVP — โปรเจกต์นี้เป็นตัวอย่างเริ่มต้น จะมีการอัปเดต/เปลี่ยนในอนาคต
```
> ให้แสดง badge เล็กๆ ว่า "Case Study / Concept Project" เพื่อความสุจริตต่อผู้ชม แต่ไม่ต้องเขียนว่า "งานส่งการบ้าน" ตรงๆ — ให้คงความเป็นมืออาชีพไว้

### 1.7 Team
- **ใช้ข้อมูลชื่อ-ตำแหน่งเดิมทั้งหมดใน `Team.tsx` ห้ามเปลี่ยน**
- สิ่งที่ต้องแก้คือ "การนำเสนอ" เท่านั้น (ดูรายละเอียดใน §5 ด้านล่าง) เช่น เอารหัสนักศึกษา (`sid: 675...`) ออกจากสิ่งที่แสดงผลบนหน้าเว็บ (เก็บไว้ใน data ก็ได้ถ้าจำเป็น แต่ไม่ต้อง render), ปรับ Label จาก `RU-01..RU-05` (ธีม Server Rack) ให้ยังคงคอนเซ็ปต์ Data Center ไว้ได้ (มันคือ Branding ที่ดีอยู่แล้ว) แต่เสริมด้วยตำแหน่งงานที่มืออาชีพกำกับคู่กัน

---

## 2. โครงสร้างหน้าเว็บเป้าหมาย (Target Page Architecture)

```text
1. Navbar   : Logo | About | Services | Projects | Team | Contact
2. Hero     : Company tagline + 2 CTA (ตาม §1.2)
3. About Us : Mission/Vision (ตาม §1.3)
4. Services : การ์ด 4 ใบ (ตาม §1.4)
5. Featured Projects : การ์ดโปรเจกต์ (เริ่มมี 1 ใบตาม §1.6, เผื่อ layout รองรับ 3 ใบในอนาคต)
6. Tech Stack : รายการเทคโนโลยี (ตาม §1.5)
7. Team     : การ์ดสมาชิก (คงข้อมูลเดิม ปรับดีไซน์ตาม §5)
8. Contact + Footer : ฟอร์มติดต่อ (ต้องใช้งานได้จริง) + ลิงก์ Social/GitHub + Copyright
```

---

## 3. ปัญหาทางเทคนิคที่ต้องแก้ (Critical — แก้ก่อนอย่างอื่นทั้งหมด)

### 3.1 🔴 [BLOCKER] React ไม่ได้ mount จริง
- ปัญหา: `index.html` มี static HTML + Tailwind CDN hardcode ไว้ ~659 บรรทัด แทนที่จะมี `<div id="root"></div>` และ `<script type="module" src="/src/main.tsx"></script>`
- ผลกระทบ: การแก้โค้ดใน `src/**` ทั้งหมดจะ**ไม่แสดงผลจริง**บนเว็บที่ deploy อยู่ — ต้องแก้เรื่องนี้เป็นอันดับแรกสุด ก่อนแก้อย่างอื่นทุกอย่าง เพราะถ้าไม่แก้ งานที่เหลือทั้งหมดจะไม่มีผล
- วิธีแก้: เขียน `index.html` ใหม่ให้เป็นโครง Vite มาตรฐาน:
```html
<!doctype html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Forge Solutions Lab — AI & Data Engineering</title>
    <meta name="description" content="Forge Solutions Lab: AI, Machine Learning และ Data Engineering solutions ที่เรียนรู้และแม่นยำขึ้นจากข้อมูลจริง" />
    <meta property="og:title" content="Forge Solutions Lab" />
    <meta property="og:description" content="We Build Systems That Learn From Experience" />
    <meta property="og:image" content="/og-image.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
- ⚠️ ต้องลบ meta tag ของ Bolt ที่ตกค้าง (`https://bolt.new/static/og_default.png`) และแทนที่ด้วย OG image ของบริษัทเอง (ทำรูปใหม่ หรือใช้ favicon ไปพลางก่อนก็ได้)

### 3.2 Contact Form ไม่ได้ส่งข้อมูลจริง
- ปัญหา: `Contact.tsx` มีแค่ `setSubmitted(true)` (React state ปลอม) ไม่ได้ส่งไปไหน
- วิธีแก้ (เลือก 1 ทาง เพราะเป็น Static Site บน GitHub Pages):
  - **Formspree** (ง่ายที่สุด, ฟรี): สมัคร endpoint แล้วเปลี่ยน `<form>` ให้ `action="https://formspree.io/f/xxxxx"` `method="POST"` หรือ fetch แบบ AJAX ไปที่ endpoint นั้น
  - หรือ **Resend / Supabase**: ถ้าต้องการเก็บข้อมูลลง DB ด้วย
  - ต้องมี state: `idle | sending | success | error` และแสดงข้อความแจ้งเตือนตามสถานะจริง ไม่ใช่ mock

### 3.3 SEO / Metadata ตกค้าง
- ลบ meta ที่มาจาก Bolt template ทั้งหมด
- เพิ่ม `favicon.ico`/`favicon.svg` ของบริษัทเอง, `robots.txt`, `sitemap.xml` (ถ้าเวลาเหลือ)

---

## 4. แผนงานสร้าง/แก้ Component (แบ่งเป็นเฟส)

### เฟส 1 — Critical Fix (ทำก่อนสุด)
- [ ] แก้ `index.html` ตาม §3.1
- [ ] ตรวจสอบ `src/main.tsx` ว่า import App.tsx และ mount เข้า `#root` ถูกต้อง
- [ ] ทดสอบ `npm run dev` แล้วดูว่าเว็บที่ render มาจาก React จริง ไม่ใช่ static HTML เก่า

### เฟส 2 — โครงสร้าง Component ใหม่
สร้าง Component ใหม่ (ไม่มีในโปรเจกต์ตอนนี้):
- [ ] `About.tsx` — ใช้ copy จาก §1.3
- [ ] `Services.tsx` — การ์ด 4 ใบจาก §1.4 (ใช้ Lucide icon ที่สื่อความหมาย เช่น Brain, GitBranch, Database, Bot)
- [ ] `Projects.tsx` — Layout เป็น Grid การ์ดโปรเจกต์ (รองรับ 1–6 ใบ), ดึงเนื้อหาโปรเจกต์เดิมจาก Hero/Problem/Solution/KeyFeatures/Stats/TrustedStandards มาสรุปเป็นการ์ดเดียวตาม §1.6 (คลิกแล้ว expand หรือไปหน้า detail ก็ได้ ถ้าเวลาไม่พอให้ทำเป็นการ์ด + Modal สรุปพอ)
- [ ] `TechStack.tsx` — แสดงผลตาม §1.5 จัดเป็นหมวดหมู่ (AI/ML, Data, Frontend, Backend/Infra)

แก้ Component เดิม:
- [ ] `Hero.tsx` — เปลี่ยนข้อความทั้งหมดจาก "โปรเจกต์ Data Center" เป็น Company Hero ตาม §1.2 (โครงสร้าง/Layout เดิมใช้ต่อได้ แก้แค่ content)
- [ ] `Navbar.tsx` — อัปเดตเมนูเป็น `About / Services / Projects / Team / Contact` ให้ตรงกับ Section จริงบนหน้าเว็บ (เช็ค anchor link `#about` `#services` ฯลฯ ให้ตรงกับ `id` ของแต่ละ section)
- [ ] `Team.tsx` — ตาม §1.7 (คงข้อมูล เปลี่ยนดีไซน์)
- [ ] `Contact.tsx` — ตาม §3.2
- [ ] `Footer.tsx` — ตรวจสอบลิงก์ Social/GitHub Org ให้ตรงกับของจริง, ใส่ © ปีปัจจุบัน

Component เดิมที่ "ยุบรวม" (ไม่ต้องลบไฟล์ทิ้งทันที แต่เอาเนื้อหาไปใช้ใน Projects.tsx แล้วเลิกเรียกใช้ใน App.tsx):
- `Problem.tsx`, `Solution.tsx`, `KeyFeatures.tsx`, `Stats.tsx`, `TrustedStandards.tsx` → เนื้อหาย้ายไปสรุปใน `Projects.tsx` (ตาม §1.6)

### เฟส 3 — จัดลำดับใน App.tsx
```tsx
<Navbar />
<Hero />
<About />
<Services />
<Projects />     {/* มีเนื้อหาโปรเจกต์เดิมฝังอยู่ในนี้ */}
<TechStack />
<Team />
<Contact />
<Footer />
```

### เฟส 4 — Polish & QA
- [ ] เช็ค Responsive: มือถือ / แท็บเล็ต / เดสก์ท็อป ทุก Section ใหม่
- [ ] เช็ค Dark/Light ให้ Consistent กับ Component เดิม (ถ้ามีระบบ Theme)
- [ ] เช็ค Anchor Link ของ Navbar ทุกอันคลิกแล้วเลื่อนไปถูก Section
- [ ] เช็คว่าไม่มี Placeholder เดิม (Bolt, Lorem Ipsum, sid:) หลงเหลือ
- [ ] รัน `npm run build` แล้วตรวจว่า build ผ่านและ deploy ได้จริงบน GitHub Pages

---

## 5. เกณฑ์ตรวจรับงาน (Acceptance Criteria)

| หัวข้อ | เกณฑ์ผ่าน |
|---|---|
| Root Mount | เปิดเว็บแล้วเนื้อหาที่เห็นมาจาก React component ใน `src/` ไม่ใช่ HTML hardcode |
| Company Identity | หน้าแรกบอกได้ภายใน 5 วินาทีว่า "บริษัทนี้ทำอะไร" ไม่ใช่ขายโปรเจกต์เดียว |
| About/Services/Tech Stack | มีครบ 3 ส่วนนี้ และเนื้อหาต้องมีเรื่อง ML/Concept Learning ปรากฏอยู่จริง |
| Projects | โปรเจกต์เดิมยังอยู่ครบ (ไม่มีข้อมูลหาย) แต่ถูกจัดเป็น "การ์ดผลงาน" ไม่ใช่หน้าเดี่ยวทั้งเว็บ |
| Team | ชื่อ-ตำแหน่งตรงกับของเดิมทุกคน ไม่มี sid/รหัสนักศึกษาโชว์บนหน้าเว็บ |
| Contact Form | กรอกฟอร์มแล้วส่งได้จริง (มี endpoint จริง เช่น Formspree) ไม่ใช่ mock |
| SEO/Meta | ไม่มีร่องรอย Bolt เหลืออยู่ใน `index.html` |
| Responsive | ใช้งานได้ปกติทั้งจอมือถือและเดสก์ท็อป |

---

## 6. บล็อกคำสั่งพร้อมส่งให้ AI Coding Assistant (Copy วางได้เลย)

```text
ช่วยแก้โค้ด React + Vite + TypeScript + Tailwind ของโปรเจกต์เว็บบริษัทสมมติ
"Forge Solutions Lab" ตามแผนงานที่แนบมานี้ โดยทำตามลำดับเฟสที่ระบุไว้ (เฟส 1 → 4)
ห้ามลบข้อมูลโปรเจกต์เดิม (Gen Ticket / Data Center AI) และห้ามเปลี่ยนชื่อ-ตำแหน่ง
สมาชิกทีมใน Team.tsx เนื้อหาบริษัท (About/Services/Tech Stack) ให้อิงตามที่ระบุไว้ในหัวข้อ 1
ของเอกสาร ทำทีละเฟส แล้วสรุปว่าแก้ไฟล์ไหนบ้างในแต่ละเฟสก่อนไปเฟสถัดไป
เริ่มจากเฟส 1 (แก้ index.html ให้ mount React ได้จริง) ก่อนเป็นอันดับแรก
```

---

## 7. หมายเหตุปิดท้าย

- โปรเจกต์ Featured Project ตอนนี้ใส่ของเดิมไปก่อนแบบลวกๆ ตามที่ตกลงกันไว้ — เมื่อคิดโปรเจกต์ใหม่ได้แล้ว ให้กลับมาที่ `Projects.tsx` และเพิ่ม/แทนที่การ์ดได้เลยโดยไม่กระทบโครงสร้างอื่น (เพราะ layout ทำเป็น Grid รองรับหลายการ์ดไว้แล้ว)
- ถ้าต้องการเพิ่ม Blog หรือหน้า Case Study แยก สามารถต่อยอดจากโครงสร้างนี้ได้ในอนาคตโดยไม่ต้องรื้อใหม่
