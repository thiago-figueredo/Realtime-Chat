import styled from "styled-components"

interface IFormProps {
  readonly background?: string
}

export const Form = styled.form`
  background: ${({ background }: IFormProps) => background || "#202020"};
  display: grid;
  grid-gap: 1rem;
`

type InputProps = {
  readonly padding?: string
  readonly outline?: string
  readonly margin?: string
  readonly width?: string
  readonly minWidth?: string
}

export const Input = styled.input`
  outline: ${({ outline }: InputProps) => outline || "none"};
  padding: ${({ padding }: InputProps) => padding || "0"};
  margin: ${({ margin }: InputProps) => margin || "0"};
  color: #202020;
  width: ${({ width }: InputProps) => width || "100%"};
  min-width: ${({ minWidth }: InputProps) => minWidth || "100%"};
  font-size: medium;
  font-weight: 600;
`

export const Button = styled.button`
  padding: .3rem; 
  border: none;
  border-radius: .3rem;
  background: #732AEA;
  cursor: pointer;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`