const repeat = (fn, n) => {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

const hello = () => console.log('Hello world');

const goodbye = () => console.log('Goodbye world');

let repeatHello = repeat(hello, 5);
let repeatGoodbye = repeat(goodbye, 5);
