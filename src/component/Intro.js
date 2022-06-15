import{ Container, Row, Col, Button } from 'react-bootstrap'

const IntroComponent = () =>{
    return(
        <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-item-center">
          <Row>
            <Col>
            <div className="title">choose your favorite cat</div>
            <div className="title">many types of cats are very cute</div>
            <div className="IntroBtn mt-4 text-center">
                <Button variant="light" className="mb-3" href="#terbanyak">See All</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
export default IntroComponent