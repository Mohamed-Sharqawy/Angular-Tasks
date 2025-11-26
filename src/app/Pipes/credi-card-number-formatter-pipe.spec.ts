import { CrediCardNumberFormatterPipe } from './credi-card-number-formatter-pipe';

describe('CrediCardNumberFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new CrediCardNumberFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
