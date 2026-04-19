<script
  src="https://cdnjs.cloudflare.com/ajax/libs/svg-injector/1.1.3/svg-injector.min.js"
  integrity="sha512-LpKoEmPyokcDYSjRJ/7WgybgdAYFsKtCrGC9m+VBwcefe1vHXyUnD9fTQb3nXVJda6ny1J84UR+iBtEYm3OQmQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>

<script>
  window.addEventListener("routeChangeEvent", function (e) {
    if (e.detail.to.name === "company-settings-v2") return;

    let navIconInterval = setInterval(() => {
      const navSVG = document.querySelectorAll("#sidebar-v2 nav svg");
      if (navSVG === true) return;

      const nav = document.querySelectorAll("nav")[0];
      if (!nav) return;

      const navIcons = nav.querySelectorAll("nav img");
      const iconsArray = Array.from(navIcons);

      if (iconsArray.length !== 0 && navIcons) {
        clearInterval(navIconInterval);
        for (let icon of iconsArray) {
          SVGInjector(icon);
        }
      }
    });
  });
</script>
