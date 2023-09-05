import { Block, BlockType } from '../blocks';
import cloneDeep from 'lodash.clonedeep';

/**
 * Write a function which takes 2 parameters, a block and a type.
 * Return a block where all of the blocks which match the second
 * parameter have been removed. If the type parameter matches the root
 * block, return null.
 *
 * @export
 * @param {Block} block
 * @param {BlockType} type
 * @return {Block | null}
 */
export function removeBlockForOneType(block: Block, type: BlockType): Block | null {
  if (block.type === type) {
    return null;
  }
  const clonedBlock = cloneDeep(block);
  if (clonedBlock.children && clonedBlock.children.length > 0) {
    const newChildren: Block[] = [];
    for (const childBlock of clonedBlock.children) {
      const block = removeBlockForOneType(childBlock, type);
      if (block) {
        newChildren.push(block);
      }
    }
    clonedBlock.children = newChildren;
  }

  return clonedBlock;
}
