import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [message, setMessage] = useState('');

    const hanldeLogin = (event) => {


        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password).then((result) => {
            const user = result.user;
            console.log(user)
            setMessage('Logged in successfully');
            form.reset();
        }).catch((error) => {
            setMessage(error.message)
        })
    }
    return (
        <>
        <Helmet>
            <title>Login</title>
        </Helmet>
            <div className="pt-5">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={hanldeLogin} className="card-body">
                                <h3 className="font-bold text-3xl">Please Login</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="Enter your email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" required placeholder="Password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className="btn btn-primary" />
                                </div>
                                <label className="label">
                                    <Link to="/signup" className="label-text-alt link link-hover">New to A12? Sign Up!</Link>
                                </label>
                                <p>{message}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;