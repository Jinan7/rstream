import { Download} from "lucide-react";
import BannerButton from "./banner_button";
import Link from "next/link";
import LeftIconButton from "./left_icon_button";

export default function DownloadButton() {
    return (
        <Link href={"/download"}>
            <LeftIconButton label={"Download"}>
                <Download className="size-[16px]"/>
            </LeftIconButton>
        </Link>
    )
}