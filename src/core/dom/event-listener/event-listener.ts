import { Log } from "@helpers/log";

export type EventType = keyof WindowEventMap

export class EventListener {
  private _listeners: Array<{event: EventType, callback: (event: any) => void}> = [];

  public AddEventListener<K extends EventType>(type: K, listener: (ev: WindowEventMap[K]) => any) {
    this._listeners.push({ event: type, callback: listener });
    window.addEventListener(type, listener);
  }

  public RemoveEventListener(event: EventType) {
    const listener = this._listeners.find(listener => listener.event === event);

    if (listener) {
      window.removeEventListener(event, listener.callback);

      return;
    }

    const log = new Log("warn", "event-listener", `No listener found for event: ${event}`);
    log.Dispatch();
  }
}
