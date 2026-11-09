'use client'

import theme from "@/lib/theme"
import useMediaQuery from "@mui/material/useMediaQuery"
import NavBarWeb from "../_web/components/navbar"
import NavBarMobile from "../_mobile/components/navbar"

export default function ResponsiveNavBar() {

    let matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
        {matches ? (<NavBarWeb/>) : (<NavBarMobile/>)}
        </>
    )
}