import React from "react";
import { useParams,useLocation } from "react-router-dom";

function MainPage()
    {
        const { username } = useParams();
        const location = useLocation();
        console.log(location.state.username);
return(

    <div>
        <h2>Hello, {location.state.username}</h2>
    </div>)
        
    }
export  default MainPage;