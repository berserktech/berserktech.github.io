import React from 'react'

const colors = {
  spades: 'black',
  clubs: 'black',
  hearts: 'red',
  diamonds: 'red',
}

const types = {
  spades: '♠',
  clubs: '♣',
  hearts: '♥',
  diamonds: '♦',
}

const Member = ({ data: { github, metadata } }) => (
  <button className={`member color-${colors[metadata.card.type]}`}>
    <div className="type">
      <div>{metadata.card.value}</div>
      <div>{types[metadata.card.type]}</div>
    </div>
    <div className="avatar">
      <img src={github.avatar_url} />
    </div>
    <div className="memberBody">
      <h2>
        <a target="_blank" href={github.url}>
          {github.login}
        </a>
      </h2>
      <p className="bio">{github.bio}</p>
      <p>
        Since {metadata.since}
        <br />
        Currently {metadata.location}
        <br />
        {metadata.travelReady && (
          <span>
            Travel Ready!
            <br />
          </span>
        )}
      </p>
      <div className="industries">
        <b>INDUSTRIES:&nbsp;</b>
        {metadata.industries.map((tag, i) => (
          <div key={i}>
            {tag}
            <span>{i < metadata.industries.length - 1 ? ',' : ''}&nbsp;</span>
          </div>
        ))}
      </div>
      <div className="tags">
        <b>TAGS:&nbsp;</b>
        {metadata.tags.map((tag, i) => (
          <div key={i}>
            {tag}
            <span>{i < metadata.tags.length - 2 ? ',' : ''}&nbsp;</span>
          </div>
        ))}
      </div>
      <div className="links">
        <b>LINKS:&nbsp;</b>
        {metadata.links.map(({ link, text }, i) => (
          <span key={i}>
            <a target="_blank" href={link} alt={text}>
              {text}
            </a>
            <span>{i < metadata.links.length - 1 ? ',' : ''}&nbsp;</span>
          </span>
        ))}
      </div>
    </div>
    <div className="type-inverted">
      <div className="type">
        <div>{metadata.card.value}</div>
        <div>{types[metadata.card.type]}</div>
      </div>
    </div>
  </button>
)

export default Member
