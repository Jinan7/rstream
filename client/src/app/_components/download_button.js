import { Download} from "lucide-react";
import BannerButton from "./banner_button";
import Link from "next/link";

export default function DownloadButton() {
    return (
        <Link href={"/download"}>
            <BannerButton 
                className="bg-on-rsecondary"
                pclassName="text-white"
                label="Download"
            >
                <Download className="text-white" size={16}/>
                
            </BannerButton>
        </Link>
    )
}