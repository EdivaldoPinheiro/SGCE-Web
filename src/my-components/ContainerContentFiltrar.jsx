import React, { useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover'
import { IoIosArrowDown } from 'react-icons/io'





export default function ContainerContentFiltrar(props) {

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

    return (
        <>
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
        </>
    )
}

