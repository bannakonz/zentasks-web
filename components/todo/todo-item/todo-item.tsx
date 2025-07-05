import Checkbox from '@/components/ui/checkbox';
import IconButton from '@/components/ui/icon-button';
interface TodoItemProps {
  id: number;
  title: string;
  checked: boolean;
  onDelete: () => void;
  onTickComplete: () => void;
}

const TodoItem = ({
  id,
  title,
  checked = false,
  onDelete,
  onTickComplete,
}: TodoItemProps) => {
  return (
    <div key={id} className="flex justify-between">
      <Checkbox
        checked={checked}
        changeCompleted={onTickComplete}
        label={title || ''}
      />
      <IconButton iconPath={'/more.svg'} alt={'more'} onClick={onDelete} />
    </div>
  );
};

export default TodoItem;
