import { Element } from './element';
import { Position } from '../position';
import { Shape } from '../shape';

it('should create an element with default position and shape', () => {
  const position = new Position(0, 0, 0);
  const shape = new Shape(0, 0, 'px', 'px');
  const element = new Element(position, shape);

  expect(element.position).toEqual(position);
  expect(element.shape).toEqual(shape);
});

it('should permit to append a child element', () => {
  const element = new Element(new Position(0, 0, 0), new Shape(0, 0, 'px', 'px'));
  const childElement = new Element(new Position(0, 0, 0), new Shape(0, 0, 'px', 'px'));

  element.Append(childElement);

  expect(element.children).toContain(childElement);
});

it('should permit to remove a child element', () => {
  const element = new Element(new Position(0, 0, 0), new Shape(0, 0, 'px', 'px'));
  const childElement = new Element(new Position(0, 0, 0), new Shape(0, 0, 'px', 'px'));

  element.Append(childElement);
  element.Remove(childElement);

  expect(element.children).not.toContain(childElement);
});
