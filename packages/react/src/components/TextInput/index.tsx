import { ComponentProps } from 'react'
import { Prefix, TextInputContainer, Input } from './styles'

interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

const TextInput = ({ prefix, ...props }: TextInputProps) => (
  <TextInputContainer>
    {!!prefix && <Prefix>{prefix}</Prefix>}
    <Input {...props} />
  </TextInputContainer>
)

export { TextInput }
export type { TextInputProps }

TextInput.displayName = 'TextInput'
