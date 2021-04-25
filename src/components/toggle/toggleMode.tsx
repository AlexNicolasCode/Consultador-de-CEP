import { useState } from "react"
import styles from './style.module.scss';

export default function ToggleMode() {
    const [changeMode, setChangeMode] = useState(true);

    const changeToWhite = () => {
        setChangeMode(true)
    }

    const changeToDark = () => {
        setChangeMode(false)
    }

    return (
        <>
            { changeMode ? (
                <div>
                    <button onClick={changeToWhite}></button>
                </div>
            ) : (
                <div>
                    <button onClick={changeToWhite}></button>
                </div>
            )}
        </>
    )
}