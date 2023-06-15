import SignUp from "./auth/SignUp"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { useState } from "react"
import SignIn from "./auth/SignIn"

export function SheetDemo() {
  const [currentSub, setCurrentSub] = useState("sub1")
  const handleClick = () => {
    setCurrentSub(currentSub === 'sub1' ? 'sub2' : 'sub1')
  }

  return (
    <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Sign Up</Button>
            </SheetTrigger>
            <div>
              {currentSub === "sub1" && (<SignUp handleClick={handleClick} />)}
              {currentSub === "sub2" && (<SignIn handleClick={handleClick} />)}
            </div>
    </Sheet>
  )
}
