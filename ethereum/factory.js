import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe2c8B400fc5789BF94162390a687510c9E44bfAf'
);

export default instance;