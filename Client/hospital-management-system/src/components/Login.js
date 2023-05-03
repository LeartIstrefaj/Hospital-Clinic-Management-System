export const Login = () => {
    return (

        <div className="container">
            <div className="row d-flex justify-content-center align-items-center" id="log">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center login">

                    <h2>🖐</h2>
                    <h3 className="text-center login-title">Welcome Back!</h3>
                    <input type="text" className="form-control" placeholder="Work email*" />
                    <input type="password" className="form-control" placeholder="Password*" />
                    <a href="" className="btn btn-login">Login</a>

                    <span className="footer-copyright-login">&copy; 2023</span>
                </div>

            </div>
        </div>

    );
}