(function () {
  var pendingHash = location.hash;

  if (pendingHash && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  if (pendingHash) {
    pinTop();
  }

  // The stylesheet sets scroll-behavior: smooth, which would animate this
  // reset and let the browser's own hash jump win. Keep the reset instant.
  function pinTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  function targetFromHash(hash) {
    if (!hash || hash === "#") return null;
    try {
      return document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch (e) {
      return null;
    }
  }

  function headerOffset() {
    var header = document.querySelector(".md-header");
    if (!header) return 0;
    var position = getComputedStyle(header).position;
    if (position !== "sticky" && position !== "fixed") return 0;
    return header.getBoundingClientRect().height;
  }

  function scrollToHash(hash, fromTop) {
    var el = targetFromHash(hash);
    if (!el) return false;

    if (fromTop) {
      pinTop();
    }

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        // :target already runs the ease-out, and that transform would shift
        // getBoundingClientRect. Read the resting position, then play it.
        el.style.animation = "none";
        void el.offsetWidth;
        var top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset() - 8;
        el.style.animation = "";
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        el.classList.remove("anchor-motion");
        void el.offsetWidth;
        el.classList.add("anchor-motion");
      });
    });

    return true;
  }

  function onReady() {
    if (!pendingHash) return;
    pinTop();
    setTimeout(function () {
      scrollToHash(pendingHash, true);
    }, 50);
  }

  // The browser can still jump to the hash after DOMContentLoaded.
  // Correct from the current position once loading has finished.
  window.addEventListener("load", function () {
    if (!pendingHash) return;
    scrollToHash(pendingHash, false);
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a[href*='#']");
    if (!link) return;

    var href = link.getAttribute("href");
    if (!href) return;

    var url;
    try {
      url = new URL(link.href, location.href);
    } catch (e) {
      return;
    }

    if (url.pathname !== location.pathname || !url.hash) return;

    event.preventDefault();
    history.pushState(null, "", url.hash);
    scrollToHash(url.hash, false);
  });
})();
