import React from "react";
import {useState} from "react";
import {useEffect} from "react";
// import Home from "../Components/Home";
import {useNavigate} from "react-router-dom";


function Contact(props) {
    const intialValues={ username:"",email:""};
    const [formValues,setFormValues] =useState(intialValues);
    const [isSubmit,setIsSubmit]  = useState(false);
    const navigate = useNavigate();
    // navigate('/', { state: { username:"harsh", email: "harsh12@gmail.com" } });
    // const location=useLocation();

    const handlerChange = (e) => {
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
        console.log(formValues);
      
    };


        const handlerSubmit=(e)=>{
            e.preventDefault();
            setIsSubmit(true);
              // navigate("/" + location.search);
             console.log( {formValues});
             navigate('/home', { state: formValues });

        }
        // useEffect(() => {
        //   if(state === null || state === undefined){
        //     navigate("/")
        //   }
        // }, [state]);

  return (
    <div>
        <form onSubmit={handlerSubmit}>
      <div className="container">
        <div className="App">
          <h2> Login Form</h2>

          <div>
            <label>Your Name</label>
            <input
              className="input"
              type="text"
              name="username"
              placeholder="enter your name here......"
              required
              value={formValues.username}
              onChange={handlerChange}
            ></input>{" "}
          </div>
          <div className="email">
            <label>Your Email</label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="enter your email here......"
              required
              value={formValues.email}
              onChange={handlerChange}
            ></input>
          </div>

          <div>
            <button 
             className="logbtn" 
            //  onClick={() => {
            //   navigate("/");
            //   }}
            >Login</button> 
            <button className="signbtn">sign up</button>
          </div>
        </div>
      </div>
      </form>
      {isSubmit && (
          <>
          <p> hyy your name is here <br></br>{formValues.username}</p>
        
          <p> hyy your email is here <br></br>{formValues.email}</p>
          </>
      )}

      

    </div>
    
  );
}

export default Contact;
