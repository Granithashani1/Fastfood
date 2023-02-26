import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Footer = () => {
  return (
    <>
    <footer className="container1" >
      <div >
        <div className="row" >
          <div className="store">
            <h3>Company</h3>
            <ul>
              <li>Site Map</li>
              <li>Legal</li>
              <li>Agent Admin</li>
              <li>Careers</li>
              <li>Affiliate</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="about">
            <h3>About</h3>
            <ul>
              <li>About us</li>
              <li>Clients</li>
              <li>Services</li>
              <li>Best Sellers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="legal">
            <h3>Legal</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Legality</li>
              <li>Author License</li>
            </ul>
          </div>
          <div className="Subscribe">
            <h3>Subscribe</h3>
            <p>
              {" "}
              Enim minim veniam quis nostrud exercitation ullamco laboris nisi
              ut aliquip exea commodo consequat duis sed aute irure. Phone . +54
              356 945234
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Button variant="primary" className="btn1">
                Send
              </Button>{" "}
            </Form.Group>
          </div>
        </div>
        <div>
          <div className="reserved"><h4>© Copyright EstateAgency All Rights Reserved.</h4></div>
          <div className="icon">
          </div>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
