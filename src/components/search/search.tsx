import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export default function Search() {
    const [cep, setCep] = useState(" ");
    const [uf, setUf] = useState(" ");

    type Data =  [
        cep: number,
        logradouro: string,
        complemento: string,
        bairro: string,
        localidade: string,
        uf: string,
        ibge: number,
        gia: number,
        ddd: number,
        siafi: number
    ]

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value);
        console.log(cep);
        getData();
    };

    function getData() {
        if (cep.length == 8) {
            fetch(`viacep.com.br/ws/${cep}/json`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.cep);
                    console.log(data.logradouro);
                    console.log(data.complemento);
                    console.log(data.bairro);
                    console.log(data.localidade);
                    console.log(data.uf);
                });
        } else console.log('CEP Invalido');
    }

    return (
        <div className={styles.search}>
            <input id="cepInput" type="text" placeholder="Digite um CEP" onChange={handleInput}/>
        </div>
    )
}