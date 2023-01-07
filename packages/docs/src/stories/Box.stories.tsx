import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@hcignite/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>I am text</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}
