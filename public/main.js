pen.font = "30px Courier New";
pen.lineWidth = 5;
seedWorld();
seedPlayer();
canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
});
setInterval(plotLegalMoves, delay);
//# sourceMappingURL=main.js.map