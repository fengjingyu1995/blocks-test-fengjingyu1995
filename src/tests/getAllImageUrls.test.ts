import { blocks, Block } from './../blocks';
import { getAllImageUrls } from '../functions/getAllImageUrls';

describe('getAllImageUrls', () => {
  it('Should return empty array if block does not have an image block', () => {
    const blockWithoutImage: Block = {
      type: 'PlainText',
      id: '5fprgzZ56EuHSb7m4Kk5tr',
      data: { text: 'text block' },
    };
    expect(getAllImageUrls(blockWithoutImage)).toEqual([]);
  });

  it('Should return empty array if the image block does not have a url', () => {
    const imageBlockWithoutUrl: Block = {
      type: 'Image',
      id: '5MtmR41yg62NsUj15iKNT3',
      options: {
        align: 'left',
        width: 202.02041832669323,
        showLink: true,
        link: 'https://example.org',
      },
    };
    expect(getAllImageUrls(imageBlockWithoutUrl)).toEqual([]);
  });

  it('Should return empty array if the image block a url, but the value is null', () => {
    const imageBlockWithoutUrl: Block = {
      type: 'Image',
      id: '5MtmR41yg62NsUj15iKNT3',
      options: {
        url: null,
        align: 'left',
        width: 202.02041832669323,
        showLink: true,
        link: 'https://example.org',
      },
    };
    expect(getAllImageUrls(imageBlockWithoutUrl)).toEqual([]);
  });

  it('Should return empty array if the image block a url, but the value is not a string', () => {
    const imageBlockWithoutUrl: Block = {
      type: 'Image',
      id: '5MtmR41yg62NsUj15iKNT3',
      options: {
        url: true,
        align: 'left',
        width: 202.02041832669323,
        showLink: true,
        link: 'https://example.org',
      },
    };
    expect(getAllImageUrls(imageBlockWithoutUrl)).toEqual([]);
  });

  it('Should return an array with one image url', () => {
    const blockWithOneImage: Block = {
      type: 'Image',
      id: '5MtmR41yg62NsUj15iKNT3',
      options: {
        url: 'https://cdn.example.org/k.png',
        align: 'left',
        width: 202.02041832669323,
        showLink: true,
        link: 'https://example.org',
      },
      children: [],
      data: {
        width: 4000,
        height: 3000,
      },
    };
    expect(getAllImageUrls(blockWithOneImage)).toEqual(['https://cdn.example.org/k.png']);
  });

  it('Should return an array of all image urls found in block', () => {
    expect(getAllImageUrls(blocks).sort()).toEqual(
      [
        'https://cdn.example.org/k.png',
        'https://cdn.example.org/a.jpg',
        'https://cdn.example.org/c.jpg',
        'https://cdn.example.org/t.png',
        'https://cdn.example.org/x.gif',
        'https://cdn.example.org/p.jpg',
        'https://cdn.example.org/z.jpg',
      ].sort()
    );
  });
});
