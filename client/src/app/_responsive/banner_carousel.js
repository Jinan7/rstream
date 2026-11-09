'use client'

import theme from "@/lib/theme"
import useMediaQuery from "@mui/material/useMediaQuery"
import BannerCarouselWeb from "../_web/components/banner_carousel"
import BannerCarouselMobile from "../_mobile/components/banner_carousel"

export default function ResponsiveBannerCarousel() {

    let matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            {matches ? (<BannerCarouselWeb/>) : (<BannerCarouselMobile/>)}
        </>
    )
}