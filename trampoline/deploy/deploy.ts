import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import config from '../src/exconfig';
import fs from 'fs';

const { network } = config;

console.log(`Using mnemonic for network: ${network.name}`);

// Use the MNEMONIC_FILE environment variable as the path to the mnemonic file
const mnemonicFileName = process.env.MNEMONIC_FILE || '';

console.log(`Using mnemonic file at location: ${mnemonicFileName}`);

// Read the mnemonic from the file
const mnemonic = fs.existsSync(mnemonicFileName)
  ? fs.readFileSync(mnemonicFileName, 'utf8')
  : '';

console.log("Mnemonic:", mnemonic); // Log the mnemonic associated with the account

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getUnnamedAccounts } = hre;
  const accounts = await getUnnamedAccounts();
  console.log("Using account:", accounts[0]);
  console.log("Mnemonic:", mnemonic);

  await deployments.deploy('TwoOwnerAccountFactory', {
    from: accounts[0],
    deterministicDeployment: true,
    args: [config.network.entryPointAddress],
    log: true,
  });
};

export default func;
