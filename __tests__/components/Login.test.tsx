import LoginForm from '@/components/LoginForm';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import * as greetModule from '../../utils/greet';

jest.mock('../../utils/greet', () => ({
  greet: jest.fn(),
}));

describe('test login form', () => {
  //Arrange
  const fn = jest.fn();
  beforeEach(() => {
    fn.mockClear();
  });

  const Component = () => render(<LoginForm handleSubmit={fn} />);

  it('should render the form', async () => {
    Component();
    //ACT
    const form = await screen.findByRole('form');

    //ASSERT
    expect(form).toBeInTheDocument();
  });

  it('should submit form on click', async () => {
    // USE FIRE EVENTS TO SIMULATE USER INTERACTION
    Component();

    //ACT
    await fireEvent.click(screen.getByText(/login/i));

    expect(fn).toHaveBeenCalled();
  });

  it('should display email values as user types', async () => {
    Component();

    // Arrange - Get the password input and type into it
    const emailInputForm = screen.getByPlaceholderText('Email');
    const emailInput = 'amaben@gmail.com';

    //Act: Simulate typing each character
    fireEvent.change(emailInputForm, { target: { value: emailInput } });

    // Assert: Check that the email value is displayed
    const textFromEmailInput = screen.getByTestId('email-value');
    expect(textFromEmailInput).toHaveTextContent(emailInput);
  });

  it('should update email display in real-time as user types', () => {
    // Arrange
    Component();
    const emailInput = screen.getByTestId('email-input');
    const emailValueDisplay = screen.getByTestId('email-value');

    // Act & Assert - Test multiple typing steps
    fireEvent.change(emailInput, { target: { value: 't' } });
    expect(emailValueDisplay).toHaveTextContent('t');

    fireEvent.change(emailInput, { target: { value: 'te' } });
    expect(emailValueDisplay).toHaveTextContent('te');

    fireEvent.change(emailInput, { target: { value: 'test' } });
    expect(emailValueDisplay).toHaveTextContent('test');

    fireEvent.change(emailInput, { target: { value: 'test@' } });
    expect(emailValueDisplay).toHaveTextContent('test@');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailValueDisplay).toHaveTextContent('test@example.com');
  });

  test('renders a greeting message', () => {
    greetModule.greet('Hello, Mock!');
    // render(<Hello name="World" />);
    // expect(screen.getByText('Hello, Mock!')).toBeInTheDocument();
  });
});
