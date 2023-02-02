import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ExpandingTextarea from '../components/ExpandingTextarea'

export default {
  title: 'Atoms/ExpandingTextarea',
  component: ExpandingTextarea,
} as ComponentMeta<typeof ExpandingTextarea>

const Template: ComponentStory<typeof ExpandingTextarea> = (args) => (
  <ExpandingTextarea {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  value: 'All your base are belong to us',
  setValue: () => undefined,
}
