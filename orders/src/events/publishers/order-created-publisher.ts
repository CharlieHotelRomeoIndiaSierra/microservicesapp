import { Publisher, OrderCreatedEvent, Subjects } from '@buytickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}