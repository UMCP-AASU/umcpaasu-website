import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Grid, Typography } from "@mui/material"

import SEO from "@components/SEO"
import { ParallaxBackground, RaisedPageContent, Section } from "@components/Layout"

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
                    {/* <ButtonLink to="events" variant="contained" color="primary">
                        Upcoming Events
                    </ButtonLink> */}
                </Container>
            </ParallaxBackground>
            <RaisedPageContent>
                <Section title={data.sanityHomePage?.aboutTitle}>
                    <Typography>
                        Hello what's up
                    </Typography>
                </Section>
                <Section title={data.sanityHomePage?.aboutTitle}>
                    <Typography>
                        Hello what's up
                    </Typography>
                </Section>
                <Section title={data.sanityHomePage?.aboutTitle}>
                    <Typography>
                        Hello what's up
                    </Typography>
                </Section>
                <Section title={data.sanityHomePage?.aboutTitle}>
                    <Typography>
                        Hello what's up
                    </Typography>
                </Section>
            </RaisedPageContent>
        </>
    )
}

export default IndexPage
