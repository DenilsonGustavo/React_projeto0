import React, { useState } from 'react';

function Evento({ numero }) {
  const [showMessage, setShowMessage] = useState(false);

  function meuEvento() {
    setShowMessage(true);
    console.log(`Opa, fui ativado! ${numero}`);
  }

  function hideMessage() {
    setShowMessage(false);
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <button onClick={meuEvento}>Ativar</button>

      {showMessage && (
        <div>
          <p>Número: {numero}</p>
          <button onClick={hideMessage}>OK</button>
        </div>
      )}
    </div>
  );
}

export default Evento;
