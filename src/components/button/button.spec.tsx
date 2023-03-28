import { render } from '@testing-library/react'
import { ButtonProps } from './button';
import { Primary } from './button.stories';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Primary {...(Primary.args as ButtonProps)} />
    );
    expect(baseElement).toBeTruthy();
  });
});
