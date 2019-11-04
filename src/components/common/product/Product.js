import React, { useEffect, useCallback } from 'react'
import { console } from 'Utils'


const EffectHook = ({ productId }) => {

    const getProduct = useCallback(() => {
        console.log(`ProductId: ${productId}`);
    }, [productId]);


    useEffect(() => {
        getProduct()
        console.log('useEffect is triggered');

    }, [getProduct]);

    return (<div>{`Current productId: ${productId}`}</div>)
}

export default EffectHook;