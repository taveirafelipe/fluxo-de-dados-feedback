import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);
  //LOGIN
  const [usuario, setUsuario] = useState('');
  const [img, setImg] = useState('');
  
  const [imgForm, setImgForm] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC')
  const [nameForm, setNameForm] = useState('')
  //POSTAGEM
  const [titulo, setTitulo] = useState('')
  const [imagem, setImagem] = useState('')
  const [descricao, setDescricao] = useState('')

  const [tituloTela, setTituloTela] = useState('Um titulo')
  const [imagemTela, setImagemTela] = useState('https://picsum.photos/536/354')
  const [descricaoTela, setDescricaoTela] = useState('Uma descricao')

  const button = ()=>{
    setTituloTela(titulo)
    setImagemTela(imagem)
    setDescricaoTela(descricao)
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header usuario={nameForm} img={imgForm}/>
          {pageFlow === 1 ? (
            <FormularioLogin 
            setPageFlow={setPageFlow} 
            usuario={usuario} 
            setUsuario={setUsuario} 
            img={img}
            setImg={setImg}
            setImgForm={setImgForm}
            setNameForm={setNameForm}/>
          ) : (
            <FormularioPostagem 
            titulo={titulo}
            setTitulo={setTitulo}
            imagem={imagem}
            setImagem={setImagem}
            descricao={descricao}
            setDescricao={setDescricao}
            button={button}
            />
          )}
        </aside>
        <TelaDaPostagem 
        titulo={tituloTela} 
        imagem={imagemTela}
        descricao={descricaoTela}/>
      </Container>
    </>
  );
}

export default App;
