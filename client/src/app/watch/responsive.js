'use client'
import theme from "@/lib/theme"
import useMediaQuery from "@mui/material/useMediaQuery"
import WatchWeb from "./_web/web"
import WatchMobile from "./_mobile/mobile"

export default function WatchResponsive() {

    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (<div>
        <WatchWeb/>
    </div>)
}