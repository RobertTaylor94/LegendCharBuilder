"use client"

import NavBar from "@/components/NavBar";
import SignIn from "@/components/auth/SignIn";
import React from "react";
import { useAppContext}  from "../../context/state"
import SignUp from "@/components/auth/SignUp";

export default function characters() {

    let user = useAppContext()
    console.log("user:")
    console.log(user)

    if (user == undefined) {
        return (
            <div>
                <NavBar/>
                <SignUp/>
            </div>
        )
    } else {
        return (
            <div>
                <NavBar />
                <SignIn />
            </div>
        )
    }

    return(
        <div>
            <NavBar></NavBar>
            <h1>User</h1>
        </div>
    )
}