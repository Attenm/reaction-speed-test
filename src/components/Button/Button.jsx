import './button.scss';

export default function Button({toggleReady, isReady, isActive, makeInactive, setResult, startDate}) {
    
    const text = !isReady ? 'Старт' : '';
    let buttonColor;
    isReady ? buttonColor = 'lightgreen' : buttonColor = 'lightgray';
    isActive ? buttonColor = 'red' : null;
    const handleStart = () => {
        setResult(null);
        toggleReady();
    }
    const handleFinish = () => {
        if(!isActive){
            return;
        }
        const endDate = new Date();
        setResult(endDate - startDate);
        makeInactive();
        toggleReady();
    }

    return (
        <button 
            style={{backgroundColor: buttonColor}}
            className='button'
            onClick = {
                !isReady ? handleStart : handleFinish
            }
        >
            {text}
        </button>
    )
}