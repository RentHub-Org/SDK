import * as FormData from 'form-data';
import axios from 'axios';
import { Readable } from 'stream';

export default class Dev {
    private apiKey: string;
  
    constructor(apiKey: string) {
      this.apiKey = apiKey;
    }
  
    public async pinFile(fileStream: Readable): Promise<any> {
      var data = new FormData();
      data.append('file', fileStream);

      var config = {
        method: 'post',
        url: 'https://be.renthub.cloud/sdk/dev',
        headers: { 
          'api-key': this.apiKey, 
          ...data.getHeaders()
        },
        data : data
      };
      
      return axios(config).then(res=>res.data)
      .catch(err => {
        console.error('Error fetching data:', err.message);
        throw new Error("Error while pinning the file.");
      });
    }
    
    public async pinJson(json: any): Promise<any> {
      if (typeof json !== 'object') {
        throw new Error("Invalid json object.");
      }
      var config = {
        method: 'post',
        url: 'https://be.renthub.cloud/sdk/dev/pinJson',
        headers: { 
          'api-key': this.apiKey, 
        },
        data : { json }
      };
      
      return axios(config).then(res=>res.data)
      .catch(err => {
        console.error('Error fetching data:', err.message);
        throw new Error("Error while pinning the file.");
      });
    }
    public async getJson(cid: string){
      var config = {
        method: 'get',
        url: 'https://be.renthub.cloud/sdk/dev/get/json/'+cid,
        headers: {
          'api-key': this.apiKey,
        }
      };
      return axios(config).then(res=>res.data);
    }
}