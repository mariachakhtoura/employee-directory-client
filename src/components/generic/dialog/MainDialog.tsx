import { useContext } from 'react';
import { Context } from '../../../services/context-service';
import { Dialog } from 'primereact/dialog';

const MainDialog = () => {
  const { dialog } = useContext(Context);

  return (
    <Dialog
      visible={dialog.open}
      onHide={() => dialog.toggleOpen()}
      content={dialog.content}
    >
      {dialog.content}
    </Dialog>
  );
};

export default MainDialog;
