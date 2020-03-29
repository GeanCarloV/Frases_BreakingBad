import React ,{ useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Frase from './components/Frase'

// style component 
const Contenedor = styled.div`
  display: flex;
  flex-direction: column; 
  padding-top: 5rem; 
  align-items: center; 
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 0%, #0f574e 100%);
  background-size: 300px; 
  font-family: Arial, Helvetica, sans-serif; 
  color: #fff; 
  margin-top: 3rem; 
  padding: 1rem 3rem; 
  border: 2px solid black;
  /* se pone un hover en el boton, con un transicion*/
  transition: background-size .8s ease; 

  :hover { 
    cursor:pointer; 
    background-size: 1400px; 
  }
`;

function App() {

  const [frasee, guardarFrase] = useState({}); 

    const consultarAPI = async () => { 
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      const frase = await api.json();
      guardarFrase(frase[0]);
    }

    // use effect
    // al ultimo se pasasn las dependenciass. se pone un arreglo vacio para que solo
    // se fie en la funcionq ue se manda 
    useEffect(() => {
      consultarAPI()
    }, []);

  return (   
    <Contenedor>
      <Frase 
        frase = {frasee}
      />
      <Boton 
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
