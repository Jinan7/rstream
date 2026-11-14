import { Sidebar } from "lucide-react";

export default function SideBarToggle({ visible, onClick }) {

    return (
        <div className={`size-[30px] flex items-center justify-center rounded-[4px] ${ visible && 'bg-[#5c7fff]'}`}
            onClick={onClick}
        >
            <Sidebar className={`size-[16px] ${visible && 'text-white'}`}/>
        </div>
    )
}