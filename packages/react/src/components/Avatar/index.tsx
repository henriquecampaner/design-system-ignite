import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'

interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

export { Avatar }
export type { AvatarProps }

Avatar.displayName = 'Avatar'
