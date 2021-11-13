import React from "react"
import { Grid, Typography } from "@mui-ui/material"

// Components
import { SanityContent } from "@components/SanityContent"
import { RaisedImage } from "@components/Image"

type Props = {
    bio: GatsbyTypes.BioFragment
}

function BioPreview({ bio }: Props) {
    const { name, position, propic, _rawDescription } = bio

    return (
        <Grid
            container
            alignItems="stretch"
            justifyContent="center"
            spacing={3}
        >
            <Grid item xs={12} sm={6}>
                <RaisedImage imageAsset={propic} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Grid
                    container
                    direction="column"
                    sx={{
                        marginTop: 1, // theme.spacing(1)
                    }}
                >
                    <Typography variant="h6" color="white">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1">{position}</Typography>

                    <SanityContent blocks={_rawDescription} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BioPreview
