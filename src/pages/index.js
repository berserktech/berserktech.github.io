import React from 'react'
import { withRouteData } from 'react-static'
import MemberList from '../components/MemberList'

export default withRouteData(({ members }) => (
  <div>
    <MemberList members={members} />
  </div>
))
