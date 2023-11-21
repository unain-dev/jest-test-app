import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("render test", () => {
  render(<App />);
  const el = screen.getByText(/Hello CodeSandbox/i);
  expect(el).toBeInTheDocument();
});

test("render test2", () => {
  render(<App />);
  const el = screen.getByText(/Hello/);
  expect(el).toBeInTheDocument();
});
