# Git Development, Status Verification & Backup Workflow Guidelines

ข้อกำหนดและมาตรฐานขั้นตอนการทำงานด้วย Git สำหรับทีม Forge Solutions Lab

---

## ⚠️ กฎเหล็กสำคัญ (Strict Rules & Protocols)

1. **ห้ามแก้ไขหรือ Commit ลงบน Branch `main` โดยเด็ดขาด**
   - ทุกการแก้ไข / ฟีเจอร์ / บั๊กฟิกซ์ **ต้องทำใน branch แยกเท่านั้น**

2. **ต้องตรวจเช็คสถานะ Git ทุกครั้ง (Mandatory Status Verification)**
   - ต้องรัน `git status` และ `git branch` ก่อนเริ่มดำเนินการใด ๆ เพื่อเช็ค branch ปัจจุบัน
   - ต้องรัน `git status` หรือ `git diff` หลังแก้ไขไฟล์ เพื่อตรวจสอบความถูกต้อง ป้องกันการ commit ไฟล์ผิดพลาด

3. **ต้องมี Commit และระบบสำรองข้อมูลเสมอ (Commit & Backup Protocol)**
   - ทุกครั้งที่มีการแก้ไขโค้ด จะต้องทำการบันทึกประวัติด้วย Commit ที่ชัดเจน (`git commit -m "..."`)
   - สำหรับการแก้ไขสำคัญหรือ Refactor โค้ดชุดใหญ่ ให้สร้าง Backup checkpoint ก่อนเริ่มทำเสมอ

4. **การนำโค้ดขึ้น (Integration) ต้องผ่าน Pull Request (PR) เท่านั้น**
   - เมื่อพัฒนาหรือแก้ไขเสร็จใน branch ย่อย ให้ push ขึ้น GitHub แล้วสร้าง PR ไปที่ `main`
   - ห้าม merge เข้า `main` ด้วยตัวเองผ่านคำสั่งในเครื่อง

5. **รอการอนุมัติและ Merge จาก User / Lead**
   - เมื่อตรวจสอบและกด **Merge PR** เข้า `main` บน GitHub เรียบร้อยแล้ว จึงเริ่มงานรอบถัดไป

6. **ขั้นตอนหลัง Merge PR (Sync & Next Branch)**
   - สลับกลับมาที่ `main` และดึงโค้ดล่าสุด (`git pull origin main`)
   - ตรวจสอบ `git status` แล้วจึงแตก branch ใหม่จาก `main` ล่าสุดเพื่อทำงานรอบต่อไป

---

## 🔄 ลำดับขั้นตอนการทำงานมาตรฐาน (Standard Workflow Checklist)

### 1. เช็คสถานะและดึงโค้ดล่าสุดบน `main`
```bash
# ตรวจสอบสถานะและ branch ปัจจุบัน
git status
git branch --show-current

# สลับเข้า main และดึงโค้ดล่าสุด
git checkout main
git pull origin main
```

### 2. สร้าง Branch ใหม่สำหรับงานนั้น ๆ
```bash
git checkout -b feature/your-feature-name
```

### 3. พัฒนา, ตรวจสอบ Diff, และ Commit โค้ด
```bash
# ตรวจสอบไฟล์ที่เปลี่ยนแปลงอย่างละเอียด
git status
git diff

# บันทึก commit พร้อมคำอธิบายที่ชัดเจน
git add <files>
git commit -m "feat: description of changes"

# ตรวจสอบสถานะอีกครั้งหลัง commit
git status
```

### 4. Push Branch ขึ้น Remote เพื่อเปิด PR
```bash
git push -u origin feature/your-feature-name
```

### 5. หลัง Merge เรียบร้อยแล้ว
```bash
# สลับกลับมาที่ main และดึงโค้ดล่าสุด
git checkout main
git pull origin main

# ตรวจสอบสถานะ
git status

# แตก branch ใหม่เพื่อทำงานชิ้นต่อไป
git checkout -b feature/next-task
```
