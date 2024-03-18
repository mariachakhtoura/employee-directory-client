import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import MainLayout from './components/MainLayout';
        
function App() {
  return (
    <PrimeReactProvider>
      <MainLayout/>
    </PrimeReactProvider>
  )
}

export default App
