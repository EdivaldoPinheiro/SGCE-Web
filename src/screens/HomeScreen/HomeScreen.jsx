import React, { useState, useEffect } from 'react';
import Header from '../../my-components/Header';
import ContentMenu from '../../my-components/ContentMenu';
import { AiOutlineCheck } from "react-icons/ai";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import './styles.css';
import ServiceTime from '@/services/serviceTime';

const HomeScreen = () => {
 const currentTime = ServiceTime()
  const [menu, setMenu] = useState(true);
  //const [userLoggedIn, setUserLoggedIn]= useState(null)

  const toggleMenu = () => {
    setMenu(!menu);
  }

  useEffect(() => {
    // Obtém a hora atual do localStorage
      const dataAtual = localStorage.getItem('date');
      // Define a hora atual no estado

    toast('Login Feito com Sucesso!...', {
      description:dataAtual, // Exibe a hora atual no toast
      action: {
        label: <AiOutlineCheck size={13} />,
        onClick: () => {
          // Ação do toast, se necessário
        },
      },
    });

}, [currentTime]);

  return (
    <>
      <div className='body'>
        <Header onClick={toggleMenu} />

        {menu && (
          <ContentMenu onClick={toggleMenu} />
        )}
        <Toaster />
      </div>
    </>
  );
}

export default HomeScreen;




// import React, { useState, useEffect } from 'react'
// import Header from '../../my-components/Header'
// import ContentMenu from '../../my-components/ContentMenu'
// import { AiOutlineCheck } from "react-icons/ai";
// import { toast } from "sonner";
// import { Toaster } from "@/components/ui/sonner"
// import './styles.css'
// import { Services } from '../../services/services';

// const HomeScreen = ()=> {
//   const { useCurrentTime } = Services;
//   const currentTime = useCurrentTime();
//   const [menu, setMenu] = useState(true)
//   const [dataAtual, setDataAtual] = useState(new Date());
//   //const [userLoggedIn, setUserLoggedIn]= useState(null)

//   const toggleMenu = () => {
//     setMenu(!menu)
//   }

//   useEffect(() => {
//     const currentTime = Services()
//      console.log(currentTime.useCurrentTime);
//     //const date = useCurrentTime()
//    // localStorage.setItem('joined', date)
//     // let userInfo = localStorage.getItem('userInfo')
//     // userInfo = JSON.parse(userInfo)
//     // setUserLoggedIn(userInfo)
//     //localStorage.setItem('joined',+dataAtual.getDay()+"/"+dataAtual.getMonth()+"/"+dataAtual.getFullYear()+" "+dataAtual.getHours()+":"+dataAtual.getMinutes()+":"+dataAtual.getSeconds())

//     toast('Login Feito com Sucesso!...', {
//       description:"rtr",//useCurrentTime(),
//       action: {
//         label: <AiOutlineCheck size={13} />,
//         onClick: () => {
//         },
//       },
//     })
//   }, [currentTime])

//   return (
//     <>
//       <div className='body' >
//         <Header onClick={toggleMenu} />


//         {menu && (
//           <ContentMenu onClick={toggleMenu} />
//         )
//         }
//         <Toaster />
//       </div>
//     </>
//   )

// }

// export default HomeScreen