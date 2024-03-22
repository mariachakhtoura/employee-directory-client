import { IInforDisplayProps } from './model';

function InfoDisplay({ info }: IInforDisplayProps) {
  return info.map((row) => {
    const { label, value } = row;
    return (
      <p>
        {label}: {value}
      </p>
    );
  });
}

export default InfoDisplay;
