import {sum} from './Sum';

it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(5, 5)).toEqual(10);
});