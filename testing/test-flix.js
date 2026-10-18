// ទាញយក ელემენტ (Elements) មកប្រើប្រាស់
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".close-btn");
const closeModalBtn = document.getElementById("closeModalBtn");

// នៅពេលចុចប៊ូតុងបើក ឱ្យបង្ហាញ Modal
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// នៅពេលចុចលើសញ្ញាខ្វែង (X) ឱ្យបិទ Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// នៅពេលចុចលើប៊ូតុង "យល់ព្រម" ឱ្យបិទ Modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// នៅពេលចុចលើផ្ទៃខាងក្រោយស្រអាប់ក្រៅប្រអប់ Modal ឱ្យបិទវាដែរ
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});