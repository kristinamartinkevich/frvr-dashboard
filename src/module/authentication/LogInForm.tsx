import { Input } from "@nextui-org/input";
import { Button, Checkbox, Link } from '@nextui-org/react';

interface LoginFormProps {
    changeAuthneticationMode: () => void;
    handleSubmit: () => void;
}

function LoginForm(props: LoginFormProps) {
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
                <Input type="password" label="Password" placeholder="Enter your password" />
            </div>
            <div className="flex justify-between mb-5">
                <Button type="submit">Log In</Button>
                <Checkbox defaultSelected>Remember me</Checkbox>
            </div>
            <div className="flex items-center justify-between">
                <span>Don't have an account? </span><Link onClick={changeAuthneticationMode}>Sign up</Link>
            </div>
        </form>
    );
}

export default LoginForm;
