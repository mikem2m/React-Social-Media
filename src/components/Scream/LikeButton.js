import React, { Component } from 'react';
import MyButton from '../../utils/myButton';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// Material UI Icon
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// Redux 
import {connect} from 'react-redux';
import {likeScream,unlikeScream} from '../../redux/actions/dataActions';

class LikeButton extends Component {
    likedScream = ()=>{
        if(this.props.user.likes && this.props.user.likes.find(like => like.screamId === this.props.screamId)){
            return true;
        }else{
            return false;
        };
    };

    likeScream = ()=>{
        this.props.likeScream(this.props.screamId);
    };

    unlikeScream = ()=>{
        this.props.unlikeScream(this.props.screamId);
    };
    
    render() {
        const {authenticated} = this.props.user;
        const likeButton = !authenticated?(
            <Link to="/login">
            <MyButton tip="Like">
                    <FavoriteBorder color="primary"/>
            </MyButton>
            </Link>
        ):(
            this.likedScream()?(
                <MyButton tip="Unlike" onClick={this.unlikeScream}>
                    <FavoriteIcon color="primary"/>
                </MyButton>
            ):(
                <MyButton tip="Like" onClick={this.likeScream}>
                    <FavoriteBorder color="primary"/>
                </MyButton>
            )
        );
        return likeButton;
    };
};

LikeButton.propTypes = {
    user:PropTypes.object.isRequired,
    likeScream:PropTypes.func.isRequired,
    unlikeScream:PropTypes.func.isRequired,
    screamId:PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    user:state.user
});

const mapActionToProps = {
    likeScream,
    unlikeScream,
};

export default connect(mapStateToProps,mapActionToProps)(LikeButton);