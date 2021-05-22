/**
 * Barebones Bio card
 */
import React from "react"

import { GatsbyImageIfExists } from "@components/Image"

type BioProps = {
    data: GatsbyTypes.SanityBio
}

const Bio = ({ data }: BioProps) => {
    const { name, position, major, propic, description } = data

    return (
        <>
            {name}
            {position}
            {major}
            <GatsbyImageIfExists
                image={propic?.asset?.gatsbyImageData}
                alt={propic?.asset?.altText}
            />
        </>
    )
}

export default Bio
