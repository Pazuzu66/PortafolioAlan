import React, {useState} from "react";
import { TiThMenu } from "react-icons/ti";

const NavBar = () => {
    const [button, setbutton] = useState(false)
    const handleButton = () => {
        setbutton(!button)        
    }
    return( 
        <>
        <div className="hidden animate__animated animate__backInDown md:flex justify-between container mx-auto lg:text-3xl lg:py-5 lg:p-5 2xl:m-5 2xl:ml-28">
            <h1 className="py-4" > Alan Page </h1>            
            <div className=" flex space-x-4 items-center" >
                <a className="py-4" href="/"> About </a>
                <a className="py-4" href="/"> Passions </a>
                <a className="py-4" href="/"> Portafolio </a>
                <a className="p-2 my-2 rounded-lg text-white font-bold bg-primary hover:bg-gray-500 transition ease-in-out duration-500" href="/"> Contact Me</a>
            </div>
        </div>
        <div className="flex justify-between container mx-auto px-4 md:hidden">
            <h1 className="py-4" > Alan Page </h1>            
            <button onClick={handleButton}>            
                <TiThMenu/>                
            </button>
        </div>
        <div className={`${button ? 'block' : 'hidden'} px-4 space-y-4 md:hidden`}>
            <a className="block" href="/"> About </a>
            <a className="block" href="/"> Passions </a>
            <a className="block" href="/"> Portafolio </a>
            <a className="p-2 text-center  block my-2 rounded-lg md:bg-green-600 text-white font-bold bg-primary hover:bg-gray-500 transition ease-in-out duration-500" href="/"> Contact Me</a>
        </div>
        </>
        
        
    )
}

export default NavBar