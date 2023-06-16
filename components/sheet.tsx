import SignUp from "./auth/SignUp"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { useState } from "react"
import SignIn from "./auth/SignIn"
import { auth } from "@/firebase/config"
import Profile from "./auth/Profile"

export function UserSheet() {

  let buttonLabel = "Sign Up"
  if (auth.currentUser != null) {
    buttonLabel = "Profile"
  } 

  const [currentSub, setCurrentSub] = useState("sub1")

  const handleClick = () => {
    setCurrentSub(currentSub === 'sub1' ? 'sub2' : 'sub1')
  }

  return (
    <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">{buttonLabel}</Button>
            </SheetTrigger>
            <div>
              {
                auth.currentUser != null ? (<Profile />) : (
                  <>
                  {currentSub === "sub1" && <SignUp handleClick={handleClick}/>}
                  {currentSub === "sub2" && <SignIn handleClick={handleClick}/>}
                  </>
                )
                }
            </div>
    </Sheet>
  )
}
