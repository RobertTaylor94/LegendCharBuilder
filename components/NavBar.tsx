import * as React from "react"
import Link from "next/link";
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
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
                    <Link href="/user" legacyBehavior passHref>
                        <NavigationMenuLink>
                            Sign In
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}