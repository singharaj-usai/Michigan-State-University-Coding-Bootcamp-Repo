import './App.css';
import AccountDisplay from './components/AccountDisplay';
import { AccountProvider } from './utils/GlobalState';

function App() {
  return (
    <AccountProvider>
      <div className="App">
        <header className="App-header">
          <AccountDisplay />
        </header>
      </div>
    </AccountProvider>
  );
}

export default App;
