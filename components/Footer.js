import React from 'react'

const Footer = () => (
  <div className="footer">
    <a target="_blank" href="https://github.com/berserktech">
      github.com/berserktech
    </a>
    <a target="_blank" href="https://twitter.com/BerserkTech">
      twitter.com/BerserkTech
    </a>
    <a target="_blank" href="https://medium.com/berserktech">
      medium.com/BerserkTech
    </a>
    <a target="_blank" href="https://www.facebook.com/BerserkTech">
      facebook.com/BerserkTech
    </a>
    <a
      target="_blank"
      href="https://medium.com/berserktech/manifesto-b9eda0fda1a7"
      style={{
        flexBasis: '100%',
        textAlign: 'center',
        color: 'white',
        marginTop: '30px',
      }}
    >
      <b>Read our Manifesto</b>
    </a>
  </div>
)

export default Footer
