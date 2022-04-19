import styled from "styled-components"

interface IAuthenticationStyleProps {
  readonly background?: string
}

export const Authentication = styled.div`
  background:  ${({ background }: IAuthenticationStyleProps) => background || "#202020" };
  width: 30%;
  max-width: 18rem;
  min-width: 18rem;
  height: 22rem;
  max-height: 22rem;
  display: grid;
  justify-content: center;
  grid-gap: 1rem;
  padding: 2rem;
`

interface IStyledLinkProps {
  readonly margin?: string
  readonly fontWeight?: string
  readonly color?: string
}

export const StyledLink = styled.a`
  margin: ${({ margin }: IStyledLinkProps) => margin || "0" };
  font-weight: ${({ fontWeight }: IStyledLinkProps) => fontWeight || "normal" };
  color: ${({ color }: IStyledLinkProps) => color || "#732AEA" };
`