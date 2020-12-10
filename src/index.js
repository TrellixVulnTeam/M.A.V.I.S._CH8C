const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const utils = require('mavis-utils');
const get_command = new utils.network_str("get_command");

var input = readline.question('', ans => {
    ans = ans.toString()
        .toLowerCase()
        .replace('?', '')
        .replace('!', '')
        .replace('.', '')
    next(ans)
});

function next(answer) {
    var output = get_command.resolve(get_command.network.run(answer));
    console.log(output)
}