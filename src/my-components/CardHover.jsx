import React, { useState, useEffect } from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import Foto from '../img/Foto.png'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Services } from "@/services/services"

export default function HoverCardDemo() {
    const { isLoggedIn } = Services()
    const userInfo = isLoggedIn('userInfo');
    let date = localStorage.getItem("date")

    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link">
                    {userInfo && (
                        <p style={{ fontWeight: "500", fontSize: "17px" }}>
                            {
                                userInfo.user.nome
                            }
                        </p>
                    )
                    }
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        {/* <AvatarImage src="https://github.com/vercel.png" /> */}
                        <img src={Foto} alt="foto" />
                        <AvatarFallback>...</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        {userInfo &&
                            (
                                <h4 className="text-sm font-semibold">{userInfo.user.NIP}</h4>
                            )
                        }

                        <p className="text-sm">
                            {userInfo &&
                                (
                                    userInfo.user.morada.provincia + " " + userInfo.user.morada.municipio + " " + userInfo.user.morada.municipio + " " + userInfo.user.morada.bairro + " " + userInfo.user.morada.rua + " casa nº " + userInfo.user.morada.n_casa
                                )
                            }
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                {
                                  date
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
