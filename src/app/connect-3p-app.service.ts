import { Injectable } from '@angular/core';
import { AmazonConnectApp, AppCreateHandler } from "@amazon-connect/app";
import { AgentClient, AgentStateChanged } from "@amazon-connect/contact";

@Injectable({
  providedIn: 'root'
})
export class Connect3pAppService {

  provider: AmazonConnectApp
  agentClient: any
  constructor() {
    console.log('Initialiing...');
    const { provider } = AmazonConnectApp.init({
      onCreate: this.onCreate,
      onDestroy: this.onDestroy
    });
    this.provider = provider
   }


   onCreate(event: any): Promise<void> {
      return new Promise((resolve) => {
        const { appInstanceId } = event.context;
        console.log('App initialized: ', appInstanceId);
        this.agentClient = new AgentClient(this.provider);
        resolve();
     })
   }

   onDestroy(event: any): Promise<void> {
      return new Promise((resolve) => {
        const { appInstanceId } = event.context;
        console.log('App initialized: ', appInstanceId);
        resolve();
     })
   }

   subscribeToAgentContactEvents(){
    (this.agentClient as AgentClient).onStateChanged(async (data: AgentStateChanged) => {
          console.log("Agent state change occurred! ", data);
          (this.agentClient as AgentClient).getState().then((state) => {
              console.log(
               'new agent state: ', state
              )
          })
    });
   }
    
}
