import React from 'react'
import Member from './Member'

const MemberList = ({ members }) => (
  <div className="members">
    {members.map(data => (
      <Member data={data} key={data.github.login} />
    ))}
  </div>
)

export default MemberList
