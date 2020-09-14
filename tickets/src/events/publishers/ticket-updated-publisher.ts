import { Publisher, Subjects, TicketUpdatedEvent } from '@buytickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}