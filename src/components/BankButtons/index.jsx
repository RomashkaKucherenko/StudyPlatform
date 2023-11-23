import Button from "../../ui-kit/Button"
const BankButtons = () => {
    const authtorized = false
    return (
        <div className="bankButtonsContainer">
            <Button width={234} height={58} content={'Банк заданий'} />
            <Button width={234} height={58} content={'Банк теории'} />
            {authtorized && <Button width={234} height={58} content={'Видео разборы'} />}
            <Button width={234} height={58} content={'Решить вариант'} />
        </div>
    )
}

export default BankButtons