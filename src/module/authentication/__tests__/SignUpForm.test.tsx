import { render, screen, fireEvent } from "@testing-library/react";
import SignUpForm from "../SignUpForm";

describe("SignUpForm Component", () => {
    const mockChangeAuthneticationMode = jest.fn();
    const mockHandleSubmit = jest.fn();

    const setup = () => {
        return render(
            <SignUpForm
                changeAuthneticationMode={mockChangeAuthneticationMode}
                handleSubmit={mockHandleSubmit}
            />
        );
    };

    it("renders the form with all input elements", () => {
        setup();

        // Check if the email input is rendered
        const emailInput = screen.getByPlaceholderText(/enter your email/i);
        expect(emailInput).toBeInTheDocument();

        // Check if the username input is rendered
        const usernameInput = screen.getByPlaceholderText(/choose a username/i);
        expect(usernameInput).toBeInTheDocument();

        // Check if the password input is rendered
        const passwordInput = screen.getByLabelText("Password");
        expect(passwordInput).toBeInTheDocument();

        // Check if the repeat password input is rendered
        const repeatPasswordInput = screen.getByLabelText("Repeat Password");
        expect(repeatPasswordInput).toBeInTheDocument();

        // Check if the "Sign Up" button is rendered
        const signUpButton = screen.getByRole('button', { name: /sign up/i });
        expect(signUpButton).toBeInTheDocument();

        // Check if the login link is rendered
        const loginLink = screen.getByText(/log in/i);
        expect(loginLink).toBeInTheDocument();
    });

    it("calls handleSubmit when 'Sign Up' button is clicked", () => {
        setup();

        // Find the "Sign Up" button
        const signUpButton = screen.getByRole('button', { name: /sign up/i });

        // Simulate form submission (button click)
        fireEvent.click(signUpButton);

        // Assert that handleSubmit is called
        expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });

    it("calls changeAuthneticationMode when 'Log in' link is clicked", () => {
        setup();

        // Find the "Log in" link
        const loginLink = screen.getByText(/log in/i);

        // Simulate link click
        fireEvent.click(loginLink);

        // Assert that changeAuthneticationMode is called
        expect(mockChangeAuthneticationMode).toHaveBeenCalledTimes(1);
    });
});
