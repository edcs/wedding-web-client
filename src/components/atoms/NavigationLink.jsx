import animateScrollTo from 'animated-scroll-to';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import glamorous from 'glamorous';

const Link = glamorous.a(`
  inline-block 
  hover:text-white 
  mr-2
  ml-2
  md:mr-8 
  md:ml-8 
  no-underline 
  font-serif 
  text-grey 
  text-xl
`);

class NavigationLink extends PureComponent {
  onClickHandler(event) {
    event.preventDefault();
    window.history.pushState({}, '', this.props.href);
    animateScrollTo(document.querySelector(this.props.href.replace('/', '#')));
  }

  render() {
    return (
      <Link
        href={this.props.href}
        onClick={event => this.onClickHandler(event)}
      >
        {this.props.children}
      </Link>
    );
  }
}

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

NavigationLink.defaultProps = {
  href: '#',
};

export default NavigationLink;
