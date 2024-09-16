import Dev from "../dev/dev";
import Rental from "../rental/rental";
import axios from 'axios';

export default class RentHub {
    private apiKey: string;
    public rental: Rental;
    public dev: Dev;
  
    constructor(apiKey: string) {
      this.apiKey = apiKey;
      this.verifyKey(this.apiKey);
      this.rental = new Rental(this.apiKey);
      this.dev = new Dev(this.apiKey);
    }


    public async verifyKey(apiKey: string): Promise<any> {
        var config = {
          method: 'post',
          url: 'http://15.206.72.164/sdk/apiKey/check',
          headers: { 
            'api-key': apiKey, 
          },
        };

        axios(config)
        .then(function (response) {
          if(response.status !== 201){
            throw new Error(`API Key is not valid`);
          }
        })
        .catch(function (error) {
          throw new Error(`Can't reacch the server`);
        });

    }
}
  