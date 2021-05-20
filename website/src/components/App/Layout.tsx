/**
 * Our component that handles UI elements that stay consistent throughout the site.
 * 
 * Used in wrapPageElement in gatsby-browser.js and gatsby-ssr.js
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"
import { CssBaseline } from "@material-ui/core"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => (
    <>
        <CssBaseline />
        <main>{children}</main>
    </>
)

export default Layout
