import React from "react";
import Body from "../components/body/body";
import 'animate.css';

const MainPage = () => {
    return(
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"/>            
            <div className="font-poppins">
                <Body/>
            </div>
        </div>
    )
}
export default MainPage