import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() servercreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output() blueprintcreated = new EventEmitter<{serverName: string, serverContent: string}>();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChange():void{
    console.log("Cockpit Property Changed OnChange()");
  }

  newServerName = '';
  newServerContent = '';
  onAddServer() {
    this.servercreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintcreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
}
