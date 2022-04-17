import styled from "styled-components"

interface IContainerProps {
  readonly background?: string
  readonly backgroundImage?: string
  readonly justifyContent?: string
  readonly alignItems?: string
  readonly fontSize?: string
  readonly padding?: string
  readonly margin?: string
  readonly width?: string
  readonly height?: string
  readonly rows?: string
  readonly columns?: string
  readonly gridRow?: string
  readonly gridColumn?: string
  readonly gridAutoFlow?: string
  readonly gap?: string
  readonly textAlign?: string
  readonly position?: string
}

export const ContainerRow = styled.div`
  background: ${({ background }: IContainerProps) => background || "transparent" };
  background-image: ${({ backgroundImage }: IContainerProps) => backgroundImage || "none" };
  padding: ${({ padding }: IContainerProps) => padding || "0" };
  margin: ${({ margin }: IContainerProps) => margin || "0" };
  width: ${({ width }: IContainerProps) => width || "100%" };
  height: ${({ height }: IContainerProps) => height || "auto" };
  display: grid;
  grid-column: ${({ gridColumn }) => gridColumn || "" };
  grid-row: ${({ gridRow }) => gridRow || "" };
  gap: ${({ gap }: IContainerProps) => gap || "0" };
  grid-template-columns: ${({ columns }: IContainerProps) => columns || "1fr" };
  grid-template-rows: ${({ rows }: IContainerProps) => rows || "1fr" };
  grid-auto-flow: ${({ gridAutoFlow }: IContainerProps) => gridAutoFlow || "row" };
  justify-content: ${({ justifyContent }: IContainerProps) => justifyContent || "center" };
  align-items: ${({ alignItems }: IContainerProps) => alignItems || "center" };
  font-size: ${({ fontSize }: IContainerProps) => fontSize || "1rem" };
  text-align: ${({ textAlign }: IContainerProps) => textAlign || "center" };
  position: ${({ position }: IContainerProps) => position || "" };
`

export const ContainerColumn = styled.div`
  background: ${({ background }: IContainerProps) => background || "transparent" };
  background-image: ${({ backgroundImage }: IContainerProps) => backgroundImage || "none" };
  width: ${({ width }: IContainerProps) => width || "100%" };
  height: ${({ height }: IContainerProps) => height || "auto" };
  margin: ${({ margin }: IContainerProps) => margin || "0" };
  padding: ${({ padding }: IContainerProps) => padding || "0" };
  display: grid;
  grid-template-columns: ${({ columns }: IContainerProps) => columns || "1fr" };
  grid-template-rows: ${({ rows }: IContainerProps) => rows || "1fr" };
  grid-column: ${({ gridColumn }) => gridColumn || "" };
  grid-row: ${({ gridRow }) => gridRow || "" };
  gap: ${({ gap }: IContainerProps) => gap || "0" };
  grid-auto-flow: ${({ gridAutoFlow }: IContainerProps) => gridAutoFlow || "row" };
  justify-content: ${({ justifyContent }: IContainerProps) => justifyContent || "" };
  align-items: ${({ alignItems }: IContainerProps) => alignItems || "center" }; 
  font-size: ${({ fontSize }: IContainerProps) => fontSize || "1rem" };
  text-align: ${({ textAlign }: IContainerProps) => textAlign || "center" };
  position: ${({ position }: IContainerProps) => position || "" };
`

interface IStrongProps {
  readonly textAlign?: string
}

export const Strong = styled.strong`
  text-align: ${({ textAlign }: IStrongProps) => textAlign || "center" };
`
interface IHeaderProps {
  readonly margin?: string
  readonly textAlign?: string
  readonly padding?: string
}

export const H1 = styled.h1`
  margin: ${({ margin }: IHeaderProps) => margin || "0" };
  text-align: ${({ textAlign }: IHeaderProps) => textAlign || "center" };
  padding: ${({ padding }: IHeaderProps) => padding || "0" };
`

export const H2 = styled.h2`
  margin: ${({ margin }: IHeaderProps) => margin || "0" };
  text-align: ${({ textAlign }: IHeaderProps) => textAlign || "center" };
  padding: ${({ padding }: IHeaderProps) => padding || "0" };
`

interface IButtonProps {
  readonly background?: string
  readonly width?: string
  readonly height?: string
  readonly padding?: string
  readonly border?: string
  readonly cursor?: string
}

export const Button = styled.button`
  padding: ${({ padding }: IButtonProps) => padding || "0" };
  width: ${({ width }: IButtonProps) => width || "100%" };
  height: ${({ height }: IButtonProps) =>  height || "auto" };
  background: ${({ background }: IButtonProps) =>  background || "transparent" };
  cursor: ${({ cursor }: IButtonProps) =>  cursor || "" };
  border: ${({ border }: IButtonProps) =>  border || "none" };
`