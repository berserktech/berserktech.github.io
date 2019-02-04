import * as gh from './github'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Site from './components/Site'
import fs from 'fs'
import metadata from '../assets/metadata'
import { renderTemplateFile } from 'template-file'

export default async function getAllMembers(list) {
  // Getting all of our members, sorted by followers
  let members = await gh.getMembersFull('berserktech')
  // // To test:
  // let members = require('../fixtures/members.json')
  // console.log(JSON.stringify(members))
  // console.log({ members })
  let getIndex = ({ login }) => metadata.findIndex(x => x.github === login)
  members = members.sort((a, b) => (Math.random() > 0.5 ? -1 : 1))
  members = members.map(github => ({
    github,
    metadata: metadata.find(x => x.github === github.login),
  }))

  // Rendering the output
  let content = ReactDOMServer.renderToString(<Site members={members} />)

  // Adding the output to our index.html,
  fs.writeFileSync(
    'index.html',
    await renderTemplateFile('src/layout.html', { content })
  )
}
