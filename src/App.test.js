import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

const func = jest.fn()

describe("add component", () => {
  test('check onChange component', () => {
    render(<App />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });

  test('check onChange component', () => {
    render(<App setInput={func}/>);
    const element = screen.getByPlaceholderText(/add a task/i);
    fireEvent.change(element, { target: {value: "Push to Github"}})
    expect(element.value).toBe("Push to Github")
  });
})

