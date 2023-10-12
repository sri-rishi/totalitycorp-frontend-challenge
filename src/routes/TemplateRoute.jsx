import { Outlet } from "react-router-dom";
import { Navbar} from "../component";

const TemplateRoute = () => {
    return (
        <div className="flex flex-col gap-4">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default TemplateRoute;