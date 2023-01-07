import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

export { Box }
export type { BoxProps }

Box.displayName = 'Box'
