import "./Quote.css";

/**
 * Цитата на главной странице
 */
const Quote = () => {
    return (
        <div className="quoteContainer">
            <span className="firstRow">"Кто владеет информацией,</span>
            <div className="secondContainer">
                <span className="firstRow">тот владеет миром"</span>
                <span className="author"> У.Черчилль</span>
            </div>
        </div>
    );
};

export default Quote;
