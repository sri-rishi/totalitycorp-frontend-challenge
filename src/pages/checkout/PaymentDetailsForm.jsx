import { useState } from "react";
import { Button, ConfirmOrderModal } from "../../component";
import { useSelector } from "react-redux";

const PaymentDetailsForm = () => {
	const {addressData} = useSelector(store => store?.products);
	const [showConfirmModel, setShowConfirmModel] = useState(false);
	const [formData, setFormData] = useState({})
	const handleInput = (e) => {
		const { name, value } = e.target
		if (name === 'number') e.target.value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19)
		if (name === 'mm' || name === 'yy') e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 2)
		if (name === 'mm' && value > 12) e.target.value = '12'
		if (name === 'cvc') e.target.value = value.toString().replace(/[^0-9]/g, '').substring(0, 3)

		setFormData({ ...formData, [name]: e.target.value })
	}

	const handleSubmit = () => {
		for (const i in formData) {
			if (!formData[i]) {
				alert(`${i}, Can't be empty`);
			}
		}

		if (formData.number) {
			if (formData.number.length < 19) {
				alert(`Number is too short`)
			} else if (formData.number.match(/[^0-9\s]/g)) {
				alert(`Wrong format, numbers only`)
			}
		}

		if (formData.cvc) {
			if (formData.cvc.length < 3) {
				alert(`CVC is too short`)
			} 
		}

		if (!formData.mm) {
			alert(`Month can't be empty `)
		}
		if (!formData.yy) {
			alert('Year Can`t be blank')
		}

		setShowConfirmModel(true);
		
		for (const i in formData) {
			setFormData((formData) => ({
				...formData, i: ""
			}))
		}
		
	}
    return (
        <div  className="min-h-screen flex flex-row items-center justify-center">
			<div className="flex flex-col w-full max-w-xl shadow-lg gap-4 p-4 items-center justify-center text-gray-700 font-semibold">
			<h5 className="text-2xl font-bold">Payment Details</h5>
				<div className="w-full md:w-4/5 flex flex-col items-center justify-center gap-4">
					<div className="w-full flex flex-col gap-2">
						<label htmlFor="name">
							Cardholder Name
						</label>
						<input 
							type='text' 
							placeholder='e.g. Jane Appleseed'
							name='name' 
							className="w-full border-2 p-2 rounded font-normal" 
							onChange={(e) => handleInput(e)}
						/>
					</div>

					<div className="w-full flex flex-col gap-2">
						<label htmlFor="number">
							Card Number	
						</label>
						<input 
							type='text' 
							placeholder='e.g. 1234 5678 9123 0000' 
							name='number' 
							className="w-full border-2 p-2 rounded font-normal" 
							minLength={19} 
							onChange={(e) => handleInput(e)}
						/>
					</div>

					<div className="flex flex-row items-center gap-4">
						<div className="w-full flex flex-col gap-2">
							<label>
								Exp. Date (MM/YY)
							</label>
							<div className="flex flex-row items-center gap-4">
								<input 
									type='text' 
									placeholder='MM' 
									name='mm' 
									className="w-full border-2 p-2 rounded font-normal"
									onChange={(e) => handleInput(e)}  
								/>
								<input 
									type='text' 
									placeholder='YY'  
									name='yy' 
									className="w-full border-2 p-2 rounded font-normal"  
									onChange={(e) => handleInput(e)}
								/>
							</div>
						</div>

						<div className="w-full flex flex-col gap-2">
							<label htmlFor="cvc">
								CVC
							</label>
							<input 
								type='text' 
								placeholder='e.g. 123' 
								name='cvc' 
								className="w-full border-2 p-2 rounded font-normal"
								onChange={(e) => handleInput(e)}
							/>
						</div>
					</div>
				</div>

				<Button 
					className={"flex flex-row items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-6 gap-4 rounded-xl"}
					text={"Submit"}
					onClick={() => handleSubmit()}
				/>
			</div>
			<div className={`${showConfirmModel ? "flex": "hidden" } w-full flex-row items-center justify-center fixed inset-0 z-40 bg-gray-50 bg-opacity-50`}>
				<ConfirmOrderModal setShowConfirmModel={setShowConfirmModel} addressData={addressData}/>
			</div>
			
		</div>
    )
}

export default PaymentDetailsForm;