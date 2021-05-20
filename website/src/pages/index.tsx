import React from "react"
import { Container, Button } from "@material-ui/core"

import SEO from "@components/SEO"

const IndexPage = () => (
    <>
        <SEO title={"Home"} />
        <Container>
            <Button color="primary">Click me</Button>
        </Container>
    </>
)

export default IndexPage
