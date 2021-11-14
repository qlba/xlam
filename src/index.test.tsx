import { screen } from "@testing-library/react";

test("renders page and App and react link", async () => {
  document.body.innerHTML = '<div id="root"></div>';

  await import(".");

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
