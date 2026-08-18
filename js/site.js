(function () {
  var shell = document.querySelector(".shell");
  var year = document.getElementById("year");
  var form = document.getElementById("talk-form");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  function show(view) {
    var panels = document.querySelectorAll("[data-panel]");
    var navButtons = document.querySelectorAll("[data-view]");
    var next = view || "home";

    panels.forEach(function (panel) {
      var on = panel.getAttribute("data-panel") === next;
      panel.hidden = !on;
    });

    navButtons.forEach(function (button) {
      if (button.getAttribute("data-view") === next && button.tagName === "BUTTON" && button.closest(".nav")) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    if (shell) {
      shell.setAttribute("data-view", next);
    }

    if (history.replaceState) {
      history.replaceState(null, "", "#" + next);
    }
  }

  document.addEventListener("click", function (event) {
    var target = event.target.closest("[data-view]");
    if (!target) return;
    event.preventDefault();
    show(target.getAttribute("data-view"));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") show("home");
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var name = data.get("name") || "";
      var email = data.get("email") || "";
      var company = data.get("company") || "";
      var need = data.get("need") || "";
      var message = data.get("message") || "";
      var body = [
        "Name: " + name,
        "Email: " + email,
        "Company: " + company,
        "Need: " + need,
        "",
        message
      ].join("\n");
      var href =
        "mailto:sales@sweetwaterit.com?subject=" +
        encodeURIComponent("Sweetwater IT — " + need) +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = href;
    });
  }

  var initial = (location.hash || "#home").slice(1);
  var allowed = { home: 1, talent: 1, ai: 1, about: 1, talk: 1 };
  show(allowed[initial] ? initial : "home");
})();
