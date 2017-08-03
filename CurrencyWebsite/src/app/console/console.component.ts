import { Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { CommandService } from '../services/command.service';

@Component({
  selector: 'myst-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  private inputPrefix: string = '> ';
  private cmdInput: string = this.inputPrefix;

  constructor(private cmdService: CommandService) { }

  @ViewChild("inputElement") myCtrl: ElementRef;
  ngOnInit() {
    this.giveCmdInputFocus();
  }

  runCommand(rawInput: string) {
    this.resetCmdInput();
  }

  resetCmdInput() {
    this.cmdInput = this.inputPrefix;
  }

  ensureCmdInputPrefix() {
    if (this.cmdInput.length < this.inputPrefix.length) {
      this.resetCmdInput();
    }
  }

  canBackspace() : boolean {
    return this.cmdInput.length > this.inputPrefix.length;
  }

  giveCmdInputFocus() {
    this.myCtrl.nativeElement.focus();
  }

  onKeydown(event: KeyboardEvent, inputElement) {
    let key = event.key;
    switch(key) {
      case 'Enter':
        this.runCommand(this.cmdInput);
        break;
      case 'Escape':
        this.resetCmdInput();
        break;
      case 'Backspace':
        if (!this.canBackspace()) {
          event.preventDefault();
        }
      case 'ArrowLeft':
        if (inputElement.selectionStart <= this.inputPrefix.length) {
          event.preventDefault();
        }
    }
  }

  onInputMouseDown(event: MouseEvent) {
    this.giveCmdInputFocus();
    event.preventDefault();
  }

}
