import React from "react"
import { Theme, Typography, useMediaQuery } from "@mui/material"

// Components
import { Bio, FlippableBio } from "./index"
import { GridWithItems, GridWithItemsProps } from "@components/Layout"

type Props = GridWithItemsProps & {
    bios: GatsbyTypes.BioFragment[]
}

function BioGrid(props: Props) {
    const { classes, bios, ...rest } = props
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"))

    return (
        <GridWithItems {...rest} sm={6} lg={4}>
            {bios.length <= 0
                ? [
                      <Typography variant="h5" align="center" key={1}>
                          No bios to show
                      </Typography>,
                  ]
                : bios.map((bio) => {
                      matches ? (
                          <FlippableBio bio={bio} key={bio._id} />
                      ) : (
                          <Bio bio={bio} key={bio._id} />
                      )
                  })}
        </GridWithItems>
    )
}

export default BioGrid
