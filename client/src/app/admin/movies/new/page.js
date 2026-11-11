'use client'
import { useRef } from "react";
import FormField from "./_components/form_field";
import DurationField from "./_components/duration_field";
import MultiFormField from "./_components/multiformfield";
import MultiFormInput from "./_components/multiform_input";

export default function Page() {

    let titleRef =  useRef(null)
    let releaseDateRef = useRef(null)
    let durationRef = useRef(null)
    let ratingRef = useRef(null)
    let genreRef = useRef(null)
    let popularityRef = useRef(null)
    let directorRef = useRef(null)
    let writersRef = useRef(null)
    let starsRef = useRef(null)
    let summaryRef = useRef(null)
    let portraitRef = useRef(null)
    let bannerRef = useRef(null)
    return (<div className="grow">
        <div className="flex flex-col gap-3 bg-rprimary py-4 px-4 rounded-md">
            <p className="font-bold text-[20px]">Details</p>
            <FormField label="Title" type={"text"} ref={titleRef}/>
            <div className="flex flex-row gap-2 items-center justify-between w-1/2">
                <FormField label="Release date" type={"date"} ref={releaseDateRef}/>
                <DurationField/>
            </div>
            
            <FormField label="IMDB rating" type={"text"} ref={ratingRef}/>
            <FormField label="Genre" type={"text"} ref={genreRef}/>
            <FormField label="Popularity" type={"text"} ref={popularityRef}/>
            <MultiFormField label="Director" type={"text"} ref={directorRef}/>
            <div className="flex flex-col gap-1">
                <MultiFormInput text="Guy Ritchie"/>
                <MultiFormInput text="Quentin Tarantino"/>
                <MultiFormInput text="RR Martin"/>
            </div>
            <MultiFormField label="Writers" type={"text"} ref={writersRef}/>
            <MultiFormField label="Stars" type={"text"} ref={starsRef}/>
            <FormField label="Summary" type={"text"} ref={summaryRef}/>
            <FormField label="Portrait" type={"file"} ref={portraitRef}/>
            <FormField label="Banner" type={"file"} ref={bannerRef}/>
        </div>
    </div>)
}


