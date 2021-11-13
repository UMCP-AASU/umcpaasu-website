import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Typography } from "@mui/material"

import SEO from "@components/SEO"
import {
    ParallaxBackground,
    RaisedPageContent,
    Section,
    GridWithItems,
    AnimateOnVisible,
} from "@components/Layout"
import { EventsGrid } from "@components/Events"
import { BioPreview } from "@components/Bio"
import { AnimatedButton } from "@components/Button"

export const query = graphql`
    query HomePage {
        sanityHomePage {
            header
            subtitle
            aboutTitle
            aboutDescription {
                _rawChildren
            }
            image {
                ...BackgroundImage
            }
        }
        events: allSanityEvent {
            nodes {
                ...Event
            }
        }
        presidents: allSanityBio(filter: { position: { eq: "Co-President" } }) {
            nodes {
                ...Bio
            }
        }
    }
`

function IndexPage({ data }: PageProps<GatsbyTypes.HomePageQuery>) {
    return (
        <>
            <SEO title={"Home"} />
            <ParallaxBackground
                imageAsset={data.sanityHomePage?.image}
                imageHeight="100vh"
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        textAlign: "left",
                        "& > *": {
                            margin: 2, // theme.spacing(2)
                        },
                    }}
                >
                    <Typography variant="h3" color="white">
                        University of Maryland College Park
                    </Typography>
                    <Typography variant="h3" color="white">
                        {data.sanityHomePage?.header}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        {data.sanityHomePage?.subtitle}
                    </Typography>
                    <AnimatedButton
                        to="events"
                        variant="contained"
                        color="primary"
                        boopProps={{
                            scale: 0.05,
                        }}
                    >
                        Upcoming Events
                    </AnimatedButton>
                </Container>
            </ParallaxBackground>
            <RaisedPageContent>
                <Section title={data.sanityHomePage?.aboutTitle}>
                    <Typography>Hello what's up</Typography>
                </Section>
                <Section title="Events" maxWidth="lg">
                    <EventsGrid events={data.events.nodes} />

                    <AnimatedButton
                        to="events"
                        variant="contained"
                        color="primary"
                        boopProps={{
                            scale: 0.05,
                        }}
                    >
                        Upcoming and Past Events
                    </AnimatedButton>
                </Section>
                <Section>
                    <Typography variant="h4" color="white" align="center">
                        Want to see who makes it all happen?
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="white"
                        align="center"
                    >
                        Meet our co-presidents!
                    </Typography>
                    <GridWithItems
                        alignItems="stretch"
                        spacing={3}
                        xs={12}
                        lg={6}
                    >
                        {presidents.nodes.map((bio) => (
                            <AnimateOnVisible
                                once
                                partialVisibility
                                key={bio._id}
                            >
                                <BioPreview bio={bio} />
                            </AnimateOnVisible>
                        ))}
                    </GridWithItems>
                </Section>
                <Section title={data.sanityHomePage?.aboutTitle}>
                    <Typography>Hello what's up</Typography>
                </Section>
            </RaisedPageContent>
        </>
    )
}

export default IndexPage
