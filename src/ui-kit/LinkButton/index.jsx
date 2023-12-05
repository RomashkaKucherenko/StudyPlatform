import { Link } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = ({ width, height, content, to, location }) => {
    console.log(location);

    return (
        <Link  to={to} className={location !== to ? "buttonContainer" : 'buttonDisabled'} style={{ width, height }}>
            {content}
        </Link>
    );
};

export default LinkButton;
