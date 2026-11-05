import { Download} from "lucide-react";
import BannerButton from "./banner_button";

export default function DownloadButton() {
    return (
        <BannerButton 
            className="bg-on-rsecondary"
            pclassName="text-white"
            label="Download"
        >
            <Download className="text-white" size={16}/>
            
        </BannerButton>
    )
}