import * as gh from './github'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Site from './components/Site'
import fs from 'fs'
import metadata from '../assets/metadata'
import { renderTemplateFile } from 'template-file'

export default async function getAllMembers(list) {
  // Getting all of our members, sorted by followers
  let members
  try {
    // members = await gh.getMembersFull('berserktech')
    throw new Error('TODO: remove this throw')
  } catch (e) {
    console.info(
      'Failed to get the members, using the cached response',
      e.message
    )
    members = require('../fixtures/members.json')
  }

  // Updating the cache
  fs.writeFileSync('fixtures/members.json', JSON.stringify(members))

  // Sorting the members randomly
  members = members.sort((a, b) => (Math.random() > 0.5 ? -1 : 1))

  // Adding the metadata
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
