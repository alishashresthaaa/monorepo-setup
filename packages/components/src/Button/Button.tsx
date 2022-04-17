import React from "react";
import styles from "./Button.module.scss";
import Button from "@mui/material/Button";
// import { ButtonProps } from "./Button.d"
import CircularProgress from "@mui/material/CircularProgress";
import custom_theme from "../styles/theme";

interface ButtonProps {
    name: string;
    size: "lg" | "md" | "sm";
    type: "button" | "submit" | "reset";
    loader?: boolean;
    sx?: any;
    disabled?: boolean;
    target?: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: any;
}


const YoButton = ({ name, size, type, loader, sx, disabled = false, target, startIcon, endIcon, onClick, ...props }: ButtonProps) => {

    return (
        <div className={styles["container"]}>
            <Button
                data-testid="button"
                variant="contained"
                disableRipple
                type={type || "button"}
                disabled={disabled}
                onClick={onClick}
                startIcon={startIcon}
                endIcon={endIcon}
                sx={{
                    background: custom_theme.palette.primary.mainGradient,
                    fontSize: { md: "12px", xl: "14px", xxl: "16px" },
                    lineHeight: { md: "11px", xl: "13px", xxl: "15px" },
                    borderRadius: "10px",
                    boxShadow: "none",
                    color: "#FFF",
                    height: "35px",
                    width: "100%",
                    position: "relative",
                    verticalAlign: "middle",
                    "&.Mui-disabled": {
                        background:
                            "linear-gradient(90deg, rgba(211,211,211,1) 42%, rgba(227,227,227,1) 90%)",
                    },
                    ...sx,
                }}
            >
                {name}

                {loader && (
                    <span
                        style={{
                            fontSize: "1rem",
                            marginLeft: "1rem",
                            display: "inline-flex",
                            alignItems: "center",
                            zIndex: "99",
                        }}
                    >
                        <CircularProgress size="1em" color="inherit" />
                    </span>
                )}

            </Button>
        </div>
    );
};

export default YoButton;
