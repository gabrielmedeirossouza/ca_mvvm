import { EventListener } from '@presenters/dom/event-listener';
import { Observable } from '@entities/observable';
import { Position } from '@entities/position';

type MouseEventType = "mousemove" | "mouseup" | "mousedown";

export type ObserverMap = {
  "on-mouse-move": (position: Position) => void;
  "on-mouse-up": (position: Position) => void;
  "on-mouse-down": (position: Position) => void;
}

export class MouseHandler {
  private _observable = new Observable<ObserverMap>();
  private _eventListener = new EventListener();

  constructor() {
    this._CreateEvent("mousemove", "on-mouse-move");
    this._CreateEvent("mouseup", "on-mouse-up");
    this._CreateEvent("mousedown", "on-mouse-down");
  }

  public get observable() {
    return this._observable;
  }

  public Dispose() {
    this._eventListener.RemoveEventListener("mousemove");
  }

  private _CreateEvent(eventType: MouseEventType, observerType: keyof ObserverMap) {
    const position = new Position(0, 0);

    this._eventListener.AddEventListener(eventType, (event: MouseEvent) => {
      position.x = event.clientX;
      position.y = event.clientY;

      this._observable.Notify(observerType, position);
    });
  }
}
