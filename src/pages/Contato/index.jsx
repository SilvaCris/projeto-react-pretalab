import React, { useState, useEffect } from 'react';
import contatoImg from '../../assets/contact.svg';
import styles from './contato.module.css';

function Contato() {
  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    if (cep.length === 8 && !isNaN(cep)) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
          if (!data.erro) {
            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setEstado(data.uf);
          }
        })
        .catch(error => {
          console.error('Ocorreu um erro ao buscar o endereço:', error);
        });
    }
  }, [cep]);

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value);
  }

  function handleInputValueNome(event) {
    setNome(event.target.value);
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value);
  }

  function handleInputValueCep(event) {
    setCep(event.target.value);
  }

  function handleCreateMessage(event) {
    event.preventDefault();

    
  }

  return (
    <>
      <div className={styles.header}>
        <h1>
          Preencha os dados abaixo para entrar em contato conosco
        </h1>
        <img src={contatoImg} alt="Contato" />
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={handleCreateMessage} className={styles.form}>
          <input className={styles.formInput} placeholder="Digite seu nome..." onChange={handleInputValueNome} value={nome} />
          <input className={styles.formInput} placeholder="Digite seu email..." onChange={handleInputValueEmail} value={email} />
          <input className={styles.formInput} placeholder="Digite seu CEP..." onChange={handleInputValueCep} value={cep} />
          <input className={styles.formInput} placeholder="Logradouro" value={logradouro} readOnly />
          <input className={styles.formInput} placeholder="Bairro" value={bairro} readOnly />
          <input className={styles.formInput} placeholder="Cidade" value={cidade} readOnly />
          <input className={styles.formInput} placeholder="Estado" value={estado} readOnly />
          <textarea className={styles.formTextArea} placeholder="Digite sua mensagem..." onChange={handleInputValueMensagem} value={mensagem} />
          <button className={styles.formButton} type="submit">ENVIAR</button>
        </form>
      </div>
    </>
  );
}

export default Contato;
