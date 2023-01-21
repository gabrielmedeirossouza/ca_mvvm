import { Drag } from './drag';

it('should instantiate with correct default values', () => {
  const drag = new Drag();

  expect(drag.isDragging).toBe(false);
});

it.each([true, false])("should set isDragging to %s when SetDragging is called with parameter %s", (isDragging) => {
  const drag = new Drag();

  drag.SetDragging(isDragging);

  expect(drag.isDragging).toBe(isDragging);
});
