import React from 'react';
import { Link } from 'react-router-dom';

function Footer (props) {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>@2020 Copywrite</h5>
                        <ul className="list-unstyled">
                            <li></li>
                            <li>Photographer: Carolyn E. Massey</li>
                            <li>Logo: Nadia Lozano</li>
                            <li><Link to='https://q-the-mic.pinecast.co'>Find all our episodes</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social Media</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/qmicradio/?hl=en"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/QtheMicRadio/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/qthemicradio"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-spotify" href="https://open.spotify.com/show/5pv0XmNH3EMLamVug005pj"><i className="fa fa-spotify" /></a>{' '}
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12156094301"><i className="fa fa-phone" /> 1-215-609-4301</a><br />
                        <a role="button" className="btn btn-link" href="mailto:qthemicradio@gmail.com"><i className="fa fa-envelope-o" /> qthemicradio@gmail.com</a>
                    </div>
                    </div>
                </div>
        </footer>
    )
}









export default Footer;