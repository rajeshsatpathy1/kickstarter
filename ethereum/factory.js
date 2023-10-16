import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xf428E99F87e15A6342Ff192A54334452817417a3'
);

export default instance;