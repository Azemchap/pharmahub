"use client"

import { cn } from "@/lib/utils"
import { CreditCard, PillBottle, Store, Users } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"



export function Aside() {
    return (
        <aside className="max-w-60 flex gap-4 bg-primary-foreground rounded overflow-hidden">
            <nav className="hidden flex-col text-lg font-medium md:flex ">
                <NavLink
                    href="/prescriptions"
                >
                    <PillBottle className="h-4 w-4 " /> Prescriptions
                </NavLink>
                <NavLink
                    href="/patients"
                >
                    <Users className="h-4 w-4" />   Patients
                </NavLink>
                <NavLink
                    href="/drugs"
                >
                    <Store className="h-4 w-4 " /> Drugs
                </NavLink>
                <NavLink
                    href="/sales"
                >
                    <CreditCard className="h-4 w-4 " />  Sales
                </NavLink>
            </nav>
        </aside>
    )
}


export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathname = usePathname()
    return (
        <Link
            {...props}
            className={cn(
                "hover:bg-secondary w-full h-full text-muted-foreground hover:text-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground transition-colors p-4 pr-16 text-sm flex gap-2 items-center",
                pathname === props.href && "text-foreground bg-secondary"
            )}
        />
    )
}