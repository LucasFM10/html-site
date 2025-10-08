import { useState } from 'react'
// 1. Importa o GIF (garanta que o nome do arquivo está correto e ele está na pasta 'public/')
import shadowGif from '/shadow.gif' 

function App() {
  
  // ===============================================
  // ESTILOS PARA OCUPAR E CENTRALIZAR NA TELA
  // ===============================================
  const containerStyle = {
    // Fundo preto que ocupa 100% da viewport (tela)
    backgroundColor: '#000', 
    width: '100vw',          // Ocupa 100% da largura da viewport
    height: '100vh',         // Ocupa 100% da altura da viewport
    margin: 0,               // Remove margens do navegador
    padding: 0,
    
    // Configuração Flexbox para CENTRALIZAR O CONTEÚDO
    display: 'flex',         
    flexDirection: 'column', 
    justifyContent: 'center',// Centraliza verticalmente
    alignItems: 'center',    // Centraliza horizontalmente
  };

  const titleStyle = {
    color: '#00FF00',        // Cor verde neon 8-bit
    fontFamily: 'monospace', // Fonte simples 
    fontSize: '4em',
    marginBottom: '20px',    // Espaço abaixo do título
    textShadow: '0 0 8px #00FF00', // Efeito de brilho neon forte
  };

  const imageStyle = {
    height: '300px',         // Altura fixa para o GIF
    objectFit: 'contain',
  };

  return (
    // Aplicamos o estilo no div container
    <div style={containerStyle}>
      <h1 style={titleStyle}>SHADOW RULES</h1>
      <img src={shadowGif} style={imageStyle} alt="Shadow the Hedgehog GIF" />
    </div>
  )
}

export default App