import './TaskFinder.css'

const TaskFinder = () => {
    return (
        <div className='taskFinderContainer'>
            <div className='findTitle'>Поиск по номеру</div>
            <div className='finder'>
                <input className='finderInput' type="number" min={1}  placeholder='Номер задачи' />
                <button className='finderButton'>Показать задачу</button>
            </div>
        </div>
    )
}

export default TaskFinder