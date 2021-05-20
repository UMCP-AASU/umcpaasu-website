import React from "react"
import { Container, Button } from "@material-ui/core"

import SEO from "@components/SEO"

const IndexPage = () => (
    <>
        <SEO title={"Home"} />
        <div>
            <Button variant="contained" color="primary">Click me</Button>
        </div>
    </>
)

export default IndexPage
