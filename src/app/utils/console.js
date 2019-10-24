const _console = {
    log: (message, color = '#0ada00') => { // eslint-disable-line no-undef
        console.log(`%c ${message}`, `background: #000; color: ${color}`); // eslint-disable-line no-undef
    }
}

export default _console;