import "./VariantsContainer.css";

const VariantsContainer = ({ variants }) => {
    return (
        <div className="variantsContainer">
            {variants.map((variant) => (
                <button
                    key={variant}
                    type="button"
                    onClick={() => {}}
                    className="variantContainer">
                    {variant}
                </button>
            ))}
        </div>
    );
};

export default VariantsContainer;
