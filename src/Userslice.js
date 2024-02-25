import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 1, nom: "Doe", prenom: "John", email: "john.doe@example.com" },
    { id: 2, nom: "Smith", prenom: "Alice", email: "alice.smith@example.com" },
    { id: 3, nom: "Johnson", prenom: "Michael", email: "michael.johnson@example.com" },
    { id: 4, nom: "Brown", prenom: "Emma", email: "emma.brown@example.com" },
    { id: 5, nom: "Wilson", prenom: "James", email: "james.wilson@example.com" },
    { id: 6, nom: "Taylor", prenom: "Olivia", email: "olivia.taylor@example.com" },
    { id: 7, nom: "Martinez", prenom: "Daniel", email: "daniel.martinez@example.com" },
    { id: 8, nom: "Anderson", prenom: "Sophia", email: "sophia.anderson@example.com" },
    { id: 9, nom: "Thomas", prenom: "Isabella", email: "isabella.thomas@example.com" },
    { id: 10, nom: "Harris", prenom: "William", email: "william.harris@example.com" }
  ];
  
const Userslice = createSlice({
    name:'users',
    initialState:initialState,
    reducers:{
        addOne:(state,action)=>{
            return [...state,action.payload]
        },
        editone:(state,action)=>{
            return state.map(user=> {
                if(user.id ==action.payload.id){
                    return{
                        ...user,
                        nom:action.payload.nom,
                        prenom:action.payload.prenom,
                        email:action.payload.email
                    }
                }
            return user})
        },
        deleteone:(state,action)=>{
            return state.filter(E=>E.id!=action.payload.id)
        }
    }
}
)
export const {addOne,editone,deleteone} = Userslice.actions
export default Userslice.reducer
