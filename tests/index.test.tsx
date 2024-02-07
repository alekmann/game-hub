import React from "react";
import { render, screen } from "@testing-library/react";
import { expect } from "chai";

it("Render Test", async () => {
  render(<button>Save</button>);

  const button = await screen.getByText("Save");
  expect(button).to.be.not.null;

  const buttonDom = await screen.getByRole("button");
  expect(buttonDom).to.be.not.null;
});
