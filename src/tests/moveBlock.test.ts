import { moveBlock } from '../functions/moveBlock';
import { simpleBlock } from './fixtures/simpleBlock';
import cloneDeep from 'lodash.clonedeep';

describe('moveBlock', () => {
  it('Should return a modified Block if target block is the parent of source block)', () => {
    const modifiedBlock = moveBlock(simpleBlock, '2', '1');
    expect(modifiedBlock.children?.[0]?.id).toEqual('3');
    expect(modifiedBlock.children?.[1]?.id).toEqual('2');
  });

  it('Should return modified Block if the target block is at the same level of source block', () => {
    const modifiedBlock = moveBlock(simpleBlock, '2', '3');
    expect(modifiedBlock.children?.[0]?.id).toEqual('3');
    expect(modifiedBlock.children?.[0]?.children?.[1].id).toEqual('2');
  });

  it('Should throw an error if sourceId is not found', () => {
    expect(() => moveBlock(simpleBlock, '6', '4')).toThrow('Could not find source block');
  });

  it('Should throw an error if targetId is not found', () => {
    expect(() => moveBlock(simpleBlock, '2', '6')).toThrow('Could not find target block');
  });

  it('Should throw an error if sourceId is equal to the targetId', () => {
    expect(() => moveBlock(simpleBlock, '2', '2')).toThrow('Cannot move a block to itself');
  });
  it('Should throw an error if the target block is a descendant of the source block', () => {
    expect(() => moveBlock(simpleBlock, '2', '4')).toThrow('Cannot move a block to its descendant');
  });
  it('Should not mutate the original block', () => {
    const clonedSimpleBlock = cloneDeep(simpleBlock);
    moveBlock(simpleBlock, '2', '1');
    expect(simpleBlock).toEqual(clonedSimpleBlock);
  });
});
