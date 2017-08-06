import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class CommandService {

  constructor() { }

  runCommand(rawInput: string): string {
    let cmdInput = rawInput;
    return cmdInput;
  }
}
