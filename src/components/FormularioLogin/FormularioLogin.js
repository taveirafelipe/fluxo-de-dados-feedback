import React, { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
 
  const login = () => {
    props.setPageFlow(2);
    props.setImgForm(props.img)
    props.setNameForm(props.usuario)
  };
  const onChangeNome = (event) =>{
    props.setUsuario(event.target.value)
  } 
  const onChangeImg = (event) =>{
    props.setImg(event.target.value)
  }
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={onChangeNome} value={props.usuario}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil:
          <Input type={"text"} onChange={onChangeImg} value={props.img}/>
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
