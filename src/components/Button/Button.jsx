import './button.scss';

export default function Button({toggleReady, isReady, isActive, timeSinceActive, makeInactive, resetTime, setResult}) {
    
    const text = !isReady ? 'Старт' : '';
    let buttonColor;
    isReady ? buttonColor = 'lightgreen' : buttonColor = 'lightgray';
    isActive ? buttonColor = 'red' : null;
    const handleStart = () => {
        resetTime(0)
        setResult(0);
        toggleReady();
    }
    const handleFinish = () => {
        if(!isActive){
            return;
        }
        setResult(timeSinceActive);
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