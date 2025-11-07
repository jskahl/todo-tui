import { ASCIIFont, Box, Text, TextAttributes } from "@opentui/core";

export const Header = Box(
    { 
        justifyContent: "center", 
        alignItems: "center" 
    },

    ASCIIFont({ 
        font: "tiny",
        text: "to-do"
    }),

    Text({
        content: "(the classic one, but in your terminal)",
        attributes: TextAttributes.BOLD,
    }),
);
