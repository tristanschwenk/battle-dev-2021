let input = ['6',
    'boosters',
    'boosters',
    'rocket',
    'rocket',
    'fire',
    'boosters',
    ];

let final = []
let notHim = []
for (let i = 1; i < input.length; i++) {

    for (let j = i+1; j < input.length; j++) {
        if (input[i] === input[j]) {
            final.push(input[i])
        }
    }
    if (final.length === 1 ) {
        if (!notHim.find(el => el === final[0])){
            console.log(final[0]);
            break
        }
    }else {
        notHim.push(input[i])
    }

    final = []
}