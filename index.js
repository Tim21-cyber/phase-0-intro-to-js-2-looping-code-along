// Code your solutions in this file
writeCards = (names, event) => {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
    }
countDown = (number) => {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
