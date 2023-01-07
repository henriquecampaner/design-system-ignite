import { ComponentProps } from 'react'
import { MultiStepContainer, Label, Steps, Step } from './styles'

interface MultiStepProps extends ComponentProps<typeof MultiStepContainer> {
  size: number
  currentStep?: number
}

const MultiStep = ({ size, currentStep = 1 }: MultiStepProps) => {
  return (
    <MultiStepContainer>
      <Label>
        Step {currentStep} of {size}
      </Label>

      <Steps
        css={{
          '--steps-size': size,
        }}
      >
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => (
          <Step key={step} active={currentStep >= step} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}

export { MultiStep }
export type { MultiStepProps }

MultiStep.displayName = 'MultiStep'
