// // Re-render movies when localStorage changes
// function reRenderMovies() {
//     console.log("Render.js: Re-rendering movies...");
//     if (typeof displayMovies === "function") {
//         displayMovies();
//     } else {
//         console.error("Render.js: displayMovies not found!");
//     }
// }

// // Listen for local storage updates in the same tab
// function triggerManualRender() {
//     console.log("Render.js: Manual render triggered.");
//     reRenderMovies();
// }

// // Listen for changes in localStorage (works across tabs)
// window.addEventListener("storage", (event) => {
//     if (event.key === "userDataArray") {
//         console.log("Render.js: Detected localStorage change. Re-rendering...");
//         reRenderMovies();
//     }
// });

// // Trigger manual rendering
// document.addEventListener("manualUpdate", triggerManualRender);
