import { expect } from 'chai';
import { multiplyByTwo } from './app';

describe('First Test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  })
});

describe('MultiplyByTwo', () => {
  it('should multiply by two', () => {
    const result = multiplyByTwo(5);
    expect(result).to.equal(10);
  })
});


