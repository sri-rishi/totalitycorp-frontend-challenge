import React, { useState } from 'react';
import { Button } from '../../component';
import { useDispatch } from 'react-redux';
import { setAddressData } from '../shoppingPage/productSlice';
import { useNavigate } from 'react-router-dom';

const AddressForm = () => {
  const [address, setAddresses] = useState(
    { 
        name:"", 
        street: "", 
        city: "", 
        state: "", 
        zip: "" 
    }
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addAddress = () => {
    if(
        address.name !== "" && 
        address.street !== "" &&
        address.city !== "" && 
        address.state !== "" && 
        address.zip !== "" 
    ) {
        dispatch(setAddressData(address));
        navigate("/payment");
        setAddresses((address) => ({
            ...address, 
            name:"", 
            street: "", 
            city: "", 
            state: "", 
            zip: "" 
        }));
    }else {
        alert("Please Enter full Address Information");
    }
  };

  return (
    <div className="min-h-screen flex flex-row items-center justify-center">
      <div className="flex flex-col w-full max-w-xl shadow-lg gap-4 p-4 items-center justify-center text-gray-700 font-semibold">
        <h5 className="text-2xl font-bold">Shipping Details</h5>
          <div className="w-full md:w-4/5 flex flex-col items-center justify-center gap-4">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="full-name">
                Full Name
              </label>
              <input
                  type="text"
                  name="full-name"
                  value={address.name}
                  onChange={(e) => setAddresses((address) => ({...address, name: e.target.value}))}
                  placeholder="Full Name"
                  className="w-full border-2 p-2 rounded font-normal"
                />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="street">
                Street Name
              </label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={(e) => setAddresses((address) => ({...address, street: e.target.value}))}
                placeholder="Street"
                className="w-full border-2 p-2 rounded font-normal"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="city">
                City
              </label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={(e) => setAddresses((address) => ({...address, city: e.target.value}))}
                placeholder="City"
                className="w-full border-2 p-2 rounded font-normal"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="state">
                State
              </label>
              <input
                type="text"
                name="state"
                value={address.state}
                onChange={(e) => setAddresses((address) => ({...address, state: e.target.value}))}
                placeholder="State"
                className="w-full border-2 p-2 rounded font-normal"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="zip">
                Zip
              </label>
              <input
                type="text"
                name="zip"
                value={address.zip}
                onChange={(e) => setAddresses((address) => ({...address, zip: e.target.value}))}
                placeholder="ZIP Code"
                className="w-full border-2 p-2 rounded font-normal"
              />
            </div>
          </div>
          <Button 
            onClick={() => addAddress()} 
            text={"Add Address"}
            className={"flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold p-2 gap-4 rounded-xl"}
          />
      </div>
    </div>
  );
};

export default AddressForm;
