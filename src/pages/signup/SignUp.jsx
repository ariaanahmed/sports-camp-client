import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../shared/socialLogin/SocialLogin';

const SignUp = () => {
    const [message, setMessage] = useState('');

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const hanldeSignUp = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photoURL, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setMessage('Your password did not match');
            return;
        } else if (password.length < 6) {
            setMessage('at least 6 characters long');
            return;
        } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setMessage('at least one special character');
            return;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setMessage('at least one capital letter');
            return;
        }

        createUser(email, password).then((result) => {
            const newUser = result.user;
            console.log(newUser);
            form.reset();
            setMessage('Signed Up successfully');
            updateUserProfile(result.user, name, email, photoURL);
        }).catch((error) => {
            setMessage(error.message)
        })

        const updateUserProfile = (user, name, email, photoURL) => {
            updateProfile(user, {
                displayName: name,
                email: email,
                photoURL: photoURL
            }).then(() => {

                const saveUser = {name: user.displayName, email: user.email}
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/');
                        }
                    })
            })
        }
    }
    return (
        <>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div>
                <div className="pt-5">
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={hanldeSignUp} className="card-body">
                                    <h3 className="font-bold text-3xl pb-3">Sign Up</h3>
                                    <div className="form-control">
                                        <input type="text" name="name" required placeholder="Full name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name="photoURL" required placeholder="Photo URL" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name="email" required placeholder="Enter your email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <input type="password" name="confirmPassword" required placeholder="Confirm Password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <input type="submit" value="sign up" className="btn btn-primary" />
                                    </div>
                                    <label className="label">
                                        <Link to="/login" className="label-text-alt link link-hover">Already have an Account? Login!</Link>
                                    </label>
                                    <p>{message}</p>
                                    <SocialLogin/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;