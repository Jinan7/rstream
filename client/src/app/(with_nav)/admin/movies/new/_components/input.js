import { X } from "lucide-react";

export default function Input({ onRemove, label, className }) {

    return (
        <div className={`flex min-w-[200px] items-center justify-between ${className}`}>
            <p className="text-[#201e1b] text-[14px] font-normal">{label}</p>
            <X className="size-[16px]" onClick={onRemove}/>
        </div>
    )
}