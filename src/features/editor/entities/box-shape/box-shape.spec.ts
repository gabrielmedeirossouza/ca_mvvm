import { BoxShape } from './box-shape';

it('should create an box that is 100x100 and contain a cornerRadius property', () => {
  const box = new BoxShape(100, 100);

  expect(box.width).toEqual(100);
  expect(box.height).toEqual(100);
  expect(box.cornerRadius).toEqual(0);
});
