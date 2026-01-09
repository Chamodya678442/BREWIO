// Active nav link based on current page
(function setActiveNav(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach(a=>{
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();

// Menu filter (menu.html)
(function menuFilter(){
  const pills = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll("[data-category]");
  if(!pills.length || !items.length) return;

  pills.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      pills.forEach(p=>p.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter; 
      items.forEach(card=>{
        const cat = card.dataset.category;
        const show = filter === "all" || cat === filter;
        card.style.display = show ? "" : "none";
      });
    });
  });
})();

// Smooth scroll button (index) 
(function scrollDown(){
  const down = document.getElementById("downBtn");
  const target = document.getElementById("next");
  if(!down || !target) return;
  down.addEventListener("click", ()=> target.scrollIntoView({behavior:"smooth"}));
})();

// Newsletter demo 
(function newsletter(){
  const formBtn = document.getElementById("joinBtn");
  const input = document.getElementById("emailInput");
  if(!formBtn || !input) return;

  formBtn.addEventListener("click", ()=>{
    const email = input.value.trim();
    if(!email || !email.includes("@")) return alert("Please enter a valid email.");
    alert("Thanks! You’re subscribed.");
    input.value = "";
  });
})();
