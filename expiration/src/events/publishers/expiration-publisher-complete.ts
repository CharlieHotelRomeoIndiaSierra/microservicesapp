import { Subjects, Publisher, ExpirationCompleteEvent } from '@buytickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}