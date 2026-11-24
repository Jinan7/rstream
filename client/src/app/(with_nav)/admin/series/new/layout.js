'use client'
import { createContext, useContext, useRef, useState } from "react";
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
import DetailsLink from "../components/details_link";

const FIVE_MEGABYTES = 5 * 1024 * 1024;
const NewSeriesContext = createContext(null);
export default function Layout({ children, episode, season }) {

    let detailsLinkId = useRef(v4())
    let [activeLink, setActiveLink] = useState(detailsLinkId)
    let [page, setPage] = useState("details")
    let [id, setId] = useState(null)
    let [directors, directorsDispatch] = useMultiFormReducer([])
    let [writers, writersDispatch] = useMultiFormReducer([])
    let [stars, starsDispatch] = useMultiFormReducer([])
    let [genres, genresDispatch] = useMultiFormReducer([])
    let [seasons, seasonsDispatch] = useSeasonsReducer([])


    const handleAddSeason = () => {
        addSeason(seasonsDispatch, {
            data: {
                index: 0,
                episodes: []
            }
        })
    }

    const handleSetPage = (p, id) => {
        
        return () => {
            setPage(p)
            setActiveLink(id)
        }
    }


    return (
        <NewSeriesContext value={{ seasonsDispatch }}>
            <div className="flex gap-[20px] ">
                <div className="bg-white border-rborder border-[1px] rounded-[2px] w-[280px]">
                    <div className="px-[20px] pt-[12px] pb-[8px]">
                        <p className="text-[16px] font-bold invisible">Details</p>
                    </div>
                    <DetailsLink active={detailsLinkId === activeLink} onClick={handleSetPage("details", detailsLinkId)}/>
                    <div className="flex flex-col gap-[20px] pt-[4px] pb-[20px]">
                        <div className="flex flex-col gap-[4px]">
                            <p className="text-[#201e1b] text-[14px] font-bold px-[20px]">Genres</p>
                            {
                                genres.map((d) => {
                                    return <Input key={d.key} onRemove={handleRemoveGenre(d.key)} label={d.value} className={"px-[20px]"}/>
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <p className="text-[#201e1b] text-[14px] font-bold px-[20px]">Directors</p>
                            {
                                directors.map((d) => {
                                    return <Input key={d.key} onRemove={handleRemoveDirector(d.key)} label={d.value} className={"px-[20px]"}/>
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <p className="text-[#201e1b] text-[14px] font-bold px-[20px]">Writers</p>
                            {
                                writers.map((w) => {
                                    return <Input key={w.key} onRemove={handleRemoveWriter(w.key)} label={w.value} className={"px-[20px]"}/>
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-[4px]">
                            <p className="text-[#201e1b] text-[14px] font-bold px-[20px]">Stars</p>
                            {
                                stars.map((s) => {
                                    return <Input key={s.key} onRemove={handleRemoveStar(s.key)} label={s.value} className={"px-[20px]"}/>
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-[12px]">
                            <div className="flex justify-between items-center px-[20px]">
                                <p className="text-[#201e1b] text-[14px] font-bold">Seasons</p>
                                <Button label={"Add"} onClick={handleAddSeason}/>
                            </div>
                            <div className="flex flex-col">
                                {
                                    seasons.map((s) => {
                                        return (
                                            <div key={s.key} >
                                                <SeasonButton label={`Season ${s.data.index}`}
                                                    onClick={handleSetPage("season", s.key)}
                                                    active={s.key === activeLink}
                                                />
                                                {
                                                    s.data.episodes.map((e) => {
                                                        return <EpisodeButton key={e.key} label={"Episode 1"} onClick={handleSetPage("episode", e.key)}
                                                            active={e.key===activeLink}
                                                        />
                                                    })
                                                }
                                                
                                            </div>               

                                        )
                                    })
                                }
                            </div>   
                        </div>
                    </div>
                </div>
                { 
                
                    page === "details" ? children :
                    page === "season" ? season :
                    episode
                }

            </div>
        </NewSeriesContext>
    )
   
}

export const useSeasonsDispatchContext = () => {
    let {seasonsDispatch } = useContext(NewSeriesContext)
    return seasonsDispatch
}


