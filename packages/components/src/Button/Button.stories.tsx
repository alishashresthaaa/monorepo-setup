import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import custom_theme from "../styles/theme";
import React from "react";
import YoButton from "./Button";
import Docs from "./Button.mdx";

export default {
    title: "Input/Button",
    component: YoButton,
    parameters: {
        layout: "centered",
        docs: {
            page: Docs,
        },
    },

} as ComponentMeta<typeof YoButton>;

const Template: ComponentStory<typeof YoButton> = (args) => (
    <ThemeProvider theme={custom_theme}>
        <CssBaseline />

        <YoButton {...args} />

    </ThemeProvider>

);

export const Primary = Template.bind({});
Primary.args = {
    name: "Button",
    size: "lg"
};
