import { Resize } from './resize';

it('should instantiate with correct default values', () => {
  const resize = new Resize();

  expect(resize.isResizing).toBe(false);
  expect(resize.isResizingLeft).toBe(false);
  expect(resize.isResizingRight).toBe(false);
  expect(resize.isResizingTop).toBe(false);
  expect(resize.isResizingBottom).toBe(false);
});

it.each([
  { dir: 'left', getter: 'isResizingLeft' },
  { dir: 'right', getter: 'isResizingRight' },
  { dir: 'top', getter: 'isResizingTop' },
  { dir: 'bottom', getter: 'isResizingBottom' },
] as const)("should set isResizing to true and isResizing<$dir> to true when SetResizing('$dir') is called", ({ dir, getter }) => {
  const resize = new Resize();

  resize.SetResizing(dir);

  expect(resize.isResizing).toBe(true);
  expect(resize[getter]).toBe(true);
});
