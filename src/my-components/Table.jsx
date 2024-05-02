import React, { useState, useRef, useEffect } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { TbFileImport } from 'react-icons/tb'
import Input from '../my-components/Input'
import { AiOutlineSearch } from 'react-icons/ai'
//import ContainerContentFiltrar from './ContainerContentFiltrar'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import { IoIosArrowDown } from 'react-icons/io'
import { Button } from '@/components/ui/button';

const pacientesData = [
    { id: 1, nome: 'João Raposo', email: 'joao@example.com', patente: '1º Sargento', historico: [], dataNascimento: '29-01-2000' },
    { id: 2, nome: 'Maria', email: 'maria@example.com', patente: '2º Sargento', historico: [], dataNascimento: '29-02-1996' },
    { id: 3, nome: 'Pedro  Domingos', email: 'pedro@example.com', patente: '3º Sargento', historico: [], dataNascimento: '01-10-2000' },
    { id: 4, nome: 'Carla Joana', email: 'carla@example.com', patente: '2º Comandante', historico: [], dataNascimento: '25-11-1975' }

    // Adicione mais pacientes conforme necessário
];








const Table = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchField, setSearchField] = useState('nome'); // Campo padrão de pesquisa
    const [showDropdown, setShowDropdown] = useState(null); // Armazena o ID do usuário cujo dropdown está aberto
   
    const dropdownRef = useRef(null);

    const [checked, setChecked] = useState(false)

    const Items = [
        {
            id: 1,
            name: "PATENTE",
            checked: checked
        },
        {
            id: 2,
            name: "UNIDADE",
            checked: checked
        },
        {
            id: 3,
            name: "PATOLOGIA",
            checked: checked
        }
    ]

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFieldChange = (event) => {
        setSearchField(event.target.value);
    };

    const filteredPacientes = pacientesData.filter((paciente) =>
        paciente[searchField].toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleDropdownToggleElement = (userId) => {
        setActionsElement(actionsElement === userId ? null : userId);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // Se o clique ocorrer fora do dropdown, feche-o
                setShowDropdown(null);
            }
        };

        // Adiciona o ouvinte de eventos de clique ao documento inteiro
        document.addEventListener('mousedown', handleClickOutside);

        // Remove o ouvinte de eventos de clique quando o componente for desmontado
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDropdownToggle = (userId) => {
        setShowDropdown(showDropdown === userId ? null : userId);
    };

    const handleOptionClick = (userId, option) => {
        console.log(`Opção ${option} selecionada para o usuário ${userId}`);
        // Adicione lógica para lidar com a opção selecionada

    };


    return (
        <>
            <div className="w-full h-full">
                <div className='TabBarSearcrh'>

                    <div style={{ width: "100%", display: "flex", flexDirection: "row", marginLeft: "3%" }}>
                        <Input
                            type="text"
                            placeholder="Pesquisar paciente..."
                            value={searchTerm}
                            onChange={handleChange}
                            style={{ width: "400px", paddingRight: "20px" }} />
                        <p style={{ marginLeft: "-20px" }}><AiOutlineSearch size={24} color='gray' /></p>
                    </div>

                    <div style={{ display: "none" }}>
                        <Input />
                    </div>

                    <div style={{ display: "none" }}>
                        <Input />
                    </div>

                    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", paddingRight: "" }} >
                        <Popover>
                            <PopoverTrigger asChild>
                                <button type='button' className='button a' id="btnLimpar" style={{ borderRadius: "5px", marginRight: "10px" }} >

                                    <span style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                        <p>Filtrar</p>
                                        <IoIosArrowDown style={{ marginLeft: "5px", marginTop: "5px" }} />
                                    </span>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className='flex h-full w-40 flex-col overflow-hidden rounded-md bg-popover text-popover-foreground border-gray-400 border mt-2'>
                                    <div className='max-h-[300px] overflow-y-auto overflow-x-hidden'>
                                        <div className='overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground'>
                                            {
                                                Items.map((item) => {
                                                    return (
                                                        <>
                                                            <div id={item.id} className='relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:cursor-pointer hover:bg-gray-200 justify-between'>
                                                                <div role="menuitemcheckbox" aria-checked="true" class="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 capitalize" data-state="checked" tabindex="-1" data-orientation="vertical" data-radix-collection-item=""><span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                                                    <span data-state="checked">
                                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                                                            <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                                                            </path>
                                                                        </svg>
                                                                    </span>
                                                                </span>
                                                                    {item.name}
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })

                                            }


                                        </div>

                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="mr-4">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button type='button' className='button a' id="btnGerarPDF" style={{ width: "5px", borderRadius: "5px" }} >
                                        <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                                            <div>
                                                <TbFileImport size={20} />
                                            </div>
                                        </span>
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Gerar PDF</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                </div>
                <div className="container mx-auto w-full">
                    <div className="w-full my-4 flex justify-start">
                      
                        {/* <div role="menuitemcheckbox" aria-checked="true" class="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 capitalize" data-state="checked" tabindex="-1" data-orientation="vertical" data-radix-collection-item=""><span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><span data-state="checked"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span></span>status</div>
                    <div role="menuitemcheckbox" aria-checked="false" class="relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 capitalize" data-state="unchecked" tabindex="-1" data-orientation="vertical" data-radix-collection-item=""><span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"></span>email</div> */}
                    </div>
                    <div className="rounded-md border">
                        <div className="relative w-full overflow-auto h-96">
                            <div className='w-full h-10 border border-red-900'>

                            </div>
                            <table className="w-full caption-bottom text-sm">
                               
                                            <thead>
                                                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted w-full justify-around align-middle">
                                                    <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                                        <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" aria-label="Select all">
                                                        </button>
                                                    </th>
                                                    <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] ">
                                                        Nome
                                                    </th>
                                                    <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] ">
                                                        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                                                            Email
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4">
                                                                <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                                                </path>
                                                            </svg>
                                                        </button>
                                                    </th>
                                                    <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                                        <div class="text-right">
                                                            Patente
                                                        </div>
                                                    </th>

                                                    <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                                        <div class="text-right">
                                                            Nascimento
                                                        </div>
                                                    </th>
                                                    <th class="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">

                                                    </th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                {filteredPacientes.map((paciente) => (

                                                    <tr id={paciente.id} class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" data-state="false">
                                                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                                            <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" class="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground" aria-label="Select row">
                                                            </button>
                                                        </td>
                                                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                                            <div class="capitalize">
                                                                {
                                                                    paciente.nome
                                                                }
                                                            </div>
                                                        </td>
                                                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                                            <div class="lowercase">
                                                                {
                                                                    paciente.email
                                                                }
                                                            </div>
                                                        </td>
                                                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                                            <div class="text-right">
                                                                {
                                                                    paciente.patente
                                                                }
                                                            </div>
                                                        </td>
                                                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                                            <div class="text-right font-medium">
                                                                {
                                                                    paciente.dataNascimento
                                                                }
                                                            </div>
                                                        </td>
                                                        <td class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]" >
                                                            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0" type="button" id="radix-:rh:" aria-haspopup="menu" aria-expanded="false" data-state="closed" onClick={() => { handleDropdownToggle(paciente.id) }}>
                                                                <span class="sr-only">Open menu</span>
                                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                                                    <path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                                </svg>
                                                            </button>


                                                        </td>
                                                        {
                                                            showDropdown === paciente.id && (
                                                                <>
                                                                    <div
                                                                        ref={dropdownRef}
                                                                        className="fixed right-0 mt-8 w-40 bg-white border rounded-md shadow-lg z-10"
                                                                    >
                                                                        {/* <ul className="py-1">
                                      <li>
                                        <button
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                          onClick={() => handleOptionClick(user.id, 'Editar')}
                                        >
                                          Editar
                                        </button>
                                      </li>
                                      <li>
                                        <button
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                          onClick={() => handleOptionClick(user.id, 'Excluir')}
                                        >
                                          Excluir
                                        </button>
                                      </li>
                                    </ul> */}

                                                                        <div data-side="bottom" data-align="end" role="menu" aria-orientation="vertical" data-state="open" data-radix-menu-content="" dir="ltr" id="radix-:ri:" aria-labelledby="radix-:rh:" className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 fixed" tabindex="-1" data-orientation="vertical" >
                                                                            <div class="px-2 py-1.5 text-sm font-semibold" >Opções</div>
                                                                            <div role="menuitem" className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">Copiar o NIP</div>
                                                                            <div role="separator" aria-orientation="horizontal" className="-mx-1 my-1 h-px bg-muted"></div>
                                                                            <div role="menuitem" className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">Gerar PDF</div>
                                                                            <div role="menuitem" className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50" tabindex="-1" data-orientation="vertical" data-radix-collection-item="">Historico de Cunsulta</div>
                                                                        </div>
                                                                    </div>

                                                                </>)
                                                        }

                                                    </tr>
                                                ))}
                                            </tbody>
                                   
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;

