"use client"

import NavBar from "@/components/NavBar";
import React from "react";

// const myHTML = require('../../components/hrd.html');

export default function homebrew() {
    return(
        <div>
            <NavBar></NavBar>
            {/* <div dangerouslySetInnerHTML={{ __html: myHTML }}></div> */}
            <iframe src={'hrd.html'} style={{width: '100%', height: '95vh'}}></iframe>
        </div>
    )
}