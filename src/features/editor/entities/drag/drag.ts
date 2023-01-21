export class Drag {
  private _isDragging = false;

  public get isDragging() {
    return this._isDragging;
  }

  public SetDragging(isDragging: boolean) {
    this._isDragging = isDragging;
  }
}
