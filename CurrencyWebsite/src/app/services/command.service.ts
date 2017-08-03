import { Injectable } from '@angular/core';

@Injectable()
export class CommandService {

  constructor() { }

  stripCmdPrefix(rawInput: string): string {
    return rawInput.substr(2);
  }

}
