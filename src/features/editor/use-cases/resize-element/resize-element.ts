import { Element } from '../../entities/element';
import { Resize } from '../../entities/resize';

export class ResizeElement {
  private _resize: Resize;
  private _element: Element;

  constructor(element: Element, resize: Resize) {
    this._element = element;
    this._resize = resize;
  }

  public StartResizing(): void {
    this._resize.StartResizing();
  }

  public StopResizing(): void {
    this._resize.ClearResizing();
  }

  public ResizeTo(width: number, height: number): void {
    this.ResizeToWidth(width);
    this.ResizeToHeight(height);
  }

  public ResizeToWidth(width: number): void {
    if (width < this._element.shape.width) {
      this._resize.SetResizing('left');
    }

    if (width > this._element.shape.width) {
      this._resize.SetResizing('right');
    }

    this._element.shape.width = width;
  }

  public ResizeToHeight(height: number): void {
    if (height < this._element.shape.height) {
      this._resize.SetResizing('top');
    }

    if (height > this._element.shape.height) {
      this._resize.SetResizing('bottom');
    }

    this._element.shape.height = height;
  }

  public ResizeBy(width: number, height: number): void {
    this.ResizeByWidth(width);
    this.ResizeByHeight(height);
  }

  public ResizeByWidth(width: number): void {
    if (width < 0) {
      this._resize.SetResizing('left');
    }

    if (width > 0) {
      this._resize.SetResizing('right');
    }

    this._element.shape.width += width;
  }

  public ResizeByHeight(height: number): void {
    if (height < 0) {
      this._resize.SetResizing('top');
    }

    if (height > 0) {
      this._resize.SetResizing('bottom');
    }

    this._element.shape.height += height;
  }
}
