import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card"><p></p><center>
          <img src={process.env.PUBLIC_URL+'/4.jpg'} className='' alt="imgname" width="400" heigh="275" />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Panupong Tubkerd (080-6825860)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>
          </center>
        </div>
      </div>
      
    </div>
  )
}
