const content = {
  es: {
    strings: {
      role: "Ingeniero de Software Junior · Full Stack",
      location: "Alajuela, Costa Rica",
      about: "Sobre mí",
      aboutText: "Soy una persona apasionada por la tecnología, la música y los deportes, me gusta crear interfaces limpias, aplicaciones mantenibles y resolver problemas. Me gusta trabajar con código claro, buenas prácticas y una experiencia de usuario bien cuidada.",
      technology: "Tecnologías",
      experience: "Experiencia",
      projects: "Proyectos",
      education: "Formación",
      contact: "Contacto",
      footerText: "® Desarrollado por Felipe Brenes Conejo - 2026",
    },
    technologies: [
      "C#",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML5",
      "CSS3",
      "ASP.NET MVC",
      "SQL Server",
      "Git",
      "GitHub",
    ],
    experience: [
      {
        title: "Software QA Tester & Camera Calibrator",
        subtitle: "Bounce Imaging",
        description: "Pruebas manuales y funcionales de los productos y de las aplicaciones que los controlan IOS y Android, ejecución de planes y casos de prueba, análisis y reporte de defectos, trabajando en conjunto con el equipo de desarrollo.",
        date: "2023 - Actualidad",
      },
    ],
    projects: [
      {
        title: "Hotel Management Platform",
        subtitle: "Aplicación web",
        description: "Aplicación de gestión hotelera con arquitectura MVC: CRUD de clientes, empleados, habitaciones y reservas, validación en el servidor y modelo de datos relacional con SQL Server.",
        tags: ["C#", "ASP.NET MVC", "SQL Server"],
        icon: "hotel-bed-5-flat",
        demoUrl: "#",
        repoUrl: "https://github.com/developerFrey/HotelManagement-Project",
      },
      {
        title: "Compilador desarrollado en Java",
        subtitle: "Aplicación de escritorio",
        description: "Analizador léxico, sintáctico y semántico en Java con reconocimiento de tokens y detección de errores léxicos, sintácticos y semánticos en estructuras de código fuente de visual basic.",
        tags: ["Java"],
        icon: "compiler-explorer",
        demoUrl: "#",
        repoUrl: "https://github.com/developerFrey/JavaCompiler-Project",
      },
      {
        title: "Infraestructura de red empresarial",
        subtitle: "Cisco IOS · GNS3",
        description: "Diseño y configuración de un entorno de red con VLANs, DHCP, IPv6 y router-on-a-stick, validando la conectividad entre segmentos en GNS3.",
        tags: ["Cisco IOS", "GNS3"],
        icon: "cics-program",
        demoUrl: "#",
        repoUrl: "#",
      },
    ],
    education: [
      {
        title: "Ingeniería en Informática",
        subtitle: "UNED · Bachillerato universitario",
        description: "Formación en programación, bases de datos, redes y ciclo de vida del desarrollo de software. Incluye diplomado en Tecnologías de la Información.",
        date: "2024 - Esperado 2026",
      },
      {
        title: "Diplomado en Informática",
        subtitle: "UNED · Diplomado",
        description: "Formación especializada en tecnologías de la información, incluyendo gestión de bases de datos, programación, redes y seguridad informática.",
        date: "2021 - 2024",
      },
    ],
  },
  en: {
    strings: {
      role: "Junior Software Engineer · Full Stack",
      location: "Alajuela, Costa Rica",
      about: "About me",
      aboutText: "I'm passionate about technology, music and sports; I enjoy building clean interfaces, maintainable applications and solving problems. I like working with clear code, good practices and a well-crafted user experience.",
      technology: "Technologies",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      footerText: "® Developed by Felipe Brenes Conejo - 2026",
    },
    technologies: [
      "C#",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML5",
      "CSS3",
      "ASP.NET MVC",
      "SQL Server",
      "Git",
      "GitHub",
    ],
    experience: [
      {
        title: "Software QA Tester & Camera Calibrator",
        subtitle: "Bounce Imaging",
        description: "Manual and functional testing of the products and the iOS and Android apps that control them, execution of test plans and cases, analysis and reporting of defects, working together with the development team.",
        date: "2023 - Present",
      },
    ],
    projects: [
      {
        title: "Hotel Management Platform",
        subtitle: "Web application",
        description: "Hotel management application built with MVC architecture: CRUD for customers, employees, rooms and reservations, server-side validation and a relational data model with SQL Server.",
        tags: ["C#", "ASP.NET MVC", "SQL Server"],
        icon: "hotel-bed-5-flat",
        demoUrl: "#",
        repoUrl: "https://github.com/developerFrey/HotelManagement-Project",
      },
      {
        title: "Compiler developed in Java",
        subtitle: "Desktop application",
        description: "Lexical, syntactic and semantic analyzer in Java with token recognition and detection of lexical, syntactic and semantic errors in Visual Basic source code structures.",
        tags: ["Java"],
        icon: "compiler-explorer",
        demoUrl: "#",
        repoUrl: "https://github.com/developerFrey/JavaCompiler-Project",
      },
      {
        title: "Enterprise network infrastructure",
        subtitle: "Cisco IOS · GNS3",
        description: "Design and configuration of a network environment with VLANs, DHCP, IPv6 and router-on-a-stick, validating connectivity between segments in GNS3.",
        tags: ["Cisco IOS", "GNS3"],
        icon: "cics-program",
        demoUrl: "#",
        repoUrl: "#",
      },
    ],
    education: [
      {
        title: "Computer Engineering",
        subtitle: "UNED · Bachelor's degree",
        description: "Training in programming, databases, networks and the software development lifecycle. Includes a diploma in Information Technology.",
        date: "2024 - Expected 2026",
      },
      {
        title: "Diploma in Information Technology",
        subtitle: "UNED · Diploma",
        description: "Specialized training in information technologies, including database management, programming, networking and information security.",
        date: "2021 - 2024",
      },
    ],
  },
};

