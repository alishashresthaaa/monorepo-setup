import React from "react";
import styles from "./Button.module.scss"
import Grid from "@mui/material/Grid"
import image from "./img1.jpg"

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {

    return (
        <Grid container columnSpacing={5}>
            <Grid item md={6} sx={{ backgroundColor: "red" }} >
                <h5 className={styles["font"]}>{props.label}</h5>
            </Grid>

        </Grid>
    )


};

export default Button;