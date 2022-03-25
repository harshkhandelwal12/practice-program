import React from 'react'
import { useLocation } from "react-router-dom";
import UserData from "../Components/UserData";
import UserDataList from "../Components/UserDataList"

function Home() {
    const { state } = useLocation();
    const { username, email } = state;
    return (
         <  div >
        Hyy welcome to home page and your login data is here { username }, { email }
         <UserData />
       <div style={{position: "relative",
    top: "100px"}}>
           <UserDataList />
       </div>
        </div>
        
    )
}

export default Home;