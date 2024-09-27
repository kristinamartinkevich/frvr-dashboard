import { useState } from 'react';
import { useDashboardStore } from '@/store';
import LoginForm from './LogInForm';
import SignupForm from './SignUpForm';

function Authentication() {
    const { setLoggedIn } = useDashboardStore();
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = () => {
        setLoggedIn(true);
    }

    const toggleForm = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <div>
            {isSignUp ? (
                <LoginForm changeAuthneticationMode={toggleForm} handleSubmit={handleSubmit} />
            ) : (
                <SignupForm changeAuthneticationMode={toggleForm} handleSubmit={handleSubmit} />
            )}
        </div>
    );
}

export default Authentication;
