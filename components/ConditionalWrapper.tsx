import React from "react";

interface props {
    condition: any,
    wrapper: (children: JSX.Element) => JSX.Element,
    children: JSX.Element
}

export default function ConditionalWrapper({condition, wrapper, children}:props) { return condition ? wrapper(children) : children };

 