import { Position } from "../../../../core/entities/position";
import { Shape } from "../shape";

export class Element {
  private _position: Position;
  private _shape: Shape;
  private _children: Element[] = [];

  constructor(position: Position, shape: Shape) {
    this._position = position;
    this._shape = shape;
  }

  public get position(): Position {
    return this._position;
  }

  public get shape(): Shape {
    return this._shape;
  }

  public get children(): Element[] {
    return this._children;
  }

  public Append(element: Element): void {
    this._children.push(element);
  }

  public Remove(element: Element): void {
    this._children = this._children.filter((child) => child !== element);
  }
}
