import { React, useContext, useState, useEffect } from "react";
import axios from 'axios';
import { signDetails } from "./SignUp";

function AccountVerification() {
    // const localStorageKey = "signupKey"

    const { ContextSignUP } = useContext(signDetails);
    console.log(ContextSignUP, "usecontext");
    const [OtpData, setOtpData] = useState({ otp: "" })
    // useEffect(() => {
    //     localStorage.setItem('localStorageKey', JSON.stringify(ContextSignUP));
    // }, [ContextSignUP]);

    // useEffect(() => {
    //     const ContextSignUP = JSON.parse(localStorage.getItem('ContextSignUP'));
    //     if (ContextSignUP) {
    //         setItems(ContextSignUP);
    //     }
    // }, []);

    const handleInput = (e) => {
        setOtpData({ ...OtpData, [e.target.name]: e.target.value })
        // console.log(OtpData)
        // console.log(OtpData)

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!OtpData.otp) {
            alert('Please Enter your Otp');
        }
        else {
            axios.post("http://localhost:3001/api/verify-otp", { ...OtpData, user_id: ContextSignUP._id })
                .then((response) => {
                    // console.log(response);
                    alert(response.data.message);
                    // console.log(response.data.message, "message");
                    // console.log(response.data.data, "data");
                    // setOtpData(response.data.data);

                })
        }
    }

    return (
        <>
            <div className="e-autho-model" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <div className="modal-inner">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="modal-inner-box">
                                            <div className="autho-model-header text-center">
                                                {/* <h1> data from login page in otp section {ContextSignUP._id}</h1> */}
                                                {/* <a><img src="../../../public/images/logo.png" alt="logo" /></a> */}
                                                <p className="autho-model-sttl">Adipiscing elit, sed do eiusmod tempor incieredidunt ut laererbore et dolore mereagna aliqua.</p>
                                                <h2 className="autho-model-ttl">OTP Verification</h2>
                                            </div>

                                            <div className="autho-model-filed">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row">

                                                        <div className="col-md-12">
                                                            <div className="e-form-field mb-20">
                                                                <label>OTP</label>
                                                                <input className="e-field-inner" placeholder="Enter Otp" type="number" name="otp" value={OtpData.otp} onChange={handleInput} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="">
                                                                <a className="e-btn black mr-5" >Back</a>
                                                                <button type='submit' className="e-btn " >Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <button type="button" className="autho-close" data-dismiss="modal">&times;</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountVerification;
