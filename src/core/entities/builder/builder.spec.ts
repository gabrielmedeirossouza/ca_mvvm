import { Builder } from './builder';

class GenericClass {
  constructor(public value: string) {}
}

class Sut extends Builder<GenericClass> {
  public Build(): GenericClass {
    return this._entity;
  }
}

describe('Entity: Builder', () => {
  it("should contain a 'Build' method", () => {
    const sut = new Sut(new GenericClass(''));
    expect(sut.Build).toBeDefined();
  });

  it("should return the entity's value", () => {
    const sut = new Sut(new GenericClass('hello test'));
    expect(sut.Build().value).toEqual('hello test');
  });
});
