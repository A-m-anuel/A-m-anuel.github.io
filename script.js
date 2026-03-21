const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".side-menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const canvas = document.getElementById("network-canvas");

if (canvas) {
  const context = canvas.getContext("2d");
  const points = [];
  const pointCount = 36;

  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const createPoints = () => {
    points.length = 0;
    for (let index = 0; index < pointCount; index += 1) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2.2 + 1.2,
      });
    }
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let pointIndex = 0; pointIndex < points.length; pointIndex += 1) {
      const point = points[pointIndex];
      point.x += point.vx;
      point.y += point.vy;

      if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
      if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;

      for (let compareIndex = pointIndex + 1; compareIndex < points.length; compareIndex += 1) {
        const comparePoint = points[compareIndex];
        const dx = point.x - comparePoint.x;
        const dy = point.y - comparePoint.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 220) {
          const alpha = 1 - distance / 220;
          context.strokeStyle = `rgba(95, 184, 255, ${alpha * 0.42})`;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(comparePoint.x, comparePoint.y);
          context.stroke();
        }
      }

      context.fillStyle = "rgba(95, 184, 255, 0.95)";
      context.beginPath();
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fill();

      context.fillStyle = "rgba(95, 184, 255, 0.1)";
      context.beginPath();
      context.arc(point.x, point.y, point.radius * 4.5, 0, Math.PI * 2);
      context.fill();
    }

    window.requestAnimationFrame(draw);
  };

  setCanvasSize();
  createPoints();
  draw();

  window.addEventListener("resize", () => {
    setCanvasSize();
    createPoints();
  });
}
