import React , {useContext, useEffect,useState} from 'react';
import axios from 'axios';
import { Table ,Form} from 'react-bootstrap';
import { PencilSquare, Save2Fill, Trash2 } from 'react-bootstrap-icons';
export default function Users(){
    const [data , setData]= useState([]);
    const [firstName,setFirstName] = useState('');
    const [editFirstName,setEditFirstName] = useState('');
    const [editImg,setEditImg] = useState('');
    const [editId , setEditId] = useState(-1); 
    
    useEffect( ()=> {
        axios.get('http://localhost:3031/users').then( res => {
            console.log(res)
            setData(res.data)
        })
    },[]);

   const handlerSubmit = (e) =>{
    e.preventDefault();
    
    axios.post('http://localhost:3031/users',{firstName:firstName}).then(res => console.log(res.data))
   }
    const handleEdit= (id)=>{
        axios.get('http://localhost:3031/users/'+id).then( res => {
            setEditFirstName(res.firstName);
            setEditImg(res.image)
            })
        setEditId(id);
    }
    const handleUpdate = ()=>{
        axios.put('http://localhost:3031/users/'+editId , {id:editId , firstName:editFirstName,image:editImg}).then(
            res => {
                setEditId(-1)
              document.location.reload();
            }
        )
    }

    const deleteUser= (id) =>{
        axios.delete(`http://localhost:3031/users/${id}`);
        setData(
            data.filter((item)=>{
                return item.id!==id
            })
        )
    }

    var usersDetailes ='';
    usersDetailes=data.map((item , index)=>{
        return(
            item.id === editId? <tr>
                <td>{item.id}</td>
                <td><input type='text' placeholder='Enter Name ....' style={{border:'none ', outline:'none' , background:'transparent'}} value={editFirstName} onChange={e => setEditFirstName(e.target.value)}/></td>
                <td><input type='text' placeholder='Enter Url Image ....' style={{border:'none ', outline:'none' , background:'transparent'}} value={editImg} onChange={e => setEditImg(e.target.value)}/></td>
                <td><button className='btn' onClick={handleUpdate}><Save2Fill/></button></td>
               
                        </tr>:
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.image}</td>
                <td><button className='btn ' onClick={()=> handleEdit(item.id)}><PencilSquare/></button></td>
                <td><button className='btn text-danger 'onClick={()=> deleteUser(item.id)} ><Trash2/></button></td>
            </tr>
        )
    })
    return(
        <>
         <div className='d-flex justify-content-center pt-5'>
            <Form className='d-flex' action='' onClick={handlerSubmit}> 
            <Form.Control 
             type="text"
             name='firstName'
             onChange={ (e) => setFirstName(e.target.value)}
             placeholder='Add New User'/>
             <button className='btn btn-dark' type='submit'>Add</button>
            </Form>
        </div>
        <div  className=' p-5 mx-auto'>
        <Table className='text-center' hover  responsive >
            <thead className='table-dark' >
            <tr>
            <th className='text-white'>
                User Id
            </th>
            <th className='text-white'>
                FirstName
            </th>
            <th className='text-white'>
                Url
            </th>
            <th className='text-white' colSpan={2}>
            Actions
            </th>
            
            </tr>
            </thead>
            <tbody>
                {usersDetailes}
            </tbody>
        </Table>
        </div>
        </>
    )
    
}