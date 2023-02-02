import { render } from '@testing-library/react';
import UserComponent from '../components/UserComponent';
import UserProvider from '../utils/UserContext';

test('ThemeComponent renders', () => {
  render(
    <UserProvider>
      <UserComponent />
    </UserProvider>
  );
});
