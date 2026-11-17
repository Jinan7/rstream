import { Play } from "lucide-react";
import BannerButton from "./banner_button";
import Link from "next/link";
import LeftIconButton from "./left_icon_button";

export default function WatchButton({ type }) {
    return (
        <Link href={`/watch/${ type }`}>
            <LeftIconButton label={"Watch"}>
                <Play className="size-[16px]"/>
            </LeftIconButton>
        </Link>
    )
}