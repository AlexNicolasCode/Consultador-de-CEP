import { useState } from 'react';
import styles from './style.module.scss';

export default function Data() {
    const [isValidCEP, setValidCEP] = useState(true);
    const [cep, setCep] = useState('--');
    const [logradouro, setLogradouro] = useState('--');
    const [complemento, setComplemento] = useState('--');
    const [bairro, setBairro] = useState('--');
    const [localidade, setLocalidade] = useState('--');
    const [uf, setUf] = useState('--');
    const [ibge, setIbge] = useState('--');
    const [gia, serGia] = useState('--');
    const [ddd, setDdd] = useState('--');
    const [siafi, setSiafi] = useState('--');
    
    return (
        <>
            { isValidCEP &&
                <ul className={styles.search}>
                    <li>
                        CEP
                        <span>{cep}</span>
                    </li>
                    <li>
                        Logradouro
                        <span>{logradouro}</span>
                    </li>
                    <li>
                        Complemento
                        <span>{complemento}</span>
                    </li>
                    <li>
                        Bairro
                        <span>{bairro}</span>
                    </li>
                    <li>
                        Localidade
                        <span>{localidade}</span>
                    </li>
                    <li>
                        UF
                        <span>{uf}</span>
                    </li>
                    <li>
                        IBGE
                        <span>{ibge}</span>
                    </li>
                    <li>
                        GIA
                        <span>{gia}</span>
                    </li>
                    <li>
                        DDD
                        <span>{ddd}</span>
                    </li>
                    <li>
                        SIAFI
                        <span>{siafi}</span>
                    </li>
                </ul>
           }
        </>
    )
}