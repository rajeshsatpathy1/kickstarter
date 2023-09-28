import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6a9e0AAa3Bb67973108D7CbAb24Ad6320D8E8d03'
);

export default instance;