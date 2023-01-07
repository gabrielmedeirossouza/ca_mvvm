export class Observer<Event extends string> {
  public event: Event;
  public callback: (...args: any[]) => void;

  constructor(event: Event, callback: (...args: any[]) => void) {
    this.event = event;
    this.callback = callback;
  }
}
