import { Observer } from "../observer";

export class Observable<Event extends string> {
  private _observers: Observer<Event>[] = [];

  public Subscribe(observer: Observer<Event>): void {
    this._observers.push(observer);
  }

  public Unsubscribe(observer: Observer<Event>): void {
    const newObservers = this._observers.filter((o) => o !== observer);
    this._observers = newObservers;
  }

  public Notify(event: Event, ...args: any[]): void {
    this._observers.forEach((observer) => {
      if (observer.event === event) {
        observer.callback(...args);
      }
    });
  }
}
