'use client'
import { useRef, useState } from "react";
import { v4 } from "uuid";
import { postMovieDetails } from "../../movies/new/_lib/api";
import { addFormInput, removeFormInput, useMultiFormReducer, } from "../../movies/new/_lib/multiFormReducer";
import Button from "@/app/(with_nav)/_components/button";
import { Image, PictureInPicture, Upload, X } from "lucide-react";
import IconButton from "@/app/(with_nav)/_components/icon_button";
import UploadProgress from "../../movies/new/_components/upload_progress";
import FileInput from "../../movies/new/_components/file_input";
import TextInput from "../../movies/new/_components/text_input";
import MultiTextInput from "../../movies/new/_components/multi_text_input";
import DateInput from "../../movies/new/_components/date_input";
import DurationInput from "../../movies/new/_components/duration_input";
import Input from "../../movies/new/_components/input";
import LeftIconButton from "@/app/(with_nav)/_components/left_icon_button";
import TextField from "../../movies/new/_components/text_field";
import prettyBytes from 'pretty-bytes'
import { addSeason, useSeasonsReducer } from "../lib/seasonReducer";
import SeasonButton from "../components/season_button";
import EpisodeButton from "../components/episode_button";
import { postSeriesDetails } from "./lib/api";
import { useDirectors, useDirectorsDispatch, useGenres, useGenresDispatch, useSeriesId, useSetSeriesId, useStars, useStarsDispatch, useWriters, useWritersDispatch } from "./layout";
import { putFile, uploadFileMultipart } from "../../movies/new/_lib/put";

