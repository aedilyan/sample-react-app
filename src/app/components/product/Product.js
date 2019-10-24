import React, { useEffect, useCallback } from 'react'
import console from '../../utils/console'


const EffectHook = ({ productId }) => {

    const getProduct = useCallback(() => {
        console.log(productId);
    }, [productId]);


    useEffect(() => {
        getProduct()
        console.log('useEffect is triggered');

    }, [getProduct]);

    return (<div>{`Current productId: ${productId}`}</div>)
}

export default EffectHook;