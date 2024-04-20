import { useState } from "react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data[carID].map((car, id) => (
        <div key={id} className="box-cars">
          {/* car */}
          <div className="pick-car">
            {carLoad && <span className="loader"></span>}
            <img
              style={{ display: carLoad ? "none" : "block" }}
              src={car.img}
              alt="car_img"
              onLoad={() => setCarLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description" style={{width: "28rem", border: "1px", borderRadius: "8px 8px 0px 0px"}}>
            <div className="pick-description__price">
                          <center>Driver Details</center>
            </div>
            <div className="pick-description__table">

              <div className="pick-description__table__col">
                <span>Name </span>
                <span>{car.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>D.O.B</span>
                <span>{car.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Experience </span>
                <span>{car.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>D.L </span>
                <span>{car.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Rent</span>
                <span>{car.transmission}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section" style={{border: "1px", borderRadius: "8px"}}>
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CarBox;
