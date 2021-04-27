import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export default function Data() { 
    const [isValidCEP, setValidCEP] = useState(false);
    const [inputCep, setInputCep] = useState('');

    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [uf, setUf] = useState('');
    const [ibge, setIbge] = useState('');
    const [gia, setGia] = useState('');
    const [ddd, setDdd] = useState('');
    const [siafi, setSiafi] = useState('');

    useEffect(() => {
        if (inputCep.length === 8) {
            setValidCEP(true);
            console.log(inputCep);
            fetch(`https://viacep.com.br/ws/${inputCep}/json`)
                .then(response => response.json())
                .then(data => {
                    setCep(data.cep);
                    setLogradouro(data.logradouro);
                    setComplemento(data.complemento);
                    setBairro(data.bairro);
                    setLocalidade(data.localidade);
                    setUf(data.uf);
                    setIbge(data.ibge);
                    setGia(data.gia);
                    setDdd(data.ddd);
                    setSiafi(data.siafi);
                    console.log(data.ibge);
                });   
        } else console.log('CEP Invalido');
    }, [inputCep])
    
    return (
        <>
            <div className={styles.search}>
                <input id="cepInput" type="text" placeholder="Digite um CEP" onChange={event => setInputCep(event.target.value)}/>
            </div>
            { isValidCEP &&
                <ul>
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