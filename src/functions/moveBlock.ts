import { Block } from '../blocks';
import cloneDeep from 'lodash.clonedeep';

interface FindBlocksResult {
  sourceBlock?: Block;
  sourceParentBlock?: Block;
  targetBlock?: Block;
}

/**
 * Trying to find the sourceBlock, sourceParentBlock and
 * targetBlock and store it in "result"
 *
 * @export
 * @param {Block} block
 * @param {string} sourceId
 * @param {string} targetId
 * @param {FindBlocksResult} result
 * @param {Block[]} parents
 */
export function findBlocks(
  block: Block,
  sourceId: string,
  targetId: string,
  result: FindBlocksResult,
  parents: Block[]
): void {
  if (block.id === sourceId) {
    result.sourceBlock = block;
    result.sourceParentBlock = parents[parents.length - 1];
  }
  if (block.id === targetId) {
    result.targetBlock = block;
    if (parents.findIndex((block) => block.id === sourceId) > -1) {
      throw new Error('Cannot move a block to its descendant');
    }
  }
  if (block.children) {
    for (const childBlock of block.children) {
      findBlocks(childBlock, sourceId, targetId, result, [...parents, block]);
    }
  }
}

/**
 * "moveBlock" takes 3 parameters, a block and 2
 * IDs. The block with the first ID must be moved and set as the
 * last child of the block with the second ID. Return a modified
 * block. If for whatever reason the operation can't be
 * completed, throw an error.
 *
 * @export
 * @param {Block} block
 * @param {string} sourceId
 * @param {string} targetId
 * @return {Block}
 */

export function moveBlock(block: Block, sourceId: string, targetId: string): Block {
  if (sourceId === targetId) {
    throw new Error('Cannot move a block to itself');
  }
  const clonedBlock = cloneDeep(block);
  const foundBlocks: FindBlocksResult = {};
  try {
    findBlocks(clonedBlock, sourceId, targetId, foundBlocks, []);
  } catch (error) {
    throw error;
  }
  const { sourceBlock, sourceParentBlock, targetBlock } = foundBlocks;
  if (!sourceBlock) {
    throw new Error('Could not find source block');
  }
  if (!targetBlock) {
    throw new Error('Could not find target block');
  }
  if (sourceParentBlock?.children) {
    sourceParentBlock.children = sourceParentBlock.children.filter((block) => block.id !== sourceBlock.id);
    targetBlock.children = [...(targetBlock?.children || []), sourceBlock];
  }

  return clonedBlock;
}
