import { Story, Meta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story = (args) => (
  <Button {...args} className="hidden">
    This is a button
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  transparent: false,
  full: false,
  danger: false,
};
