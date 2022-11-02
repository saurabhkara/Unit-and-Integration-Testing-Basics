import { screen, render, logRoles, fireEvent } from "@testing-library/react";
import CommentForm from "../component/CommentForm";
import userEvent from '@testing-library/user-event';

test("Intial Conditions", () => {
  render(<CommentForm />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();

  const checkBox = screen.getByLabelText("I agree to terms and conditions", {
    exact: false,
  });
  expect(checkBox).toBeInTheDocument();

  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeDisabled();
});


test('Enable sumit button on type and Checkbox click',()=>{
    render(<CommentForm />)
    const inputElement = screen.getByPlaceholderText('Write your comment Here',{exact:false});
    const checkBox = screen.getByLabelText('I agree to terms and conditions',{exact:false});
    const button = screen.getByRole("button",{name:'Comment', exact:false});

    fireEvent.change(inputElement,{target:{value:"something"}});
    fireEvent.click(checkBox);

    expect(button).toBeEnabled();

    fireEvent.click(checkBox);
    expect(button).toBeDisabled();
})

test('alternative way of 2nd', async ()=>{

  render(<CommentForm />);
  const iT = screen.getByRole('textbox');
  const label = screen.getByLabelText('I agree to terms and conditions',{exact:false});
  const btn  = screen.getByRole('button',{name:'Comment', exact:false})

  await userEvent.type(iT,'anything');
  await userEvent.click(label);
  // await userEvent.click(btn);

  expect(btn).toBeEnabled();

});


