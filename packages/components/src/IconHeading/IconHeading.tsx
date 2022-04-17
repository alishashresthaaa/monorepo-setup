import styles from "./IconHeading.module.scss";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import fallback from "./images/fallback.png";

export interface IconHeadingProps {
    iconImage?: string | ReactNode;
    heading: string;
    isNoneUnderline?: boolean;
    isCapitalize?: boolean;
    sx?: any;
}

const IconHeading = (props: IconHeadingProps) => {
    const { iconImage, heading, isNoneUnderline, isCapitalize = true, sx } = props;
    const Underline = isNoneUnderline
        ? `${styles["Underline-none"]}`
        : `${styles["Underline"]}`;
    return (
        <div className={`${styles["main-container"]} ${Underline}`} data-testid="icon-heading" style={{ ...sx }}>
            {iconImage && (
                <div className={`${styles["img-container"]}`}>
                    {typeof iconImage === "string" ? (
                        <img
                            src={iconImage || ""}
                            alt="Icon"
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src = fallback;
                            }}
                        />
                    ) : (
                        { iconImage }
                    )}
                </div>
            )}
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "800",
                    fontSize: { xs: "14px", lg: "18px", xl: "22px" },
                    textTransform: isCapitalize ? "capitalize" : "none",
                }}
            >
                {heading}
            </Typography>
        </div>
    );
};

export default IconHeading;
