import { FC, ReactElement } from "react"

type Props = {
    title: string;
    type: "default" | "withLinkButton" | "withNormalButton";
    href?: string;
    buttonText?: string;
    onClick?: () => void;
};

type TitleProps = {
    title: string;
    children: ReactElement;
};

const Title: FC<TitleProps> = ({ title, children }) => {
    return (
        <article style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>{title}</h1>
            {children}
        </article>
    );
};

export default Title

 type TitleWithLinkProps = {
    title: string;
    href: string;
    buttonText: string;
};

export const TitleWithLink: FC<TitleWithLinkProps> = ({ title, href, buttonText }) => {
    return (
        <Title title={title}>
            <a href={href}>{buttonText}</a>
        </Title>
    );
};

type TitleWithButtonProps = {
    title: string;
    buttonText: string;
    onClick: () => void;
};

export const TitleWithButton: FC<TitleWithButtonProps> = ({ title, buttonText, onClick }) => {
    return (
        <Title title={title}>
            <button onClick={onClick}>{buttonText}</button> 
        </Title>
    );
};