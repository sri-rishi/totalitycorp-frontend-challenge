import { Route, Routes } from "react-router-dom";


import  TemplateRoute  from "./TemplateRoute";
import { AddressForm, Cart, PaymentDetailsForm, ShoppingPage } from "../pages";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TemplateRoute />}>
                <Route path="/" element={<ShoppingPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/address" element={<AddressForm />} />
                <Route path="/payment" element={<PaymentDetailsForm />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;