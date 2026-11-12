'use client'
import { useRef, useState } from "react";
import FormField from "./_components/form_field";
import DurationField from "./_components/duration_field";
import MultiFormField from "./_components/multiformfield";
import MultiFormInput from "./_components/multiform_input";
import { v4 } from "uuid";
import TextField from "./_components/text_field";
import { postMovieDetails } from "./_lib/api";
import { addFormInput, removeFormInput, useDirectorsReducer, useMultiFormReducer } from "./_lib/multiFormReducer";
import { putFile } from "./_lib/put";

const FIVE_GIGABYTES = 5 * 1024 * 1024;
export default function Page() {

    let [id,setId] = useState(null)
    let titleRef =  useRef(null)
    let releaseDateRef = useRef(null)
    let hourRef = useRef(null)
    let minRef = useRef(null)
    let ratingRef = useRef(null)
    let genreRef = useRef(null)
    let popularityRef = useRef(null)
    let directorRef = useRef(null)
    let writersRef = useRef(null)
    let starsRef = useRef(null)
    let summaryRef = useRef(null)
    let portraitRef = useRef(null)
    let bannerRef = useRef(null)
    let [directors, directorsDispatch] = useMultiFormReducer([])
    let [writers, writersDispatch] = useMultiFormReducer([])
    let [stars, starsDispatch] = useMultiFormReducer([])

    const handleAddDirector = () => {
        let newDirector = directorRef.current.value
        addFormInput(directorsDispatch, newDirector)
        directorRef.current.value = ""
    }
    const handleRemoveDirector = (key) => {
        return () => removeFormInput(directorsDispatch, key)
    }
    const handleAddWriter = () => {
        let newWriter = writersRef.current.value
        addFormInput(writersDispatch, newWriter)
        writersRef.current.value = ""
    }
    const handleRemoveWriter = (key) => {
        return () => removeFormInput(writersDispatch, key)
    }
    const handleAddStar = () => {
        let newStar = starsRef.current.value
        addFormInput(starsDispatch, newStar)
        starsRef.current.value = ""
    }
    const handleRemoveStar = (key) => {
        return () => removeFormInput(starsDispatch, key)
    }

    const handlePostMovieDetails = async () => {
        let title = titleRef.current.value;
        let releaseDate = releaseDateRef.current.value;
        let hours = hourRef.current.value;
        let mins = minRef.current.value;
        let duration = +hours * 60 + +mins;
        let imdbRating = +ratingRef.current.value;
        let genre = genreRef.current.value;
        let popularity = +popularityRef.current.value;
        let directorsList = directors.map((d) => d.value )
        let writersList = writers.map((w) => w.value )
        let starsList = stars.map((s) => s.value )
        let summary = summaryRef.current.value;

        let data = {
            title: title,
            releaseDate: releaseDate,
            duration: duration,
            imdbRating: imdbRating,
            genre: genre,
            popularity: popularity,
            directors: directorsList,
            writers: writersList,
            stars: starsList,
            summary: summary
        }
        
        try {
            let movieData = await postMovieDetails(data)
            setId(movieData.id)
        } catch (e) {
            if (e.response) {
                console.log(e.response)
            } else if (e.request) {
                console.log(e.request)
            }
            
        }
        
        
            
        
    }

    const handleUploadMoviePortrait = async () => {
        console.log(portraitRef.current.files[0])
        let file = portraitRef.current.files[0];

        if (file && id) {
            
            await putFile(id, file)
        } else {

        }
        
       
    }



    const handleUploadMovieBanner = () => {
         console.log(bannerRef.current.files[0])
    }
    return (<div className="flex flex-col gap-4 grow">
        <div className="flex flex-col gap-3 bg-rprimary py-10 px-6 rounded-[24]">
            <p className="font-bold text-[20px]">Details</p>
            <FormField label="Title" type={"text"} ref={titleRef}/>
            <div className="flex flex-row gap-2 items-center justify-between w-1/2">
                <FormField label="Release date" type={"date"} ref={releaseDateRef}/>
                <DurationField hourRef={hourRef} minRef={minRef}/>
            </div>
            
            <FormField label="IMDB rating" type={"text"} ref={ratingRef}/>
            <FormField label="Genre" type={"text"} ref={genreRef}/>
            <FormField label="Popularity" type={"text"} ref={popularityRef}/>
            <MultiFormField label="Director" type={"text"} ref={directorRef} onInput={handleAddDirector} onRemove={handleRemoveDirector} data={directors}/>
            <MultiFormField label="Writer" type={"text"} ref={writersRef} onInput={handleAddWriter} onRemove={handleRemoveWriter} data={writers}/>
            <MultiFormField label="Star" type={"text"} ref={starsRef} onInput={handleAddStar} onRemove={handleRemoveStar} data={stars}/>
            <TextField label="Summary" type={"text"} ref={summaryRef}/>
            <button className="bg-rsurface text-white rounded-sm px-3 font-bold" onClick={handlePostMovieDetails}>Submit</button>
        </div>
        <div className="flex flex-col gap-3 bg-rprimary py-4 px-4 rounded-md">
            <p className="font-bold text-[20px]">Pictures</p>
            <FormField label="Portrait" type={"file"} ref={portraitRef} disabled={false}/>
            <FormField label="Banner" type={"file"} ref={bannerRef} disabled={!id}/>
            <button className="bg-rsurface text-white rounded-sm px-3 font-bold" onClick={handleUploadMoviePortrait}>Submit</button>
        </div>
    </div>)
}