const FIVE_MEGABYTES = 5 * 1024 * 1024;
export default function Page() {

    let id = useSeriesId()
    let setId = useSetSeriesId()
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
    let [portrait, setPortrait] = useState("No file selected")
    let [banner, setBanner] = useState("No file selected")
    let portraitRef = useRef(null)
    let portraitProgressRef = useRef(0)
    let [portraitProgress, setPortraitProgress] = useState("0")
    let bannerRef = useRef(null)
    let bannerProgressRef = useRef(0)
    let [bannerProgress, setBannerProgress] = useState("0")
    let directorsDispatch = useDirectorsDispatch()
    let writersDispatch = useWritersDispatch()
    let starsDispatch = useStarsDispatch()
    let genresDispatch = useGenresDispatch()
    let directors = useDirectors()
    let writers = useWriters()
    let stars = useStars()
    let genres = useGenres()
    let [showDurationDropdown, setShowDurationDropdown] = useState(false)
    let [portraitSize, setPortraitSize] = useState("0 Kb")
    let [bannerSize, setBannerSize] = useState("0 Kb")
    let [portraitRate, setPortraitRate] = useState("0 k/s")
    let [bannerRate, setBannerRate] = useState("0 k/s")
    let [seasons, seasonsDispatch] = useSeasonsReducer([])

    const handlePortraitChange = () => {
        let file = portraitRef.current.files[0]
        if (file) {
            setPortrait(file.name)
        }
    }

    const handleBannerChange = () => {
        let file = bannerRef.current.files[0]
        if (file) {
            setBanner(file.name)
        }
    }

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
        
    }
    const handleAddWriter = () => {
        let newWriter = writersRef.current.value
        addFormInput(writersDispatch, newWriter)
        writersRef.current.value = ""
    }
    const handleAddGenre = () => {
        let newGenre = genreRef.current.value
        addFormInput(genresDispatch, newGenre)
        genreRef.current.value = ""
    }
    
    const handleAddStar = () => {
        let newStar = starsRef.current.value
        addFormInput(starsDispatch, newStar)
        starsRef.current.value = ""
    }
    
    const handleAddSeason = () => {
        addSeason(seasonsDispatch, {
            data: {
                index: 1
            }
        })
    }

    const handlePostSeriesDetails = async () => {
        let title = titleRef.current.value;
        let releaseDate = releaseDateRef.current.value;
        let hours = hourRef.current.value;
        let mins = minRef.current.value;
        let duration = +hours * 60 + +mins;
        let imdbRating = +ratingRef.current.value;
        let genreList = genres.map((d) => d.value)
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
            genres: genreList,
            popularity: popularity,
            directors: directorsList,
            writers: writersList,
            stars: starsList,
            summary: summary
        }

        try {
            let response = await postSeriesDetails(data)
            setId(response.data.id)
        } catch (e) {
            

        }
    }

    const handleFormatSize = (size, setSize) => {
        setSize(prettyBytes(size))
    }

    const handleUploadMoviePortrait = ( ref, progress, setProgress, setRate, setSize ) => {
    
            return async () => {
                let file = portraitRef.current.files[0];
    
                if (file && id) {
                    handleFormatSize(file.size, setSize)
                    if (file.size < FIVE_MEGABYTES) {
                        await putFile(id, file, 'series', 'portrait', ref, progress, setProgress, setRate)
                    } else {
                        await uploadFileMultipart(id, file, 'series', 'portrait', ref, progress, setProgress,setRate)
                    }
    
                } else {
    
                }
            }
            
    }



    const handleUploadMovieBanner = ( ref, progress, setProgress, setRate, setSize ) => {
        return async () => {
            let file = bannerRef.current.files[0];

            if (file && id) {
                handleFormatSize(file.size, setSize)
                if (file.size < FIVE_MEGABYTES) {
                    await putFile(id, file, 'series', 'banner', ref, progress, setProgress, setRate )
                } else {
                    await uploadFileMultipart(id, file,'series', 'banner', ref, progress, setProgress, setRate )
                }

            } else {

            }
        }
    }

    return (
        <div className="flex flex-col gap-[20px] grow">
            <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px]">
                <div className="px-[20px] pt-[12px] pb-[8px]">
                    <p className="text-[20px] font-bold">Details</p>
                </div>
                <div className="flex flex-col gap-[20px] px-[20px] pb-[20px] pt-[4px]">
                    <div className="flex flex-row justify-between gap-[20px]">
                        <TextInput label={"Title"} ref={titleRef}/>
                        <DateInput ref={releaseDateRef}/>
                        <DurationInput ref={durationRef} hourRef={hourRef} minRef={minRef} visible={showDurationDropdown} toggleVisibility={handleToggleDurationDropdown} onClick={handleUpdateDurationInput}/>
                    </div>
                    <div className="flex flex-row justify-between gap-[20px]">
                        <TextInput label={"IMDB Rating"} ref={ratingRef}/>
                        <MultiTextInput label={"Genre"} onAdd={handleAddGenre} ref={genreRef} />
                        {/* <TextInput label={"Genre"} ref={genreRef}/> */}
                        <TextInput label={"Popularity"} ref={popularityRef}/>
                    </div>
                    <div className="flex flex-row justify-between gap-[20px]">
                        <MultiTextInput label={"Director"} onAdd={handleAddDirector} ref={directorRef} />
                        <MultiTextInput label={"Writer"} onAdd={handleAddWriter} ref={writersRef} />
                        <MultiTextInput label={"Star"} onAdd={handleAddStar} ref={starsRef} />
                    </div>
                    <TextField label={"Summary"} ref={summaryRef}/>
                    <div className="flex justify-end">
                        <Button variant={"dark"} label={"Submit"} onClick={handlePostSeriesDetails}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px]">
                <div className="px-[20px] pt-[12px] pb-[8px] flex justify-between">
                    <p className="text-[20px] font-bold">Portrait</p>
                    <LeftIconButton variant="dark" onClick={handleUploadMoviePortrait(portraitProgressRef, portraitProgress, setPortraitProgress, setPortraitRate, setPortraitSize)} label={"Upload"}><Upload className="size-[16px] text-white"/></LeftIconButton>
                </div>
                <FileInput id="portrait" label={portrait} ref={portraitRef} progress={portraitProgress} size={portraitSize} rate={portraitRate} onChange={handlePortraitChange}/>
            </div>
            <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px]">
                <div className="px-[20px] pt-[12px] pb-[8px] flex justify-between">
                    <p className="text-[20px] font-bold">Banner</p>
                    <LeftIconButton variant="dark" onClick={handleUploadMovieBanner(bannerProgressRef, bannerProgress, setBannerProgress, setBannerRate, setBannerSize)} label={"Upload"}><Upload className="size-[16px] text-white"/></LeftIconButton>
                </div>
                <FileInput id="banner" label={banner} ref={bannerRef} progress={bannerProgress} size={bannerSize} rate={bannerRate} onChange={handleBannerChange}/>
            </div>
        </div>
    )
   
}


