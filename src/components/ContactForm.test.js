import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("form can be filled in and submitted", () => {
  // arrange
  const { getByLabelText, getByTestId } = render(<ContactForm />);

  // act
  const firstNameInput = getByLabelText(/firstname/i);
  const lastNameInput = getByLabelText(/lastname/i);
  const emailInput = getByLabelText(/email/i);

  // act
  fireEvent.change(firstNameInput, { target: { value: 'Aidan' } });
  fireEvent.change(lastNameInput, { target: { value: 'Dang' } });
  fireEvent.change(emailInput, { target: { value: 'aidandang@email.com' } });

  // assert
  expect(firstNameInput.value).toBe("Aidan");
  expect(lastNameInput.value).toBe("Dang");
  expect(emailInput.value).toBe("aidandang@email.com");
});