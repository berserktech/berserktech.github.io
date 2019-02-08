import Octokit from '@octokit/rest'

let params = {}
if (process.env.TOKEN) params.auth = `token ${process.env.TOKEN}`
const client = new Octokit(params)

export const getMember = async username =>
  (await client.users.getByUsername({ username })).data

export const getMembers = async org =>
  client.paginate('GET /orgs/:org/members', { org })

export const getMembersFull = async org => {
  const members = await getMembers(org)
  return Promise.all(
    members.map(member => getMember(member.login).catch(() => {}))
  )
}
