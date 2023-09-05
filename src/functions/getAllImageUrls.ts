import { Block } from '../blocks';

/**
 * "getAllImageUrls" takes a single parameter, a block, and recursively
 * loops over it looking for blocks with the type Image. It should return
 * a flat array of all image URLs for these blocks.
 *
 * @export
 * @param {Block} block the block for getting all image urls
 * @return {string[]} An array of all image URLs found in blocks
 */

export function getAllImageUrls(block: Block): string[] {
  let imageUrls = [];

  const imageUrl = block?.options?.url;
  if (block.type === 'Image' && imageUrl != null && typeof imageUrl === 'string') {
    imageUrls.push(imageUrl);
  }
  if (block.children) {
    for (const childBlock of block?.children) {
      const childImageUrls = getAllImageUrls(childBlock);
      imageUrls = [...imageUrls, ...childImageUrls];
    }
  }

  return imageUrls;
}
