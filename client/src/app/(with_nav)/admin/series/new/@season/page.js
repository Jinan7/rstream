'use client'
import { useRef, useState } from "react";
import { v4 } from "uuid";
import { postMovieDetails } from "../../../movies/new/_lib/api";
import { addFormInput, useMultiFormReducer, removeFormInput } from "../../../movies/new/_lib/multiFormReducer";
import Button from "@/app/(with_nav)/_components/button";
import { Image, PictureInPicture, Upload, X } from "lucide-react";
import IconButton from "@/app/(with_nav)/_components/icon_button";
import UploadProgress from "../../../movies/new/_components/upload_progress";
import FileInput from "../../../movies/new/_components/file_input";
import TextInput from "../../../movies/new/_components/text_input";
import MultiTextInput from "../../../movies/new/_components/multi_text_input";
import DateInput from "../../../movies/new/_components/date_input";
import DurationInput from "../../../movies/new/_components/duration_input";
import Input from "../../../movies/new/_components/input";
import LeftIconButton from "@/app/(with_nav)/_components/left_icon_button";
import TextField from "../../../movies/new/_components/text_field";
import prettyBytes from 'pretty-bytes'
import { addEpisode, addSeason, useSeasonsReducer } from "../../lib/seasonReducer";
import SeasonButton from "../../components/season_button";
import EpisodeButton from "../../components/episode_button";
import { useSeasonsDispatchContext } from "../layout";

export default function Season() {

    let [id, setId] = useState(null)
   
    let seasonsDispatch = useSeasonsDispatchContext()


    const handleAddEpisode = (e) => {
        e.preventDefault()
        addEpisode(seasonsDispatch,
            {
                data: {
                    seasonIndex: 0,
                    index: 1,
                    title: "The Hedge Knight"
                }
            }
        )
    }

    return (
        <div className="flex flex-col gap-[20px] grow">
            <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px]">
                <div className="px-[20px] pt-[12px] pb-[8px]">
                    <p className="text-[20px] font-bold">Season settings</p>
                </div>
                <div className="flex flex-col gap-[20px] px-[20px] pb-[20px] pt-[4px]">
                    <div className="flex flex-row justify-between gap-[20px]">
                        <TextInput label={"Index"} ref={null}/>
                    </div>
                    <div className="flex justify-end">
                        <Button variant={"dark"} label={"Submit"} onClick={null}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white border-rborder border-[1px] rounded-[2px]">
                <div className="px-[20px] pt-[12px] pb-[8px] flex justify-between">
                    <p className="text-[20px] font-bold">Episodes</p>
                    <Button label={"Add Episode"} onClick={handleAddEpisode}/>
                </div>
                <div className="flex flex-col gap-[20px] px-[20px] pb-[20px] pt-[4px]">
                    <table>
                        <thead>
                            <tr>
                                <th className="w-2 border-b-[1px] border-[#e3e1de] pr-[8px]">
                                    <div className="flex flex-row justify-between py-[4px] pl-[4px]">
                                        <p className="invisible text-[14px]">Index</p>
                                        <span className="border-s-[1px] border-[#e3e1de] my-[2px]"/>
                                    </div>
                                </th>
                                <th className=" border-b-[1px] border-[#e3e1de] pr-[8px]">
                                    <div className="flex flex-row justify-between py-[4px] pl-[4px]">
                                        <p className="text-semibold text-[14px]">Index</p>
                                        <span className="border-s-[1px] border-[#e3e1de] my-[2px]"/>
                                    </div>
                                </th>
                                <th className=" border-b-[1px] border-[#e3e1de] pr-[8px]">
                                    <div className="flex flex-row justify-between py-[4px] pl-[4px]">
                                        <p className="text-semibold text-[14px]">Title</p>
                                        <span className="border-s-[1px] border-[#e3e1de] my-[2px]"/>
                                    </div>
                                </th>
                                <th className=" border-b-[1px] border-[#e3e1de]">
                                    <div className="flex flex-row justify-between py-[4px] pl-[4px]">
                                        <p className="text-semibold text-[14px]">Duration</p>
                                        <span className="border-s-[1px] border-[#e3e1de] my-[2px]"/>
                                    </div>
                                </th>
                                <th className=" border-b-[1px] border-[#e3e1de]">
                                    <div className="flex flex-row justify-between py-[4px]">
                                          
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="w-2 border-b-[1px] border-[#e3e1de] pr-[8px]">
                                    <div className="min-w-[100px] py-[6px] pl-[4px]">
                                        <p className="text-[14px] underline">Details</p>
                                    </div>
                                </td>
                                <td className="border-b-[1px] border-[#e3e1de] pr-[8px]">
                                    <div className="min-w-[100px] py-[6px] pl-[4px]">
                                        <p className="text-[14px]">1</p>
                                    </div>
                                </td>
                                <td className="border-b-[1px] border-[#e3e1de] pr-[8px]">
                                    <div className="min-w-[100px] py-[6px] pl-[4px]">
                                        <p className="text-[14px]">The Hedge Knight</p>
                                    </div>
                                </td>
                                <td className="border-b-[1px] border-[#e3e1de]">
                                    <div className="min-w-[100px] py-[6px] pl-[4px]">
                                        <p className="text-[14px]">1h 30mins</p>
                                    </div>
                                </td>
                                <td className="border-b-[1px] border-[#e3e1de]">
                                    <div className="min-w-[100px] py-[6px] pl-[20px]">
                                        <X className="size-[16px]"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-end">
                        <Button variant={"dark"} label={"Submit"} onClick={null}/>
                    </div>
                </div>
            </div>
        </div>
    )
}