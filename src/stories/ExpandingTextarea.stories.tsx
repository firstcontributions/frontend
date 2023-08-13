import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import ExpandingTextarea from '../components/ExpandingTextarea'

export default {
  title: 'Atoms/ExpandingTextarea',
  component: ExpandingTextarea,
} as Meta<typeof ExpandingTextarea>

const Template: StoryFn<typeof ExpandingTextarea> = (args) => (
  <ExpandingTextarea {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  value: 'All your base are belong to us',
  setValue: () => undefined,
}
