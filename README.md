# 🧠 JavaScript Day 6 — For Loop

Bu darsda men **JavaScript’da for loop** bilan ishlashni o‘rgandim.  
Har bir misolda kodlar orqali loopning ishlash tartibini va amaliy misollarni sinab chiqdim.

---

## 📚 O‘rganganlarim / What I learned

**For Loop (Sikl operatori)**  
- Kodni bir necha marta avtomatik takrorlash imkonini beradi.  
- Sintaksisi:

```javascript
for (boshlang'ich; shart; o'zgaruvchi oshirish) {
    // takrorlanadigan kod
}

Amaliy misol: 0 dan a gacha bo‘lgan juft sonlar yig‘indisini topish

Juft sonni tekshirish: i % 2 === 0

Yig‘indini hisoblash: sum += i

---

## 💻 Kod namunasi / Example code

```javascript
let a = 10;      // a soni
let sum = 0;     // yig'indini saqlash uchun o'zgaruvchi

for (let i = 0; i <= a; i++) {   // 0 dan a gacha loop
    if (i % 2 === 0) {           // i juft bo'lsa
        sum += i;                // sum ga qo'shish
    }
}

console.log(sum); // Natija: 30

---

🧩 Qisqacha nazariya / Short Theory

🔹 For Loop: Kodni bir necha marta avtomatik takrorlash imkonini beradi.



🎯 Maqsad / Goal

JavaScript’da taqqoslash operatorlarini ishlatishni o‘rganish.

If-Else statements yordamida shartlarni tekshirish va kodni shartga qarab boshqarish.

Mantiqiy operatorlar yordamida bir nechta shartni birlashtirish va inkor qilishni tushunish.

O‘rgangan nazariya va operatorlarni oddiy amaliy misollar orqali mustahkamlash.

💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 5-kun — Comparison Operators, if else & Logical Operators
