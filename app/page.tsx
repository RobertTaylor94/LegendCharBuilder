"use client"

import * as React from "react"
import NavBar from "@/components/NavBar"
import Image from "next/image"

export default function Home() {
  return(
    <div>
      <NavBar></NavBar>
      <div style={{width: '100vw', height: '50vh', overflow: 'hidden', position: "relative"}}>
        {/* <img src={"./../public/legend_banner.png"} alt="A hero stood on the edge of a mountain" style={{width: '100vw', height: '50vh'}}/> */}
        <Image src={"/../public/legend_banner.png"} fill={true} alt="The silouette of a hero standing in a cloudy mountain range. "/>
      </div>   
    </div>
  )
};