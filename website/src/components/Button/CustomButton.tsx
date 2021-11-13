import React from "react"
import { Button, ButtonProps } from "@mui/material"
import { Link } from "gatsby"
import { animated } from "react-spring"

import useBoop, { BoopProps } from "@hooks/useBoop"

type Props = ButtonProps & {
    to?: string
}

const CustomButton = React.forwardRef<HTMLElement, Props>(
    ({ to, ...rest }, ref) => (
        <Button
            component={to ? Link : "button"}
            to={to}
            // @ts-ignore Ref type weirdness
            ref={ref}
            {...rest}
        />
    )
)

const AnimatedCustomButton = animated(CustomButton)

const AnimatedButton = React.forwardRef<
    HTMLElement,
    Props & {
        boopProps: BoopProps
    }
>(({ boopProps, disabled, ...rest }) => {
    const [boopStyles, trigger] = useBoop({ ...boopProps, disabled })

    return (
        <span onMouseEnter={trigger}>
            <AnimatedCustomButton
                style={boopStyles}
                disabled={disabled}
                {...rest}
            />
        </span>
    )
})

export default CustomButton
export { AnimatedButton }
