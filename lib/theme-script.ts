export const THEME_STORAGE_KEY = "ms-theme";

export const themeScript = `(function(){var k="${THEME_STORAGE_KEY}";var themes=["dark","light","system"];function stored(){try{return localStorage.getItem(k)||"dark"}catch(e){return "dark"}}function resolve(t){if(t==="system"){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return t==="light"?"light":"dark"}function paint(t){var r=resolve(t);var e=document.documentElement;e.classList.remove("light","dark");e.classList.add(r);e.style.colorScheme=r}function sync(t){document.querySelectorAll("[data-theme-toggle]").forEach(function(btn){btn.setAttribute("data-theme",t);btn.setAttribute("aria-label","Theme: "+t+". Click to switch");btn.setAttribute("title",t.charAt(0).toUpperCase()+t.slice(1)+" theme");btn.querySelectorAll("[data-theme-icon]").forEach(function(el){el.hidden=el.getAttribute("data-theme-icon")!==t})})}function apply(t){try{localStorage.setItem(k,t)}catch(e){}paint(t);sync(t)}try{paint(stored())}catch(e){paint("dark")}document.addEventListener("click",function(event){var btn=event.target.closest("[data-theme-toggle]");if(!btn)return;var cur=stored();var next=themes[(Math.max(themes.indexOf(cur),0)+1)%themes.length];apply(next)});document.addEventListener("DOMContentLoaded",function(){sync(stored())})})();`;

export const shareScript = `(function () {
  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-share-slug]");
    if (!button) return;
    var slug = button.getAttribute("data-share-slug");
    if (!slug) return;
    var url = window.location.origin + "/bots/" + slug;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).catch(function () {});
    }
    var label = button.querySelector("[data-share-label]");
    var idle = button.getAttribute("data-share-idle") || "Share bot";
    button.setAttribute("data-state", "copied");
    button.classList.add("share-copied");
    if (label) label.textContent = "Link copied";
    window.setTimeout(function () {
      button.setAttribute("data-state", "idle");
      button.classList.remove("share-copied");
      if (label) label.textContent = idle;
    }, 2500);
  });
})();`;
