export default (nearMines) => {
    let color = null;
    if (nearMines > 0) {
        if (nearMines == 1) {
            color = "#2A28D7"
        };
        if (nearMines == 2) {
            color = "#2B520F"
        };

        if (nearMines > 2 && nearMines < 6) {
            color = "#F9060A"
        };

        if (nearMines >= 6) {
            color = "#F221A9"
        };
    }

    return color;
}