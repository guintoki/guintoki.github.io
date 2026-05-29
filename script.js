// ============================================
// Portfolio - Guilherme Vilas Boas Roberto
// Modern Interactive Features
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initNavbar();
  initThemeToggle();
  initLanguageSwitcher();
  initCarousels();
  initProjectToggle();
  initSmoothScroll();
});

// ─── Scroll Reveal Animations ────────────────────────────────────
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          entry.target.style.transitionDelay = `${delay * 150}ms`;
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  reveals.forEach((el) => observer.observe(el));
}

// ─── Sticky Navbar + Active Section ──────────────────────────────
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  // Scrolled class for glass effect
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Active section tracking
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`,
            );
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

// ─── Dark Mode Toggle + Persistence ─────────────────────────────
function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (
    savedTheme === "dark" ||
    (!savedTheme &&
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light",
    );
  });
}

// ─── i18n Language Switcher ──────────────────────────────────────
const translations = {
  pt: {
    "nav.projects": "Projetos",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "hero.badge": "Disponível para novos projetos",
    "hero.greeting": "Olá! Sou o",
    "hero.name": "Guilherme",
    "hero.subtitle":
      "Software Engineer especializado em criar experiências digitais excepcionais com foco em performance, acessibilidade e design.",
    "hero.cta.projects": "Ver Projetos",
    "hero.cta.contact": "Entrar em Contato",
    "companies.title": "Empresas que confiam no meu trabalho",
    "projects.title": "Projetos selecionados",
    "projects.subtitle":
      "Experiências web impactantes, intuitivas e acessíveis para todos.",
    "projects.showMore": "Mostrar mais",
    "projects.showLess": "Mostrar menos",
    "project.1.title": "RD Station CRM",
    "project.1.description":
      "Desenvolvi novas funcionalidades para o RD Station CRM, empregando tecnologias como Ruby on Rails, React e Angular. Atuei diretamente nos times de internacionalização e desenvolvimento de novas features, implementando soluções inovadoras voltadas para o mercado latino-americano.",
    "project.2.title": "RD Station Marketing",
    "project.2.description":
      "Desenvolvi novas funcionalidades para o RD Station Marketing, utilizando Ruby on Rails, React e Angular. Contribuí ativamente no time de internacionalização, criando soluções direcionadas ao mercado latino-americano e implementando ferramentas robustas de suporte à internacionalização.",
    "project.3.title": "Letrus",
    "project.3.description":
      "Trabalhei no desenvolvimento do site da Letrus, uma plataforma voltada para escrita e correção de redações, utilizando React e Typescript. Implementei novas funcionalidades, corrigi bugs e realizei refatorações significativas para adaptar o projeto a novas stacks.",
    "project.4.title": "Letrus App",
    "project.4.description":
      "Desenvolvi o aplicativo mobile da Letrus utilizando React Native e Typescript. Implementei novas funcionalidades, além de realizar a publicação e manutenção contínua do aplicativo nas lojas oficiais.",
    "project.5.title": "MakeProgress Ai",
    "project.5.description":
      "Desenvolvi novas funcionalidades utilizando React e Next.js, criando componentes, layouts e implementando features inovadoras que utilizam inteligência artificial para gerar resultados de alto valor para os clientes.",
    "project.6.title": "Diwo Maplead",
    "project.6.description":
      "Desenvolvi novas funcionalidades para o Diwo Maplead utilizando Typescript, React e Next.js. Atuei na implementação de features avançadas e na manutenção contínua do projeto, garantindo sua evolução e estabilidade.",
    "project.7.title": "GIPE",
    "project.7.description":
      "Atuei no GIPE (Gestão de Intercorrência de Proteção Escolar), projeto em produção voltado para centralizar e armazenar registros de intercorrências de forma prática e segura. Trabalhei de ponta a ponta na evolução da solução, participando das decisões iniciais, do entendimento do fluxo operacional e do acompanhamento do deploy, com front-end em Next.js e backend em Django.",
    "about.title": "Soluções digitais que fazem a diferença.",
    "about.description":
      "Engenheiro de Software com mais de 6 anos de experiência consolidada em desenvolvimento full-stack. Graduado em Análise e Desenvolvimento de Sistemas pelo IFSP e pós-graduado em Engenharia de Software pela PUC Minas, possuo sólida expertise em desenvolvimento frontend e backend. Minha trajetória profissional inclui ampla experiência no desenvolvimento de aplicações web e mobile, integração e construção de APIs, implementação de ferramentas de internacionalização e na manutenção e evolução de projetos complexos.",
    "about.skills.label": "Principais habilidades:",
    "about.cat.frontend": "Frontend",
    "about.cat.backend": "Backend",
    "about.cat.cloud": "Cloud & Arquitetura",
    "about.cat.db": "Banco de Dados",
    "about.cta": "Entre em contato",
    "contact.title": "Vamos conversar?",
    "contact.subtitle":
      "Entre em contato comigo para discutir oportunidades ou colaborações!",
  },
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.badge": "Available for new projects",
    "hero.greeting": "Hello! I'm",
    "hero.name": "Guilherme",
    "hero.subtitle":
      "Software Engineer specialized in creating exceptional digital experiences focused on performance, accessibility, and design.",
    "hero.cta.projects": "View Projects",
    "hero.cta.contact": "Get in Touch",
    "companies.title": "Companies that trust my work",
    "projects.title": "Selected Projects",
    "projects.subtitle":
      "Impactful, intuitive, and accessible web experiences for everyone.",
    "projects.showMore": "Show more",
    "projects.showLess": "Show less",
    "project.1.title": "RD Station CRM",
    "project.1.description":
      "Developed new features for RD Station CRM using Ruby on Rails, React, and Angular. Worked directly with the internationalization and new features teams, implementing innovative solutions for the Latin American market, as well as advanced internationalization support tools.",
    "project.2.title": "RD Station Marketing",
    "project.2.description":
      "Developed new features for RD Station Marketing using Ruby on Rails, React, and Angular. Actively contributed to the internationalization team, creating solutions for the Latin American market and implementing robust internationalization support tools.",
    "project.3.title": "Letrus",
    "project.3.description":
      "Developed the Letrus website, a platform focused on writing and essay correction, using React and Typescript. Implemented new features, fixed bugs, and performed significant refactoring to adapt the project to new stacks.",
    "project.4.title": "Letrus App",
    "project.4.description":
      "Developed the Letrus mobile app using React Native and Typescript. Implemented new features, as well as continuous publishing and maintenance of the app on official stores.",
    "project.5.title": "MakeProgress Ai",
    "project.5.description":
      "Developed new features using React and Next.js, creating components, layouts, and implementing innovative features that use artificial intelligence to generate high-value results for clients.",
    "project.6.title": "Diwo Maplead",
    "project.6.description":
      "Developed new features for Diwo Maplead using Typescript, React, and Next.js. Worked on implementing advanced features and continuous maintenance of the project, ensuring its evolution and stability.",
    "project.7.title": "GIPE",
    "project.7.description":
      "Worked on GIPE (School Protection Incident Management), a production system focused on centralizing and securely storing incident records in a practical way. I contributed end to end to the solution's evolution, from the initial decision-making and operational flow analysis to deployment tracking, with a Next.js frontend and Django backend.",
    "about.title": "Digital solutions that make a difference.",
    "about.description":
      "Software Engineer with over 6 years of solid experience in full-stack development. Graduated in Systems Analysis and Development from IFSP and post-graduated in Software Engineering from PUC Minas, with solid expertise in frontend and backend development. My professional journey includes extensive experience in developing web and mobile applications, integrating and building APIs, implementing internationalization tools, and maintaining and evolving complex projects.",
    "about.skills.label": "Key skills:",
    "about.cat.frontend": "Frontend",
    "about.cat.backend": "Backend",
    "about.cat.cloud": "Cloud & Architecture",
    "about.cat.db": "Databases",
    "about.cta": "Get in touch",
    "contact.title": "Let's talk?",
    "contact.subtitle":
      "Contact me to discuss opportunities or collaborations!",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function initLanguageSwitcher() {
  const select = document.getElementById("lang-select");
  const savedLang = localStorage.getItem("language") || "pt";

  select.value = savedLang;
  if (savedLang !== "pt") setLanguage(savedLang);

  select.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  });
}

// ─── Carousels ───────────────────────────────────────────────────
function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    if (carousel.dataset.initialized) return;
    carousel.dataset.initialized = "true";

    const images = carousel.querySelectorAll("img");
    let current = 0;
    let autoPlay;

    function show(index) {
      images.forEach((img, i) => img.classList.toggle("active", i === index));
    }

    carousel.querySelector(".carousel-prev")?.addEventListener("click", () => {
      current = current > 0 ? current - 1 : images.length - 1;
      show(current);
      resetAutoPlay();
    });

    carousel.querySelector(".carousel-next")?.addEventListener("click", () => {
      current = current < images.length - 1 ? current + 1 : 0;
      show(current);
      resetAutoPlay();
    });

    function startAutoPlay() {
      autoPlay = setInterval(() => {
        current = current < images.length - 1 ? current + 1 : 0;
        show(current);
      }, 4000);
    }

    function resetAutoPlay() {
      clearInterval(autoPlay);
      startAutoPlay();
    }

    startAutoPlay();
  });
}

// ─── Projects Show More / Less ───────────────────────────────────
function initProjectToggle() {
  const showMoreBtn = document.getElementById("show-more-btn");
  const showLessBtn = document.getElementById("show-less-btn");
  const extraProjects = document.querySelectorAll(".extra-project");

  showMoreBtn?.addEventListener("click", () => {
    extraProjects.forEach((project, i) => {
      project.classList.add("visible");
      project.style.animationDelay = `${i * 150}ms`;
    });
    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline-flex";

    // Init carousels for newly visible projects
    setTimeout(() => initCarousels(), 100);
  });

  showLessBtn?.addEventListener("click", () => {
    extraProjects.forEach((project) => {
      project.classList.remove("visible");
      project.style.animationDelay = "";
    });
    showMoreBtn.style.display = "inline-flex";
    showLessBtn.style.display = "none";

    document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" });
  });
}

// ─── Smooth Scroll for Anchor Links ─────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}
