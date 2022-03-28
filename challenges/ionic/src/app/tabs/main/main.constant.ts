import { environment } from '../../../environments/environment';

export const apiGetAllAuctions = (page = 1) =>
  //`${environment.api}v2/auction/buyer/?filter={isLive:true}&count=true`;
  `${environment.api}/${environment.apiVersion}/auction/salesman/buyer-challenge%40caronsale.de/purchases?filter=%7BisLive%3Afalse%7D`;
