const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
  document.querySelector("main").inert = false;
  document.querySelector("footer").inert = false;
}

menuButton.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
  document.querySelector("main").inert = willOpen;
  document.querySelector("footer").inert = willOpen;
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});

window.matchMedia("(min-width: 801px)").addEventListener("change", closeMenu);

const flow = document.querySelector(".flow");
if (flow && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      flow.classList.add("is-visible");
      observer.disconnect();
    }
  }, { threshold: 0.3 });
  observer.observe(flow);
} else if (flow) {
  flow.classList.add("is-visible");
}
