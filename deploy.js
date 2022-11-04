const ethers = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
  const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8")
  let wallet = new ethers.Wallet.fromEncryptedJsonSync(
    encryptedJson,
    process.env.PRIVATE_KEY_PASSWORD
  )
  wallet = await wallet.connect(provider)
  const abi = fs.readFileSync("./MyContract_sol_MyContract.abi", "utf8")
  const binary = fs.readFileSync("./MyContract_sol_MyContract.bin", "utf8")

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
  console.log("Start deploying")
  const contract = await contractFactory.deploy()
  await contract.deployTransaction.wait(1)

  const helloWorld = await contract.helloWorld()
  console.log(helloWorld)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
