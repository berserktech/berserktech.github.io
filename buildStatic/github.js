import Octokit from '@octokit/rest'
const client = new Octokit()

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
