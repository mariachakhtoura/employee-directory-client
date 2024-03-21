import { IWrapperComponent } from '../../common/types';

function DialogFormLayout({ children }: IWrapperComponent) {
  return <div className='flex flex-column px-7 py-7 bg-blue-50'>{children}</div>;
}

export default DialogFormLayout;
