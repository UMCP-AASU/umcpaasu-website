import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
    CssBaseline,
} from "@material-ui/core"

type Props = {
    children: React.ReactNode
}

const Providers = ({ children }: Props) => {
    const data = useStaticQuery<GatsbyTypes.ThemeColorQuery>(graphql`
        query ThemeColor {
            sanitySiteSettings(_id: { eq: "siteSettings" }) {
                primaryColor
                secondaryColor
            }
        }
    `)

    // A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: data.sanitySiteSettings.primaryColor,
            contrastText: "#ffffff",
        },
        secondary: {
            main: data.sanitySiteSettings.secondaryColor,
        },
        info: { // We'll use this for the color of text
            main: "#999",
            dark: "#555", 
        },
        text: {
            primary: "#999",
            secondary: "#555",
        }
    },
    shape: {
        borderRadius: 8,
    },
    typography: {
        fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    },
})

    const responsiveTheme = responsiveFontSizes(theme)

    return (
        <ThemeProvider theme={responsiveTheme}>
            <CssBaseline />
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>

            {children}
        </ThemeProvider>
    )
}
