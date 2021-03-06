import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import MyButton from '../../utils/myButton';
import PostScream from '../Scream/PostScream';
import Notifications from './Notifications';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// Material UI Icon
import HomeIcon from '@material-ui/icons/Home';

// Redux
import {connect} from 'react-redux'; 

export class Navbar extends Component {
render() {
    const {authenticated} = this.props;
    return (
    <AppBar>
        <Toolbar className="nav-container">
        {authenticated?(
        <Fragment>
            <PostScream/>
            <Link to='/'>
            <MyButton
            tip="Home">
                <HomeIcon color="primary"/>
            </MyButton>
            </Link>
            <Notifications/>
        </Fragment>
        ):(
        <Fragment>
        <Button color="inherit" component={Link} to='/login'>Login</Button>
        <Button color="inherit" component={Link} to='/'>Home</Button>
        <Button color="inherit" component={Link} to='/signup'>SignUp</Button>
        </Fragment>
        )}
        </Toolbar>
    </AppBar>
    )
    }
};

Navbar.propTypes = {
    authenticated:PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    authenticated:state.user.authenticated,
});

const mapActionToProps={

};

export default connect(mapStateToProps,mapActionToProps)(Navbar);