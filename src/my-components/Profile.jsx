import React, {useEffect, useState} from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Foto from '../img/Foto.png'
import { Button } from "@/components/ui/button"
import LegendInput from "./LegendInput"

export default function SheetDemo() {

  const [profile, setProfile] = useState(true)
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
  
  useEffect(()=>{
    console.log(userInfo)
  },[])
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" onClick={()=>{setProfile(true)}} style={{width:"100%", textAlign:"left"}}>Ver Perfil</button>
      </SheetTrigger>
      <SheetContent>
        <div style={{ width: "100%", height: "93%", marginTop: "10px" }}>
          {
            profile ? (
              <>
                <SheetHeader>

                  <div style={{ width: "100%", height: "150px", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center", display: "flex", }} >
                    <div style={{ width: "115px", height: "115px", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center", display: "flex", border: "1px solid green", borderRadius: "50%" }}>
                      <img style={{ borderRadius: "50%", width: 110, height: 110 }} src={Foto} alt="..." />
                    </div>
                  </div>
                  <SheetTitle>
                    <p style={{ textAlign: "center" }}>
                      {userInfo.user.nome}
                    </p>

                  </SheetTitle>
                  <h1>{userInfo.user.funcao}</h1>
                  <h1>{userInfo.user.NIP}</h1>
                  <SheetDescription>
                      {userInfo.user.morada.provincia+", "+userInfo.user.morada.municipio+", "+userInfo.user.morada.bairro+", "+userInfo.user.morada.rua+", "+userInfo.user.morada.n_casa}
                  </SheetDescription>
                </SheetHeader>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15%" }}>
                  <div style={{ flexDirection: "column", width: "150px", height: "170px", border: "1px solid grey", alignContent: "center", justifyContent: "center", display: "flex", alignItems: "center", cursor: "pointer", borderRadius: "5px" }} className="shadow-2xl">
                    <p style={{ fontSize: "25px", fontWeight: "bold", display: "block" }}>2.400</p>
                    <p style={{ display: "block" }} >Consultas</p>
                  </div>
                  <div style={{ flexDirection: "column", width: "150px", height: "170px", border: "1px solid grey", alignContent: "center", justifyContent: "center", display: "flex", alignItems: "center", cursor: "pointer", borderRadius: "5px" }} className="shadow-2xl">
                    <p style={{ fontSize: "25px", fontWeight: "bold", display: "block" }}>3004</p>
                    <p style={{ display: "block" }} >Pacientes</p>
                  </div>
                </div>
              </>
            )
              :
              (
                <>
                    <div style={{ width: "100%", height: "150px", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center", display: "flex", }} >
                      <div style={{ width: "115px", height: "115px", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center", display: "flex", border: "1px solid green", borderRadius: "50%" }}>
                        <img style={{ borderRadius: "50%", width: 110, height: 110 }} src={Foto} alt="..." />
                      </div>
                      
                    </div>
                    <p style={{textAlign:"center", cursor:"pointer", fontWeight:"600"}}>Alterar Foto</p>
                    <div style={{overflowY:"scroll", height:"73%", width:"100%"}} >
                    <LegendInput legend={'Nome'} type={'text'} value= {userInfo.user.nome}/>
                    <LegendInput legend={'Email'} type={'text'} value={userInfo.user.NIP}/>
                    <LegendInput legend={'Funcao'} type={'text'} value={userInfo.user.funcao}/>
                    <LegendInput legend={'Data Nascimento'} type={userInfo.user.dt_nascimento}/>
                    <LegendInput legend={'Consultas'} type={'number'} value={2400}/>
                    <LegendInput legend={'Cadastros'} type={'number'} value={3004}/>
                    <LegendInput legend={'Provincia'} type={'text'} value={userInfo.user.morada.provincia}/>
                    <LegendInput legend={'Municipio'} type={'text'} value={userInfo.user.morada.municipio}/>
                    <LegendInput legend={'Bairro/Distrito'} type={'text'} value={userInfo.user.morada.bairro}/>
                    <LegendInput legend={'Numero da Casa'} type={'text'} value={userInfo.user.morada.n_casa}/>
                    <Button >enviar ao admin</Button>
                    </div>
                </>
              )
          }
        </div>
        <SheetFooter>
          <div style={{ backgroundColor: '#ccc', width: "100%", height: "50px", border: "1px solid #ccc", borderRadius: "5px", display: "flex", padding: "4px", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
            <div>
              <button className="bg-zinc-900 text-white hover:opacity-90" type="button" style={{ width: "160px", height: "40px", borderRadius: "5px", textAlign: "center", fontSize: "16px", fontFamily: "ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji", lineHeight: "24px" }} onClick={() => { setProfile(true) }}>perfil</button>
            </div>
            <div>
              <button className="bg-transparent text-black hover:opacity-90" type="button" style={{ width: "160px", height: "40px", borderRadius: "5px", textAlign: "center", fontSize: "14px", border:"1px solid black", fontWeight:"600" }} onClick={() => { setProfile(false) }}>editar perfil</button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