// import React, { useState, useEffect, useRef } from 'react';

// const UserList = () => {
// //   const [showDropdown, setShowDropdown] = useState(null); // Armazena o ID do usuário cujo dropdown está aberto
// //   const dropdownRef = useRef(null); // Ref para o elemento dropdown

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         // Se o clique ocorrer fora do dropdown, feche-o
//         setShowDropdown(null);
//       }
//     };

//     // Adiciona o ouvinte de eventos de clique ao documento inteiro
//     document.addEventListener('mousedown', handleClickOutside);

//     // Remove o ouvinte de eventos de clique quando o componente for desmontado
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const users = [
//     { id: 1, name: 'João' },
//     { id: 2, name: 'Maria' },
//     { id: 3, name: 'Pedro' },
//     { id: 4, name: 'Ana' },
//   ];

//   const handleDropdownToggle = (userId) => {
//     setShowDropdown(showDropdown === userId ? null : userId);
//   };

//   const handleOptionClick = (userId, option) => {
//     console.log(`Opção ${option} selecionada para o usuário ${userId}`);
//     // Adicione lógica para lidar com a opção selecionada
//   };

//   return (
//     <div className="container mx-auto">
//       <h2 className="text-lg font-semibold mb-4">Lista de Usuários</h2>
//       <ul className="space-y-4">
//         {users.map((user) => (
//           <li
//             key={user.id}
//             className="relative"
//           >
//             <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md">
//               <span>{user.name}</span>
//               <button
//                 className="px-2 py-1 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 onClick={() => handleDropdownToggle(user.id)}
//               >
//                 Opções
//               </button>
//             </div>
//             {showDropdown === user.id && (
//               <div
//                 ref={dropdownRef}
//                 className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
//               >
//                 <ul className="py-1">
//                   <li>
//                     <button
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                       onClick={() => handleOptionClick(user.id, 'Editar')}
//                     >
//                       Editar
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                       onClick={() => handleOptionClick(user.id, 'Excluir')}
//                     >
//                       Excluir
//                     </button>
//                   </li>
//                   {/* Adicione mais opções conforme necessário */}
//                 </ul>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

