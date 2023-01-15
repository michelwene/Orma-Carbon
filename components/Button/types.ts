import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "primary" | "secondary";
  variant?: "contained" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  type: "button" | "submit" | "reset";
  width?: string;
}
