import React, { Component } from 'react';
import Calender from './CalenderComponent';
import Guests from './GuestComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Resources from './ResourcesComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, postFeedback, fetchCampsites, fetchComments, fetchPromotions, fetchPartners } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = state => {
    return {
        carousel: state.carousel,
        hosts: state.hosts,
        guests: state.guests
    }
}
const mapDispatchToProps = {
    postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text)),
    postFeedback: feedback => (postFeedback(feedback)),
    fetchCarousel: () => (fetchCarousel()),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchHosts: () => (fetchHosts()),
    fetchGuests: () => (fetchGuests())
};

class Main extends Component {
    componentDidMount() {
        this.props.fetchCarousel();
        this.props.fetchHosts();
        this.props.fetchGuests();
    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    carousel={this.props.carousel.carousel.filter(carousel => carousel.featured)[0]}
                    carouselLoading={this.props.carousel.isLoading}
                    carouselErrMess={this.props.carousel.errMess}
                    host={this.props.hosts.hosts.filter(host => host.featured)[0]}
                    hostLoading={this.props.hosts.isLoading}
                    hostErrMess={this.props.hosts.errMess}
                    guest={this.props.guests.guests.filter(guest => guest.featured)[0]}
                    guestLoading={this.props.guests.isLoading}
                    guestErrMess={this.props.guests.errMess}
                />
            );
        }
        
        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/contactus' render={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} /> } />
                            <Route exact path='/aboutus' render={() => <About hosts={this.props.hosts} /> } />
                            <Route exact path='/guests' render={() => <Guests guests={this.props.guests} /> } />
                            <Route exact path='/carousel' render={() => <Carousel carousel={this.props.carousel} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));