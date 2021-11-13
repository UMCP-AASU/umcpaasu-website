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
    query ContactPageQuery {
        sanityContactPage {
            header
            subtitle
            image {
                ...BackgroundImage
            }
        }
    }
`

function ContactPage({ data }: PageProps<GatsbyTypes.ContactPageQuery>) {
    return (
        <>
            <SEO title={"Contact Us"} />
            <ParallaxBackground
                imageAsset={data.sanityContactPage?.image}
                imageHeight="65vh"
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" color="white">
                        {data.sanityContactPage?.header}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        {data.sanityContactPage?.subtitle}
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

export default ContactPage
