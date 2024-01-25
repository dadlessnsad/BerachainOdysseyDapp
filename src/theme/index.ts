"use client";
import { extendTheme } from "@chakra-ui/react"
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '@fontsource/trade-winds';


const theme = extendTheme({
    fonts: {
        poppins: "Poppins",
        winds: "Trade Winds",
    },
    colors: {
        brand: {
            //background: "linear-gradient(0deg, #FFFFFF -55%, #B5F7F5 110%)",
            background: "linear-gradient(180deg, #FFF -50%, #B5F7F5 100%)",
            primary_pink: "#FF82D7",
            primary_text: "#171717",
            secondary_text: "#F2F3F2",
            button_background: "rgba(0, 0, 0, 0.75)",
            button_background_hover: "rgba(0, 0, 0, 1)",
        },
    },
})

export default theme