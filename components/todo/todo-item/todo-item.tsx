import Checkbox from '@/components/ui/checkbox';
import IconButton from '@/components/ui/icon-button';

interface TodoItemProps {
  id: number;
  title: string;
  isCompleted: boolean;
  onDelete: () => void;
  onToggleCompletion: () => void;
}

const TodoItem = ({
  id,
  title,
  isCompleted = false,
  onDelete,
  onToggleCompletion,
}: TodoItemProps) => {
  return (
    <div key={id} className='flex justify-between'>
      <Checkbox
        checked={isCompleted}
        changeCompleted={onToggleCompletion}
        label={title || ''}
      />
      <IconButton iconPath={'/more.svg'} alt={'more'} onClick={onDelete} />
    </div>
  );
};

export default TodoItem;
