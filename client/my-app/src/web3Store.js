import { create } from 'ipfs-core'

let ipfs;

const cat = async (cid) => {
  const content = []

  for await (const chunk of ipfs.cat(cid)) {
    content.push(chunk)
  }

  return content
}

export const store = async (name, content) => {
  if (!ipfs) {
    console.log('Creating IPFS node...')

    ipfs = await create({
      repo: String(Math.random() + Date.now()),
      init: { alogorithm: 'ed25519' }
    })
  }

  const id = await ipfs.id()
  console.log(`Connecting to ${id.id}...`)

  const fileToAdd = {
    path: `${name}`,
    content: content
  }

  console.log(`Adding file ${fileToAdd.path}...`)
  const file = await ipfs.add(fileToAdd)

  console.log(`Added to ${file.cid}`)

  console.log('Reading file...')

  const text = await cat(file.cid)

  console.log(`\u2514\u2500 ${file.path} ${text.toString()}`)
  console.log(`Preview: https://ipfs.io/ipfs/${file.cid}`)
}
