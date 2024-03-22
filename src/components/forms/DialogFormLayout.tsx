import { IWrapperComponent } from '../../common/types';

function DialogFormLayout({ children }: IWrapperComponent) {
  return <div className='formwrapper'>{children}</div>;
}

export default DialogFormLayout;
