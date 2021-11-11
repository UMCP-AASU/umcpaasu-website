export { default as GatsbyImageIfExists } from "./GatsbyImageIfExist"
export { default as BackgroundImage } from "./BackgroundImage"

export type { BackgroundImageProps } from "./BackgroundImage"

export type SanityImageWithAltText = GatsbyTypes.Maybe<{
    readonly asset: GatsbyTypes.Maybe<
        Pick<GatsbyTypes.SanityImageAsset, "gatsbyImageData" | "altText">
    >
}>
