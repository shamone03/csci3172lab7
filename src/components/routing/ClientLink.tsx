import { PropsWithChildren, useContext } from "react";
import { NavigationContext } from "../../contexts/NavigationContext";

function ClientLink(props: PropsWithChildren<{ to: string }>) {
    const { navigate } = useContext(NavigationContext);
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        console.log(props.to);
        navigate(props.to)
    }

    return (
        <a href={props.to} onClick={e => handleClick(e)}>{props.children}</a>
    )
}

export default ClientLink;