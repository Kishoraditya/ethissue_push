import { EVMNetwork } from './pages/Background/types/network';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  enablePasswordEncryption: false,
  showTransactionConfirmationScreen: true,
  factory_address: '0x31887f6C4b2C94C11638C20f4B41B4a753752c52',
  stateVersion: '0.1',
  network: {
    chainID: '11155111',
    family: 'EVM',
    name: 'Sepolia',
    provider: 'https://sepolia.infura.io/v3/9f9cafc2197a4937a095fdac3dfde7cb',
    entryPointAddress: '0x63aB6E7662EF3e094F7CA05f982b971e420E8eF7',
    bundler: 'https://api.stackup.sh/v1/node/ff8814778ca4bfccc2fc8e8276e0182e396027408fb7e1a519c890cbf72febde',
    baseAsset: {
      symbol: 'ETH',
      name: 'ETH',
      decimals: 18,
      image:
        'https://ethereum.org/static/6b935ac0e6194247347855dc3d328e83/6ed5f/eth-diamond-black.webp',
    },
  } satisfies EVMNetwork,
};
