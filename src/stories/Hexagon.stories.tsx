import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Hexagon from '../components/UserDetails/Badges/Hexagon'

export default {
  title: 'Atoms/HexagonContainer',
  component: Hexagon,
} as ComponentMeta<typeof Hexagon>

export const AllColors = () => (
  <>
    <Hexagon color="green-dark" size="4">
      Green Dark
    </Hexagon>
    <Hexagon color="teal" size="4">
      Teal
    </Hexagon>
    <Hexagon color="green" size="4">
      Green
    </Hexagon>
    <Hexagon color="yellow" size="4">
      Yellow
    </Hexagon>
    <Hexagon color="orange" size="4">
      Orange
    </Hexagon>
    <Hexagon color="red" size="4">
      Red
    </Hexagon>
    <Hexagon color="pink" size="4">
      Pink
    </Hexagon>
    <Hexagon color="purple" size="4">
      Purple
    </Hexagon>
    <Hexagon color="blue-dark" size="4">
      Blue Dark
    </Hexagon>
    <Hexagon color="blue" size="4">
      Blue
    </Hexagon>
    <Hexagon color="silver" size="4">
      Silver
    </Hexagon>
    <Hexagon color="gold" size="4">
      Gold
    </Hexagon>
  </>
)

export const Sizes1to8 = () => (
  <>
    <Hexagon color="green-dark" size="1">
      1
    </Hexagon>
    <Hexagon color="teal" size="2">
      2
    </Hexagon>
    <Hexagon color="green" size="3">
      3
    </Hexagon>
    <Hexagon color="yellow" size="4">
      4
    </Hexagon>
    <Hexagon color="orange" size="5">
      5
    </Hexagon>
    <Hexagon color="red" size="6">
      6
    </Hexagon>
    <Hexagon color="pink" size="7">
      7
    </Hexagon>
    <Hexagon color="purple" size="8">
      8
    </Hexagon>
  </>
)
