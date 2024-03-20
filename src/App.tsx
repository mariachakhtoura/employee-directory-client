import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { PrimeReactProvider } from "primereact/api";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Context } from "./services/context-service";
import { IDialog } from "./components/dialog/model";
import MainDialog from "./components/dialog/MainDialog";

function App() {
  const [dialog, setDialog] = useState<IDialog['content']>(false);

  const context = {
    dialog: {
      open: !!dialog,
      content: dialog,
      toggleOpen: () => setDialog(!dialog)
    }
  };

  return (
    <PrimeReactProvider>
      <Context.Provider value={context}>
        <MainDialog />
        <Navbar />
        <Outlet />
      </Context.Provider>
    </PrimeReactProvider>
  );
}

export default App;
