import React, { useState } from 'react'

function Form_comp() {

    const [formvalues, setformvalues] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    });

    const onchangehandel = (e) =>{
        setformvalues({...formvalues,id: new Date().getTime().toString(),[e.target.name]: e.target.value});
        console.log(formvalues); 
    }

    const [data,setData] = useState([]);

    const onsubmit = (e) =>{
        e.preventDefault();
        setData([...data,formvalues]);
        setformvalues({...formvalues,name:"",email:"",password:""});
    }
    const ondelete =(id)=>{
        const filterdata = data.filter((value=> value.id != id));
        setData([...filterdata]);
    }
    return (
        <div>
            <div className="container mt-5 border border-black">
                <div className='m-5'>
                    <h1 className='text-center mb-3'>Form</h1>
                    <form>
                        {/* Name input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form4Example1">Name</label>
                            <input type="text" name='name' onChange={onchangehandel} value={formvalues.name} id="form4Example1" className="form-control" placeholder='Please Enter Name' />
                        </div>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form4Example2">Email </label>
                            <input type="email" name='email' onChange={onchangehandel} value={formvalues.email} id="form4Example2" className="form-control" placeholder='Please Enter Email' />
                        </div>
                        {/* Message input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form4Example3">Password</label>
                            <input type="Password" name='password' onChange={onchangehandel} value={formvalues.password} id="form4Example2" className="form-control" placeholder='Please Enter Password' />
                        </div>
                        {/* Submit button */}
                        <button type="submit" onClick={onsubmit} className="btn btn-primary btn-block mb-4">Send</button>
                    </form>
                </div>
            </div>
            <hr className='mt-5' />
            <div className="container">
                <table className="table align-middle mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                        {
                            data.map((value,index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.emai}</td>
                                        <td>{value.password}</td>
                                        <td>
                                            <button onClick={()=>ondelete(value.id)}>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form_comp