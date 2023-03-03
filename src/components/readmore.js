import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
         Read More
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chef</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        A chef is a professional cook and tradesman who is proficient in all
          aspects of food preparation, often focusing on a particular cuisine.
          The word "chef" is derived from the term chef de cuisine (French
          pronunciation: ​[ʃɛf də kɥizin]), the director or head of a kitchen.
          Chefs can receive formal training from an institution, as well as by
          apprenticing with an experienced chef. There are different terms that
          use the word chef in their titles, and deal with specific areas of
          food preparation. Examples include the sous-chef, who acts as the
          second-in-command in a kitchen, and the chef de partie, who handles a
          specific area of production. The kitchen brigade system is a hierarchy
          found in restaurants and hotels employing extensive staff, many of
          which use the word "chef" in their titles. Underneath the chefs are
          the kitchen assistants. A chef's standard uniform includes a hat
          (called a toque), neckerchief, double-breasted jacket, apron and
          sturdy shoes (that may include steel or plastic toe-caps)
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function ReadMore() {
  return (
    <>
      {[ 'end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default ReadMore;