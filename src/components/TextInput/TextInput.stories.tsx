import TextInput from './TextInput';

const meta = {
  title: 'TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = Storyobj<typeof meta>;

export const Default: Story = {};
