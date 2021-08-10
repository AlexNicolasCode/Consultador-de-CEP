import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export default function Main() { 
    const [isValidCEP, setValidCEP] = useState<boolean>(false);
    const [inputCep, setInputCep] = useState<string>('');

    const [cep, setCep] = useState<string>('');
    const [logradouro, setLogradouro] = useState<string>('');
    const [complemento, setComplemento] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [localidade, setLocalidade] = useState<string>('');
    const [uf, setUf] = useState<string>('');
    const [ibge, setIbge] = useState<string>('');
    const [gia, setGia] = useState<string>('');
    const [ddd, setDdd] = useState<string>('');
    const [siafi, setSiafi] = useState<string>('');

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
                });   
        } else console.log('CEP Invalido');
    }, [inputCep])
    
    return (
        <main>
            <h1 className={styles.h1}>Consultador de CEP</h1>

            <section className={styles.search}>
                <input id="cepInput" type="text" placeholder="Digite um CEP" onChange={event => setInputCep(event.target.value)}/>
            </section>

            {isValidCEP &&
                <ul className={styles.ul}>
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
        </main>
    )
}