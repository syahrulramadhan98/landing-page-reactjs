import{Card, Container, Row, Col, Image} from 'react-bootstrap'
import Persia from '../assets/images/kucing_persia.jpg'
import Ragdoll from '../assets/images/kucing_ragdoll.jpg'
import Norwegian from '../assets/images/kucing_norwegian.jpg'

const MostedView = () =>{
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center">Mosted Liked Of Cats</h1>
                <Row>
                    <Col className="movieWrappper" id="#terbanyak">
                        <Card className="text-dark movieImage">
                            <Image src={Persia} alt="Cat Of Persia" />
                                <Card.Title className="text-center">Persian Cat</Card.Title>
                                <Card.Text className="justify-content-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="justify-content-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col className="movieWrapper">
                        <Card className="text-dark movieImage">
                            <Image src={Ragdoll} alt="Cat Of Persia" />
                                <Card.Title className="text-center">Ragdoll Cat</Card.Title>
                                <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                    <Col className="movieWrapper">
                        <Card className="text-dark movieImage">
                            <Image src={Norwegian} alt="Cat Of Persia" />
                                <Card.Title className="text-center">Norwegian Cat</Card.Title>
                                <Card.Text className="text-center">
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default MostedView