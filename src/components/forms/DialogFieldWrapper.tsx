import { IWrapperComponent } from '../../common/types';
import DialogLabel, { IDialogLabelProps } from './DialogLabel';

interface IDialogFieldWrapperProps extends IWrapperComponent {
  label: IDialogLabelProps;
  error: {
    existsError: boolean;
    errorText: string;
  };
}

const DialogFieldWrapper = ({
  label,
  error,
  children,
}: IDialogFieldWrapperProps) => {
  return (
    <div className='flex-1 mb-5'>
      <DialogLabel {...label} />
      {children}
      {error.existsError && <span className='block'>{error.errorText}</span>}
    </div>
  );
};

export default DialogFieldWrapper;
