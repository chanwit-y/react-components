import { Button as MuiButton } from "@mui/material";
import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  shape?: "rounded";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  shape,
  ...props
}) => {
  return (
    <MuiButton
      color={variant}
      variant={shape === "rounded" ? "outlined" : "contained"}
    >
      {children}
    </MuiButton>
  );
};
