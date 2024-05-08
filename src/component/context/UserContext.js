// import React , {useState ,useEffect,createContext} from 'react';
// import axios from 'axios';
// export const UserContext=createContext();
// export const UserProvider = props =>{
//     const [data , setData]= useState([]);
//     useEffect( ()=> {
    
//         axios.get('https://dummyjson.com/users').then( res => {
//             console.log(res)
//             setData(res.data.users)
//         })
//     },[]);
//     const deleteUser= (id) =>{
//         axios.delete(`https://dummyjson.com/users/${id}`);
//         setData(
//             data.filter((item)=>{
//                 return item.id!==id
//             })
//         )
//     }

//     let Users=[];
//     Users = data;
//     return(
//         <UserContext.Provider value={[Users,deleteUser , setData]}>
//             {props.children}
//         </UserContext.Provider>
//     )

// }