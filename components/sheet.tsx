import SignUp from "./auth/SignUp"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import SignIn from "./auth/SignIn"
import { auth } from "@/firebase/config"
import Profile from "./auth/Profile"

export function UserSheet() {

  const [currentSub, setCurrentSub] = useState("sub1")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  let buttonLabel = "Sign Up"
  if (auth.currentUser != null) {
    buttonLabel = "Profile"
  } 


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
                isLoggedIn ? (<Profile />) : (
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
