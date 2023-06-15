import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { auth } from "../../firebase/config"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

type Data = {
    email: string,
    password: string
}

export default function SignUp(props: { handleClick: any; }) {

    const {handleClick} = props;
    const [data, setData] = useState<Data>({email: '', password: ''})
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newInput = { [event.target.name] : event.target.value }
        setData({...data, ...newInput})
    }
    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            console.log(response)
            console.log("User created")
        })
        .catch((err) => {
            console.log(err.code)
            console.log(err.message)
        })
        const clearData = {email: '', password: ''}
        setData(clearData)
    }

    return (
            <SheetContent position="right" size="default" className="bg-orange-950" style={{ color: 'white' }}>
                <SheetHeader>
                    <SheetTitle style={{ color: 'white' }}>Sign Up</SheetTitle>
                    <SheetDescription style={{ color: 'white' }}>
                        Sign up to use the character creator and save your characters to your profile.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Username
                        </Label>
                        <Input id="email" placeholder="Email" className="col-span-3" style={{ backgroundColor: 'white', color: 'black' }} name="email" onChange={handleInput}/>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Password
                        </Label>
                        <Input id="password" placeholder="Password" className="col-span-3" type="password" style={{ backgroundColor: 'white', color: 'black' }} name="password" onChange={handleInput}/>
                    </div>
                    <Button type='submit' style={{ backgroundColor: '#F8E094', color: '#421407' }} onClick={handleSubmit}>Sign Up</Button>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right mr-3 col-span-2">Already signed up?</Label>
                        <Button type='submit' onClick={handleClick} className="col-span-2" style={{ backgroundColor: '#F8E094', color: '#421407' }}>Log In</Button>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
    )
}