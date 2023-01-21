import { Element } from '@/features/editor/entities/element';

export class ControllerViewState {
  private _element: Element;

  constructor(element: Element) {
    this._element = element;
  }

  public get element(): Element {
    return this._element;
  }
}
