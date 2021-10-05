import React from 'react'

const RoleContainer = ({title,roles}) => {
    return (
        <>
        <div className="row d-flex gy-3 mt-5">
          <div className=" col-lg-12">
            <h2 className="role_title text-center">{title}</h2>
          </div>
          <div className="our_roles col-lg-12 d-flex justify-content-between">
            <div className="row d-flex flex-column col-lg-4 gy-4">
              <div className="Rounder_container">
                <h2>{roles[0]}</h2>
              </div>
              <div className="Rounder_container">
                <h2>{roles[1]}</h2>
              </div>
            </div>
            <div className="row d-flex flex-column col-lg-4  gy-4">
              <div className="Rounder_container">
                <h2>{roles[2]}</h2>
              </div>
              <div className="Rounder_container">
                <h2>{roles[3]}</h2>
              </div>
            </div>
            <div className="row d-flex flex-column col-lg-4  gy-4">
              <div className="Rounder_container">
                <h2>{roles[4]}</h2>
              </div>
              <div className="Rounder_container">
                <h2>{roles[5]}</h2>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default RoleContainer
