import { useState } from 'react'
// Altere 'shadow.gif' pelo nome real do seu arquivo
import shadowGif from '/shadow.gif' 

function App() {
  const containerStyle = {
    backgroundColor: '#000', // Fundo preto
    height: '100vh',         // Ocupa a altura total da tela
    display: 'flex',         // Habilita Flexbox
    flexDirection: 'column', // Organiza itens em coluna
    justifyContent: 'center',// Centraliza verticalmente
    alignItems: 'center',    // Centraliza horizontalmente
    margin: 0,
    padding: 0,
    overflow: 'hidden'       // Garante que não haja barras de rolagem
  };

  const titleStyle = {
    color: '#00FF00',        // Cor verde neon 8-bit
    fontFamily: 'monospace', // Fonte simples que remete ao 8-bit
    fontSize: '4em',
    marginBottom: '20px',    // Espaço abaixo do título
    textShadow: '0 0 5px #00FF00' // Efeito de brilho neon
  };

  const imageStyle = {
    width: 'auto',
    height: '300px',         // Altura fixa para o GIF
    objectFit: 'contain'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>SHADOW RULES</h1>
      <img src={shadowGif} style={imageStyle} alt="Shadow the Hedgehog GIF" />
    </div>
  )
}

export default App