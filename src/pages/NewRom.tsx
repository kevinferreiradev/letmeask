//import { AuthContext } from '../context/AuthContext';
//import { useContext } from 'react';

import { Link } from 'react-router-dom'

import illustrationImg from '../assets/imagens/illustration.svg';
import logoImg from '../assets/imagens/logo.svg';
import googleiconImg from '../assets/imagens/google-icon.svg';

import { Button } from '../components/Button';
import '../styles/auth.scss';

export function NewRom(){
  //const { user } = useContext(AuthContext);
  
  return(
    <div id="page-auth">
        <aside>
          <img src={illustrationImg} alt="ilustração de perguntas e respostas" />
          <strong>Crie sua sala de Q&A ao vivo</strong>
          <p>Tire suas dúvidas da sua audiência em tempo real.</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <h2>Criar uma nova sala</h2>
            <form>
              <input
              type="text"
              placeholder="Nome da sala"
               />
               <Button type="submit">
                  Criar sala
               </Button>
            </form>
            <p>
              Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
            </p>
          </div>
        </main>
    </div>
  )
  
}