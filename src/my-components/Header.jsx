import React, { useState } from 'react';
import './styles.css';
import { FiMenu } from 'react-icons/fi'
import Foto from '../img/Foto.png'
import { IoIosArrowDown } from 'react-icons/io'
import CardHover from './CardHover'
import Profile from './Profile'
import { Services} from '@/services/services'


export default function Header(props) {
    const {logOut} = Services()
    const [modalProfile, setModalProfile] = useState(false)
    const [modalOptions, setModalOptions] = useState(false)
    const [modalTerminarSessao, setModalTerminarSessao] = useState(false)
 
    return (
        <>
            <div style={{ width: "100%", height: "10vh", position: "absolute" }} className='shadow-lg'>
                <header className='headerSize'>
                    <div className='containerMenu'>
                        <FiMenu size={24} cursor={'pointer'} onClick={props.onClick} className='hover:text-gray-400' />
                    </div>

                    <div className='containerRigth'>
                        <img style={{ position: "relative", borderRadius: 50, right: 0, cursor: "pointer", width: 40, height: 40 }} src={Foto} alt="test" />
                        <div onMouseOver={()=>{
                            setModalOptions(false)
                        }}>
                            <CardHover />
                        </div>
                        <IoIosArrowDown style={{ margin: 5, width:"20px", height:"20px" }} color='gray' onClick={() => { setModalOptions(!modalOptions) }} />
                           

                        {
                            modalOptions && (
                                <div className='containerOptions z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2'>
                                    <div style={{ width: "100%", borderRadius: "7px", paddingLeft: "7px" }} className='hover:bg-gray-100'>
                                        <Profile />
                                    </div>
                                    <div style={{ width: "100%", borderRadius: "7px", paddingLeft: "7px" }} className='hover:bg-gray-100'>
                                        <p style={{ color: "red" }} onClick={() => { 
                                            setModalTerminarSessao(true)
                                            setModalOptions(!modalOptions)
                                            }}>Terminar Sessao</p>
                                    </div>
                                </div>
                                
                            )
                        }
                    </div>
                </header>
            </div>

            {
                modalTerminarSessao && (
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div class="sm:flex sm:items-start">
                                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                                </svg>
                                            </div>
                                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Terminar Sessão</h3>
                                                <div class="mt-2">
                                                    <p class="text-sm text-gray-500">Tens a Certeza que queres Terminar a tua Sessão?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={()=>{
                                            logOut()
                                        }}>Sim</button>
                                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => {
                                            setModalTerminarSessao(false)
                                            setModalOptions(false)
                                        }}>Não</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}