/// <reference types="node" />

import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import { TicketCreatedListener } from './events/ticket-created-listener';

console.clear();

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222'
});

stan.on('connect', () => {
  console.log('Listener now connected to NATS');

  stan.on('close', () => {
    console.log('NATS connection closed!');
    process.exit();
  });

  new TicketCreatedListener(stan).listen();

  // const options = stan
  //   .subscriptionOptions()
  //   .setManualAckMode(true)
  //   .setDeliverAllAvailable()
  //   .setDurableName('accounting-service');
    

  // const subscription = stan.subscribe(
  //   'ticket:created',
  //   'orders-service-queue-group',
  //   options
  // );

  // subscription.on('message', (msg: Message) => {
  //   const data = msg.getData();

  //   if (typeof data === 'string') {
  //     console.log(
  //       `Received event #${msg.getSequence()}, with data: ${data}`
  //     );
  //   }
  //   msg.ack();
  // });
});

process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());