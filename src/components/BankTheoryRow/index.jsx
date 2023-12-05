import './BankTheoryRow.css'

/**
 * Строки тем в банке теории
 */
const BankTheoryRow = ({num,content}) => {
    return (
        <div className="bankTheoryRowContainer">
            <div className='rowContent'>{num}. {content}</div>
            <div className='rowSource'>
                <a style={{textDecoration: "none"}} href="123">смотреть</a>
                <a style={{textDecoration: "none"}} href="123">скачать</a>
            </div>
        </div>
    )
}

export default BankTheoryRow