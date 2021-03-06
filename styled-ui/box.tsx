import React from "react"
import {
  grid,
  background,
  color,
  border,
  flexbox,
  layout,
  position,
  space,
  typography,
  shadow,
  overflow,
  compose,
  GridProps,
  ColorProps,
  SpaceProps,
  LayoutProps,
  ShadowProps,
  FlexboxProps,
  BordersProps,
  OverflowProps,
  PositionProps,
  TypographyProps,
  BackgroundProps,
} from "styled-system"
import styled, { css } from "styled-components"
import { ifProp, prop } from "styled-tools"

interface RestProps {
  [prop: string]: object | boolean | null | string | number | undefined
}

export type BoxProps = GridProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  ShadowProps &
  FlexboxProps &
  BordersProps &
  OverflowProps &
  PositionProps &
  TypographyProps &
  BackgroundProps &
  RestProps & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>
    children?: React.ReactNode
    cursor?: string
    userSelect?: string
    wordBreak?: string
  }

export const Box = styled.div<BoxProps>`
  ${ifProp(
    "overflowY",
    css`
      overflow-y: ${prop("overflowY")};
    `,
  )}

  ${compose(
    grid,
    color,
    space,
    layout,
    border,
    shadow,
    flexbox,
    overflow,
    position,
    typography,
    background,
  )}
`
Box.defaultProps = {
  cursor: "default",
}

Box.displayName = "Box"
