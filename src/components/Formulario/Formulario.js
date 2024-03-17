import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";

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
  
  return(
    <section className="formulario">
      <form>
        <h2>Prencha os com dados para criar o card de colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Times" key={times} itens={times} />
      </form>
    </section>
  );
};

export default Formulario;
