const chess = {

    chessBoard: document.getElementById('chess'),

    render() {

        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const columns = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];

        for (let row = 0; row < rows.length; row++) {
            const trElem = document.createElement('tr');
            this.chessBoard.appendChild(trElem);

            for (let col = 0; col < columns.length; col++) {
                const tdElem = document.createElement('td');
                trElem.appendChild(tdElem);

                if (rows[row] === 0 && columns[col] !== 0) {
                    tdElem.innerHTML = columns[col];
                } else if (rows[row] !== 0 && columns[col] === 0) {
                    tdElem.innerHTML = rows[row];
                }

                if (this.isCellBlack(row, col)) {
                    tdElem.style.backgroundColor = 'black';
                }
            }
        }
    },

    isCellBlack(row, col) {
        if (row === 0 || row === 9 || col === 0 || col === 9) {
            return false;
        } else if ((row % 2 === 0 && col % 2 === 1) || (row % 2 === 1 && col % 2 === 0)) {
            return true;
        }
    }
};

chess.render();
