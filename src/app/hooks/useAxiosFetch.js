import axios from 'axios'
import { useState, useEffect, useReducer } from "react"

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_INIT":
            return { ...state, isLoading: true, hasError: false };
        case "FETCH_SUCCESS":
            return { ...state, isLoading: false, hasError: false, data: action.payload };
        case "FETCH_FAILURE":
            return { ...state, isLoading: false, hasError: true, errorMessage: "something went wrong" };
        case "REPLACE_DATA": {
            // The record passed (state.data) must have the attribute "id"
            const newData = state.data.map(rec => {
                return rec.id === action.replacerecord.id ? action.replacerecord : rec;
            });
            return {
                ...state,
                isLoading: false,
                hasError: false,
                data: newData
            };
        }
    }
};

const useAxiosFetch = (initialUrl, initialData) => {
    const [url] = useState(initialUrl);
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        hasError: false,
        errorMessage: null,
        data: initialData
    });

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: "FETCH_INIT" });

            try {
                let result = await axios.get(url);
                if (!didCancel) {
                    dispatch({ type: "FETCH_SUCCESS", payload: result.data.data });
                }
            } catch (err) {
                if (!didCancel) {
                    dispatch({ type: "FETCH_FAILURE" });
                }
            }
        };

        fetchData();

        return () => {
            didCancel = true;
        }
    }, [url]);

    const updateDataRecord = record => {
        dispatch({
            type: "REPLACE_DATA",
            replacerecord: record
        });
    };

    return { ...state, updateDataRecord };
}

export default useAxiosFetch;