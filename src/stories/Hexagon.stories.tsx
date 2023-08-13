import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Hexagon, {
  hexagonBackground,
} from '../components/UserDetails/Badges/Hexagon'

export default {
  title: 'Atoms/HexagonContainer',
  component: Hexagon,
} as Meta<typeof Hexagon>

const Template: StoryFn<typeof Hexagon> = (args) => <Hexagon {...args} />

export const AllColors = () => (
  <div className="flex flex-wrap justify-between">
    <Hexagon color={hexagonBackground.greenDark} size={4}>
      Green Dark
    </Hexagon>
    <Hexagon color={hexagonBackground.teal} size={4}>
      Teal
    </Hexagon>
    <Hexagon color={hexagonBackground.green} size={4}>
      Green
    </Hexagon>
    <Hexagon color={hexagonBackground.yellow} size={4}>
      Yellow
    </Hexagon>
    <Hexagon color={hexagonBackground.orange} size={4}>
      Orange
    </Hexagon>
    <Hexagon color={hexagonBackground.red} size={4}>
      Red
    </Hexagon>
    <Hexagon color={hexagonBackground.pink} size={4}>
      Pink
    </Hexagon>
    <Hexagon color={hexagonBackground.purple} size={4}>
      Purple
    </Hexagon>
    <Hexagon color={hexagonBackground.blueDark} size={4}>
      Blue Dark
    </Hexagon>
    <Hexagon color={hexagonBackground.blue} size={4}>
      Blue
    </Hexagon>
    <Hexagon color={hexagonBackground.silver} size={4}>
      Silver
    </Hexagon>
    <Hexagon color={hexagonBackground.gold} size={4}>
      Gold
    </Hexagon>
  </div>
)

export const Sizes1to8 = () => (
  <>
    <Hexagon color={hexagonBackground.greenDark} size={1}>
      1
    </Hexagon>
    <Hexagon color={hexagonBackground.teal} size={2}>
      2
    </Hexagon>
    <Hexagon color={hexagonBackground.green} size={3}>
      3
    </Hexagon>
    <Hexagon color={hexagonBackground.yellow} size={4}>
      4
    </Hexagon>
    <Hexagon color={hexagonBackground.orange} size={5}>
      5
    </Hexagon>
    <Hexagon color={hexagonBackground.red} size={6}>
      6
    </Hexagon>
    <Hexagon color={hexagonBackground.pink} size={7}>
      7
    </Hexagon>
    <Hexagon color={hexagonBackground.purple} size={8}>
      8
    </Hexagon>
  </>
)

export const Basic = Template.bind({})
Basic.args = {
  color: hexagonBackground.red,
  size: 4,
}
