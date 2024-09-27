import { Button } from '@nextui-org/button';
import { Input, Link } from '@nextui-org/react';

interface SignUpFormProps {
    changeAuthneticationMode: () => void;
    handleSubmit: () => void;
}

function SignUpForm(props: SignUpFormProps) {
    const { changeAuthneticationMode, handleSubmit } = props;

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();
        handleSubmit()
    }

    return (
        <form className="max-w-sm mx-auto" onSubmit={submitForm}>
            <div className="mb-5">
                <Input type="email" label="Email" placeholder="Enter your email" />
            </div>
            <div className="mb-5">
                <Input type="text" label="Username" placeholder="Choose a username" />
            </div>
            <div className="mb-5">
                <Input type="password" label="Password" />
            </div>
            <div className="mb-5">
                <Input type="password" label="Repeat Password" />
            </div>
            <div className="flex justify-between mb-5">
                <Button type="submit">Sign Up</Button>
            </div>
            <div className="flex items-center justify-between">
                <span> Already have an account?</span>
                <Link onClick={changeAuthneticationMode}>Log in</Link>
            </div>
        </form>
    );
}

export default SignUpForm;