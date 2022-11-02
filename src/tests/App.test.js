import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../App";

test("Integration First Testing", async() => {
  render(<App />);
  const inputElem = screen.getByRole("textbox");
  const submitButton = screen.getByRole("button", {
    name: "Comment",
    exact: false,
  });
  const checkBox = screen.getByLabelText("I agree to terms and conditions", {
    exact: false,
  });

  await userEvent.type(inputElem,'Something');
  await userEvent.click(checkBox);
  await userEvent.click(submitButton);

  const commentLi = screen.getByText('Something');
  expect(commentLi).toBeInTheDocument();



  
});


test("2 Comment gets displayed after submitting Testing", async() => {
    render(<App />);
    const inputElem = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button", {
      name: "Comment",
      exact: false,
    });
    const checkBox = screen.getByLabelText("I agree to terms and conditions", {
      exact: false,
    });
  
    await userEvent.type(inputElem,'Something');
    await userEvent.click(checkBox);
    await userEvent.click(submitButton);
  
    await userEvent.type(inputElem,'Hari Om');
    // await userEvent.click(checkBox);
    await userEvent.click(submitButton);

    const listItem = screen.getAllByRole('listitem');
    expect(listItem.length).toEqual(2);
  });