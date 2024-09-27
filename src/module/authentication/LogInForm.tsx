import { Input } from "@nextui-org/input";
import { Button, Checkbox, Link } from '@nextui-org/react';

interface LoginFormProps {
    changeAuthneticationMode: () => void;
    handleSubmit: () => void;
}

function LoginForm(props: LoginFormProps) {
    const { changeAuthneticationMode, handleSubmit } = props;

    return (
        <form className="max-w-sm mx-auto" >
            <Input type="email" label="Email" className="mb-5" placeholder="Enter your email" />
            <Input type="password" className="mb-5" label="Password" placeholder="Enter your password" />
            <div className="flex justify-between mb-5">
                <Button type="submit" color="primary" onPress={handleSubmit}>Log In</Button>
                <Checkbox defaultSelected>Remember me</Checkbox>
            </div>
            <div className="flex items-center justify-between">
                <span>Don't have an account? </span><Link onClick={changeAuthneticationMode}>Sign up</Link>
            </div>
        </form>
    );
}

export default LoginForm;
