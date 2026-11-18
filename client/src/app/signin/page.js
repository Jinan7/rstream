'use client'
import { useRef } from "react"
import { signin } from "./lib/api";
import Button from "../(with_nav)/_components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {

    let router = useRouter()
    let formRef = useRef(null)
    let handleSignIn = async (e) => {
        e.preventDefault()
        let formData = new FormData(formRef.current)
        
        let email = formData.get("email");
        let password = formData.get("password")

        
        let response = await signin({email:email, password:password})
        if (response.status === 200 ) router.replace('/')
    }
    return (
        <div className="h-full "
            style={{
                "background": `linear-gradient(rgba(255,255,255,.95), rgba(255, 255, 255, .95)), url('/images/main_poster.jpg') center/cover no-repeat`,
            }}
        >  
            <div className="h-full flex flex-col items-center justify-center gap-[20px]">
                <div className="font-erica-one text-rsurface text-[32px]">rstream</div>
                <div className="flex flex-row gap-[20px]">
                    <div className="w-[400px] bg-white border-rborder border-[1px] rounded-[8px] self-start">
                        <div className="px-[20px] py-[30px]">
                            <p className="font-bold text-[20px]">Sign In</p>
                        </div>
                        <form ref={formRef} action="" className="flex flex-col gap-[20px] px-[20px] pb-[20px]">
                            <div className=" flex flex-col gap-[4px] basis-1/1">
                                <label className="text-[#201e1b] text-[14px] font-bold">Email</label>
                                <input name="email" type="email" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[4px]" ></input>
                            </div>
                            <div className=" flex flex-col gap-[4px] basis-1/1">
                                <label className="text-[#201e1b] text-[14px] font-bold">Password</label>
                                <input name="password" type="password" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[4px]" ></input>
                            </div>
                            <Button onClick={handleSignIn} type="button" label={"Submit"} variant={'dark'} className={"rounded-full mt-[20px]"}/>
                        </form>
                        <div className="px-[20px] flex items-center justify-center mb-[50px]">
                            <p className="font-bold">New here? <Link className="underline" href={"/signup"}>Sign Up</Link></p>
                        </div>
                    </div>
                    <div className="w-[512px] h-[512px]"
                        style={{
                            "background": `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url('/images/main_poster.jpg') center/cover no-repeat`,
                        }}>

                    </div>
                </div>
                
            </div>  
        </div>
    )
}