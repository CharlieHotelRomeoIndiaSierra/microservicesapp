import { Subjects, Publisher, PaymentCreatedEvent } from '@buytickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}