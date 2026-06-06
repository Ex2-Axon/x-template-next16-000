# Template Content Pattern

วางไฟล์รายละเอียดของแต่ละเทมเพลตในโฟลเดอร์นี้ โดยใช้ชื่อไฟล์ตรงกับชื่อ slug ของรูปภาพใน `public/`

ตัวอย่าง:

- `public/next16-p0a.png`
- `content/templates/next16-p0a.json`

## โครงสร้างไฟล์ JSON

```json
{
  "description": "คำอธิบายสั้นๆ ของเทมเพลต",
  "longDescription": "คำอธิบายยาวที่แสดงในหน้ารายละเอียด",
  "features": [
    "ฟีเจอร์ข้อที่ 1",
    "ฟีเจอร์ข้อที่ 2",
    "ฟีเจอร์ข้อที่ 3"
  ],
  "useCases": [
    "เหมาะสำหรับ ...",
    "เหมาะสำหรับ ..."
  ],
  "paymentLink": "https://microtronic-thailand.github.io/micro-payment/",
  "vercelLink": "https://next16-p0a.vercel.app/",
  "githubLink": "https://github.com/Ex2-Axon/next16-p0a"
}
```

ถ้าไฟล์ไม่พบ ระบบจะใช้ข้อความเริ่มต้นอัตโนมัติจากโค้ดแทน (fallback text)
