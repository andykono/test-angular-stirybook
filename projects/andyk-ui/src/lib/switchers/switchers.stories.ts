// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {SwitchersComponent} from './switchers.component';

export default {
  title: 'Example/Switchers',
  component: SwitchersComponent,
} as Meta;

const Template: Story<SwitchersComponent> = (args: SwitchersComponent) => ({
  component: SwitchersComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Switchers',
};
/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};*/
