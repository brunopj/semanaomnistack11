import React from 'react';

import './global.css';

import Logon from './pages/Logon';

//JSX (JavaScript XML) Quando o HTML esta integrado dentro do javascript
//Componente no REACT é uma função que retorna HTML, podendo ter 
// funcionalidades java script e CSS.
//Componentes sempre comecam com a primeira letra maiuscula

//Live Reload = Quando o react atualiza automaticamente a alteracao de conteudo.

//Propriedade tem a sintaxe parecida com atributo HTML 
//   - Atributos são passados para compoentes, não para TAG
//<Header title="Semano OmniStack"/>
/*const [counter, setCounter] = useState(0);

function increment() {
  setCounter(counter + 1);

}
*/
function App() {

   
   return (
    <Logon />
      
  );
}

export default App;
