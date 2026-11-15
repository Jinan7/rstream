import { X } from "lucide-react";

export default function Input({ onRemove, label }) {

    return (
        <div className="flex w-[200px] items-center justify-between">
            <p className="text-[#201e1b] text-[14px] font-normal">{label}</p>
            <X className="size-[16px]" onClick={onRemove}/>
        </div>
    )
}