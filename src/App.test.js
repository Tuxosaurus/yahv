import { render, screen } from "@testing-library/react";
import { StateProvider } from "./components/store.js";
import { App } from "./App.js";

test("renders something... more testing to be done soon™", () => {
  render(
    <StateProvider>
      <App />
    </StateProvider>
  );
  const linkElement = screen.getByText(/yahv/i);
  expect(linkElement).toBeInTheDocument();
});
