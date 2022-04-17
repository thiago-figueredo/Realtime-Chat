import styled from "styled-components"

interface IContainterRowProps {
  readonly justifyItems?: string
  readonly alignItems?: string
  readonly fontSize?: string
}

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: ${({ justifyItems }: IContainterRowProps) => justifyItems || "center" };
  align-items: ${({ alignItems }: IContainterRowProps) => alignItems || "center" };
  font-size: ${({ fontSize }: IContainterRowProps) => fontSize || "small" };
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: ${({ justifyItems }: IContainterRowProps) => justifyItems || "center" };
  align-items: ${({ alignItems }: IContainterRowProps) => alignItems || "center" };
  font-size: ${({ fontSize }: IContainterRowProps) => fontSize || "small" };
`