import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import custom_theme from "../styles/theme";
import React from "react";
import IconHeading from "./IconHeading";
import Docs from "./IconHeading.mdx";

export default {
    title: "Heading/IconHeading",
    component: IconHeading,
    parameters: {
        layout: "centered",
        docs: {
            page: Docs,
        },
    },

} as ComponentMeta<typeof IconHeading>;

const Template: ComponentStory<typeof IconHeading> = (args) => (
    <ThemeProvider theme={custom_theme}>
        <CssBaseline />
        <IconHeading {...args} />
    </ThemeProvider>

);

export const Heading = Template.bind({});
Heading.args = {
    heading: "Services",
};
