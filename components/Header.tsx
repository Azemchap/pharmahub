"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

import {
    CreditCard,
    Menu,
    PillBottle,
    Search,
    Store,
    User
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/lib/ModeToggle"

export function Header() {
    return (
        <div className="shadow w-full  fixed  top-0 z-40">
            <header className="container mx-auto flex h-16 items-center gap-4 bg-background px-4 md:px-6 ">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <PillBottle className="h-6 w-6" />
                        PharmaHub
                    </Link>
                    <NavLink
                        href="/prescriptions"
                    >
                        <PillBottle className="h-4 w-4 " /> Prescriptions
                    </NavLink>
                    <NavLink
                        href="/patients"
                    >
                        <User className="h-4 w-4 " /> Patients
                    </NavLink>
                    <NavLink
                        href="/drugs"
                    >
                        <Store className="h-4 w-4 " /> Drugs
                    </NavLink>
                    <NavLink
                        href="/sales"
                    >
                        <CreditCard className="h-4 w-4 " />   Sales
                    </NavLink>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="/"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <PillBottle className="h-6 w-6" />
                                PharmaHub <SheetClose />
                            </Link>
                            <Link
                                href="/prescriptions"
                                className="text-muted-foreground hover:text-foreground flex gap-1 items-center "
                            >
                                <PillBottle className="h-4 w-4 " /> Prescriptions <SheetClose />
                            </Link>
                            <Link
                                href="/patients"
                                className="text-muted-foreground hover:text-foreground flex gap-1 items-center "
                            >
                                <User className="h-4 w-4 " /> Patients <SheetClose />
                            </Link>
                            <Link
                                href="/drugs"
                                className="text-muted-foreground hover:text-foreground flex gap-1 items-center "
                            >
                                <Store className="h-4 w-4 " /> Drugs <SheetClose />
                            </Link>
                            <Link
                                href="/sales"
                                className="text-muted-foreground hover:text-foreground flex gap-1 items-center "
                            >
                                <CreditCard className="h-4 w-4 " /> Sales <SheetClose />
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="hidden ml-auto flex-1 ">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <div className="ml-auto">
                        <ModeToggle />
                    </div>

                    {/* <div>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div> */}
                </div>
            </header>
        </div >
    )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathname = usePathname()
    return (
        <Link
            {...props}
            className={cn(
                "p-4 hover:bg-secondary text-muted-foreground hover:text-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground transition-colors flex gap-1 items-center ",
                pathname === props.href && "text-foreground border-b-2 border-b-primary"
            )}
        />
    )
}

