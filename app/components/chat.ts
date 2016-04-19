import {Component, Input, OnInit} from 'angular2/core';
import {FirebaseEventPipe}        from './../pipes/pipes.firebaseevent';
import {FirebaseService}          from './../services/services.firebase';
import {Config}                   from './../config/config.acro';
import {IChat, ChatModel}         from './../models/models.chat';

@Component({
  selector: 'chat',
  pipes: [FirebaseEventPipe],
  inputs: ['id'],
  templateUrl: 'app/templates/templates.chat.html'
})

export class Chat implements OnInit {
  
  @Input() id;
  
  $chatRef: any;
  chatUrl: string;
  firebase: any;
  
  constructor(private config: Config, firebase: FirebaseService) {
    var fbUrl = config.get('firebaseUrl');
    this.chatUrl = `${fbUrl}/chats/`;
    this.firebase = firebase;
  }
  
  ngOnInit() {
    this.$chatRef = this.firebase.getRef(`/chats/${this.id}`);
  }
  
  private addMessage(msg: string) {
    var $newMsg = this.$chatRef.push();
    $newMsg.setWithPriority(new ChatModel('me', msg), (0 - Date.now())) // sort desc
  }
  
  saySomething($event: any, msg: any) {
    // If they pressed Enter....
    if ($event.keyCode === 13 && msg.value) {
      this.addMessage(msg.value);
      msg.value = '';
    }
  }
}