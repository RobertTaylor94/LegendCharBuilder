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

export default function SignIn(props: { handleClick: any }) {
    const {handleClick} = props
    return (
            <SheetContent position="right" size="default" className="bg-orange-950" style={{ color: 'white' }}>
                <SheetHeader>
                    <SheetTitle style={{ color: 'white' }}>Sign In</SheetTitle>
                    <SheetDescription style={{ color: 'white' }}>
                        Sign in to use the character creator and save your characters to your profile.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Username
                        </Label>
                        <Input id="email" placeholder="Email" className="col-span-3" style={{ backgroundColor: 'white' }} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Password
                        </Label>
                        <Input id="password" placeholder="Password" className="col-span-3" style={{ backgroundColor: 'white' }} />
                    </div>
                    <Button type='submit' style={{ backgroundColor: '#F8E094', color: '#421407' }}>Save</Button>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right mr-3 col-span-2">Not Signed up yet?</Label>
                        <Button type='submit' onClick={handleClick} className="col-span-2" style={{ backgroundColor: '#F8E094', color: '#421407' }}>Sign Up</Button>
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