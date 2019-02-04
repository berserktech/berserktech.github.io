import React from 'react'
import Member from './Member'

const MemberList = ({ members }) => (
  <div className="members">
    {members.map((data, i) => (
      <Member data={data} key={i} />
    ))}
  </div>
)

export default MemberList
