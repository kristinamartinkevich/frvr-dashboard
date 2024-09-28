import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LogInForm";

describe("LoginForm Component", () => {
    const mockChangeAuthneticationMode = jest.fn();
    const mockHandleSubmit = jest.fn();

    const setup = () => {
        return render(
            <LoginForm
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

        // Check if the password input is rendered
        const passwordInput = screen.getByPlaceholderText(/enter your password/i);
        expect(passwordInput).toBeInTheDocument();

        // Check if the "Log In" button is rendered
        const loginButton = screen.getByRole('button', { name: /log in/i });
        expect(loginButton).toBeInTheDocument();

        // Check if the checkbox is rendered
        const checkbox = screen.getByLabelText(/remember me/i);
        expect(checkbox).toBeInTheDocument();

        // Check if the link is rendered
        const signUpLink = screen.getByText(/sign up/i);
        expect(signUpLink).toBeInTheDocument();
    });

    it("calls handleSubmit when 'Log In' button is clicked", () => {
        setup();

        // Find the "Log In" button
        const loginButton = screen.getByRole('button', { name: /log in/i });

        // Simulate form submission (button click)
        fireEvent.click(loginButton);

        // Assert that handleSubmit is called
        expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });

    it("calls changeAuthneticationMode when 'Sign up' link is clicked", () => {
        setup();

        // Find the "Sign up" link
        const signUpLink = screen.getByText(/sign up/i);

        // Simulate link click
        fireEvent.click(signUpLink);

        // Assert that changeAuthneticationMode is called
        expect(mockChangeAuthneticationMode).toHaveBeenCalledTimes(1);
    });
});