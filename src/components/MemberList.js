import React from 'react'
import Member from './Member'

const MemberList = ({ members }) => (
  <section className="members">
    {members.map(data => (
      <Member data={data} key={data.github.login} />
    ))}
  </section>
)

export default MemberList
