// content.js
console.log("Blackout Browser content script loaded.");

function applyBlackoutStyles() {
  const style = document.createElement('style');
  style.id = 'blackout-style';
  style.textContent = `
    /* Apply black background and white text to the body and most elements */
    body, html, main, section, article, div, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, ol, table, th, td, input, textarea, select, button {
      background-color: #000 !important;
      color: #fff !important;
      border-color: #333 !important;
    }

    /* Invert images and media to maintain visual sense, but with lower brightness/contrast */
    img, video, iframe, canvas {
      filter: invert(1) hue-rotate(180deg) brightness(0.8) contrast(1.2) !important;
    }

    /* Adjust specific elements that might not behave well with general rules */
    [style*="background-color: rgb(255, 255, 255)"],
    [style*="background-color: #FFFFFF"],
    [style*="background-color: white"] {
      background-color: #000 !important;
    }

    /* Ensure specific borders are still visible */
    hr {
      border-color: #444 !important;
    }

    /* Override any link color rules that might make them invisible */
    a {
      color: #add8e6 !important; /* Light blue for links */
    }

    /* Consider iframes and nested documents - though content scripts generally don't run in them directly */
    iframe {
      background-color: #000 !important;
      color: #fff !important;
    }
  `;
  document.head.appendChild(style);
}

// Apply styles as soon as possible
applyBlackoutStyles();

// MutationObserver to catch dynamically loaded content or style changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList' || mutation.type === 'attributes') {
      // Re-apply styles or check for new elements if necessary
      // For simplicity, we just check if our style tag is still there,
      // and re-append if it's removed (e.g., by a website's script)
      if (!document.getElementById('blackout-style')) {
        applyBlackoutStyles();
      }
    }
  });
});

observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });

// Also re-apply styles on page load completion in case elements are rendered late
window.addEventListener('load', applyBlackoutStyles);
