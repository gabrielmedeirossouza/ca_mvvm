import { Element } from '../../entities/element';
import { Position } from '../../entities/position';
import { Resize } from '../../entities/resize';
import { Shape } from '../../entities/shape';
import { ResizeElement } from './resize-element';

const makeSut = () => {
  const position = new Position(0, 0, 0);
  const shape = new Shape(100, 100, "px", "px");
  const element = new Element(position, shape);
  const resize = new Resize();
  const sut = new ResizeElement(element, resize);

  return { sut, element, resize };
};

it('should start resizing when StartResizing is called', () => {
  const { sut, resize } = makeSut();

  sut.StartResizing();

  expect(resize.isResizing).toBe(true);
});

it('should stop resizing when StopResizing is called', () => {
  const { sut, resize } = makeSut();

  sut.StartResizing();
  sut.StopResizing();

  expect(resize.isResizing).toBe(false);
});

it.each([
  { width: 50, height: 50, expectedDir: ['left', 'top'], expectedWidth: 50, expectedHeight: 50 },
  { width: 150, height: 50, expectedDir: ['right', 'top'], expectedWidth: 150, expectedHeight: 50 },
  { width: 150, height: 150, expectedDir: ['right', 'bottom'], expectedWidth: 150, expectedHeight: 150 },
  { width: 50, height: 150, expectedDir: ['left', 'bottom'], expectedWidth: 50, expectedHeight: 150 },
  { width: -1, height: 150, expectedDir: ['left', 'bottom'], expectedWidth: 0, expectedHeight: 150 },
  { width: 50, height: -1, expectedDir: ['left', 'top'], expectedWidth: 50, expectedHeight: 0 },
])(
  'should ResizeTo correctly. width: $width, height: $height and Expected: $expectedDir, $expectedWidth, $expectedHeight',
  ({ width, height, expectedDir, expectedWidth, expectedHeight }) => {
    const { sut, element, resize } = makeSut();

    sut.ResizeTo(width, height);

    expect(element.shape.width).toBe(expectedWidth);
    expect(element.shape.height).toBe(expectedHeight);
    expect(resize.isResizing).toBe(true);
    expectedDir.forEach((direction) => {
      expect(resize.directions).toContain(direction);
    });
  });

it.each([
  { width: 50, expectedDir: 'left', expectedWidth: 50 },
  { width: 150, expectedDir: 'right', expectedWidth: 150 },
  { width: -1, expectedDir: 'left', expectedWidth: 0 },
])(
  'should ResizeToWidth correctly. width: $width and Expected: $expectedDir, $expectedWidth',
  ({ width, expectedDir, expectedWidth }) => {
    const { sut, element, resize } = makeSut();

    sut.ResizeToWidth(width);

    expect(element.shape.width).toBe(expectedWidth);
    expect(resize.isResizing).toBe(true);
    expect(resize.directions).toContain(expectedDir);
  });

it.each([
  { height: 50, expectedDir: 'top', expectedHeight: 50 },
  { height: 150, expectedDir: 'bottom', expectedHeight: 150 },
  { height: -1, expectedDir: 'top', expectedHeight: 0 },
])(
  'should ResizeToHeight correctly. height: $height and Expected: $expectedDir, $expectedHeight',
  ({ height, expectedDir, expectedHeight }) => {
    const { sut, element, resize } = makeSut();

    sut.ResizeToHeight(height);

    expect(element.shape.height).toBe(expectedHeight);
    expect(resize.isResizing).toBe(true);
    expect(resize.directions).toContain(expectedDir);
  });

it.each([
  { width: 50, height: 50, expectedDir: ['right', 'bottom'], expectedWidth: 150, expectedHeight: 150 },
  { width: 150, height: 50, expectedDir: ['right', 'bottom'], expectedWidth: 250, expectedHeight: 150 },
  { width: 150, height: 150, expectedDir: ['right', 'bottom'], expectedWidth: 250, expectedHeight: 250 },
  { width: 50, height: 150, expectedDir: ['right', 'bottom'], expectedWidth: 150, expectedHeight: 250 },
  { width: -1, height: 150, expectedDir: ['left', 'bottom'], expectedWidth: 99, expectedHeight: 250 },
  { width: -100, height: 150, expectedDir: ['left', 'bottom'], expectedWidth: 0, expectedHeight: 250 },
  { width: -150, height: 150, expectedDir: ['left', 'bottom'], expectedWidth: 0, expectedHeight: 250 },
  { width: 50, height: -1, expectedDir: ['right', 'top'], expectedWidth: 150, expectedHeight: 99 },
  { width: 50, height: -100, expectedDir: ['right', 'top'], expectedWidth: 150, expectedHeight: 0 },
  { width: 50, height: -150, expectedDir: ['right', 'top'], expectedWidth: 150, expectedHeight: 0 },
])(
  'should ResizeBy correctly. width: $width, height: $height and Expected: $expectedDir, $expectedWidth, $expectedHeight',
  ({ width, height, expectedDir, expectedWidth, expectedHeight }) => {
    const { sut, element, resize } = makeSut();

    sut.ResizeBy(width, height);

    expect(element.shape.width).toBe(expectedWidth);
    expect(element.shape.height).toBe(expectedHeight);
    expect(resize.isResizing).toBe(true);
    expectedDir.forEach((direction) => {
      expect(resize.directions).toContain(direction);
    });
  });

it.each([
  { width: 50, expectedDir: 'right', expectedWidth: 150 },
  { width: 150, expectedDir: 'right', expectedWidth: 250 },
  { width: -1, expectedDir: 'left', expectedWidth: 99 },
  { width: -100, expectedDir: 'left', expectedWidth: 0 },
  { width: -150, expectedDir: 'left', expectedWidth: 0 },
])(
  'should ResizeByWidth correctly. width: $width and Expected: $expectedDir, $expectedWidth',
  ({ width, expectedDir, expectedWidth }) => {
    const { sut, element, resize } = makeSut();

    sut.ResizeByWidth(width);

    expect(element.shape.width).toBe(expectedWidth);
    expect(resize.isResizing).toBe(true);
    expect(resize.directions).toContain(expectedDir);
  });

it.each([
  { height: 50, expectedDir: 'bottom', expectedHeight: 150 },
  { height: 150, expectedDir: 'bottom', expectedHeight: 250 },
  { height: -1, expectedDir: 'top', expectedHeight: 99 },
  { height: -100, expectedDir: 'top', expectedHeight: 0 },
  { height: -150, expectedDir: 'top', expectedHeight: 0 },
])(
  'should ResizeByHeight correctly. height: $height and Expected: $expectedDir, $expectedHeight',
  ({ height, expectedDir, expectedHeight }) => {
    const { sut, element, resize } = makeSut();

    sut.ResizeByHeight(height);

    expect(element.shape.height).toBe(expectedHeight);
    expect(resize.isResizing).toBe(true);
    expect(resize.directions).toContain(expectedDir);
  });
