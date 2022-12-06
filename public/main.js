paintBoard();
seedBoard();
seedPlayerSets();
canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
});
setInterval(plotEverything, delay);
//# sourceMappingURL=main.js.map