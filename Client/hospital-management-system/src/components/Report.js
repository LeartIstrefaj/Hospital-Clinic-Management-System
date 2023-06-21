import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Report() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qlp11m8', 'template_se55wnc', form.current, 'k-SgSB8S9JZgxC-Qd')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center" id="log">
                <form ref={form} onSubmit={sendEmail} className="col-12 d-flex flex-column justify-content-center align-items-center login report">

                    <h2><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-send-fill send-icon" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg></h2>
                    <h3 className="text-center login-title text-capitalize">Report the problem!</h3>
                    <input type="text" name='fullname' className="form-control" placeholder="Full Name*" required />
                    <input type="text" name='email' className="form-control" placeholder="Email*"  required />
                    <textarea id="message" name="message" className="form-control" rows="30" cols="33" placeholder='Message*' required>
                    </textarea>
                    <button type="submit" className="btn btn-login">Send</button>

                    <span className="footer-copyright-login">&copy; HMS</span>
                </form>

            </div>
        </div>
    )
}
