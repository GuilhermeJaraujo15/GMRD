// Smooth Scroll
function scrollToSection(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    // Fecha menu mobile se estiver aberto
    const navMenu = document.getElementById("navMenu")
    navMenu.classList.remove("active")
  }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Fecha menu ao clicar em um link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href").substring(1)
    scrollToSection(targetId)
  })
})

// Navbar scroll effect
let lastScroll = 0
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.style.background = "rgba(26, 20, 68, 0.98)"
    navbar.style.boxShadow = "0 4px 20px rgba(145, 2, 255, 0.1)"
  } else {
    navbar.style.background = "rgba(26, 20, 68, 0.95)"
    navbar.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Form Submit
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  contactForm.reset()
})

// Animações ao scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Aplica animação aos cards
const animatedElements = document.querySelectorAll(".card, .team-card, .portfolio-card, .info-card, .feature-item")
animatedElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "all 0.6s ease"
  observer.observe(el)
})
