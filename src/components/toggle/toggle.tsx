import { useState } from "react"
import './style.module.scss';

export function Toggle() {
    const [changeMode, setChangeMode] = useState(true);

    const changeToWhite = () => {
        setChangeMode(false);
    }

    const changeToDark = () => {
        setChangeMode(true)
    }

    return (
        <>
            { changeMode ? (
                <aside>
                    <button className="dark" onClick={changeToWhite}>
                        <img style={{ position: 'relative', left: '23px' }} src="circle-dark.svg" alt="button"/>
                    </button>
                    <img src="toggle-white.svg" alt="toggle"/>
                </aside>
            ) : (
                <aside>
                    <button className="white" onClick={changeToDark}>
                        <img src="circle-white.svg" alt="button"/>
                    </button>
                    <img src="toggle-dark.svg" alt="toggle"/>
                </aside>
            )}
        </>
    )
}