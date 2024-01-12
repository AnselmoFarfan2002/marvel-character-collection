import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class MarvelAuthService {
  private publicKey = 'edab1a6293b7b686d57e3a5ff9f9f038';
  private privateKey = '4f63440cce3c654c099cd989ba273acb6aa5abfd';

  getAuthParams(): { ts: number; apikey: string; hash: string } {
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString();

    // return {
    //   ts: ts,
    //   apikey: this.publicKey,
    //   hash: hash,
    // };

    return {
      ts: 1705022246378,
      apikey: 'edab1a6293b7b686d57e3a5ff9f9f038',
      hash: '0d6f1d89246a19b74d4ac714fad11ad4',
    };
  }
}
