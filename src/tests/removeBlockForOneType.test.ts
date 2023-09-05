import { blocks, blocksWithoutImage } from './../blocks';
import { removeBlockForOneType } from '../functions/removeBlockForOneType';
import { simpleBlock } from './fixtures/simpleBlock';
import cloneDeep from 'lodash.clonedeep';

describe('removeBlockForOneType', () => {
  it('Should return null if the root block is the type to be removed', () => {
    const newBlock = removeBlockForOneType(simpleBlock, 'PlainText');
    expect(newBlock).toEqual(null);
  });

  it('Should remove the blocks that have the given type', () => {
    const clonedSimpleBlock = cloneDeep(simpleBlock);
    clonedSimpleBlock.type = 'Layout';
    const newBlock = removeBlockForOneType(clonedSimpleBlock, 'PlainText');
    const expectedBlock = {
      type: 'Layout',
      id: '1',
      data: { text: 'text block 1' },
      children: [],
    };
    expect(newBlock).toEqual(expectedBlock);
  });

  it('Should remove the blocks that have the "Layout" type', () => {
    const clonedSimpleBlock = cloneDeep(simpleBlock);
    clonedSimpleBlock.type = 'Layout';
    const newBlock = removeBlockForOneType(clonedSimpleBlock, 'PlainText');
    const expectedBlock = {
      type: 'Layout',
      id: '1',
      data: { text: 'text block 1' },
      children: [],
    };
    expect(newBlock).toEqual(expectedBlock);
  });

  it('Should remove the blocks that have the "Image" type', () => {
    const newBlock = removeBlockForOneType(blocks, 'Image');
    expect(newBlock).toEqual(blocksWithoutImage);
  });

  it('Should not remove any block if the type is not found in block', () => {
    const newBlock = removeBlockForOneType(simpleBlock, 'Layout');
    expect(newBlock).toEqual(simpleBlock);
  });

  it('Should not mutate the original block', () => {
    const clonedSimpleBlock = cloneDeep(simpleBlock);
    clonedSimpleBlock.type = 'Layout';

    const _clonedSimpleBlock = cloneDeep(clonedSimpleBlock);

    removeBlockForOneType(simpleBlock, 'PlainText');
    expect(_clonedSimpleBlock).toEqual(clonedSimpleBlock);
  });
});
