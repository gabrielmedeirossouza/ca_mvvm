import { Shape } from './shape';

const TEST_CASES = [
  {
    width: 0,
    height: 0,
    widthType: 'px',
    heightType: 'px',
    expected: {
      width: 0,
      height: 0,
      widthUnitType: 'px',
      heightUnitType: 'px'
    }
  },

  {
    width: 0,
    height: 0,
    widthType: '%',
    heightType: 'px',
    expected: {
      width: 0,
      height: 0,
      widthUnitType: '%',
      heightUnitType: 'px'
    }
  },

  {
    width: 0,
    height: 0,
    widthType: '%',
    heightType: '%',
    expected: {
      width: 0,
      height: 0,
      widthUnitType: '%',
      heightUnitType: '%'
    },
  },

  {
    width: 0,
    height: 0,
    widthType: 'hug',
    heightType: '%',
    expected: {
      width: 0,
      height: 0,
      widthUnitType: 'hug',
      heightUnitType: '%'
    },
  },

  {
    width: 0,
    height: 0,
    widthType: 'hug',
    heightType: 'hug',
    expected: {
      width: 0,
      height: 0,
      widthUnitType: 'hug',
      heightUnitType: 'hug'
    },
  },

  {
    width: 50,
    height: 75,
    widthType: 'px',
    heightType: 'px',
    expected: {
      width: 50,
      height: 75,
      widthUnitType: 'px',
      heightUnitType: 'px'
    }
  },

  {
    width: 500,
    height: 750,
    widthType: 'px',
    heightType: 'px',
    expected: {
      width: 500,
      height: 750,
      widthUnitType: 'px',
      heightUnitType: 'px'
    }
  },

  {
    width: -1,
    height: -40,
    widthType: 'px',
    heightType: 'px',
    expected: {
      width: 0,
      height: 0,
      widthUnitType: 'px',
      heightUnitType: 'px'
    }
  },

  {
    width: 99,
    height: 0,
    widthType: '%',
    heightType: '%',
    expected: {
      width: 99,
      height: 0,
      widthUnitType: '%',
      heightUnitType: '%'
    }
  },

  {
    width: 101,
    height: -10,
    widthType: '%',
    heightType: '%',
    expected: {
      width: 100,
      height: 0,
      widthUnitType: '%',
      heightUnitType: '%'
    }
  },
] as const;

it.each(TEST_CASES)(`should create a shape ($width, $height, $widthType, $heightType)`, ({
  width,
  height,
  widthType,
  heightType,
  expected
}) => {
  const shape = new Shape(width, height, widthType, heightType);

  const shapeProperties = {
    width: shape.width,
    height: shape.height,
    widthUnitType: shape.widthUnitType,
    heightUnitType: shape.heightUnitType
  };

  expect(shapeProperties).toEqual({
    width: expected.width,
    height: expected.height,
    widthUnitType: expected.widthUnitType,
    heightUnitType: expected.heightUnitType
  });

  shape.width = 0;
  shape.height = 0;

  expect(shape.width).toEqual(0);
  expect(shape.height).toEqual(0);

  shape.width = width;
  shape.height = height;

  expect(shape.width).toEqual(expected.width);
  expect(shape.height).toEqual(expected.height);
});
