// import React, { useState, useEffect } from 'react';
// import BASE_URL from './Api';
// import axios from 'axios';
// import { toast } from "sonner";
// import { AiOutlineCheck } from "react-icons/ai";
// import ServiceTime from './serviceTime';

// export function Services() {
//     const [isLoading, setIsLoading] = useState(false);
//     const [userInfo, setUserInfo] = useState(null);
  
//     const login = async (nip, password) => {
//         setIsLoading(true);

//         const dataAtual = ServiceTime();

//         if (nip && password) { // Use && para verificar ambas as condições
//             try {
//                 const res = await axios.post(`${BASE_URL}/login`, {
//                     nip,
//                     password
//                 });
//                 if (res.data.user.NIP === nip) {
//                     localStorage.setItem('dataLogin',dataAtual)
//                     toast('Logando!...', {
//                         description: dataAtual.toLocaleString(),
//                         action: {
//                             label: <AiOutlineCheck size={13} />,
//                             onClick: () => console.log("Concluido"),
//                         },
//                     });
//                     setUserInfo(res.data);
//                     localStorage.setItem('userInfo', JSON.stringify(res.data));
//                     window.location.replace('/home');
//                 }
//             } catch (error) {
//                 console.log(`login error ${error}`);
//                 toast('Dados Incorrectos!...', {
//                     description: 'Verifique o seu NIP a sua palavra passe e depois volte a tentar...',
//                     style: { backgroundColor: "#e6b5b5", color: "red", border: "1px solid red" },
//                     action: {
//                         label: <AiOutlineCheck size={13} color='white' />,
//                         onClick: () => console.log("dados incorrectos"),
//                     },
//                 });
//             }
//         } else {
//             alert('Preencha os Campos');
//         }
//         setIsLoading(false);
//     };

//     const isLoggedIn = (key) => {
//         const [data, setData] = useState(null);

//         useEffect(() => {
//             const fetchData = () => {
//                 const storedData = localStorage.getItem(key);
//                 if (storedData) {
//                     setData(JSON.parse(storedData));
//                 } else {
//                     window.location.replace('/private');
//                 }
//             };
//             fetchData();
//         }, [key]);

//         return data;
//     };


//     return {
//         login,
//         isLoggedIn,
//         setIsLoading,
//         isLoading,
//         userInfo
//     };
// }








import React, { createContext, useState, useEffect } from 'react';
import BASE_URL from './Api'
import axios from 'axios'
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner"
import { AiOutlineCheck } from "react-icons/ai";
import { LucideLoader2, User } from "lucide-react";
import { Toaster as Sonner } from "sonner"
import { redirect, Link} from 'react-router-dom'
import ServiceTime from './serviceTime';

//export const [isLoading, setIsLoading] = useState('hidden');
//const [userToken, setUserToken] = useState(null);


export function Services() {
    const dataAtual = ServiceTime()
    const [isLoading, setIsLoading] = useState(false);
    
    const [userInfo, setUserInfo] = useState(null)

    const login = async (nip, password) => {
        setIsLoading(true)
        //;

        if (nip && password != "") {

            await axios.post(`${BASE_URL}/login`, {
                nip,
                password
            }).then(res => {
                
                if (res.data.user.NIP == nip) {
                    toast('Logando!...', {
                        description:dataAtual,
                        action: {
                            label: <AiOutlineCheck size={13} />,
                            onClick: () => console.log("Concluido"),
                        },
                    })
                    let userInfo = res.data;
                    setUserInfo(userInfo);
                    // setUserToken(userInfo.token);
                    localStorage.setItem('userInfo', JSON.stringify(userInfo))
                    //localStorage.setItem('userToken', userInfo.token)
                    window.location.replace('/home')
                }

                // alert('entrar')

                // let userInfo = res.data;
                // setUserInfo(userInfo);
                // setUserToken(userInfo.token);
                // localStorage.setItem('userInfo', JSON.stringify(userInfo))
                //localStorage.setItem('userToken', userInfo.token)

            }).catch(e => {
                console.log(`login error ${e}`);
                toast('Dados Incorrectos!...', {
                    description: 'Verifique o seu NIP a sua palavra passe e depois volte a tentar...', style: { backgroundColor: "#e6b5b5", color: "red", border: "1px solid red" },
                    action: {
                        label: <AiOutlineCheck size={13} color='white' />,
                        onClick: () => console.log("dados incorrectos"),
                    },
                })

            })
        }
        else {
            alert('Preencha os Campos')
        }
        setIsLoading(false)
    }

    const [data, setData] = useState(null);
    const isLoggedIn = (key) => {
        try {
            useEffect(() => {
                const fetchData = () => {
                    const storedData = localStorage.getItem(key);
                    if (storedData) {
                        setData(JSON.parse(storedData));
                    }
                    else{
                        return window.location.replace('/login')
                    }
                };
                fetchData();
            }, [key]);


        } catch (error) {
          console.log(error)
        }
        return data;
    };

    const logOut = ()=>{
        localStorage.clear();
        window.location.replace('/login')
    }

    const [currentTimeData, setCurrentTimeData] = useState(null);
    const useCurrentTime = () => {
      
        useEffect(() => {
          const getCurrentTime = async () => {
            try {
              // Obter a hora atual do servidor
              const response = await fetch('https://worldtimeapi.org/api/ip');
              const data = await response.json();
              const currentDateTime = new Date(data.datetime);
      
              const timeString = currentDateTime.toLocaleTimeString();
      
              const monthString = currentDateTime.toLocaleString('default', { month: 'long' });

               const dateTime2 = monthString+" "+timeString
              // Atualizar o estado com a hora atual e o mês
              setCurrentTimeData(dateTime2);
              localStorage.setItem('date',currentTimeData)
            } catch (error) {
              console.error('Error:', error);
            }
          };
      
          // Chamar a função para obter a hora atual
          getCurrentTime();
        }, []); // Executar apenas uma vez após a montagem do componente
      
        return currentTimeData;
      };

    return {
        login,
        isLoggedIn,
        setIsLoading,
        useCurrentTime,
        logOut,
        currentTimeData,
        isLoading,
        userInfo
    }
}