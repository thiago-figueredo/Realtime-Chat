import styled from "styled-components"

interface IFormProps {
  readonly background?: string
}

export const Form = styled.form`
  background: ${({ background }: IFormProps) => background || "#202020"};
  display: grid;
  grid-gap: 1rem;
`

export const Input = styled.input`
  outline: none;
  padding: .5rem;
  color: #202020;
  width: 100%;
  min-width: 11.25rem;
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