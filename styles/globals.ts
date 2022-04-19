import styled from "styled-components"

interface IContainerProps {
  readonly background?: string
  readonly backgroundImage?: string
  readonly justifyContent?: string
  readonly justifyItems?: string
  readonly alignItems?: string
  readonly alignSelf?: string
  readonly fontSize?: string
  readonly padding?: string
  readonly margin?: string
  readonly width?: string
  readonly maxWidth?: string
  readonly height?: string
  readonly rows?: string
  readonly columns?: string
  readonly gridRow?: string
  readonly gridColumn?: string
  readonly gridAutoFlow?: string
  readonly gap?: string
  readonly textAlign?: string
  readonly position?: string
  readonly cursor?: string
  readonly overflow?: string
  readonly left?: string 
  readonly bottom?: string 
}

export const ContainerRow = styled.div`
  background: ${({ background }: IContainerProps) => background || "transparent" };
  background-image: ${({ backgroundImage }: IContainerProps) => backgroundImage || "none" };
  padding: ${({ padding }: IContainerProps) => padding || "0" };
  margin: ${({ margin }: IContainerProps) => margin || "0" };
  width: ${({ width }: IContainerProps) => width || "100%" };
  max-width: ${({ maxWidth }: IContainerProps) => maxWidth || "100%" };
  height: ${({ height }: IContainerProps) => height || "auto" };
  display: grid;
  grid-column: ${({ gridColumn }) => gridColumn || "" };
  grid-row: ${({ gridRow }) => gridRow || "" };
  gap: ${({ gap }: IContainerProps) => gap || "0" };
  grid-template-columns: ${({ columns }: IContainerProps) => columns || "1fr" };
  grid-template-rows: ${({ rows }: IContainerProps) => rows || "1fr" };
  grid-auto-flow: ${({ gridAutoFlow }: IContainerProps) => gridAutoFlow || "row" };
  justify-content: ${({ justifyContent }: IContainerProps) => justifyContent || "center" };
  justify-items: ${({ justifyItems }: IContainerProps) => justifyItems || "center" };
  align-items: ${({ alignItems }: IContainerProps) => alignItems || "center" };
  align-self: ${({ alignSelf }: IContainerProps) => alignSelf || "center" };
  font-size: ${({ fontSize }: IContainerProps) => fontSize || "1rem" };
  text-align: ${({ textAlign }: IContainerProps) => textAlign || "center" };
  position: ${({ position }: IContainerProps) => position || "" };
  cursor: ${({ cursor }) => cursor || "default" };
  overflow: ${({ overflow }) => overflow || "visible" };
  left: ${({ left }) => left || "auto" };
  bottom: ${({ bottom }) => bottom || "" };
`

export const ContainerColumn = styled.div`
  background: ${({ background }: IContainerProps) => background || "transparent" };
  background-image: ${({ backgroundImage }: IContainerProps) => backgroundImage || "none" };
  width: ${({ width }: IContainerProps) => width || "100%" };
  max-width: ${({ maxWidth }: IContainerProps) => maxWidth || "100%" };
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
  justify-items: ${({ justifyItems }: IContainerProps) => justifyItems || "center" };
  align-items: ${({ alignItems }: IContainerProps) => alignItems || "center" }; 
  align-self: ${({ alignSelf }: IContainerProps) => alignSelf || "center" };
  font-size: ${({ fontSize }: IContainerProps) => fontSize || "1rem" };
  text-align: ${({ textAlign }: IContainerProps) => textAlign || "center" };
  position: ${({ position }: IContainerProps) => position || "" };
  cursor: ${({ cursor }) => cursor || "default" };
  overflow: ${({ overflow }) => overflow || "visible" };
  left: ${({ left }) => left || "auto" };
  bottom: ${({ bottom }) => bottom || "" };
`

interface IStrongProps {
  readonly textAlign?: string
  readonly position?: string
  readonly bottom?: string | number
}

export const Strong = styled.strong`
  text-align: ${({ textAlign }: IStrongProps) => textAlign || "center" };
  position: ${({ position }: IStrongProps) => position || "" };
  bottom: ${({ bottom }) => bottom || "" };
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
  readonly borderRadius?: string
  readonly cursor?: string
}

export const Button = styled.button`
  padding: ${({ padding }: IButtonProps) => padding || "0" };
  width: ${({ width }: IButtonProps) => width || "100%" };
  height: ${({ height }: IButtonProps) =>  height || "auto" };
  background: ${({ background }: IButtonProps) =>  background || "transparent" };
  cursor: ${({ cursor }: IButtonProps) =>  cursor || "" };
  border: ${({ border }: IButtonProps) =>  border || "none" };
  border-radius: ${({ borderRadius }: IButtonProps) =>  borderRadius || "0" };
`

type ImgProps = {
  readonly width?: string | number
  readonly src?: string
  readonly alt?: string
  readonly borderRadius?: string
} 

export const Img = styled.img`
  border-radius: ${({ borderRadius }: ImgProps) => borderRadius || "0" };
  width: ${({ width }: ImgProps) => width || "100%" };
  src: ${({ src }: ImgProps) => src || "" };
  alt: ${({ alt }: ImgProps) => alt || "" };
`

interface ISpanProps {
  readonly fontSize?: string
}

export const Span = styled.span`
  font-size: ${({ fontSize }: ISpanProps) => fontSize || "1rem" };
`

type InputProps = {
  readonly background?: string
  readonly padding?: string
  readonly outline?: string
  readonly margin?: string
  readonly width?: string
  readonly minWidth?: string
  readonly borderRadius?: string
  readonly border?: string
  readonly color?: string
}

export const Input = styled.input`
  outline: ${({ outline }: InputProps) => outline || "none"};
  padding: ${({ padding }: InputProps) => padding || "0"};
  margin: ${({ margin }: InputProps) => margin || "0"};
  color: ${({ color }: InputProps) => color || "#000"};
  width: ${({ width }: InputProps) => width || "100%"};
  min-width: ${({ minWidth }: InputProps) => minWidth || "100%"};
  font-size: medium;
  font-weight: 600;
  border-radius: ${({ borderRadius }: InputProps) => borderRadius || "0"};
  border: ${({ border }: InputProps) => border || "none"};
  background: ${({ background }: InputProps) => background || ""};
`

export const Form = styled.form``