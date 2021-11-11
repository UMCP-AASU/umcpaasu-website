import React from "react"
import {
    Container,
    ContainerProps,
    Grid,
    Typography,
    TypographyProps,
} from "@mui/material"
import { animated } from "react-spring"

type Props = TypographyProps & {
    maxWidth?: ContainerProps["maxWidth"]
    title?: string
    children: React.ReactNode
}

function Section({
    classes,
    maxWidth = "md",
    title,
    color = "textSecondary",
    variant = "h3",
    align = "center",
    children,
    ...rest
}: Props) {
    return (
        <Container
            maxWidth={maxWidth}
            sx={{
                paddingTop: 8, // theme.spacing(8)
                paddingBottom: 4, // theme.spacing(4)
            }}
        >
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
                spacing={3}
            >
                {title ? (
                    <Typography
                        variant={variant}
                        color={color}
                        align={align}
                        sx={{
                            marginBottom: 2, // theme.spacing(2)
                        }}
                        {...rest}
                    >
                        {title}
                    </Typography>
                ) : (
                    <></>
                )}
                {children}
            </Grid>
        </Container>
    )
}

export default Section
