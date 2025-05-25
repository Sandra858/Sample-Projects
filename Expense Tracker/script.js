// ===========For the Dark mode toggle button==========
const toggleBtn = document.getElementById("mode-toggle");

toggleBtn.addEventListener("click",() =>{
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.replace("dark-mode", "light-mode");
        toggleBtn.textContent = '🌙';
    } else {
        document.body.classList.replace("light-mode", "dark-mode");
        toggleBtn.textContent = '🌞';
    }
});



// ===================================================================//