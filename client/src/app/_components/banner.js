
export default function Banner({ image_url }) {
    console.log(image_url)
    return (
        <div className={`w-full h-full rounded-md sm:rounded-none `}
            style={{
                "background": `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${image_url}) center/cover no-repeat`,
            }}
        >
        </div>
    )
}