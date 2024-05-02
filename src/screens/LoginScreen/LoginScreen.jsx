import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import Log from '../../img/log_of_police.jpeg';
import './styles.css';
import LegendInput from "../../my-components/LegendInput";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "./Carousel";
import { AiOutlineEye, AiOutlineCheck, AiOutlineEyeInvisible } from "react-icons/ai";
//import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner"
// import AlertError from "@/my-components/AlertError";
import { Button } from "@/components/ui/button";
import { LucideLoader2 } from "lucide-react";
import { Services } from "@/services/services";

const LoginScreen = () => {
    const textNip = document.getElementById('textNip')
   

    const { login, isLoading, setIsLoading } = Services()

    const [password, setPassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const [nip, setNip] = useState(null)

    const handleTooglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const handleChangeNip = (e) => {
        let textInput = document.getElementById('inputNIP').value;
        let quantText = textInput.length
        setNip(e.target.value);
    
        if(quantText < 10){
            document.getElementById('textNip').innerHTML='<div id="invalid">Este NIP é Inválido</div>'
        }
        if(quantText >= 10){
            document.getElementById('textNip').innerHTML='<p id="valid" id={props.id}>NIP Válido</p>'
        }
        if(quantText == ""){
            document.getElementById('textNip').innerHTML='<p id={props.id}>Insira o Seu NIP</p>'
        }
        
    }
    const handleChangePassword = (e) => {
        let textInput = document.getElementById('inputPassword').value;
        let quantText = textInput.length
        
        setPassword(e.target.value);
        if(quantText < 6){
            document.getElementById('textPass').innerHTML='<div id="invalid">Palavra Passe Inválida</div>'
        }
        if(quantText >= 6){
            document.getElementById('textPass').innerHTML='<p id="valid" id={props.id}>Palavra Passe Válida</p>'
        }
        if(quantText == ""){
            document.getElementById('textPass').innerHTML='<p id={props.id}>Palavra Passe</p>'
        }
    }

    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setDataAtual(new Date());
    //     },1000);
    //     return ()=> clearInterval(interval);
    // },[])

    // useEffect(() => {
    //     setInterval(()=>{
    //         setVisibility(localStorage.getItem('visibility'))       
    //          },10);
    // }, [])

    return (
        <body>
            <div className="containerForm">
                <form className="form" method="post" >
                    <div className="m-2">
                        <div>
                            <div className="contentLog">
                                <img className="log" src={Log} alt="Logotipo" />
                            </div>

                            <div>
                                <h3 className="textLog" >Login</h3>
                            </div>

                        </div>

                        <div className="containerMain">
                            <div>
                                <LegendInput idInput={'inputNIP'} legend={'Introduza o seu NIP'} type={'text'} security={'false'} placeholder={'Ex 0002303403'} value={nip} onChange={handleChangeNip} id={'textNip'} />
                            </div>

                            <div className="containerInputEye">

                                <LegendInput idInput={'inputPassword'} legend={'Palavra Passe'} type={showPassword ? 'text' : "password"} value={password} onChange={handleChangePassword} placeholder={'***************'} style={{paddingRight:"50px", borderColor:""}} id={'textPass'} />

                                <button onClick={handleTooglePasswordVisibility} type={'button'} className="eye" >
                                    {
                                        showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />
                                    }
                                </button>
                            </div>

                        </div>


                        <div className="containerBtn" onClick={() => {

                            setIsLoading(true)
                            setTimeout(() => {
                                login(nip, password)
                            }, 2000);

                        }}>
                            <Link>
                                <a href="/login" className="animated-button1 justify-center flex" id="buttonLogin">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    {
                                        isLoading ? <LucideLoader2 className="mr-2 h-5 animate-spin self-center" /> : 'entrar'
                                    }
                                </a>
                            </Link>

                        </div>
                        <div>

                        </div>
                    </div>

                </form>

            </div>
            <div className="divImg">
                <div className="containerImgSize0">
                    <Carousel />
                </div>
            </div>

            <Toaster />
        </body>
    )
}

export default LoginScreen;