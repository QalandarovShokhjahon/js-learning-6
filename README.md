# 🧠 JavaScript Day 6 — For Loop

Bu darsda men **JavaScript’da for loop** bilan ishlashni o‘rgandim.  
Har bir misolda kodlar orqali loopning ishlash tartibini va amaliy misollarni sinab chiqdim.

---

## 📚 O‘rganganlarim / What I learned
**For Loop** (Takrorlash operatori):  

Sintaksisi:  
```javascript
for (boshlangich; shart; qadam) {
    // takrorlanadigan kodlar
}


boshlangich – loop boshlanish qiymati

shart – loop qachon to‘xtashini belgilaydi

qadam – har bir takrorlashdan keyin qiymat qanday o‘zgarishini bildiradi

➤ Kodni bir necha marta takrorlash uchun ishlatiladi.

---

## 💻 Kod namunasi / Example code

// 1️⃣ Oddiy for loop
for (let i = 1; i <= 5; i++) {
    console.log("Salom, dunyo!", i);
}

// 2️⃣ Array elementlarini for loop bilan chiqarish
let fruits = ["Olma", "Banan", "Anor"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 3️⃣ Nested for loop (ichma-ich loop)
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

---

🧩 Qisqacha nazariya / Short Theory

🔹 For loop — kodni belgilangan sonlarda takrorlash uchun ishlatiladi.
🔹 Boshlangich, shart va qadam orqali loop’ning ishlashini boshqarish mumkin.
🔹 Nested (ichma-ich) loop orqali bir nechta loop’larni birgalikda ishlatish mumkin.



🎯 Maqsad / Goal

JavaScript’da for loop’ni ishlatishni o‘rganish

Array yoki qiymatlarni takrorlab ishlash

Nested loop konseptini tushunish va qo‘llash

💬 Muallif / Author

✍️ Shokhjahon Qalandarov
📅 Dars: 6-kun — For Loop
