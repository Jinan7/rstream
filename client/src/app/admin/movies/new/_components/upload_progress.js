export default function UploadProgress() {
    return (
        <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[12px] grow">
                <div className="bg-rborder rounded-[4px] h-[8px] grow" >
                    <div className="bg-[#262420] rounded-[4px] h-full w-[50%]" max="100" value="70">
                    </div>
                </div>
                <p className="text-[14px]">50%</p>
            </div>
            <p className="text-[14px]">Total size: 0 B/s</p>
            <p className="text-[14px]">Upload rate: 0 B/s</p>
        </div>
        
    )
}