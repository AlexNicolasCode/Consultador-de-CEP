import { useEffect, useState } from 'react';
import styles from './style.module.scss';

type dataCEP = {
    cep: string,
    logradouro: string,
    complemento: string,
    localidade: string,
    bairro: string
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string,
}

export default function Main() { 
    const [isValidCEP, setValidCEP] = useState<boolean>(false);
    const [inputCep, setInputCep] = useState<string>('');
    const [dataCEP, setDataCEP] = useState<dataCEP>({
        cep: '',
        logradouro: '',
        complemento: '',
        localidade: '',
        bairro: '',
        uf: '',
        ibge: '',
        gia: '',
        ddd: '',
        siafi: '',
    })

    useEffect(() => {
        if (inputCep.length === 8) {
            setValidCEP(true);
            fetch(`https://viacep.com.br/ws/${inputCep}/json`)
                .then(async (res) => {
                    const data: dataCEP = await res.json()
                    setDataCEP({
                        cep: data.cep,
                        logradouro: data.logradouro,
                        complemento: data.complemento,
                        localidade: data.localidade,
                        bairro: data.bairro,
                        uf: data.uf,
                        ibge: data.ibge,
                        gia: data.gia,
                        ddd: data.ddd,
                        siafi: data.siafi,
                    })
                })
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
                        <span>{dataCEP.cep}</span>
                    </li>
                    <li>
                        Logradouro
                        <span>{dataCEP.logradouro}</span>
                    </li>
                    <li>
                        Complemento
                        <span>{dataCEP.complemento}</span>
                    </li>
                    <li>
                        Bairro
                        <span>{dataCEP.bairro}</span>
                    </li>
                    <li>
                        Localidade
                        <span>{dataCEP.localidade}</span>
                    </li>
                    <li>
                        UF
                        <span>{dataCEP.uf}</span>
                    </li>
                    <li>
                        IBGE
                        <span>{dataCEP.ibge}</span>
                    </li>
                    <li>
                        GIA
                        <span>{dataCEP.gia}</span>
                    </li>
                    <li>
                        DDD
                        <span>{dataCEP.ddd}</span>
                    </li>
                    <li>
                        SIAFI
                        <span>{dataCEP.siafi}</span>
                    </li>
                </ul>
            }
        </main>
    )
}