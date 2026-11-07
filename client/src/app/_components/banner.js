
export default function Banner({ image_url }) {
    console.log(image_url)
    return (
        <div className={`w-full h-full bg-[url(/images/avatar_fire_and_ash.jpg)] bg-center bg-no-repeat bg-origin-border bg-cover rounded-md sm:rounded-none `}>
        </div>
    )
}