import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true,
    });
    useEffect(() => {
        getGifs(category).then(imgs => {
            setTimeout(() => {
                console.log(imgs);
                setstate({
                    data: imgs,
                    loading: false,
                });
            }, 3100);
        })
    }, [category])
    
    return state;
    
}