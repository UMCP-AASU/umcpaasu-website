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
    query EventsPageQuery {
        sanityEventsPage {
            header
            subtitle
            image {
                asset {
                    gatsbyImageData(
                        formats: WEBP
                        placeholder: BLURRED
                        layout: FULL_WIDTH
                        fit: CROP
                    )
                    altText
                }
            }
        }
    }
`

function EventsPage({ data }: PageProps<GatsbyTypes.EventsPageQuery>) {
    return (
        <>
            <SEO title={"Events"} />
            <ParallaxBackground
                imageAsset={data.sanityEventsPage?.image}
                imageHeight="65vh"
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" color="white">
                        {data.sanityEventsPage?.header}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        {data.sanityEventsPage?.subtitle}
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

export default EventsPage
