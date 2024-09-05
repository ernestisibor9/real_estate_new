import React, { useEffect, useState } from "react";
import axios from "axios";

// import Navbar from "../../component/Navbar/Navbar";
import "./LeaseProperty.css";

function LeaseProperty() {
  const [leaseProperties, setLeaseProperties] = useState([]);

  // Get All Poperties Based on Lease
  const getAllLeaseProperties = async () => {
    const response = await axios.get(
      "https://westminster-real-estate-backapp.onrender.com/api/property/get-property-lease"
    );
    setLeaseProperties(response.data.properties);

    console.log(response.data.properties);
  };
  useEffect(() => {
    getAllLeaseProperties();
  }, []);

  let limitFeatured = leaseProperties.slice(0, 12);
  return (
    <div>
      <div className="dashboard-bg">
        <div className="dashboard-head">
          <h1>Lease Property</h1>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center text-center">
          <h3 className="text-center">Lease Property</h3>

          <div className="mt-3 text-danger fw-bold"></div>
          {limitFeatured.map((property) => {
            return (
              <div className="col-md-6 mt-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      {property.image.length > 0 && (
                        <div className="d-flex justify-content-around">
                          <div className="">
                            <img
                              src={require(`../../images/${property.image[0]}`)}
                              alt=""
                              className="my-img hover-image"
                            />
                          </div>
                          <div className="property-text">
                            <p className=" pt-3">Title: {property?.title}</p>
                            <p className="">Type: {property?.propertyTypes}</p>
                            <p className="">
                              Price: &#163;{property?.price.toFixed(2)}
                            </p>
                            <p className="">Location: {property?.location}</p>
                            <div>
                              <button
                                type="button"
                                class="btn btn-success"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal33"
                              >
                                Lease Now
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal33"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title text-center fs-5" id="exampleModalLabel">
                Lease Now
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h3 className="text-center">Contact us +44 7992 1702 45</h3>
              <h6 className="text-center">to Lease this property</h6>
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaseProperty;
