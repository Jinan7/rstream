'use client'
import { useRef, useState } from "react";
import { v4 } from "uuid";
import { postMovieDetails } from "./_lib/api";
import { addFormInput, removeFormInput, useDirectorsReducer, useMultiFormReducer } from "./_lib/multiFormReducer";
import { putFile, uploadFileMultipart } from "./_lib/put";
import Button from "@/app/_components/button";
import { Image, PictureInPicture, Upload, X } from "lucide-react";
import IconButton from "@/app/_components/icon_button";
import UploadProgress from "./_components/upload_progress";
import FileInput from "./_components/file_input";
import TextInput from "./_components/text_input";
import MultiTextInput from "./_components/multi_text_input";
import DateInput from "./_components/date_input";
import DurationInput from "./_components/duration_input";
import Input from "./_components/input";
import LeftIconButton from "@/app/_components/left_icon_button";
import TextField from "./_components/text_field";

const FIVE_MEGABYTES = 5 * 1024 * 1024;
export default function Page() {

    let [id, setId] = useState(null)
    let titleRef = useRef(null)
    let releaseDateRef = useRef(null)
    let hourRef = useRef(null)
    let minRef = useRef(null)
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
    let [directors, directorsDispatch] = useMultiFormReducer([])
    let [writers, writersDispatch] = useMultiFormReducer([])
    let [stars, starsDispatch] = useMultiFormReducer([])
    let [showDurationDropdown, setShowDurationDropdown] = useState(false)

    const handleToggleDurationDropdown = () => setShowDurationDropdown(!showDurationDropdown)
    const handleUpdateDurationInput = () => {
        let hours = hourRef.current.value
        let mins = minRef.current.value
        let display = `${hours}:${mins}`
        durationRef.current.value = display
        setShowDurationDropdown(false)
    }
    const handleAddDirector = () => {
        let newDirector = directorRef.current.value
        addFormInput(directorsDispatch, newDirector)
        directorRef.current.value = ""
        console.log(directors)
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
        let directorsList = directors.map((d) => d.value)
        let writersList = writers.map((w) => w.value)
        let starsList = stars.map((s) => s.value)
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

            } else if (e.request) {

            }

        }
    }

    const handleUploadMoviePortrait = async () => {
        let file = portraitRef.current.files[0];

        if (file && id) {

            if (file.size < FIVE_MEGABYTES) {
                console.log("uploading small file")
                await putFile(id, file, 'portrait')
            } else {
                console.log("uploading large file")
                await uploadFileMultipart(id, file, 'portrait')
            }

        } else {

        }
    }



    const handleUploadMovieBanner = () => {

    }

    return (
        <div className="flex gap-[20px] ">
            <div className="bg-white border-rborder border-[1px] rounded-[2px] w-[280px]">
                <div className="px-[20px] pt-[12px] pb-[8px]">
                    <p className="text-[20px] font-bold invisible">Details</p>
                </div>
                <div className="flex flex-col gap-[20px] px-[20px] pt-[4px] pb-[20px]">
                    <div className="flex flex-col gap-[4px]">
                        <p className="text-[#201e1b] text-[14px] font-bold">Directors</p>
                        {
                            directors.map((d) => {
                                return <Input key={d.key} onRemove={handleRemoveDirector(d.key)} label={d.value}/>
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <p className="text-[#201e1b] text-[14px] font-bold">Writers</p>
                        {
                            writers.map((w) => {
                                return <Input key={w.key} onRemove={handleRemoveWriter(w.key)} label={w.value}/>
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <p className="text-[#201e1b] text-[14px] font-bold">Stars</p>
                        {
                            stars.map((s) => {
                                return <Input key={s.key} onRemove={handleRemoveDirector(s.key)} label={s.value}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[20px] grow">
                <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px] grow">
                    <div className="px-[20px] pt-[12px] pb-[8px]">
                        <p className="text-[20px] font-bold">Details</p>
                    </div>
                    <div className="flex flex-col gap-[20px] px-[20px] pb-[20px] pt-[4px]">
                        <div className="flex flex-row justify-between gap-[20px]">
                            <TextInput label={"Title"} />
                            <DateInput />
                            <DurationInput ref={durationRef} hourRef={hourRef} minRef={minRef} visible={showDurationDropdown} toggleVisibility={handleToggleDurationDropdown} onClick={handleUpdateDurationInput}/>
                        </div>
                        <div className="flex flex-row justify-between gap-[20px]">
                            <TextInput label={"IMDB Rating"} />
                            <TextInput label={"Genre"} />
                            <TextInput label={"Popularity"} />
                        </div>
                        <div className="flex flex-row justify-between gap-[20px]">
                            <MultiTextInput label={"Director"} onAdd={handleAddDirector} ref={directorRef} />
                            <MultiTextInput label={"Writer"} onAdd={handleAddDirector} ref={writersRef} />
                            <MultiTextInput label={"Star"} onAdd={handleAddDirector} ref={starsRef} />
                        </div>
                        <TextField label={"Summary"}/>
                        <div className="flex justify-end">
                            <Button variant={"dark"} label={"Submit"}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px] grow">
                    <div className="px-[20px] pt-[12px] pb-[8px] flex justify-between">
                        <p className="text-[20px] font-bold">Portrait</p>
                        <LeftIconButton variant="dark" onClick={handleUploadMoviePortrait} label={"Upload"}><Upload className="size-[16px] text-white"/></LeftIconButton>
                    </div>
                    <FileInput />
                </div>
                <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px] grow">
                    <div className="px-[20px] pt-[12px] pb-[8px] flex justify-between">
                        <p className="text-[20px] font-bold">Banner</p>
                        <LeftIconButton variant="dark" onClick={handleUploadMovieBanner} label={"Upload"}><Upload className="size-[16px] text-white"/></LeftIconButton>
                    </div>
                    <FileInput />
                </div>
            </div>

        </div>

    )
   
}


