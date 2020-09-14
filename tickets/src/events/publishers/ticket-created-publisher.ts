import { Publisher, Subjects, TicketCreatedEvent } from '@buytickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}