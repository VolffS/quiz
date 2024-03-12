import './link-router.scss'
import {Link} from "react-router-dom";
export function LinkRouter({text, linkText, onLinkClick}: Readonly<{ text: string|number, linkText: string, onLinkClick?:()=>void }>) {
    return (
            <Link className="link-router" onClick={onLinkClick} to={linkText}>{text}</Link>
    );
}