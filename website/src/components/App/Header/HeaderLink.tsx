import React, { useState } from "react"
import { Link } from "gatsby"
import { Theme, Hidden, makeStyles } from "@mui/material"
import { animated, useTransition } from "react-spring"

const useStyles = makeStyles((theme: Theme) => ({
    link: {
        margin: theme.spacing(2),
        textDecoration: "none",
        textTransform: "uppercase",
        display: "inline-block",
        position: "relative",
        color: (props: Props) =>
            props.scrollTrigger
                ? theme.palette.text.secondary
                : theme.palette.neutral.light,
    },
    active: {
        "& #link-highlight": {
            backgroundColor: (props: Props) =>
                props.scrollTrigger
                    ? theme.palette.text.secondary
                    : theme.palette.neutral.light,
            position: "absolute",
            bottom: -theme.spacing(0.5),
            width: "100%",
            height: "3px",
        },
    },
    box: {
        backgroundColor: (props: Props) =>
            props.scrollTrigger
                ? theme.palette.text.secondary
                : theme.palette.neutral.light,
        position: "absolute",
        bottom: -theme.spacing(0.5),
        height: "3px",
    },
}))

type Props = {
    scrollTrigger?: boolean
    to: string
    text: string
}

/**
 * You can add additional links here. Icons and the such also go here
 * @param props
 */
function HeaderLink(props: Props) {
    const { scrollTrigger = true, to, text } = props

    // @ts-ignore useStyles is deprecated but I wasn't sure of any other way of passing classnames
    const classes = useStyles()

    const [show, setShow] = useState(false)
    const transition = useTransition(show, {
        from: { width: "0%", left: "0%" },
        enter: { width: "100%", left: "0%" },
        leave: { width: "0%", left: "100%" },
    })

    return (
        <Link
            className={classes.link}
            to={to}
            activeClassName={classes.active}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <b>{text}</b>
            <Hidden xsDown>
                {transition(
                    (styles, item) =>
                        item && (
                            <animated.div
                                className={classes.box}
                                style={styles}
                            />
                        )
                )}
                <div id="link-highlight" />
            </Hidden>
        </Link>
    )
}

export default HeaderLink
