import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { editone } from "./Userslice"

export const Edit=()=>{
    const {id} = useParams()
    const data = useSelector(d=>d.users)
    const u = data.find(e=>e.id == id)
    const [nom,setnom] = useState(u.nom)
    const [prenom,setprenom] = useState(u.prenom)
    const [email,setemail] = useState(u.email)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const modifier = ()=>{
        const a= {id,nom,prenom,email}
        dispatch(editone(a))
        navigate('/')
    }
    return(
        <>
        <div>
        <input type="text" value={id} readOnly />
        </div>
        <div>
        <input type="text" value={nom} onChange={(E)=>setnom(E.target.value)} />
        </div>
        <div>
        <input type="text" value={prenom} onChange={(E)=>setprenom(E.target.value)} />
        </div>
        <div>
        <input type="text" value={email} onChange={(E)=>setemail(E.target.value)} />
        </div>
        <div>
            <button onClick={modifier}>suvgarder les modifications</button>
        </div>
        </>
    )
}