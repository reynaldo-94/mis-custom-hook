import { useState } from 'react';

// Este customHook esta extrayendo la logica de mi contador
export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState); // 10

    const increment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
