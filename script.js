document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      alert(
        "✅ Thanks for booking with Aqua Car Detailing!\n\nWe have received your booking request and will contact you shortly."
      );

      form.reset();
    });
  }
});
