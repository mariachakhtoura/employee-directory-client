export interface IDialogLabelProps {
  fieldName: string;
  text: string;
}

const DialogLabel = ({ fieldName, text }: IDialogLabelProps) => {
  return (
    <label htmlFor={fieldName} className='block mb-1 font-semibold'>
      {text}
    </label>
  );
};

export default DialogLabel;
