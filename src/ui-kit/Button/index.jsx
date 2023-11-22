import "./Button.css";

const Button = ({ width, height, content }) => {
    return (
        <button className="buttonContainer" style={{ width, height }}>
            {content}
        </button>
    );
};

export default Button;
