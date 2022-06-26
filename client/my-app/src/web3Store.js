import { Web3Storage, getFilesFromPath } from 'web3.storage';
 
const token = process.env.API_TOKEN;
const client = new Web3Storage({ token });
let cid;

async function storeFiles () {
  const files = await getFilesFromPath('yayImAFile.txt');
  cid = await client.put(files);
  console.log(cid);
}

async function retrieveFiles () {
//   const cid =
//      'bafybeidd2gyhagleh47qeg77xqndy2qy3yzn4vkxmk775bg2t5lpuy7pcu'

  const res = await client.get(cid)
  const files = await res.files()

  for (const file of files) {
    console.log(`${file.cid}: ${file.name} (${file.size} bytes)`)
  }
}

let funcs = { storeFiles, retrieveFiles }
export default funcs;