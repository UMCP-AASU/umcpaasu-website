import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Typography } from "@mui/material"

import SEO from "@components/SEO"
import {
    ParallaxBackground,
    RaisedPageContent,
    Section,
} from "@components/Layout"
import {
    EventsGrid
} from "@components/Events"

export const query = graphql`
    query EventsPageQuery {
        sanityEventsPage {
            header
            subtitle
            image {
                ...BackgroundImage
            }
        }
        allSanityEvent {
            nodes {
                ...Event
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
                    <EventsGrid events={data.allSanityEvent.nodes} />
                </Section>
            </RaisedPageContent>
        </>
    )
}

export default EventsPage
