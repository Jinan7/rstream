import { FaPlay } from "react-icons/fa"

export default function ContinueWatchingCard({ image_url }) {

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
                <div className={`bg-[url(${image_url})] bg-red-100 bg-center bg-no-repeat bg-origin-border bg-cover rounded-sm size-15`}></div>
                <div className="flex flex-col gap-1">
                    <p className="text-[14px] font-semibold">Stranger things</p>
                    <p className="text-[14px] font-medium">EP 3</p>
                </div>
            </div>
            <FaPlay/>
        </div>
    )
}