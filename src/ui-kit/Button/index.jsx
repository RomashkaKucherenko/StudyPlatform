import "./Button.css";

const Button = ({ width, height, content }) => {
    return (
        <button className="buttonContainer" onClick={() => {}} style={{ width, height }}>
            {content}
        </button>
    );
};

export default Button;
