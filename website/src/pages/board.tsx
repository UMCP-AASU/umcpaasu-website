import React from "react"
import { graphql, PageProps } from "gatsby"
import {
    Box,
    Container,
    Typography,
} from "@mui/material"

import SEO from "@components/SEO"
import {
    ParallaxBackground,
    RaisedPageContent,
    Section,
} from "@components/Layout"
import { BioGrid } from "@components/Bio"
import { BoardYearSelect } from "@components/BoardYear"
import useBoardYear from "@hooks/useBoardYear"

export const query = graphql`
    query BoardPageQuery {
        sanityBoardPage {
            header
            subtitle
            image {
                ...BackgroundImage
            }
        }
        presidents: allSanityBio(
            filter: { position: { eq: "Co-President" } }
            sort: { fields: order, order: ASC }
        ) {
            nodes {
                ...Bio
            }
        }
        board: allSanityBio(
            filter: { position: { ne: "Co-President" } }
            sort: { fields: order, order: ASC }
        ) {
            nodes {
                ...Bio
            }
        }
    }
`

function BoardPage({ data }: PageProps<GatsbyTypes.BoardPageQuery>) {
    const {
        sanitySiteSettings,
        allSanityBoardYear,
        sanityBoardPage,
        presidents,
        board,
    } = data

    const [boardYear, setBoardYear] = useBoardYear()
    const presidentsBios = presidents.nodes.filter(
        (bio: GatsbyTypes.BioFragment) => bio.boardYear?.year == boardYear
    )
    const boardBios = board.nodes.filter(
        (bio: GatsbyTypes.BioFragment) => bio.boardYear?.year == boardYear
    )

    return (
        <>
            <SEO title={"Board"} />
            <ParallaxBackground
                imageAsset={sanityBoardPage?.image}
                imageHeight="65vh"
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" color="white">
                        {sanityBoardPage?.header}
                    </Typography>
                    <Typography variant="subtitle1" color="white">
                        {sanityBoardPage?.subtitle}
                    </Typography>
                </Container>
            </ParallaxBackground>
            <RaisedPageContent>
                <Section
                    maxWidth="lg"
                    sx={{
                        paddingTop: 5, // theme.spacing(0)
                        paddingBottom: 3, // theme.spacing(3)
                    }}
                >
                    <BoardYearSelect
                        boardYear={boardYear}
                        setBoardYear={setBoardYear}
                    />

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            align="center"
                            paragraph
                        >
                            Tip: Learn more about the board by hovering or
                            tapping over their picture!
                        </Typography>
                    </Box>
                    <BioGrid bios={presidentsBios} />
                    <BioGrid bios={boardBios} />
                </Section>
            </RaisedPageContent>
        </>
    )
}

export default BoardPage
