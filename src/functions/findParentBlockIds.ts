import { Block } from '../blocks';

interface findParentBlockIdsHelperResult {
  foundBlock: boolean;
  parentIds?: string[];
}
/**
 * Trying to find the block with the given id,
 * and record the parents of current block.
 * Only change the result if the block with given id if found.
 *
 * @export
 * @param {Block} block
 * @param {string} id
 * @param {string[]} parentIds
 * @param {findParentBlockIdsHelperResult} result
 * @return {void}
 */
export function findParentBlockIdsHelper(
  block: Block,
  id: string,
  parentIds: string[],
  result: findParentBlockIdsHelperResult
): void {
  if (block.id === id) {
    result.foundBlock = true;
    result.parentIds = parentIds;
    return;
  }
  if (block.children) {
    for (const childBlock of block.children) {
      findParentBlockIdsHelper(childBlock, id, [...parentIds, block.id], result);
      if (result.foundBlock) {
        // early return if block is already found
        return;
      }
    }
  }
}

/**
 * "findParentBlockIds" takes 2 parameters, a block and an ID.
 * Find the block denoted by the ID and return an array of it's
 * parent's IDs. They should be ordered from highest ID in the
 * tree to lowest. If the block doesnt exist then return false
 *
 * @export
 * @param {Block} block the block for getting all image urls
 * @return {string[] | boolean} An array of parent block IDs
 */

export function findParentBlockIds(block: Block, id: string): string[] | boolean {
  const result: findParentBlockIdsHelperResult = { foundBlock: false };
  findParentBlockIdsHelper(block, id, [], result);
  const { foundBlock, parentIds } = result;
  if (foundBlock && parentIds && parentIds.length > 0) {
    return parentIds;
  }
  return false;
}
