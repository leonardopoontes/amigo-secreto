import { useState } from "react";
import Card from "../components/Card";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoSorteio";

import './Sorteio.css'

const Sorteio = () => {
  const participantes = useListaDeParticipantes();

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, SetAmigoSecreto] = useState('')

  const resultado = useResultadoSorteio()

  const sortear = (evento: React.FormEvent<HTMLElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
        SetAmigoSecreto(resultado.get(participanteDaVez)!)
    }
    
  };

  return (
    <section className="sorteio" onSubmit={sortear}>
        <h2>Quem vai tirar o papelzinho?</h2>
      <form>
        <select
          required
          name="participanteDavez"
          id="participanteDavez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={evento => setParticipanteDaVez(evento.target.value)}
        >
            <option value="">Selecione seu nome</option>
          {participantes.map((participantes) => (
            <option key={participantes}>{participantes}</option>
          ))}
        </select>
        <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
        <button className="botao-sortear">Sortear</button>
      </form>
      {amigoSecreto && <p className="resultado" role={'alert'}>{amigoSecreto}</p>}
      <footer className="sorteio">
            <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
      </footer>
    </section>
  );
};

export default Sorteio;
