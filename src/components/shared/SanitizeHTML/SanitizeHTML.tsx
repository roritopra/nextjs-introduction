import { HTMLAttributes } from "react";
import sanitize from "sanitize-html";
import { createElement } from "react";

type SanitizeHTMLProps = {
    children: string;
    tag: string;
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
    const sanitizedHtml = sanitize(children, {
        allowedTags: ['b', 'i', 'em', 'strong', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'br', 'hr', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
    });

    return createElement(
        tag,
        {...rest},
        sanitizedHtml
    )
}