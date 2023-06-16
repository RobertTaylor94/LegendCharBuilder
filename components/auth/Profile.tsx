import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { auth } from "../../firebase/config"
import { signOut } from "firebase/auth"

export default function Profile() {

    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log("sign out succesfull")
        }).catch((err) => {
            console.log(err.code)
            console.log(err.message)
        })
    }

    return (
            <SheetContent position="right" size="default" className="bg-orange-950" style={{ color: 'white' }}>
                <SheetHeader>
                    <SheetTitle style={{ color: 'white' }}>Profile</SheetTitle>
                    <SheetDescription style={{ color: 'white' }}>
                        User profile.
                    </SheetDescription>
                </SheetHeader>
                <div>
                    {auth.currentUser?.email}
                    <Button onClick={logOut}> Sign Out</Button>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
    )
}