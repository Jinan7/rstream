import { X } from "lucide-react";

export default function MultiFormInput({ text, onClick }) {
    return (
        <div className="flex flex-row gap-2 bg-gray-200 rounded-sm border-gray-400 border-1 items-center px-2 self-start">
            <p>{text}</p>
            <button><X className="text-gray-400" onClick={onClick}/></button>
        </div>
    )
}