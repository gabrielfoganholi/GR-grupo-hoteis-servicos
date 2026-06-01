export function scrollToSection(navigate, sectionId) {
  navigate("/");

  setTimeout(() => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 120);
}