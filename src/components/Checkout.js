import React from 'react';

export default function Checkout() {
  return (
    <div>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="fullname"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="image"
            className="form-control"
            id="Mailingaddress"
            placeholder="Mailing address"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="image"
            className="form-control"
            id="CardNumber"
            placeholder="Card Number"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Checkout
        </button>
      </form>
    </div>
  );
}
