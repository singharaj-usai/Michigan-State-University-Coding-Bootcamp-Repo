import { render } from '@testing-library/react';
import ThemeComponent from '../components/ThemeComponent';
import ThemeProvider from '../utils/ThemeContext';

test('ThemeComponent renders', () => {
  render(
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
});
