import { Observable } from '@/core/entities/observable';

type ObservableMap = {
  'on-resize': (width: number, height: number) => void,
  'on-mouse-down': (x: number, y: number) => void,
  'on-mouse-up': (x: number, y: number) => void,
  'on-mouse-over': (x: number, y: number) => void,
}

type ObservableEventMap = keyof ObservableMap;

type ObservableCallbackMap = {
  [K in keyof ObservableMap]: ObservableMap[K]
}

export class ResizeViewModel {
  public isResizing = false;
  private _width = 0;
  private _height = 0;

  public get width(): number {
    return this._width;
  }

  public set width(value: number) {
    this._width = value;
  }

  public get height(): number {
    return this._height;
  }

  public set height(value: number) {
    this._height = value;
  }
}
