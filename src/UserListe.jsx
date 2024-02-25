import { useDispatch, useSelector } from "react-redux"
import { deleteone } from "./Userslice"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const UserList=()=>{
    const data = useSelector(data=>data.users)
    const dispatch = useDispatch()
    const [rech,setrech] = useState('')
    const[el,setel] = useState([])
    useEffect(()=>setel(data),[data])
    const rechercher = ()=>{
        setel(data.filter(e=>e.nom == rech ))
    }
    return(
        <>
        <input type="text" name="" id="" onChange={(e)=>setrech(e.target.value)} />
        <button onClick={rechercher}>rechercher</button>
        <table>
            <tr>
            <th>id</th>
            <th>nom</th>
            <th>prenom</th>
            <th>email</th>
            <th colSpan={2}>actions</th>
            </tr>
            {
                el.map(user=> <tr>
                    <td>{user.id}</td>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.email}</td>
                    <Link to={`/modifier/${user.id}`}><td><button type="button">modifier</button></td></Link>
                    <td><button onClick={()=>{
                        const ok = window.confirm('estes vous sur de vouloir supprimer cette etudiant')
                        ok&&dispatch(deleteone(user))
                    }}>supprimer</button></td>
                </tr>)
            }
        </table>
            <Link to={'/add'}><button>ajouter un user</button></Link>
        </>
    )
}