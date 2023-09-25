import React, {useEffect, useState} from 'react'
import Img from './Img';

function Func_lifecycle() {

  const [data, setdata] = useState({
    name:"Ayushi Thakkar",
    age:"21",
    number:"1",
    image:true 
   })

   //DidMount/DidUpdate
   useEffect(() =>{
    console.log('DidMount/didUpdate');
   },[data.number,data.age,data.name,data.image]);

   useEffect(()=>{
    return(()=>{ console.log('DidUnmount'); });   //willUnmount
   },[]);

  return (
    <div className='container mt-5'>
        <button onClick={()=>setName("Ayu Thakkar")}>Change</button>
        <h1>{name}</h1>
        <hr/>
        <button onClick={()=>setUser({...user,username:"ayu@1201",age:21})}>Change</button>
        <h1>Hi may user name is {user.username} and my age is {user.age}</h1>

        <hr/>

        <button onClick={()=>setUser({...user,number:user.number+1})}>+</button>
        <h1>{user.number}</h1>
        <button onClick={()=>setUser({...user,number:user.number-1})}>-</button>

        <hr/>

        <button onClick={()=>setUser({...user,isImage:false})}>Hide</button>
        <button onClick={()=>setUser({...user,isImage:true})}>Show</button>
        <button onClick={()=>setUser({...user,isImage:!user.isImage})}>Hide/Show</button>

        <hr/>

        { user.isImage ? <Img/> : null}
    </div>
  )
}

export default Func_lifecycle;