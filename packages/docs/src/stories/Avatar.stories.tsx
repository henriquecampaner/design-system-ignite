import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@hcignite/react'

export default {
  title: 'Surfaces/Avatar',
  component: Avatar,
  args: {
    src: 'https://source.unsplash.com/random/400x400',
    alt: 'Random image',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
