import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  getServerStatus = false;
  ServerCreationStatus = 'no server was created'
  serverName = 'TestServer'
  serverCreated = false
  servers = ['Testserver', 'TestServer 2']


  constructor() { 
      
    setTimeout( () =>{
      this.getServerStatus = true;
    }, 2000)

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.ServerCreationStatus = 'server is created Name is '+ this.serverName
  }

  onUpdateServerName(event: Event){
    
    this.serverName = (<HTMLInputElement>event.target).value

  }

}
