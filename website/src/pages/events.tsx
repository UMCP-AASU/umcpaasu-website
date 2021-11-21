import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Typography } from "@mui/material"

import SEO from "@components/SEO"
import {
    ParallaxBackground,
    RaisedPageContent,
    Section,
} from "@components/Layout"
import { EventsGrid } from "@components/Events"
import { BoardYearSelect } from "@components/BoardYear"

import useBoardYear from "@hooks/useBoardYear"

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
    const { sanityEventsPage, allSanityEvent } = data
    const [boardYear, setBoardYear] = useBoardYear()
    const allEvents = allSanityEvent.nodes
    const futureEvents = allEvents
    const pastEvents = allEvents
    return (
        <>
            <SEO title={"Events"} />
            <ParallaxBackground
                imageAsset={sanityEventsPage?.image}
                imageHeight="65vh"
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" color="white">
                        {sanityEventsPage?.header}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        {sanityEventsPage?.subtitle}
                    </Typography>
                </Container>
            </ParallaxBackground>
            <RaisedPageContent>
                <BoardYearSelect
                    boardYear={boardYear}
                    setBoardYear={setBoardYear}
                />
                <Section title="Upcoming Events" maxWidth="lg">
                    <EventsGrid events={futureEvents} />
                </Section>
                <Section title="Past Events" maxWidth="lg">
                    <EventsGrid events={pastEvents} />
                </Section>
            </RaisedPageContent>
        </>
    )
}

export default EventsPage
