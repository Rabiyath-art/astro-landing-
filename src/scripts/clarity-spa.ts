document.addEventListener("astro:page-load", () => {
  if ((window as any).clarity) {
    (window as any).clarity("set", "page", window.location.pathname);
  }
});
