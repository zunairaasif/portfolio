export function initialFX() {
  document.body.style.overflowY = "auto";
  document.querySelector("main")?.classList.add("main-active");

  // Change background color (handled by CSS transition)
  document.body.style.backgroundColor = "#0b080c";

  // Split text and add animation classes
  splitTextForAnimation([
    ".landing-info h3",
    ".landing-intro h2",
    ".landing-intro h1",
  ]);
  splitTextForAnimation(".landing-h2-info");

  // Add animation classes to other elements
  document.querySelector(".landing-info-h2")?.classList.add("animate");
  document
    .querySelectorAll(".header, .icons-section, .nav-fade")
    .forEach((el) => {
      el.classList.add("animate");
    });

  // Setup looping text animations
  setupLoopingText(".landing-h2-info-1", ".landing-h2-1");
  setupLoopingText(".landing-h2-2", ".landing-h2-info");
}

// Helper function to split text into characters
function splitTextForAnimation(selectors) {
  const elements = Array.isArray(selectors)
    ? selectors.flatMap((selector) => [...document.querySelectorAll(selector)])
    : [...document.querySelectorAll(selectors)];

  elements.forEach((element) => {
    const text = element.textContent;
    element.innerHTML = "";

    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.className = "split-char";
      span.textContent = char === " " ? "&nbsp;" : char;
      element.appendChild(span);
    });
  });
}

// Helper function for looping text animation
function setupLoopingText(selector1, selector2) {
  const text1 = document.querySelector(selector1);
  const text2 = document.querySelector(selector2);

  if (text1 && text2) {
    // Split both text elements
    splitTextForAnimation([selector1, selector2]);

    // Add staggered delays for looping effect
    document
      .querySelectorAll(`${selector1} .split-char, ${selector2} .split-char`)
      .forEach((char, index) => {
        char.classList.add("loop-text-char");
        char.style.animationDelay = `${index * 0.1}s`;
      });
  }
}
