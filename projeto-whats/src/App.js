import styled from "styled-components";
import React from 'react';

const Container = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 110%;
  display: flex;
  flex-direction: column;
  margin: auto;
   
`
const ContainerInterno = styled.div`
  flex: 110%;
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  padding: 16px;
  background-color: #ece5dd;
`
const InserirDados = styled.div`
  display: flex;
  justify-content: space-between;
 
`
const Usuario = styled.input`
  width: 100px;
  
`
const Mensagem = styled.input`
  flex-grow: 1;
`
const Botao = styled.button`

`
const BalaoDeMensagem = styled.div`

background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" // Verde copiado do WhatsApp
        } else if (props.tipo === "outro") {
            return "#ffffff" // Branco
        }
    }};
align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
    }};

max-width: 60%;
min-width: 8%;
margin-bottom: 1em;

word-wrap: break-word;

padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;

  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`
const ContainerNome = styled.div`
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`
export class App extends React.Component {
  state = {
    messages: [],
    userValue: '',
    textValue: ''
  }

  onChangeUsuario = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({textValue: event.target.value})
  }

  sendMessage = () => {
    const novaMensagem = {
      user: this.state.userValue, 
      text: this.state.textValue,
    }
    console.log(novaMensagem)
    const novasMenssagensArray = [novaMensagem, ... this.state.messages]
    this.setState({messages: novasMenssagensArray, textValue: '', userValue: ''})
  }
  render(){

    
    return (
      <Container>
        <ContainerInterno>
          {this.state.messages.map((dados, index) => {
            return (
              dados.user === 'eu' ? (
                <BalaoDeMensagem tipo={"eu"}>
                    {dados.text}   
                </BalaoDeMensagem>
              ) : (
              <BalaoDeMensagem tipo={"outro"}>
                <ContainerNome>{dados.user}</ContainerNome>
                <div>{dados.text}</div>
              </BalaoDeMensagem>
            )
          )})}
        </ContainerInterno>          
        <InserirDados>
          <Usuario type="text" placeholder="Usuário" value={this.state.userValue} onChange={this.onChangeUsuario}/>
          <Mensagem type="text" placeholder="Mensagem" value={this.state.textValue} onChange={this.onChangeMensagem}/>
          <Botao onClick={this.sendMessage}>Enviar</Botao>
        </InserirDados>    
      </Container>
    ); 
  } 
}


export default App;