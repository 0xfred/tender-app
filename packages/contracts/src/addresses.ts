export type ProtocolAddresses = {
  faucet: string;
  token: string;
  tenderizer: string;
  tenderToken: string;
  tenderSwap: string;
  lpToken: string;
  tenderFarm: string;
};

export const addresses: Record<string, ProtocolAddresses> = {
  livepeer: {
    faucet: "0xD21B8eF6F50eB3468E8bc4Bf8875D6bF2106f68e",
    token: "0xf26B5f9CAd0111450Bc3E98c66A144eE49C0a85E",
    tenderizer: "0x818AcBFA2BCD0f97d462c62724cE74D0949Be002",
    tenderToken: "0x11a9c6e3C6259ab81F2c80BC665134C6fCc341c6",
    tenderSwap: "0xFf666DA93FA2d23A8f108C7e26E3102Dc0E2876C",
    lpToken: "0x28dA592CC5e6f5f69B2e9652d0b6998D4376297E",
    tenderFarm: "0x45627ea9e44195e310c9016658dce665bfa4c577",
  },
  graph: {
    faucet: "0x3f25C4669d08516CDeB183C4e02726eBF81a1A17",
    token: "0x53466090C5bfba99B147aB0c43E212e6E8a3Fb90",
    tenderizer: "0xd76D6107AdD240e619aCfE7503f6F93413E072E7",
    tenderToken: "0xBc2EB1EEa4221F8Ce242C0A46E0B16944cd7788F",
    tenderSwap: "0xCb8979852ef7Ae339BFDBD08D26cE8396f3c5Dc4",
    lpToken: "0x8CfA4082dB29D2Af5acFeDA395f31e7ebBfc93e3",
    tenderFarm: "0x97338956D9C0eC11205Bf02A7Ed9e66F20E3daEd",
  },
  matic: {
    faucet: "0xC9563Ba7a194D8C132Fec90F3723bA62BCcDc29c",
    token: "0xb7e2860E2217b688eD476cCbD54B0fEbdB07ff5f",
    tenderizer: "0xbC5E73D2beBC02807b502F3997416Feb7f410c43",
    tenderToken: "0x6371Cd90Be577Bd5DF33a353272f180041679893",
    tenderSwap: "0xCa5fe3d3E5B2a70E94555B9f77C6Ac0Ba37dE12B",
    lpToken: "0xDb5118b1f1B57d964Dd87aBeCcD4ae6108a0252E",
    tenderFarm: "0xadBa05060D7Fc92d92A0903CFAE55ad90DCF3a6e",
  },
  audius: {
    faucet: "0x51feC8FD527AaA9A18aCB7d8Bc32bF5483938549",
    token: "0x17c9de691e8CA85Fde2481E404bfe90ca29B3156",
    tenderizer: "0x6e01AFcCdE83F235855cf7b9DB48144F0c00B043",
    tenderToken: "0xAe88e2893E10699FdA8a619939709999A71b45Ab",
    tenderSwap: "0x8dA383a947A062fd242c813a0dCc800139db481C",
    lpToken: "0xa46594B081C0D3f4B66B74a9B6C06F01d9851c0D",
    tenderFarm: "0xD35AE3ABdC7ec0207C02b8c80cf5eecF0D883ad8",
  },
};