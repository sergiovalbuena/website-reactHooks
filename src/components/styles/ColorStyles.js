export const themes = {
    light: {
        text1: "black",
        text2: "rgba(0,0,0,.7)",
        backgroundColor: "#F2F6FF",
        card: {
            backgroundColor: `rgba(255,255,255,.6)`,
            boxShadow: `0px 50px 100px rgba(34,79,169,.3), inset 0 0 0.5px rgba(255,255,255,.6)`,
            backgroundColorFull: `rgba(255,255,255,1)`,
        },
        cardHover:{
            backgroundColor: `rgba(68,66,178,.1)`,
            boxShadow: `inset 0 0 0 .5px rgba(68,66,178,.2)`
        },
        pricingCard: {
            backgroundColor: `rgba(255,255,255,.4)`,
        },
        status:{
            backgroundColor: `rgba(68,66,178,.2)`,
        },
        modal: {
            backgroundColor: `rgba(255, 255, 255, .6)`,
            boxShadow: `0 50px 100px rgba(34,79,169,.3), inset 0 0 0 .5px rgba(255,255,255,.6)`,
            backgroundColorFull: `rgba(255,255,255,1)`
        }
    },
    dark:{
        text1: "white",
        text2: "rgba(255,255,255,.7)",
        backgroundColor: "#1F1F47",
        card: {
            backgroundColor: `rgba(25,24,63,.9)`,
            boxShadow: `0px 30px 60px rgba(0,0,0,.25), inset 0 0 0.5px rgba(255,255,255,.2)`,
            backgroundColorFull: `rgba(15,14,71,1)`,
        },
        cardHover:{
            backgroundColor: `rgba(255,255,255,.1)`,
            boxShadow: `inset 0 0 0 .5px rgba(255,255,255,.2)`
        },
        pricingCard: {
            backgroundColor: `rgba(31,31,71,.6)`,
        },
        status:{
            backgroundColor: `rgba(0,0,0,.2)`,
        },
        modal: {
            backgroundColor: `rgba(50, 61, 109, .5)`,
            boxShadow: `0 50px 100px rgba(0,0,0,.25), inset 0 0 0 .5px rgba(255,255,255,.3)`,
            backgroundColorFull: `rgba(15,14,71,1)`
        },
    },
}