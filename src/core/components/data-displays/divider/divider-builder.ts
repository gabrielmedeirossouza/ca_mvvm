import { Builder } from "@/core/entities/builder";
import { DividerViewState, Orientation } from "./divider-view-state";

export class DividerBuilder extends Builder<DividerViewState> {
  constructor() {
    super(new DividerViewState());
  }

  public AddOrientation(orientation: Orientation): DividerBuilder {
    this._entity.orientation = orientation;

    return this;
  }

  public AddSize(size: number): DividerBuilder {
    this._entity.size = size;

    return this;
  }

  public Build(): DividerViewState {
    return this._entity;
  }
}
