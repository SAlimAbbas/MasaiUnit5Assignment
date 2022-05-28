import { useEffect, useState } from "react"

export const useTimeout=(delay: number)=>
{
    const [toShow,setToShow]=useState(false);

    useEffect(()=>{
        let id=setTimeout(() => {
            setToShow(true);
        }, delay);

        //clearTimeout
    return ()=>clearTimeout(id);
    },[]);

    return toShow;
}