const icons = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m4 6 8 7 8-7"/><rect x="3" y="5" width="18" height="14" rx="2"/></svg>',
  "file-text": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6"/><path d="M9 17h6"/><path d="M9 9h1"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a10.4 10.4 0 0 0-6 0C8 2 7 2 7 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 6 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1.2-.8 2-.2.8-.2 1.6-.2 1.5v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  "map-pin": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
  link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1"/><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
};

const renderIcons = () => {
  document.querySelectorAll("[data-icon]").forEach((element) => {
    const icon = element.dataset.icon;
    element.innerHTML = icons[icon] ?? "";
  });
};

const techIcons = {
  "C#": "cs",
  Java: "java-dark",
  Python: "python-dark",
  JavaScript: "javascript",
  TypeScript: "typescript",
  SQL: "sql",
  HTML5: "html",
  CSS3: "css",
  "ASP.NET MVC": "dotnet",
  "SQL Server": "sqlserver",
  PostgreSQL: "postgresql-dark",
  MySQL: "mysql",
  Git: "git",
  GitHub: "github-dark",
};

const createTechnology = (name) => {
  const icon = techIcons[name];
  const glyph = icon
    ? `<img class="tag__icon" src="./assets/icons/${icon}.svg" alt="${name}" />`
    : `<span data-icon="code"></span>`;
  return `<span class="tag">${glyph}</span>`;
};

const createTimelineItem = (item) => `
  <article class="timeline-item">
    <span class="dot" aria-hidden="true"></span>
    <div>
      <h3 class="item__title">${item.title}</h3>
      <p class="item__subtitle">${item.subtitle}</p>
      <p class="item__description">${item.description}</p>
    </div>
    <span class="badge">${item.date}</span>
  </article>
`;

const createProject = (project) => {
  const preview = project.icon
    ? `<img class="project__preview__icon" src="./assets/icons/${project.icon}.svg" alt="" />`
    : "FB";
  return `
  <article class="project">
    <span class="dot" aria-hidden="true"></span>
    <div>
      <h3 class="item__title">${project.title}</h3>
      <p class="item__subtitle">${project.subtitle}</p>
      <p class="item__description">${project.description}</p>
      <div class="project__tags">
        ${project.tags.map((tag) => `<span class="project__tag">${tag}</span>`).join("")}
      </div>
      <div class="item__links">
        <a class="icon-link" href="${project.demoUrl}" aria-label="Ver demo de ${project.title}">
          <span data-icon="link"></span>
        </a>
        <a class="icon-link" href="${project.repoUrl}" target="_blank" rel="noreferrer" aria-label="Ver repositorio de ${project.title}">
          <span data-icon="github"></span>
        </a>
      </div>
    </div>
    <div class="project__preview" aria-hidden="true">${preview}</div>
  </article>
`;
};

const mount = (selector, html) => {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = html;
  }
};

let currentLang = "es";

const setLanguage = (lang) => {
  currentLang = lang;
  const data = content[lang];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = data.strings[element.dataset.i18n];
    if (value) element.textContent = value;
  });
  mount("#technologies", data.technologies.map(createTechnology).join(""));
  mount("#experience", data.experience.map(createTimelineItem).join(""));
  mount("#projects", data.projects.map(createProject).join(""));
  mount("#education", data.education.map(createTimelineItem).join(""));
  renderIcons();
  const toggle = document.querySelector("#lang-toggle");
  if (toggle) toggle.textContent = lang === "es" ? "EN" : "ES";
};

const initEmailCopy = () => {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(email);
      } catch (error) {
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        textarea.remove();
      }
      button.classList.add("is-copied");
      button.setAttribute("aria-label", "Correo copiado");
      setTimeout(() => {
        button.classList.remove("is-copied");
        button.setAttribute("aria-label", "Copiar correo");
      }, 1600);
    });
  });
};

//funcion para generar capas de estrellas en el fondo
const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];
const generateSpaceLayer = (size, selector, totalStars, duration) => {
  const layer = [];
  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y+100}vh 0 ${color}`);
  }
  const container = document.querySelector(selector);
  container.style.setProperty("--space-layer", layer.join(","));
  container.style.setProperty("--size", size);
  container.style.setProperty("--duration", duration);
};

generateSpaceLayer("1px", ".space-1", 200, "25s");
generateSpaceLayer("2px", ".space-2", 100, "20s");
generateSpaceLayer("4px", ".space-3", 25, "15s");

initEmailCopy();

const initLangToggle = () => {
  const button = document.querySelector("#lang-toggle");
  if (!button) return;
  button.addEventListener("click", () => {
    setLanguage(currentLang === "es" ? "en" : "es");
  });
};

setLanguage("es");
initLangToggle();
