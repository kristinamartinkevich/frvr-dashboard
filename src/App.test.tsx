import { render } from "@testing-library/react";
import IndexPage from "./pages/index.tsx";


test('renders without crashing', () => {
    render(<IndexPage />);
});


