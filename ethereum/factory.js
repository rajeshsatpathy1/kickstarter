import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xb1d000dE5e4CF49A05851b55bf14b8643D042844'
);

export default instance;