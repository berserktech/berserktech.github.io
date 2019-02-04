import React from 'react'
import { render } from 'react-dom'
import Site from '../components/Site'
import members from '../assets/members'

render(
  <Site members={members.sort(() => (Math.random() > 0.5 ? -1 : 1))} />,
  document.body
)
