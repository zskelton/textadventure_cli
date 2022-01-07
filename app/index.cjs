var term = require('terminal-kit').terminal;

function main() {
    term.clear();
    term.cyan("You are in a forrest with a cave entrance directly to the east.");
    term.cyan("You see a note on the ground.");

    var items = [
        'Go',
        'Get',
        'Help'
    ];

    term.singleColumnMenu(items, (error, response) => {
        term('\n').eraseLineAfter.green(
            `#${response.selectedIndex} selected: ${response.selectedText} (${response.x}, ${response.y}})`
        );
        process.exit();
    });
}

module.exports = main;
