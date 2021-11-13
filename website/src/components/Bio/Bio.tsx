import React from "react"
import {
    Box,
    Card,
    CardContent,
    CardActions,
    Chip,
    Grid,
    Typography,
} from "@mui/material"

// Components
import { GatsbyImageIfExists } from "@components/Image"
import { SanityContent } from "@components/SanityContent"

type Props = {
    bio: GatsbyTypes.BioFragment
}

function Bio({ bio }: Props) {
    const { name, position, major = [], propic, _rawDescription, order } = bio

    return (
        <Card>
            <Box>
                <GatsbyImageIfExists imageAsset={propic} />
                <CardContent>
                    <Typography variant="h5" color="textSecondary">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1">{position}</Typography>
                    <SanityContent content={_rawDescription} />
                </CardContent>
            </Box>
            <CardActions>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    {major.map((m: string) => (
                        <Grid item key={name + m}>
                            <Chip label={m} color="primary" />
                        </Grid>
                    ))}
                </Grid>
            </CardActions>
        </Card>
    )
}

export default Bio
