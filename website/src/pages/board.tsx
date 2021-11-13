import React from "react"
import { graphql, PageProps } from "gatsby"
import { Container, Hidden, Typography } from "@mui/material"

import SEO from "@components/SEO"
import {
    ParallaxBackground,
    RaisedPageContent,
    Section,
} from "@components/Layout"
import { BioGrid } from "@components/Bio"

export const query = graphql`
    query BoardPageQuery {
        sanityBoardPage {
            header
            subtitle
            image {
                ...BackgroundImage
            }
        }
        presidents: allSanityBio(filter: { position: { eq: "Co-President" } }) {
            nodes {
                ...Bio
            }
        }
        board: allSanityBio(filter: { position: { ne: "Co-President" } }) {
            nodes {
                ...Bio
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
                <Section maxWidth="lg">
                    <Hidden xsDown>
                        <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            align="center"
                            paragraph
                        >
                            Tip: Learn more about the board by hovering or
                            tapping over their picture!
                        </Typography>
                    </Hidden>
                    <BioGrid bios={data.presidents.nodes} />
                    <BioGrid bios={data.board.nodes} />
                </Section>
            </RaisedPageContent>
        </>
    )
}

export default BoardPage
