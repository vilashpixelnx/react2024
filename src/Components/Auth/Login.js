import { React, useState, useContext } from "react";
import axios from 'axios';
function Login() {

    const [signUpData, setsignUpData] = useState('');
    const [inputData, setInputData] = useState({ uemail: '', pwd: '' })
    const handleInput = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
    const otpSubmit = (e) => {
        e.preventDefault()
        if (!inputData.uemail || !inputData.pwd) {
            alert('Please Enter your Details');
        }
        else {

            axios.post('http://localhost:3001/api/login', inputData)
                .then((response) => {
                    // console.log(response.data.data.email);

                    console.log(response.data.message , "from response");
                    console.log(signUpData);
                    if(response.data.message === "Login Successfully."){
                        alert(response.data.message);
                        setsignUpData(response.data.data);
                        console.log(response.data.message, 'from login message');
                        console.log(response.data.data, 'from login data');
                    }

                    else if (response.data.message === "The account is not verified please verify the account."){
                        alert(response.data);
                    }
                    else
                    {
                        alert("Invalid User Name and Password");
                    }

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
                                                <h1>this is login data - {signUpData.fullname}, {signUpData.email}</h1>
                                                {/* <a><img src="../../../public/images/logo.png" alt="logo" /></a> */}
                                                <p className="autho-model-sttl">Adipiscing elit, sed do eiusmod tempor incieredidunt ut laererbore et dolore mereagna aliqua.</p>
                                                <h2 className="autho-model-ttl">Login</h2>
                                            </div>

                                            <div className="autho-model-filed">
                                                <form onSubmit={otpSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="e-form-field mb-20">
                                                                <label>Email</label>
                                                                <input className="e-field-inner" placeholder="Enter email" type="email" name="uemail" value={inputData.uemail} onChange={handleInput} />
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
                                                                <button type='submit' className="e-btn" >Login</button>
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

export default Login;
