import { useRef } from "react";
import EpisodeSelector from "./episode_selector";
import PseudoEpisodeSelector from "./pseudo_episode_selector";

export default function VideoContainer() {
    let episode_selector_ref = useRef(null);
    let video_container_ref = useRef(null);
    return (
        <div className="video-container flex  bg-black justify-center">
            <div className="xl:basis-1/4">

            </div>
            <div className="aspect-video w-full max-w-230 relative" ref={video_container_ref}>
                <video 
                    className="w-full h-full"
                    controls
                >
                    <source src="/gran_prix.mp4"/>
                </video>
            </div>
            <EpisodeSelector className={"collapse xl:visible sm:basis-1/4"} ref={episode_selector_ref}/>
        </div>
    )
}