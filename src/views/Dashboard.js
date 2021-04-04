import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-circle-09 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Alumnos</p>
                      <Card.Title as="h4">270</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <a className="stats text-warning" href="#">
                  <i className="fas fa-list-alt text-warning mr-1"></i>
                  Ver listado
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="fas fa-chalkboard-teacher text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Profesores</p>
                      <Card.Title as="h4">70</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <a className="stats text-success" href="#">
                  <i className="fas fa-list-alt text-success mr-1"></i>
                  Ver listado
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-info">
                      <i className="fas fa-book text-info"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Áreas</p>
                      <Card.Title as="h4">26</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <a className="stats text-info" href="#">
                  <i className="fas fa-list-alt text-info mr-1"></i>
                  Ver listado
                </a>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-danger">
                      <i className="nc-icon nc-grid-45 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Grados y Secciones</p>
                      <Card.Title as="h4">10</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Users Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00PM",
                        "6:00PM",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Asistencia de Alumnos</Card.Title>
                <p className="card-category">% por cada grado</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["20%","38%","12%","20%","10%"],
                      series: [20,38,12,20,10],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  1° <i className="fas fa-circle text-danger"></i>
                  2° <i className="fas fa-circle text-warning"></i>
                  3° <i className="fas fa-circle text-success"></i>
                  4° <i className="fas fa-circle text-primary"></i>
                  5°
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  De la última semana
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
