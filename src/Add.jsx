import { useSelector } from "react-redux"

export const Add=()=>{
    const data = useSelector(d=>d.users)
    const id = data[data.length-1].id+1
    return(
        <>
        <input type="text" value={id} />
        </>
    )
}