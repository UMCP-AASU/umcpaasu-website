/**
 * Code from Josh W Comeau
 * https://joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion
 */
 import React, { useState, useEffect } from "react"

 const QUERY = "(prefers-reduced-motion: no-preference)"
 const isRenderingOnServer = typeof window === "undefined"
 const getInitialState = () => {
     // For our initial server render, we won't know if the user
     // prefers reduced motion, but it doesn't matter. This value
     // will be overwritten on the client, before any animations
     // occur.
     return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
 }
 
 export default function usePrefersReducedMotion() {
     const [prefersReducedMotion, setPrefersReducedMotion] = useState(
         getInitialState
     )
     useEffect(() => {
         const mediaQueryList = window.matchMedia(QUERY)
         const listener = (event: MediaQueryListEvent) => {
             setPrefersReducedMotion(!event.matches)
         }
         mediaQueryList.addListener(listener)
         return () => {
             mediaQueryList.removeListener(listener)
         }
     }, [])
     return prefersReducedMotion
 }
 