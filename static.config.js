import fs from 'fs'
import React from 'react'
import * as gh from './src/api/github'
import metadata from './metadata.json'

export default {
  siteRoot: 'https://berserk.tech',
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
   <Html lang="en-US">
     <Head>
       <meta name="google-site-verification" content="DLMRv1KPFVlBTV7_qPP7fbU8UiLI2grIFVjqlou5tII" />
       <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
       <meta name="theme-color" content="#FFFFFF" />
       <link rel="manifest" href="/manifest.json" />
       <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57.png" />
       <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114.png" />
       <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72.png" />
       <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144.png" />
       <link rel="apple-touch-icon-precomposed" sizes="60x60" href="apple-touch-icon-60x60.png" />
       <link rel="apple-touch-icon-precomposed" sizes="120x120" href="apple-touch-icon-120x120.png" />
       <link rel="apple-touch-icon-precomposed" sizes="76x76" href="apple-touch-icon-76x76.png" />
       <link rel="apple-touch-icon-precomposed" sizes="152x152" href="apple-touch-icon-152x152.png" />
       <link rel="icon" type="image/png" href="favicon-196x196.png" sizes="196x196" />
       <link rel="icon" type="image/png" href="favicon-96x96.png" sizes="96x96" />
       <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
       <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
       <link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128" />
       <meta name="application-name" content="&nbsp;"/>
       <meta name="msapplication-TileColor" content="#FFFFFF" />
       <meta name="msapplication-TileImage" content="mstile-144x144.png" />
       <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
       <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
       <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
       <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
       <title>BerserkTech</title>
   		 <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
       <meta charSet="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
     </Head>
     <Body>
       {children}
     </Body>
   </Html>
 ),
 getRoutes: () => [
   {
     path: '/',
     getData: async () => {
       let members = []
       try {
         members = await gh.getMembersFull('berserktech')
       } catch (e) {
         console.info(
           'Failed to get the members, using the cached response',
           e.message
         )
         members = require('./fixtures/members.json')
       }

       // Updating the fixtures on production build
       if (process.env.REACT_STATIC_ENV === 'production') {
         fs.writeFileSync('./fixtures/members.json', JSON.stringify(members))
       }

       return {
         members: members.map(github => ({
           github,
           metadata: metadata.find(x => x.github === github.login),
         }))
       }
     }
   }
 ]
}
