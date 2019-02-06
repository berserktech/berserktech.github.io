import React, { Component } from 'react'

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

const mapSentence = f => x =>
  x.reduce(
    (acc, e, i) => [
      ...acc,
      i === x.length - 1 ? (
        <span key={`${i}-span`}>&nbsp;&&nbsp;</span>
      ) : (
        <span key={`${i}-span`}>,&nbsp;</span>
      ),
      f(e, i),
    ],
    []
  )

export default class Member extends Component {
  state = {
    focused: false,
  }
  render() {
    let {
      data: { github, metadata },
    } = this.props

    if (!metadata) throw new Error(`Missing metadata for ${github.login}`)

    return (
      <button
        className={`member color-${colors[metadata.card.type]} ${
          this.state.focused ? 'focus' : ''
        }`}
        onClick={() => {
          let members = window.document.querySelectorAll('.member')
          Array.prototype.map.call(members, element => {
            element.className = this.state.focused
              ? element.className.replace(/hidden/g, '')
              : `${element.className} hidden`
          })
          this.setState({ focused: !this.state.focused })
        }}
      >
        <div className="type">
          <div>{metadata.card.value}</div>
          <div>{types[metadata.card.type]}</div>
        </div>
        <div className="avatar">
          <img src={github.avatar_url} />
        </div>
        <div className="memberBody">
          <h2>
            <a target="_blank" href={github.html_url}>
              {github.login}
              <div className="name"> is {github.name}</div>
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
            {mapSentence((industry, i) => <div key={i}>{industry}</div>)(
              metadata.industries
            )}
          </div>
          <div className="tags">
            <b>TAGS:&nbsp;</b>
            {mapSentence((tag, i) => <div key={i}>{tag}</div>)(metadata.tags)}
          </div>
          <div className="links">
            <b>LINKS:&nbsp;</b>
            {mapSentence(({ link, text }, i) => (
              <a target="_blank" href={link} alt={text} key={i}>
                {text}
              </a>
            ))(metadata.links)}
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
  }
}
