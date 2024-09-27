import { Button } from '@nextui-org/button';
import { Input, Link } from '@nextui-org/react';

interface SignUpFormProps {
    changeAuthneticationMode: () => void;
    handleSubmit: () => void;
}

function SignUpForm(props: SignUpFormProps) {
    const { changeAuthneticationMode, handleSubmit } = props;

    return (
        <form className="max-w-sm mx-auto">
            <Input type="email" className="mb-5" label="Email" placeholder="Enter your email" />
            <Input type="text" className="mb-5" label="Username" placeholder="Choose a username" />
            <Input type="password" className="mb-5" label="Password" />
            <Input type="password" className="mb-5" label="Repeat Password" />
            <div className="flex justify-between mb-5">
                <Button type="submit" color="secondary" onPress={handleSubmit}>Sign Up</Button>
            </div>
            <div className="flex items-center justify-between">
                <span> Already have an account?</span>
                <Link onClick={changeAuthneticationMode}>Log in</Link>
            </div>
        </form>
    );
}

export default SignUpForm;