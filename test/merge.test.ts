import { expect } from 'chai';
import { merge } from '../src/merge';
import 'mocha';


describe('merge', () => {
    it('Merge 2 Array', () => {
      const result = merge([1,5, 9], [2, 3, 6]);
      expect(result).to.deep.equal([1,2,3,5,6,9]);
    });
  
    it('Merge 2 Empty Array', () => {
      const result = merge([], []);
      expect(result).to.deep.equal([]);
    });
  
    it('Merge Empty Array with Non-Empty Array', () => {
      const result = merge([], [1, 2, 3]);
      expect(result).to.deep.equal([1, 2, 3]);
    });
  
    it('Merge Non-Empty Array with Empty Array', () => {
      const result = merge([1, 2, 3], []);
      expect(result).to.deep.equal([1, 2, 3]);
    });
  });