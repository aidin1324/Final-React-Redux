// filepath: c:\Users\USER\Downloads\final\src\App.tsx
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import LoginForm from './components/LoginForm';
import LoggedInView from './components/LoggedInView';
import { useAppSelector } from './store';

// Main App content component
const AppContent = () => {
  const { isLoggedIn } = useAppSelector(state => state.login);
  
  return isLoggedIn ? <LoggedInView /> : <LoginForm />;
};

// Root App component with providers
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
}

export default App;