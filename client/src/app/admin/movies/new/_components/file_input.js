import IconButton from "@/app/_components/icon_button";
import UploadProgress from "./upload_progress";
import { Image } from "lucide-react";

export default function FileInput() {
    return (
        <div className="flex flex-col px-[20px] pb-[20px] pt-[4px]">
            <label for="file" className="flex flex-row gap-[12px]">
                <IconButton className="size-[70px]">
                    <Image/>
                </IconButton>
                <div className="flex flex-col gap-[4px] grow">
                    <p className="text-[#201e1b] text-[14px] font-bold">No file selected</p>
                    <UploadProgress/>
                </div>
            </label>
            <input id="file" name="file" accept="image/*" type="file" className="h-0 p-0 invisible"></input>
        </div>
    )
}