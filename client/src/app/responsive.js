'use client'

import { createTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Mobile from "@/app/_mobile/mobile";
import Web from "@/app/_web/web";
import { useEffect } from 'react';
import { getGenres } from './_lib/api';
import { useSetCatogoriesContext } from './_context/context';


export default function Responsive() {

  let setCategories = useSetCatogoriesContext()

  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 640
      }
    }
  });
  

  const matches = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true })

  useEffect(() => {
    (
      async () => { 
        const genres = await getGenres() 
        setCategories(genres)
      }
    )()
    
  },[])

  return (
    <div className='w-full min-h-full'>
      {
        matches ? (<Web/>) : (<Mobile/>)
      }
    </div>
  )
}
