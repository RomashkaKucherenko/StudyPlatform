import './VariantFinder.css'

/**
 * Компонент поиска на странице "Решить вариант"
 */
const VariantFinder = () => {
    return (
        <div className='variantFinderContainer'>
            <div className='variantFinderTitle'>Поиск по номеру</div>
            <div className='variantFinder'>
                <input className='variantFinderInput' type="text" placeholder='Номер ванианта' />
                <button className='variantFinderShowButton'>Показать вариант</button>
            </div>
            <div className='variantFinderButtons'>
                <button className='variantFinderButton'>Сначала новые</button>
                <button className='variantFinderButton'>Сначала старые</button>
            </div>
        </div>
    )
}

export default VariantFinder