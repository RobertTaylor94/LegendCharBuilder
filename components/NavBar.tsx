import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { Sheet } from "./ui/sheet";
import { SheetDemo } from "./sheet";

export default function NavBar() {

    let loggedIn = false
    let label = ""

    if (loggedIn) {
        label = "Username"
    } else {
        label = "Sign Up"
    }

    return (
        <NavigationMenu className="justify-between bg-orange-950 text-white">
            <NavigationMenuList>
                <NavigationMenuItem className="p-5 text-2xl">
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Legend
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-5">
                    <Link href="/characters" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Characters
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-5">
                    <Link href="/homebrew" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Homebrew Document
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="justify-end">
                <NavigationMenuItem className="p-5 text-end">
                    <SheetDemo></SheetDemo>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}