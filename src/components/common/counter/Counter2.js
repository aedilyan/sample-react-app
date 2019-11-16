import React from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': return { count: state.count + 1 };
        case 'SUB': return { count: state.count - 1 };
        default: return state;
    }
}

const Counter = () => {
    const [state, dispatch] = React.useReducer(reducer, { count: 0 });

    return (
        <React.Fragment>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'ADD' })}>Add</button>
            <button onClick={() => dispatch({ type: 'SUB' })}>Substract</button>
        </React.Fragment>
    );
}

export default Counter;