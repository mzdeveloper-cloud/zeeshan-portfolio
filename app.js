const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
const fallback = [
  {
    title: "Zephyr Health & Safety Portal",
    category: "Web Application",
    description:
      "Zephyr Health & Safety Portal — a carefully crafted responsive interface showcased in Muhammad Zeeshan’s frontend portfolio.",
    tech: "HTML5 · CSS3 · JavaScript",
    imageUrl: "zephyr-portal.png",
    published: true,
  },
  {
    title: "Zephyr Safety Analytics Dashboard",
    category: "Dashboard UI",
    description:
      "Zephyr Safety Analytics Dashboard — a carefully crafted responsive interface showcased in Muhammad Zeeshan’s frontend portfolio.",
    tech: "Charts · Analytics · UI Design",
    imageUrl: "zephyr-dashboard.png",
    published: true,
  },
  {
    title: "MZ Glassmorphism Login Concepts",
    category: "UI Design",
    description:
      "MZ Glassmorphism Login Concepts — a carefully crafted responsive interface showcased in Muhammad Zeeshan’s frontend portfolio.",
    tech: "CSS3 · Glassmorphism · Responsive",
    imageUrl: "mz-login-concepts.png",
    published: true,
  },
  {
    title: "Coffee Review Website",
    category: "Coffee & Editorial",
    description:
      "Coffee Review Website — a carefully crafted responsive interface showcased in Muhammad Zeeshan’s frontend portfolio.",
    tech: "HTML5 · CSS3 · JavaScript",
    imageUrl: "coffee-review.png",
    published: true,
  },
  {
    title: "College Website",
    category: "Education Website",
    description:
      "College Website — a carefully crafted responsive interface showcased in Muhammad Zeeshan’s frontend portfolio.",
    tech: "HTML5 · CSS3 · Responsive",
    imageUrl: "college-website.png",
    published: true,
  },
  {
    title: "Employee Management System",
    category: "Management Dashboard",
    description:
      "Employee Management System — a carefully crafted responsive interface showcased in Muhammad Zeeshan’s frontend portfolio.",
    tech: "JavaScript · Dashboard UI",
    imageUrl: "employee-management.png",
    published: true,
  },
  {
    title: "MZ Employee E-commerce Store",
    category: "E-commerce Website",
    description:
      "MZ Employee E-commerce Store — a carefully crafted responsive interface showcased in Muhammad Zeeshan’s frontend portfolio.",
    tech: "HTML5 · CSS3 · JavaScript",
    imageUrl: "ecommerce-store.png",
    published: true,
  },
];
let projects = [];
function renderProjects(items) {
  const grid = $("#projectsGrid");
  grid.replaceChildren();
  if (!items.length) {
    grid.textContent = "Projects coming soon.";
    return;
  }
  items.forEach((item, i) => {
    const article = document.createElement("article");
    article.className = "project-card glass";
    const visual = document.createElement("div");
    visual.className =
      "project-image " +
      ["dashboard", "dashboard", "dashboard", "coffee", "college", "dashboard", "shop"][i % 7];
    if (item.imageUrl) {
      const img = document.createElement("img");
      img.src = item.imageUrl;
      img.alt = item.title + " screenshot";
      img.loading = "lazy";
      img.className = "project-thumb";
      img.referrerPolicy = "no-referrer";
      visual.append(img);
    } else {
      const title = document.createElement("div");
      title.className = "mock-title";
      title.textContent = item.title;
      visual.append(title);
    }
    const label = document.createElement("span");
    label.className = "project-label";
    label.textContent = String(i + 1).padStart(2, "0") + " / " + (item.category || "PROJECT");
    visual.prepend(label);
    const info = document.createElement("div");
    info.className = "project-info";
    const copy = document.createElement("div");
    const h = document.createElement("h3");
    h.textContent = item.title;
    const tech = document.createElement("p");
    tech.textContent = item.tech || "Frontend Development";
    copy.append(h, tech);
    const btn = document.createElement("button");
    btn.className = "project-open";
    btn.textContent = "↗";
    btn.setAttribute("aria-label", "Details about " + item.title);
    btn.addEventListener("click", () => showProject(item));
    info.append(copy, btn);
    article.append(visual, info);
    grid.append(article);
  });
}
function showProject(item) {
  $("#dialogTitle").textContent = item.title;
  const d = $("#projectDialog");
  const desc = d.querySelector("p:not(.eyebrow)");
  desc.textContent = item.description || "Portfolio project";
  d.querySelectorAll(".dynamic-link").forEach((el) => el.remove());
  for (const [label, url] of [
    ["Live Demo", item.demoUrl],
    ["GitHub", item.githubUrl],
  ]) {
    if (/^https:\/\//i.test(url || "")) {
      const a = document.createElement("a");
      a.className = "dynamic-link btn btn-outline";
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = label;
      d.append(a);
    }
  }
  d.showModal();
}
function loadProjects() {
  projects = fallback;
  renderProjects(projects);
}
const faq = [
  {
    keys: ["skill", "technology", "technologies", "html", "css", "javascript", "gsap", "stack"],
    answer:
      "Zeeshan focuses on HTML5, CSS3, JavaScript, responsive UI, GSAP animations and frontend development.",
  },
  {
    keys: ["project", "portfolio", "work", "demo"],
    answer: () =>
      `Current showcased projects: ${projects.map((p) => p.title).join(", ") || "projects will appear soon"}. Explore the Projects section for details.`,
  },
  {
    keys: ["service", "hire", "offer", "website", "design"],
    answer:
      "Zeeshan offers frontend development, responsive websites, modern web design and interface optimization. Use the contact form to discuss your project.",
  },
  {
    keys: ["contact", "email", "reach", "message", "whatsapp"],
    answer:
      "You can contact Zeeshan using the Contact form on this page. You can email muhammadzeeshan71lhr@gmail.com or chat on WhatsApp at +92 309 6900124.",
  },
  {
    keys: ["price", "cost", "rate", "budget"],
    answer:
      "Pricing depends on the project scope. Share your requirements through the contact form for a quote.",
  },
  {
    keys: ["hello", "hi", "hey", "salam", "assalam"],
    answer: "Hello! 👋 Ask me about Zeeshan’s projects, skills, services or how to get in touch.",
  },
];
function faqReply(question) {
  const q = question.toLowerCase();
  const match =
    faq.find((entry) => entry.keys.some((k) => new RegExp("\b" + k + "\b", "i").test(q))) ||
    faq.find((entry) => entry.keys.some((k) => q.includes(k)));
  return match
    ? typeof match.answer === "function"
      ? match.answer()
      : match.answer
    : "I can help with Zeeshan's skills, projects, services, pricing and contact details. Please try one of those topics!";
}
window.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
  $("#year").textContent = new Date().getFullYear();
  const menu = $("#menuBtn"),
    nav = $("#nav");
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
  nav
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  if (
    window.gsap &&
    window.ScrollTrigger &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".hero-copy>*", { opacity: 0, y: 28, stagger: 0.12, duration: 0.8 });
    gsap.from(".hero-visual", { opacity: 0, x: 45, duration: 1.2, delay: 0.3 });
  }
  loadProjects();
  const dialog = $("#projectDialog");
  $("#dialogClose").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
  $("#contactForm").addEventListener("submit", (e) => {
    const form = e.currentTarget,
      status = $("#contactStatus");
    if (form.elements.namedItem("website").value) {
      e.preventDefault();
      return;
    }
    const name = form.elements.namedItem("name").value.trim(),
      email = form.elements.namedItem("email").value.trim(),
      message = form.elements.namedItem("message").value.trim();
    if (
      name.length < 2 ||
      name.length > 80 ||
      email.length > 254 ||
      message.length < 10 ||
      message.length > 2000
    ) {
      e.preventDefault();
      status.textContent = "Name must be 2–80 characters and message 10–2000 characters.";
      return;
    }
    status.textContent = "Submitting via FormSubmit…";
  });
  const chat = $("#chatPanel"),
    toggle = $("#chatToggle");
  function setChat(open) {
    chat.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    if (open) $("#chatInput").focus();
  }
  toggle.addEventListener("click", () => setChat(chat.hidden));
  $("#chatClose").addEventListener("click", () => setChat(false));
  $("#chatForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = $("#chatInput"),
      question = input.value.trim();
    if (!question) return;
    input.value = "";
    for (const [text, role] of [
      [question, "user"],
      [faqReply(question), "bot"],
    ]) {
      const div = document.createElement("div");
      div.className = "chat-bubble " + role;
      div.textContent = text;
      $("#chatMessages").append(div);
    }
    $("#chatMessages").scrollTop = $("#chatMessages").scrollHeight;
  });
});
