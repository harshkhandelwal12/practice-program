import React from 'react'
import {useState} from "react";

function UserData() {
    const intialValues = {id,name,email,password};
    const [formValues , setFormValues]= useState(intialValues);
    // const [id , setId] = useState("");
    // const [name , setName]=useState("");
    // const [email , setEmail] = useState("");
    // const [password , setPassword] = useState("");


    // const handleChange=(e)=>{
    //     const {name,value}= e.target;
    //     cobnsole.log(formValues);

    // }



    // const saveValue = (e)=>{

    // }
    return (
        <div style={{border: "2px solid black",
            width: "350px",
            position: "relative",
            top: "24px",
            background: "teal"}}>
            <form>
                <div>
            <h2> Employer Form</h2>
            <div style={{margin:"10px"}}>
       <label >Enter emplyr  id   :  </label>
       <input type="text" name="id" placeholder="Enter employee id: " onChange={onChange} value={formValues.id}></input>
       </div>
       <div style={{margin:"10px"}}>
       <label >Enter empl name:</label>
       <input type="text" name="name" placeholder="Enter employee name:" onChange={handleChange} value={formValues.name}></input>
       </div>
       <div style={{margin:"10px"}}>
       <label >Enter empl email:</label>
       <input type="text" name="email" placeholder="Enter employee email:" onChange={handleChange} value={formValues.email}></input>
       </div>
       <div style={{margin:"10px"}}>
       <label >Enter emp pswrd:</label>
       <input type="text" name="password" placeholder="Enter employee password:" onChange={handleChange} value={formValues.password}></input>
       </div>

       <button style={{margin:"10px"}}onClick={saveValue}>Save</button>
       <button style={{margin:"10px"}} onClick={cancleValue}>Cancle</button>
        </div>

        </form>
        </div>
    )
}

export default UserData
