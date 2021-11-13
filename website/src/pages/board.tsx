import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Typography } from "@mui/material"

import SEO from "@components/SEO"
import {
    ParallaxBackground,
    RaisedPageContent,
    Section,
} from "@components/Layout"

export const query = graphql`
    query BoardPageQuery {
        sanityBoardPage {
            header
            subtitle
            image {
                ...BackgroundImage
            }
        }
    }
`

function BoardPage({ data }: PageProps<GatsbyTypes.BoardPageQuery>) {
    return (
        <>
            <SEO title={"Board"} />
            <ParallaxBackground
                imageAsset={data.sanityBoardPage?.image}
                imageHeight="65vh"
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" color="white">
                        {data.sanityBoardPage?.header}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        {data.sanityBoardPage?.subtitle}
                    </Typography>
                </Container>
            </ParallaxBackground>
            <RaisedPageContent>
                <Section>
                    <Typography>Hello what's up</Typography>
                </Section>
            </RaisedPageContent>
        </>
    )
}

export default BoardPage
