import { simpleBlock } from './fixtures/simpleBlock';
import { blocks } from './../blocks';
import { findParentBlockIds } from '../functions/findParentBlockIds';

describe('findParentBlockIds', () => {
  it('Should return an array of one parent id)', () => {
    const parentIds = findParentBlockIds(simpleBlock, '2');
    expect(parentIds).toEqual(['1']);
  });
  it('Should return an array of parent block IDs)', () => {
    const parentIds = findParentBlockIds(blocks, '2m4WRKVtwL5R9mmQDoQCNK-column1');
    expect(parentIds).toEqual(['5fprgzZ56EuHSb7m4Kk5tr', '2m4WRKVtwL5R9mmQDoQCNK']);
  });
  it('Should return false if the block doesnt exist)', () => {
    const parentIds = findParentBlockIds(blocks, 'unknownId');
    expect(parentIds).toEqual(false);
  });
  it('Should return false if the parent does not exist)', () => {
    const parentIds = findParentBlockIds(simpleBlock, '1');
    expect(parentIds).toEqual(false);
  });
});
