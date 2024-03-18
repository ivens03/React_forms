import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

export const Formulario = () => { 
  
  const times = [
    'Progamção',
    'Front-End',
    'Back-End',
    'DevOps',
    'UX e UI',
    'Mobile',
    'Data Science',
  ]

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')

  const aoSalvar = (evento) => {
    evento.prevenDefault()
    console.log('Form foi submetido', nome, cargo, imagem);
  }
  
  return(
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Prencha os com dados para criar o card de colaborador</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
          />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          />
        <CampoTexto 
          obrigatorio={true} 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          />
        <ListaSuspensa label="Times" key={times} itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
