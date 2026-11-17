import IconButton from "@/app/(with_nav)/_components/icon_button";
import UploadProgress from "./upload_progress";
import { Image } from "lucide-react";

export default function FileInput({ id, label, ref, progress, size, rate, onChange }) {


    return (
        <div className="flex flex-col px-[20px] pb-[20px] pt-[4px]">
            <label htmlFor={id} className="flex flex-row gap-[12px]">
                <IconButton className="size-[70px]">
                    <Image/>
                </IconButton>
                <div className="flex flex-col gap-[4px] grow">
                    <p className="text-[#201e1b] text-[14px] font-bold">{label}</p>
                    <UploadProgress progress={progress} size={size} rate={rate}/>
                </div>
            </label>
            <input ref={ref} id={id} name="file" accept="image/*" type="file" className="h-0 p-0 invisible" onChange={onChange}></input>
        </div>
    )
}