import { DividerViewState } from "./divider-view-state";

describe('Component: Divider', () => {
  it('should create an instance with correct default properties', () => {
    const sut = new DividerViewState();

    expect(sut.orientation).toBe('horizontal');
    expect(sut.size).toBe(100);
  });
});
