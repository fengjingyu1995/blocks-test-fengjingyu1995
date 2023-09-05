import { Block } from '../../blocks';

export const simpleBlock: Block = {
  type: 'PlainText',
  id: '1',
  data: { text: 'text block 1' },
  children: [
    {
      type: 'PlainText',
      id: '2',
      data: { text: 'text block 2' },
      children: [{ type: 'PlainText', id: '4', data: { text: 'text block 4' } }],
    },
    {
      type: 'PlainText',
      id: '3',
      data: { text: 'text block 5' },
      children: [{ type: 'PlainText', id: '5', data: { text: 'text block 5' } }],
    },
  ],
};
