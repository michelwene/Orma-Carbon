import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "caption"
    | "subtitle"
    | "body";
}
