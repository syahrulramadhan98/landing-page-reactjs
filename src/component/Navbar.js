
import {Navbar, Container, Nav} from 'react-bootstrap'
const NavigationBar = () =>{
    return(
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="/">Types Of Cats</Navbar.Brand>
                <Nav>
                <Nav.Link href="#terbanyak">Mosted Cats</Nav.Link>
                <Nav.Link href="#kucing">Types Of Cats</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
export default NavigationBar