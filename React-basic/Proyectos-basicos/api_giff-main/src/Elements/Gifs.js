import styled from "styled-components";

const Formulario = styled.form`
  width: 50%;

`;

const Input = styled.input`
  width: 300px;
  margin: 10px;
  background-color: #282c34;
  border-radius: 3px;
  height: 30px;
  border:1px solid #fff;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 1px solid #fff;
  outline: none;
  color: #fff;
  font-size: 18px;
`;

const Button = styled.button`
	background-color:#282c34;
	border-radius:15px;
	border:1px solid #fff;
	display:inline-block;
	cursor:pointer;
	color:#fff;
	font-size:16px;
	padding:7px 25px;
  width: 130px;
  align-items: center;
`;
export {Formulario, Input, Button};