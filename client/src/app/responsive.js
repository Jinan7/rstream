'use client'

import { createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Mobile from "@/app/_mobile/mobile";
import Web from "@/app/_web/web";

export default function Responsive() {

  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 640
      }
    }
  });
  

  const matches = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true })

  return (
    <div className='w-full min-h-full'>
      {
        matches ? (<Web/>) : (<Mobile/>)
      }
    </div>
  )
}
