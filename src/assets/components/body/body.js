import React from "react"
import NavBar from '../Nav/navbar'
import perfil from '../../../images/perfil1.png'
import {RiComputerLine} from 'react-icons/ri'
import frontImg from '../../../images/Passion-Front.png'
import backImg from '../../../images/Passion-Back.png'
import movilImg from '../../../images/Passion-Movil.png'
import proyectImg from '../../../images/Proyect-Example.png'
import gitImg from '../../../images/Git.png'
import instagramImg from '../../../images/Instagram.png'
import emailImg from '../../../images/Email.png'
import './style.css'

const Body = () => {
    return (
        <>
            <NavBar/>
            <div className="bg-imgBg ">                
                <div className="flex-col animate__animated animate__backInDown lg:flex lg:flex-row-reverse 2xl:m-20">  
                    <div className="flex justify-center pr-8">
                        <img className="animate__animated animate__backInRight object-cover mt-4 h-60 w-60 rounded-full lg:max-w-screen-2xl lg:rounded-lg lg:mt-4" src={perfil} alt="img"/>
                    </div>
                    <div className="animate__animated animate__backInLeft p-5 lg:mr-4">
                        <p className="text-2xl font-poppins text-title lg:text-6xl ">Hola !<RiComputerLine id="icon" className="text-title text-2xl ml-3 mb-1 lg:text-5xl"/></p>                        
                        <div className="flex-row">
                            <p className="text-lg font-poppins text-title font-bold lg:text-3xl">Me llamo Alan, soy Estudiante de Sistemas Computacionales </p>
                        </div>                        
                        <p className="text-sm text-justify font-poppins lg:text-2xl">Front-End developer based in Bekasi, Indonesian I’am coding with a clean and beautiful problem solving in mind.</p>
                    </div>
                </div> 
                <div className="animate__animated animate__fadeInRight flex-col lg:flex-row">
                    <p className="text-xl text-center font-bold pt-5 text-title lg:text-4xl 2xl:my-20 ">Pasiones</p>
                    <div className="m-5 space-y-5 lg:flex lg:justify-center lg:space-x-8 2xl:space-x-40">                        
                        <div className="p-5 rounded-lg shadow-xl ">
                            <div className="flex justify-center">
                                <img className="" src={frontImg} alt='img'/>
                        </div>
                            <p>Desarrollador <strong>Front-End</strong> </p>
                            <p className="text-sm">(React, Angular, Bootstrap, Tailwind, Bootswatch)</p>
                        </div>
                        <div className="p-5 rounded-lg shadow-xl ">
                        <div className="flex justify-center">
                            <img className="" src={backImg} alt='img'/>
                        </div>
                            <p>Desarrollador <strong>Back-End</strong> </p>
                            <p className="text-sm">(NodeJs, ExpressJs)</p>
                        </div>
                        <div className="p-5 rounded-lg shadow-xl ">
                        <div className="flex justify-center">
                            <img className="" src={movilImg} alt='img'/>
                        </div>
                            <p>Desarrollador <strong>Apps Moviles</strong> </p>
                            <p className="text-sm">(Flutter)</p>
                        </div>
                    </div>
                </div>
                <p className="animate__animated animate__fadeIn text-xl text-center font-bold pt-5 text-text lg:text-4xl 2xl:my-20"> Mis <strong className="text-title">Trabajos</strong></p>
                <div className="animate__animated animate__fadeInLeft p-5 space-y-5 lg:flex lg:justify-center lg:space-x-8 2xl:space-x-40">                    
                    <div className="p-5 rounded-lg shadow-xl ">
                        <p className="font-montserrat py-2">Proyect-Example</p>
                        <div className="flex justify-center">
                            <img className="" src={proyectImg} alt='img'/>
                        </div>
                            <p className="text-center">Desarrollado con <strong>React</strong> </p>                            
                    </div>
                    <div className="p-5 rounded-lg shadow-xl ">
                        <p className="font-montserrat py-2">Proyect-Example</p>
                        <div className="flex justify-center">
                            <img className="" src={proyectImg} alt='img'/>
                        </div>
                            <p className="text-center">Desarrollado con <strong>Angular</strong> </p>                            
                    </div>
                    <div className="p-5 rounded-lg shadow-xl ">
                        <p className="font-montserrat py-2">Proyect-Example</p>
                        <div className="flex justify-center">
                            <img className="" src={proyectImg} alt='img'/>
                        </div>
                            <p className="text-center">Desarrollado con <strong>React</strong> </p>                            
                    </div>
                </div>
                <p className="text-xl font-bold text-center pt-5 text-title lg:text-4xl lg:mt-20"> Contactame</p>
                <div className="p-5 space-y-10 lg:flex lg:justify-center lg:space-x-32">
                    
                    <div className="flex justify-center">
                        <img src={gitImg} alt="imgGit" className="h-60 mt-10"/>                        
                    </div>
                    <div className="flex justify-center">
                        <img src={emailImg} alt="imgEmail" className="h-60"/>                        
                    </div>
                    <div className="flex justify-center">
                        <img src={instagramImg} alt="imgInstagram" className="h-60"/>                        
                    </div>
                </div>
                
            </div>
        </>       
    )
}

export default Body