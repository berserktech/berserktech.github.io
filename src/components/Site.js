import React from 'react'
import MemberList from './MemberList'
import ContactUs from './ContactUs'

const Site = ({ members }) => (
  <div className="pageContainer">
    <header>
      <div>
        <h1>BerserkTech</h1>
        <span>Software Developers Crew</span>
      </div>
    </header>
    <MemberList members={members} />
    <ContactUs />
  </div>
)

export default Site
