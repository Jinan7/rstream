export default function UploadProgress({ progress, size, rate }) {
    console.log(`setting new progress ${progress}`)
    return (
        <div className="flex flex-col gap-[4px]">
            <div className="flex items-center gap-[12px] grow">
                <div className="bg-rborder rounded-[4px] h-[8px] grow" >
                    <div className={`bg-[#262420] rounded-[4px] h-full`} value="70"
                        style={{
                            width: `${progress}%`
                        }}
                    >
                    </div>
                </div>
                <p className="text-[14px]">{progress}%</p>
            </div>
            <p className="text-[14px]">Total size:  {size}</p>
            <p className="text-[14px]">Upload rate: {rate}</p>
        </div>
        
    )
}