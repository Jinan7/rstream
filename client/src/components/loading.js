import { Spinner } from "@/components/ui/spinner";

export default function DefaultLoading() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Spinner className="size-8"/>
        </div>
    )
}