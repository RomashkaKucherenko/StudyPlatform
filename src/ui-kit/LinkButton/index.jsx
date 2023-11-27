import { Link } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = ({ width, height, content, to }) => {
    return (
        <Link to={to} className="buttonContainer" style={{ width, height }}>
            {content}
        </Link>
    );
};

export default LinkButton;
