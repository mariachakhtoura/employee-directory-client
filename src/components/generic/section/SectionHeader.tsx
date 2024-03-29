import { Button } from 'primereact/button';
import { ISectionHeaderProps } from './model';

function SectionHeader({
  title,
  buttonLabel,
  onButtonClick,
}: ISectionHeaderProps) {
  return (
    <div className='flex'>
      <div className='wrapblock flex-1'>
        <p className='text-sm font-semibold flex-2 mb-0-mobile'>{title}</p>
        <hr className='mx-2 flex-auto flex-5' />
        <Button
          label={buttonLabel}
          icon='pi pi-user-plus'
          className='flex-2'
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
}

export default SectionHeader;
