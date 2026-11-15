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
import { putFile, uploadFileMultipart } from "./_lib/put";
import Button from "@/app/_components/button";
import { Image, PictureInPicture, X } from "lucide-react";
import IconButton from "@/app/_components/icon_button";

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
                
            } else if (e.request) {
                
            }
            
        }
        
        
            
        
    }

    const handleUploadMoviePortrait = async () => {
        
        let file = portraitRef.current.files[0];
        
        if (file && id) {
            
            if (file.size < FIVE_GIGABYTES) {
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
        <div className="flex gap-[20px]">
            <div className="bg-white border-rborder border-[1px] rounded-[2px]">
                <div className="px-[20px] pt-[12px] pb-[8px]">
                    <p className="text-[20px] font-bold invisible">Details</p>
                </div>
                <div className="flex flex-col gap-[20px] px-[20px] pt-[4px] pb-[20px]">
                    <div className="flex flex-col gap-[4px]">
                        <p className="text-[#201e1b] text-[14px] font-bold">Directors</p>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Quentin Tarantino</p>
                            <X className="size-[16px]"/>
                        </div>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Guy Ritchie</p>
                            <X className="size-[16px]"/>
                        </div>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Christopher Nolan</p>
                            <X className="size-[16px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <p className="text-[#201e1b] text-[14px] font-bold">Writers</p>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Quentin Tarantino</p>
                            <X className="size-[16px]"/>
                        </div>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Guy Ritchie</p>
                            <X className="size-[16px]"/>
                        </div>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Christopher Nolan</p>
                            <X className="size-[16px]"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <p className="text-[#201e1b] text-[14px] font-bold">Stars</p>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Tom Hanks</p>
                            <X className="size-[16px]"/>
                        </div>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Brad Pitt</p>
                            <X className="size-[16px]"/>
                        </div>
                        <div className="flex w-[200px] items-center justify-between">
                            <p className="text-[#201e1b] text-[14px] font-normal">Chris Pratt</p>
                            <X className="size-[16px]"/>
                        </div>
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
                            <div className=" flex flex-col gap-[4px] basis-1/1">
                                <label className="text-[#201e1b] text-[14px] font-bold">Title</label>
                                <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px]"></input>
                            </div>
                            <div className=" flex flex-col gap-[4px] basis-1/1">
                                <label className="text-[#201e1b] text-[14px] font-bold">Release Date</label>
                                <input type="date" className="border-[#949088] h-[40px] rounded-[4px] border-[1px]"></input>
                            </div>
                            <div className=" flex flex-col gap-[4px] basis-1/1 relative">
                                <label className="text-[#201e1b] text-[14px] font-bold">Duration</label>
                                <input type="button" className="border-[#949088] h-[40px] rounded-[4px] border-[1px]">
                                    
                                </input>
                                <div className="collapse absolute top-full bg-white border-rborder border-[1px] rounded-[2px] grow p-[20px] flex flex-col gap-[20px]">
                                    <div className="flex flex-col gap-[4px]">
                                        <label className="text-[#201e1b] text-[14px] font-bold">HH</label>
                                        <input type="number" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[10px]"/>
                                    </div>
                                    <div className="flex flex-col gap-[4px]">
                                        <label className="text-[#201e1b] text-[14px] font-bold">MM</label>
                                        <input type="number" className="border-[#949088] h-[40px] rounded-[4px] border-[1px] px-[10px]"/>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button label={"OK"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-[20px]">
                            <div className=" flex flex-col gap-[4px] grow">
                                <label className="text-[#201e1b] text-[14px] font-bold">IMDB Rating</label>
                                <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px]"></input>
                            </div>
                            <div className=" flex flex-col gap-[4px] grow">
                                <label className="text-[#201e1b] text-[14px] font-bold">Genre</label>
                                <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px]"></input>
                            </div>
                            <div className=" flex flex-col gap-[4px] grow">
                                <label className="text-[#201e1b] text-[14px] font-bold">Popularity</label>
                                <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px]"></input>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between gap-[20px]">
                            <div className=" flex flex-col gap-[4px] grow">
                                <label className="text-[#201e1b] text-[14px] font-bold">Director</label>
                                <div className="flex gap-[12px]">
                                    <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px] grow"></input>
                                    <Button label={"Add"} className="rounded-[4px]"/>
                                </div>
                                
                            </div>
                            <div className=" flex flex-col gap-[4px] grow">
                                <label className="text-[#201e1b] text-[14px] font-bold">Writer</label>
                                <div className="flex gap-[12px]">
                                    <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px] grow"></input>
                                    <Button label={"Add"} className="rounded-[4px]"/>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-[4px] grow">
                                <label className="text-[#201e1b] text-[14px] font-bold">Star</label>
                                <div className="flex gap-[12px]">
                                    <input className="border-[#949088] h-[40px] rounded-[4px] border-[1px] grow"></input>
                                    <Button label={"Add"} className="rounded-[4px]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px] grow">
                    <div className="px-[20px] pt-[12px] pb-[8px]">
                        <p className="text-[20px] font-bold">Portrait</p>
                    </div>
                    <div className="flex flex-col px-[20px] pb-[20px] pt-[4px]">
                        <label for="file" className="flex flex-row gap-[12px]">
                            <IconButton className="size-[70px]">
                                <Image/>
                            </IconButton>
                            <div className="flex flex-col">
                                <p className="text-[#201e1b] text-[14px] font-bold">No file selected</p>
                            </div>
                        </label>
                        <input id="file" name="file" accept="image/*" type="file" className="h-0 p-0 invisible"></input>
                    </div>
                </div>
                <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px] grow">
                    <div className="px-[20px] pt-[12px] pb-[8px]">
                        <p className="text-[20px] font-bold">Banner</p>
                    </div>
                    <div className="flex flex-col px-[20px] pb-[20px] pt-[4px]">
                        <label for="file" className="flex flex-row gap-[12px]">
                            <IconButton className="size-[70px]">
                                <Image/>
                            </IconButton>
                            <div className="flex flex-col gap-[4px] grow">
                                <p className="text-[#201e1b] text-[14px] font-bold">No file selected</p>
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
                        </label>
                        <input id="file" name="file" accept="image/*" type="file" className="h-0 p-0 invisible"></input>
                    </div>
                </div>
            </div>
        
        </div>
        
    )
    // return (<div className="flex flex-col gap-4 grow">
    //     <div className="flex flex-col gap-3 bg-rprimary py-10 px-6 rounded-[24]">
    //         <p className="font-bold text-[20px]">Details</p>
    //         <FormField label="Title" type={"text"} ref={titleRef}/>
    //         <div className="flex flex-row gap-2 items-center justify-between w-1/2">
    //             <FormField label="Release date" type={"date"} ref={releaseDateRef}/>
    //             <DurationField hourRef={hourRef} minRef={minRef}/>
    //         </div>
            
    //         <FormField label="IMDB rating" type={"text"} ref={ratingRef}/>
    //         <FormField label="Genre" type={"text"} ref={genreRef}/>
    //         <FormField label="Popularity" type={"text"} ref={popularityRef}/>
    //         <MultiFormField label="Director" type={"text"} ref={directorRef} onInput={handleAddDirector} onRemove={handleRemoveDirector} data={directors}/>
    //         <MultiFormField label="Writer" type={"text"} ref={writersRef} onInput={handleAddWriter} onRemove={handleRemoveWriter} data={writers}/>
    //         <MultiFormField label="Star" type={"text"} ref={starsRef} onInput={handleAddStar} onRemove={handleRemoveStar} data={stars}/>
    //         <TextField label="Summary" type={"text"} ref={summaryRef}/>
    //         <button className="bg-rsurface text-white rounded-sm px-3 font-bold" onClick={handlePostMovieDetails}>Submit</button>
    //     </div>
    //     <div className="flex flex-col gap-3 bg-rprimary py-4 px-4 rounded-md">
    //         <p className="font-bold text-[20px]">Pictures</p>
    //         <FormField label="Portrait" type={"file"} ref={portraitRef} disabled={false}/>
    //         <FormField label="Banner" type={"file"} ref={bannerRef} disabled={!id}/>
    //         <button className="bg-rsurface text-white rounded-sm px-3 font-bold" onClick={handleUploadMoviePortrait}>Submit</button>
    //     </div>
    // </div>)
}


