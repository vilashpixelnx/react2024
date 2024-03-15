import { React, useState, createContext, useEffect } from "react";
import axios from 'axios';
import AccountVerification from "./AccountVerification";
export const signDetails = createContext()
function SignUp() {
    const [signUpData, setsignUpData] = useState(() => {
        return JSON.parse(localStorage.getItem('signupKey'))
            || ('')
    });
    const [inputData, setInputData] = useState({ uname: '', uemail: '', pwd: '' })
    // useEffect(() => {
    //     localStorage.setItem('localStorageKey', JSON.stringify(signUpData));
    // }, [signUpData]);

    useEffect(() => {
        if (signUpData !== undefined) {
            localStorage.setItem('signupKey', JSON.stringify(signUpData));
        }
    }, [signUpData]);
    // useEffect(() => {
    //     const inputData = JSON.parse(localStorage.getItem('inputData'));
    //     if (inputData) {
    //         setInputData(inputData);
    //     }
    // }, []);

    const handleInput = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputData.uname || !inputData.uemail || !inputData.pwd) {
            alert('Please Enter your Details');
        }
        else {

            axios.post('http://localhost:3001/api/register', inputData)
                .then((response) => {
                    // console.log(response.data.message);
                    // console.log(response.data);
                    alert(response.data.message);
                    setsignUpData(response.data.data);
                    console.log(signUpData, "login page se sign up all data");

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
                                                {/* <a><img src="../../../public/images/logo.png" alt="logo" /></a> */}
                                                <p className="autho-model-sttl">Adipiscing elit, sed do eiusmod tempor incieredidunt ut laererbore et dolore mereagna aliqua.</p>
                                                <h2 className="autho-model-ttl">Sign Up</h2>
                                            </div>

                                            <div className="autho-model-filed">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="e-form-field mb-20">
                                                                <label>Name</label>
                                                                <input className="e-field-inner" placeholder="Enter name" type="text" name="uname" value={inputData.uname} onChange={handleInput} autoComplete="new-password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="e-form-field mb-20">
                                                                <label>Email</label>
                                                                <input className="e-field-inner" placeholder="Enter email" type="email" name="uemail" value={inputData.uemail} onChange={handleInput} autoComplete="new-password" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="e-form-field mb-20">
                                                                <label>Password</label>
                                                                <input className="e-field-inner" placeholder="Enter password" type="Password" name="pwd" value={inputData.pwd} onChange={handleInput} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="">
                                                                <a className="e-btn" >Login</a>
                                                                <button type='submit' className="e-btn " >Sign Up</button>
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
            <hr />
            <signDetails.Provider value={{ ContextSignUP: signUpData }}>
                <AccountVerification />
            </signDetails.Provider>
        </>
    );
}

export default SignUp;
