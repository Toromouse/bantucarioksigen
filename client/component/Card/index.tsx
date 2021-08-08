import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

interface DataCard {
  namaToko: string;
  provinsi: string;
  kota: string;
  alamat: string;
  kontak: number;
  statusBuka: string;
  stokBarang: string;
  antrian: string;
  waktuBuka: string;
  updated_date: string;
}

export default function Card(props: DataCard) {
  return (
    <div>
      <MDBContainer>
        <MDBRow className="justify-content-md-center">
          <MDBCol sm="8">
            <div
              className="cardRS col-md-12 mb-3 "
              data-string="Alkes Central Medica"
            >
              <div className="card" style={{ backgroundColor: "#F1F3F0" }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-7">
                      <h5 className="mb-0" style={{ color: "#4D514D" }}>
                        {props.namaToko}
                      </h5>
                      <p
                        className="mb-0"
                        style={{ fontSize: 14, color: "#4D514D" }}
                      >
                       {props.alamat}
                      </p>
                    </div>
                    <div className="col-md-5 text-right">
                      {/* <span class="fa fa-bed badge badge-info" aria-hidden="true"> IGD Khusus Covid 19</span> */}
                      <p
                        className="mt-0 mb-1"
                        style={{ fontSize: 13, color: "grey" }}
                      >
                       Buka {props.waktuBuka}
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: 18, color: "#4D514D" }}
                      >
                        <b>{props.stokBarang}</b>
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: 14, color: "#4D514D" }}
                      >
                      {props.antrian}
                      </p>
                      <p
                        className="mb-0"
                        style={{ fontSize: 13, color: "grey" }}
                      >
                       {props.updated_date}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="card-footer"
                  style={{ backgroundColor: "#F1F3F0" }}
                >
                  <div style={{ textAlign: "right" }}>
                    <i style={{ fontSize: 13, color: "grey" }}>
                      Kontak Darurat &nbsp;
                    </i>
                    <i
                      className="fa fa-phone"
                      style={{ color: "#000000" }}
                      aria-hidden="true"
                    >
                      {" "}
                      &nbsp;
                    </i>
                    <span style={{ fontSize: 13, color: "grey" }}>
                      {props.kontak}
                    </span>
                    <a
                      href="#"
                      className="btn ml-1"
                      style={{
                        backgroundColor: "#073180",
                        color: "#FFFFFF",
                        marginLeft: "10px",
                        padding: "6px 10px 6px 10px",
                      }}
                    >
                      <i className="fa fa-map-marker" aria-hidden="true">
                        {" "}
                        Get Lokasi
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}