import React from "react"
import { Box, styled } from "@mui/material"
import { BgImage } from "gbimage-bridge"
import { SanityImageWithAltText } from "./index"
import { GatsbyImageProps } from "gatsby-plugin-image"

const StyledBackgroundImage = styled(BgImage)({
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
})

export type BackgroundImageProps = Omit<GatsbyImageProps, "image" | "alt"> & {
    imageAsset: SanityImageWithAltText
    imageHeight?: string
    children: React.ReactNode
}

function BackgroundImage({
    imageAsset,
    imageHeight = "80vh",
    children,
    ...rest
}: BackgroundImageProps) {
    if (!imageAsset || !imageAsset?.asset?.gatsbyImageData) {
        console.log("unavailable")
        return <Box>{children}</Box>
    }

    const { gatsbyImageData, altText } = imageAsset?.asset
    return (
        <StyledBackgroundImage
            sx={{
                height: imageHeight,
            }}
            image={gatsbyImageData}
            alt={altText}
            {...rest}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    background: "rgba(0, 0, 0, 0.5)",
                    zIndex: -1,
                }}
            />
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    background: "rgba(0, 0, 0, 0.5)",
                    zIndex: -1,
                }}
            >
                {children}
            </Box>
        </StyledBackgroundImage>
    )
}

export default BackgroundImage
