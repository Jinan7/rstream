import { Play } from "lucide-react";
import BannerButton from "./banner_button";
import Link from "next/link";
import LeftIconButton from "./left_icon_button";

export default function WatchButton() {
    return (
        <Link href={"/watch"}>
            <LeftIconButton label={"Watch"}>
                <Play className="size-[16px]"/>
            </LeftIconButton>
        </Link>
    )
}