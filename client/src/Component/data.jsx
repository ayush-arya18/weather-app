import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInputGroup,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function Data(){
  const navigate = useNavigate();
    const handle=()=>{
      setTimeout(function() {
        navigate('/');
      }, 2000)
    }
  var [record, setRecord]=useState([])

    useEffect(()=>{fetch("http://localhost:9000/getData").then((data)=>data.json()).then((result)=>setRecord(result))

    })

    return (
        <>
            <div id="data">
              
                {record.map(function(data){
                  return (
                    <div>
                  <section className="vh-100">
                 <MDBContainer className="h-100 py-5">
                    <MDBRow className="  h-100">
                      <MDBCol md="8" lg="6" xl="4">
                              <MDBTypography tag="h3" className="mb-4 pb-2 fw-normal">
                                Check the weather forecast
                              </MDBTypography>
                              <div>
              <MDBInputGroup className="mb-3">
                <form action="http://localhost:9000/get" method ="post">
                  <input className="form-control rounded" type="text" name="city" placeholder="enter city name"></input>
                  <button className="btn btn-primary btn-sm" type="submit" onClick={handle}>submit</button>
                </form>
              </MDBInputGroup>
              </div>
                            <MDBCard className="shadow-0 border">
                              <MDBCardBody className="p-4">
                                <MDBTypography tag="h4" className="mb-1 sfw-normal">{data.name},{data.sys.country}</MDBTypography>
                                <p className="mb-2">
                                  Current temperature: <strong>{data.main.temp} C</strong>
                                </p>
                                <p>
                                  Feels like: <strong>{data.main.feels_like} C</strong>
                                </p>
                                <p>
                                  Max: <strong>{data.main.temp_max} C</strong>, Min: <strong>{data.main.temp_min} C</strong>
                                </p>
                                <p>
                                  Pressure: <strong>{data.main.pressure} atm</strong>, Humidity: <strong>{data.main.humidity} %</strong>
                                </p>
                                <p>
                                  Wind: <strong>{data.wind.speed} km/h</strong>, Direction: <strong>{data.wind.deg} deg</strong>
                                </p>
                          <div className="d-flex flex-row align-items-center">
                            <p className="mb-0 me-4">{data.weather[0].main}, Description: {data.weather[0].description}</p>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>
            </div>
                  )
                })
              }
            </div>
        </>
    
      )
}
export default Data;