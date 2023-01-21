export type Direction = 'left' | 'right' | 'top' | 'bottom';

export class Resize {
  private _isResizing = false;
  private _isResizingLeft = false;
  private _isResizingRight = false;
  private _isResizingTop = false;
  private _isResizingBottom = false;

  public get isResizing(): boolean {
    return this._isResizing;
  }

  public get isResizingLeft(): boolean {
    return this._isResizingLeft;
  }

  public get isResizingRight(): boolean {
    return this._isResizingRight;
  }

  public get isResizingTop(): boolean {
    return this._isResizingTop;
  }

  public get isResizingBottom(): boolean {
    return this._isResizingBottom;
  }

  public get directions(): Direction[] {
    const directions: Direction[] = [];

    if (this._isResizingLeft) {
      directions.push('left');
    }

    if (this._isResizingRight) {
      directions.push('right');
    }

    if (this._isResizingTop) {
      directions.push('top');
    }

    if (this._isResizingBottom) {
      directions.push('bottom');
    }

    return directions;
  }

  public StartResizing(): void {
    this._isResizing = true;
  }

  public SetResizing(direction: Direction): void {
    this._isResizing = true;

    const RESIZE_DIRECTION_MAP = {
      left: () => this._isResizingLeft = true,
      right: () => this._isResizingRight = true,
      top: () => this._isResizingTop = true,
      bottom: () => this._isResizingBottom = true,
    };

    RESIZE_DIRECTION_MAP[direction]();
  }

  public ClearResizing(): void {
    this._isResizing = false;
    this._isResizingLeft = false;
    this._isResizingRight = false;
    this._isResizingTop = false;
    this._isResizingBottom = false;
  }
}
