import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({ namespace: '/alert' })
export class AlertGateway implements OnGatewayInit {
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger('ChatGateway');

  afterInit(/*server: any*/): void {
    this.logger.log('Initialized!');
  }

  @SubscribeMessage('chatToServer')
  sendToAll(msg: string) {
    this.wss.emit('alertToClient', { type: 'Alert', message: msg });
  }
}
