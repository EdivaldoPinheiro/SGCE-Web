import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import Log from '../img/log_of_police.jpeg'
import LegendInput from './LegendInput'
import { AiOutlineClose, AiOutlineHome, AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai'
import { TbActivity, TbSearch, TbExclamationCircle, TbFilterBolt, TbFileImport, TbFileReport } from 'react-icons/tb'
import { PiUserCirclePlusBold } from 'react-icons/pi'
import { IoIosArrowDown } from 'react-icons/io'
import Input from './Input'
import Foto from '../img/Foto.png'
import TecnoExcelencia from '../img/tecnoExcelecia.png'
import AboutUs from './AboutUs/AboutUs'
import ComboboxSearch from './ComboBoxSearch'
import ComboboxDemo from './ComboBoxSearch'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import { Check } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import ContainerContentFiltrar from './ContainerContentFiltrar'
import Table from './Table'
import ServiceGrafics from '@/services/serviceGrafics'

export default function ContentMenu() {

    const [modalSettings, setModalSettings] = useState(false)
    const [modalConsult, setModalConsult] = useState(false)
    const [modalCadastro, setModalCadastro] = useState(false)
    const [modalSearch, setModalSearch] = useState(false)
    const [modalAbout, setModalAbout] = useState(false)
    const [modalGrafics, setModalGrafics] = useState(true)
    const [value, setValue] = useState(38)



    const handleChange = (event) => {
        setValue(event.target.value)
    }


    return (
        <>
            <nav className='nav' id='nav'>
                <div style={{ width: "100%", height: "85%", position: "relative" }}>
                    <div style={{ width: "100%", height: "20%", position: "relative", display: "flex", justifyContent: "center" }}>
                        <div className='containerLog'>
                            <img style={{ width: 100, height: 105 }} src={Log} alt="logo" />
                        </div>
                    </div>

                    <div className='ContainerContentButtonIcon' onClick={() => {
                        setModalGrafics(true)
                        setModalCadastro(false)
                        setModalAbout(false)
                        setModalConsult(false)
                        setModalSearch(false)
                    }}>

                        <div className='containerButtonIcon' id='btnHome' >
                            <AiOutlineHome size={30} style={{ marginRight: "10px" }} />
                            Home
                        </div>

                        <div className='containerButtonIcon' onClick={() => {
                            setModalCadastro(true)
                            setModalAbout(false)
                            setModalConsult(false)
                            setModalSearch(false)
                            setModalGrafics(false)
                        }}>
                            <PiUserCirclePlusBold size={30} style={{ marginRight: "10px" }} />
                            Cadastrar
                        </div>

                        <div className='containerButtonIcon' onClick={() => {
                            setModalConsult(true)
                            setModalAbout(false)
                            setModalCadastro(false)
                            setModalSearch(false)
                            setModalGrafics(false)
                        }}>
                            <TbActivity size={30} style={{ marginRight: "10px" }} />
                            Consultar
                        </div>

                        <div className='containerButtonIcon' onClick={() => {
                            setModalSearch(true)
                            setModalAbout(false)
                            setModalCadastro(false)
                            setModalConsult(false)
                            setModalGrafics(false)
                        }}>
                            <TbSearch size={30} style={{ marginRight: "10px" }} />
                            Pesquisar
                        </div>
                        <div className='containerButtonIcon' onClick={() => {
                            // setModalSearch(true)
                            // setModalAbout(false)
                            // setModalCadastro(false)
                            // setModalConsult(false)
                        }}>
                            <TbFileReport size={30} style={{ marginRight: "10px" }} />
                            Reportar
                        </div>

                    </div>
                </div>
                <div className='containerButtonIconAbouUs' onClick={() => {
                    setModalAbout(true)
                    setModalCadastro(false)
                    setModalConsult(false)
                    setModalSearch(false)
                    setModalGrafics(false)
                }}>
                    <TbExclamationCircle size={30} style={{ marginRight: "10px" }} />
                    Sobre
                </div>
                <div className='containerButtonIconAbouUs' onClick={() => { setModalSettings(!modalSettings) }}>
                    <AiOutlineSetting size={30} style={{ marginRight: "10px" }} />
                    Definicoes
                </div>

            </nav>
            {
                modalGrafics && (<>
                    <div className="modal-content">
                        <div style={{ padding: "10px" }}>
                           <ServiceGrafics />
                        </div>
                    </div>
                </>)
            }


            {
                modalSettings && (
                    <>
                        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <div class="sm:items-start">

                                                <div class="mt-3 text-center sm:mt-0 sm:text-left">
                                                    <h3 class="text-base font-semibold leading-6 text-gray-900 text-center" id="modal-title">Definicoes</h3>
                                                    <div class="mt-2">
                                                        <p class="text-sm text-gray-500">Faca as Suas Alteracoes</p>
                                                    </div>
                                                </div>

                                                <div >
                                                    <div >
                                                        <p>Tema:</p>
                                                        <div class="sm:flex">
                                                            <div class="sm:flex pr-2">
                                                                <p class="pr-1">Dark</p>
                                                                <input type="radio" name="tema" id="" />
                                                            </div>
                                                            <div class="sm:flex">
                                                                <p class="pr-1">Ligth</p>
                                                                <input type="radio" name="tema" id="" color='black' />
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => {
                                                setModalSettings(false)
                                            }}>OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                )
            }
            {
                modalConsult && (
                    <>

                        <div className="modal-content">
                            <div style={{ padding: "10px" }}>
                                <h4 style={{ textAlign: "center", marginBottom: "20px", color: "#252440", fontWeight: "bold" }}>CONSULTAR PACIENTE</h4>
                                <LegendInput legend={'Insira o NIF'} type={'text'} />
                                <LegendInput legend={'Patologia'} type={'text'} />
                                <p className='legend' style={{ marginLeft: "10px", marginTop: "7px" }}>Receita</p>

                                <textarea style={{ color: "#252440", border: "1px solid blue", height: "20vh", minHeight: "150px", width: "98%", minWidth: "400px", maxHeight: "200px", margin: "10px" }} name="" id="" cols="80" rows="20"></textarea>

                                <div style={{ textAlign: "center" }}>

                                    <span className='legend' style={{ marginLeft: "10px", marginTop: "7px", float: "left" }}>Temperatura: {value}º</span>

                                    <input type="range" name="" id="" color='red' className='customRange' onChange={handleChange} />
                                    <span className='legend' style={{ marginLeft: "10px", marginTop: "7px", float: "left" }}>Data</span>
                                    <LegendInput type={'datetime-local'} security={'false'} placeholder={'Descrição'} style={{ float: "left" }} />
                                </div>

                                <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px", position: "relative" }}>
                                    <button type='button' className='button a'><span>Concluido</span></button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            {
                modalCadastro && (
                    <>
                        <div className="modal-content">
                            <div style={{ padding: "10px" }}>
                                <h4 style={{ textAlign: "center", marginBottom: "20px", color: "#252440", fontWeight: "bold" }}>CADASTRAR PACIENTE</h4>
                                <form action="" method="post" id='form'>
                                    <div style={{ justifyContent: "center", alignItems: "center", width: "99%", height: "80%" }}>
                                        <div>
                                            <LegendInput legend={'NIP'} type={'text'} security={'false'} />
                                        </div>
                                        <div>
                                            <LegendInput legend={'Nome'} type={'text'} security={'false'} />
                                        </div>
                                        <div className='containerInputSmall' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "0.8%", width: "100%" }}>

                                            <LegendInput legend={'Provincia'} type={'text'} security={'false'} />

                                            <LegendInput legend={'Municipio'} type={'text'} security={'false'} />

                                            <LegendInput legend={'Distrito/Bairro'} type={'text'} security={'false'} />

                                            <LegendInput legend={'Rua'} type={'text'} security={'false'} />

                                            <LegendInput legend={'Número da Casa'} type={'text'} security={'false'} />

                                            <LegendInput legend={'Contacto'} type={'number'} security={'false'} />

                                            <LegendInput legend={'Nascimento'} type={'date'} security={'false'} />
                                        </div>
                                        <div>
                                            <LegendInput legend={'Nº BI'} type={'text'} security={'false'} />
                                        </div>
                                        <div>
                                            <LegendInput legend={'Função'} type={'text'} security={'false'} />
                                        </div>
                                        <div>
                                            <LegendInput legend={'Unidade'} type={'text'} security={'false'} />
                                        </div>
                                        <div>
                                            <LegendInput legend={'Acesso'} type={'text'} security={'false'} value={'Paciente'} />
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: " center", alignItems: "center", position: "relative", width: '100%', bottom: "20%" }}>
                                        <button type='button' className='button a'><span >Cadastar </span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                )
            }
            {
                modalSearch && (
                    <>
                        <div className="modal-content shadow-lg">

                            <Table />

                        </div>
                    </>
                )
            }
            {
                modalAbout && (
                    <>
                        <div className="modal-content shadow-lg" style={{ borderRadius: "10px" }}>

                            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>

                                <AboutUs src={TecnoExcelencia} name={'Tecno Execelencia'} email={'@tecnoexcelencia'} />
                                <AboutUs src={Foto} name={'Edivaldo Piheiro'} email={'@edivaldopinheiro'} />
                                <AboutUs src={Foto} name={'joao Luiz'} email={'@joaoluiz'} />

                            </div>
                            <p style={{ textAlign: "center", marginTop: "-2%", fontSize: "16px", color: "rgba(15, 37, 75, 1)" }}>Copyright © 2024</p>
                        </div>
                    </>
                )
            }
        </>
    )

}

