import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom';
const AuthNavbar = (props) => {
    return (
      <div>
          <Navbar color="light" light expand="md">
              <Nav className="mr-auto" navbar>
                  <NavItem>
                      <NavLink tag={Link} to="/">Sign Up</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={Link} to="/sign-in">Sign In</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink tag={Link} to="/forgot-password">Forgot Password</NavLink>
                  </NavItem>
              </Nav>
          </Navbar>
      </div>
    );
}

export default AuthNavbar;