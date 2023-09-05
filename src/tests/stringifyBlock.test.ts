import { blocks } from './../blocks';
import { stringifyBlock } from '../functions/stringifyBlock';
import { simpleBlock } from './fixtures/simpleBlock';

describe('stringifyBlock', () => {
  it('Should return a strigified simpleBlock', () => {
    const stringifiedBlock = stringifyBlock(simpleBlock);
    expect(stringifiedBlock).toEqual(
      'id: 1, type:PlainText\n id: 2, type:PlainText\n  id: 4, type:PlainText\n id: 3, type:PlainText\n  id: 5, type:PlainText\n'
    );
  });

  it('Should return a strigified complex block', () => {
    const stringifiedBlock = stringifyBlock(blocks);
    console.log(stringifiedBlock);
    expect(stringifiedBlock).toEqual(
      'id: 5fprgzZ56EuHSb7m4Kk5tr, type:Column\n id: ea3rb4fdUAjbeestD9bmKc, type:PlainText\n id: 2m4WRKVtwL5R9mmQDoQCNK, type:Layout\n  id: 2m4WRKVtwL5R9mmQDoQCNK-column0, type:Column\n   id: 5MtmR41yg62NsUj15iKNT3, type:Image\n  id: 2m4WRKVtwL5R9mmQDoQCNK-column1, type:Column\n   id: cab2RFNV74Yhu492ePcpZT, type:PlainText\n id: qYqX7WhX2w1ruWL5qWbdXL, type:PlainText\n id: vKC8kvnPDsDSFYVEXRut2W, type:Layout\n  id: vKC8kvnPDsDSFYVEXRut2W-column0, type:Column\n   id: ukSQ94CrnjhtaW41hEuCTb, type:Image\n   id: yn5TzBIHJOEDWuw08ndOsEDI, type:Image\n  id: vKC8kvnPDsDSFYVEXRut2W-column1, type:Column\n   id: fJ8bWVhwP8zsAV31UpL1Xo, type:Image\n   id: VMAoIMHISgkGRB7BIHBsz8rK, type:Image\n id: 4qxjDcYSuXBDpkGfr5oguH, type:Layout\n  id: pjxpWRgfc1upD4SCWp7Gn2, type:Column\n   id: 61j5xp218Dw3KNCXGz3g3s, type:PlainText\n  id: nLukTtPtREJUvmMar9xh9F, type:Column\n   id: KEsvVdFWXkdkSe8dQLa62, type:Image\n id: 6zzea3Qn4VhKVE3xRjZty8, type:Image\n'
    );
  });
});
