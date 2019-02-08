import Octokit from '@octokit/rest'

let params = {}
if (process.env.TOKEN) params.auth = `token ${process.env.TOKEN}`
const client = new Octokit(params)

export const getMember = async username =>
  (await client.users.getByUsername({ username })).data

export const getMembers = async org =>
  client.paginate('GET /orgs/:org/members', { org })

export const getMembersFull = async org => {
  let members = await getMembers('berserktech')
  let result = []
  for (let member of members) {
    result.push(await getMember(member.login))
  }
  return result
}
