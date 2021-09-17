import React from 'react';
import './forgotpage.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

function Forgotpage() {

    const [fpsubmit, setFpsubmit] = useState(false);
    const [forgotpasswordlink, setforgotPasswordlink] = useState(true);
    const history = useHistory();
    const formikemail = useFormik({
        initialValues: {
            email: ''
        },
        validate: (values) => {
            let errors = {}
            if (!values.email) {
                errors.email = "Email required"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address"
            }
            return errors;
        },
        onSubmit: (values) => {
            setFpsubmit(true);
            console.log(values);
        }
    })
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmpassword: ''
        },
        validate: (values) => {
            let errors = {};
            if (!values.password) {
                errors.password = "Password required"
            } else if (values.password.length < 8) {
                errors.password = "Password must contain atleast 8 characters"
            }
            if (values.password !== values.confirmpassword) {
                errors.confirmpassword = "Password/Confirm password doesnot match"
            }
            return errors;
        },
        onSubmit: (values) => {
            console.log(values);
            history.push('/login')
        }
    })
    return (
        <motion.div
            key="login"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "200vw", opacity: 0 }}
            transition={{
                delay: 0.1,
                x: { type: "spring", stiffness: 30 },
            }}
            className="container-lg mt-4">
            <div className="row fp-container">
                <div className="fp-form-container col-12">
                    {
                        forgotpasswordlink ? (
                            <form onSubmit={formik.handleSubmit} method="post">
                                <h2 className="text-center mb-3">Reset Password</h2>
                                <div className="text-center">
                                    <div>
                                        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="fp-password-input col-8" placeholder="password" />
                                        {formik.errors.password ? <div className="fp-errors col-12">{formik.errors.password}</div> : null}
                                    </div>
                                    <div>
                                        <input type="password" name="confirmpassword" value={formik.values.confirmpassword} onChange={formik.handleChange} className="fp-password-input" placeholder="confirm password" />
                                        {formik.errors.confirmpassword ? <div className="fp-errors col-12">{formik.errors.confirmpassword}</div> : null}
                                    </div>
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <input type="submit" value="Submit" className="btn fp-submit-btn" />
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={formikemail.handleSubmit} method="post">
                                <h2 className="text-center mb-3">Forgot Password ?</h2>
                                <h5 className="text-center mb-4">Enter your registered email to reset the password</h5>
                                <div>
                                    <input type="email" name="email" value={formikemail.values.email} onChange={formikemail.handleChange} className="fp-email-input col-12" placeholder="email" />
                                    {formikemail.errors.email ? <div className="fp-errors col-12">{formikemail.errors.email}</div> : null}
                                </div>
                                <div className="col-12 text-center mt-4">
                                    <input type="submit" value="Reset password" className="btn fp-submit-btn" />
                                </div>
                            </form>
                        )
                    }
                    {
                        fpsubmit ?
                            (
                                <div className="text-center font-weight-light">
                                    <h3>A unique link to reset your password has been sent to your email. To reset your password, click the following link and follow the instructions.</h3>
                                </div>
                            )
                            : null
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Forgotpage
