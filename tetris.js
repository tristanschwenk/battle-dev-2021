let input = [
    '##..#.#...',
    '###..#....',
    '..#...#.##',
    '##.##...##',
    '.#...#..##',
    '#..#......',
    '#######.##',
    '#######.##',
    '#######.##',
    '#######.##',
    '.##......#',
    '##...#.###',
    '...#.#.##.',
    '.#.##..#.#',
    '....#....#',
    '.##..##..#',
    '..###...##',
    '####..#...',
    '#.#.#.#..#',
    '...##.###.'
]

function checkUp(position, line) {
    for (let inputLine = line; inputLine > 0; inputLine--) {
        const element = input[inputLine]
        if (element[position] != '.') {

            return false
        }
    }

    return true
}

function checkDown(position, line) {
    return (input[line][position] == '#')

}

let dots = []
let count = 0
for (let line = input.length - 1; line >= 0; line--) {
    const element = input[line]

    for (let i = 0; i < element.length; i++) {
        if (element[i] === '.') {
            dots.push(i)
            console.log(dots);
            if (!dots.every((val, i, arr) => val === arr[0])) {
                dots = []
                dots.push(i)
            }

            count++
        }
    }
    if (count > 1) {
        dots = []
    }
    count = 0

    if (dots.length == 4) {
        console.log(dots);
        //Check upfront
        if (checkUp(dots[0], line)) {
            if (checkDown(dots[0], line + 4)) {
                console.log("BOOM " + Number(dots[0] + 1));
                return
            }

        }
    }
}

console.log("NOPE");