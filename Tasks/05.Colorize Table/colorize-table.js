function colorize() {
    const rows = document.querySelectorAll('table tbody tr');

    rows.forEach((row, index) => {
        if (index % 2 !== 0) {
            row.style.backgroundColor = 'teal';
        }
    });
}