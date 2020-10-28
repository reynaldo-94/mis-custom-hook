import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {

    // isMounted: Esta montado
    // La idea de este isMounted es que mantenga la referencia cuando este hook este vivo o cuando el componente que lo usa sigue montado
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    // Cada vez que la url cambia quiero se ejecute un efecto
    useEffect( () => {
        setState({ data: null, loading: true, error: null });
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                // setTimeout(() => {

                    if( isMounted.current ) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        })    
                    } else {
                        console.log('setState no se llamó');
                    }
                    
                // }, 4000);
                
            })
    }, [url]);

    return state;
}
