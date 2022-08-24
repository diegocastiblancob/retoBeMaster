import React from "react";

export default function NavItem({ content, href }) {
    return (
        <li className="text-1g font-semibold">
            * | <a href={href}>{content}</a>
        </li>
    )
}