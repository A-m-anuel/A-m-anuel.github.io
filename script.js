const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".section, .content-card, .profile-card, .stat-card, .feature-panel").forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
