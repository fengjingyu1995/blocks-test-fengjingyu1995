import { Block } from '../blocks';

/**
 * helper function for "stringifyBlock"
 * use level to figure out how many spaces needed.
 *
 * @export
 * @param {Block} block
 * @param {number} level
 * @return {string}
 */
export function stringifyBlockHelper(block: Block, level: number): string {
  let result = `${level > 0 ? ' '.repeat(level) : ''}id: ${block.id}, type:${block.type}\n`;
  if (block.children) {
    for (const child of block.children) {
      const childString = stringifyBlockHelper(child, level + 1);
      result += childString;
    }
  }
  return result;
}
/**
 * "stringifyBlock" takes a block and returns it's structure as a
 * string. The same as what you'd see if you do yarn list. For each
 * node, output the ID and the type of block.
 *
 * @export
 * @param {Block} block
 * @return {string}
 */
export function stringifyBlock(block: Block): string {
  return stringifyBlockHelper(block, 0);
}
