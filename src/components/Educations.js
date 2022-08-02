import React from 'react'
import { HashLink as Link } from "react-router-hash-link";


const Educations = () => {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong><u>Tanulmányaim:</u></strong>
          </h6>
          <table className="striped">
            <thead>
              <tr>
                <th>Bizonyítvány:</th>
                <th>Dátum:</th>
                <th></th>
              </tr>
              <thead>
                <tr>
                  <td>Érettségi bizonyítvány</td>
                  <td>2019.06.21</td>
                  <td>
                    <Link to='/' className='btn cyan lighten-1'>
                      Itt megtekintheted:
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Junior Frontend Fejlesztő</td>
                  <td>2022.08...?</td>
                  <td>
                    <Link to='/' className='btn cyan lighten-1'>
                      Itt megtekintheted:
                    </Link>
                  </td>
                </tr>
              </thead>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Educations