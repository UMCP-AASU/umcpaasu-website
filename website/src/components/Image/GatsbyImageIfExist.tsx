import React from "react"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

// Defined with GatsbyTypes.Maybe so that we know image and alt are required fields
// but sometimes the values passed in are undefined
type Props = {
    image: GatsbyTypes.Maybe<IGatsbyImageData>
    alt: GatsbyTypes.Maybe<string>
}

const GatsbyImageIfExists = ({ image, alt }: Props) =>
    image ? <GatsbyImage image={image} alt={alt ? alt : ""} /> : <></>

export default GatsbyImageIfExists
