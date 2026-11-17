'use client'
import { useRef } from "react";
import { signup } from "./lib/api";
import Button from "../(with_nav)/_components/button";
import Link from "next/link";

export default function SignUpPage() {

    let formRef = useRef(null)
    let handleSignUp = async (e) => {
        e.preventDefault()
        let formData = new FormData(formRef.current)
        
        let name = formData.get("name");
        let email = formData.get("email");
        let password = formData.get("password")

        
        let response = await signup({name:name, email:email, password:password})
    }
    return (
        <div className="h-full ">  
            <div className="h-full flex flex-col items-center justify-center gap-[20px]">
                <div className="font-erica-one text-rsurface text-[32px]">rstream</div>
                <div className="w-[400px] bg-white border-rborder border-[1px] rounded-[8px]">
                    <div className="px-[20px] py-[30px]">
                        <p className="font-bold text-[20px]">Sign Up</p>
                    </div>
                    <form ref={formRef} action="" className="flex flex-col gap-[20px] px-[20px] pb-[20px]">
                        <div className=" flex flex-col gap-[4px] basis-1/1">
                            <label className="text-[#201e1b] text-[14px] font-bold">Name</label>
                            <input name="name" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[4px]" ></input>
                        </div>
                        <div className=" flex flex-col gap-[4px] basis-1/1">
                            <label className="text-[#201e1b] text-[14px] font-bold">Email</label>
                            <input name="email" type="email" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[4px]" ></input>
                        </div>
                        <div className=" flex flex-col gap-[4px] basis-1/1">
                            <label className="text-[#201e1b] text-[14px] font-bold">Password</label>
                            <input name="password" type="password" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[4px]" ></input>
                        </div>
                        <Button onClick={handleSignUp} type="button" label={"Submit"} variant={'dark'} className={"rounded-full mt-[20px]"}/>
                    </form>
                    <div className="px-[20px] flex items-center justify-center mb-[50px]">
                        <p className="font-bold">Not new here? <Link className="underline" href={"/signin"}>Sign In</Link></p>
                    </div>
                </div>
            </div>  
        </div>
    )
}