import { Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { CommandService } from '../services/command.service';

@Component({
  selector: 'myst-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  private _inputPrefix: string = '> ';
  private _rawInput: string = '';
  private _displayLines: string[] = [];

  constructor(private _cmdService: CommandService) { }

  @ViewChild("inputElement") myCtrl: ElementRef;
  ngOnInit() {
    this.giveCmdInputFocus();
  }

  sendCommand(rawInput: string = this._rawInput): void {
    let output: string = this._cmdService.runCommand(this._rawInput);
    this.appendToDisplay(output);
    this.resetCmdInput();
  }

  resetCmdInput(): void {
    this._rawInput = '';
  }

  giveCmdInputFocus(): void {
    this.myCtrl.nativeElement.focus();
  }

  displayString(): string {
    return this._displayLines.join('\n');
  }

  appendToDisplay(line: string): void {
    this._displayLines.push(line);
  }

  onKeydown(event: KeyboardEvent, inputElement): void {
    let key = event.key;
    switch(key) {
      case 'Enter':
        this.sendCommand();
        break;
      case 'Escape':
        this.resetCmdInput();
        break;
    }
  }
}
