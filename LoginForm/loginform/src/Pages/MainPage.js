import React from "react";
import { useParams } from "react-router-dom";

function MainPage()
{
    const {username}=useParams();
    console.log(username);
return(
        <div>

            <h2>Hello, {username}</h2>
           

        </div>
         
    )
    
    }

export  default MainPage;