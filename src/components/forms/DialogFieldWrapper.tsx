import { IWrapperComponent } from '../../common/types';
import DialogLabel, { IDialogLabelProps } from './DialogLabel';

interface IDialogFieldWrapperProps extends IWrapperComponent {
  label: IDialogLabelProps;
  error?: {
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
    <div className='formfieldWrapper'>
      <DialogLabel {...label} />
      {children}
      {error?.existsError && <span className='block text-red-500'>{error.errorText}</span>}
    </div>
  );
};

export default DialogFieldWrapper;
