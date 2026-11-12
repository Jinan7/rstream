'use client'
import { useRef, useState } from "react";
import FormField from "./_components/form_field";
import DurationField from "./_components/duration_field";
import MultiFormField from "./_components/multiformfield";
import MultiFormInput from "./_components/multiform_input";
import { v4 } from "uuid";
import TextField from "./_components/text_field";
import { postMovieDetails } from "./_lib/api";

export default function Page() {

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
    let [directors, setDirectors] = useState([])
    let [writers, setWriters] = useState([])
    let [stars, setStars] = useState([])
    const handleAddDirector = () => {
        let newDirector = directorRef.current.value

        setDirectors([
            ...directors, {key:v4(), value:newDirector}
        ])
        directorRef.current.value = ""
    }
    const handleRemoveDirector = (key) => {
        return () => {
            let temp = [...directors]
            for (let i=0; i<temp.length; i++) {
        
                if (temp[i].key == key) {
                    temp.splice(i,1)
                }
            }

            setDirectors(temp)
        }
    }
    const handleAddWriter = () => {
        let newWriter = writersRef.current.value

        setWriters([
            ...writers, {key:v4(), value:newWriter}
        ])
        writersRef.current.value = ""
    }
    const handleRemoveWriter = (key) => {
        return () => {
            let temp = writers.filter((writer) => writer.key != key )
            setWriters(temp)
        }
    }
    const handleAddStar = () => {
        let newStar = starsRef.current.value

        setStars([
            ...stars, {key:v4(), value:newStar}
        ])
        starsRef.current.value = ""
    }
    const handleRemoveStar = (key) => {
        return () => {
            let temp = stars.filter((star) => star.key != key )
            setStars(temp)
        }
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
        

        await postMovieDetails(data)
    }
    return (<div className="flex flex-col gap-4 grow">
        <div className="flex flex-col gap-3 bg-rprimary py-4 px-4 rounded-md">
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
            <MultiFormField label="Writers" type={"text"} ref={writersRef} onInput={handleAddWriter} onRemove={handleRemoveWriter} data={writers}/>
            <MultiFormField label="Stars" type={"text"} ref={starsRef} onInput={handleAddStar} onRemove={handleRemoveStar} data={stars}/>
            <TextField label="Summary" type={"text"} ref={summaryRef}/>
            <button className="bg-sky-blue rounded-sm px-3 font-bold" onClick={handlePostMovieDetails}>Submit</button>
        </div>
        <div className="flex flex-col gap-3 bg-rprimary py-4 px-4 rounded-md">
            <p className="font-bold text-[20px]">Pictures</p>
            <FormField label="Portrait" type={"file"} ref={portraitRef} disabled/>
            <FormField label="Banner" type={"file"} ref={bannerRef} disabled/>
        </div>
    </div>)
}


