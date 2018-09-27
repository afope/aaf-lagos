import React, { Component } from 'react';

import SliderPageLayout from './Layout';


export default class Sliders extends Component {
  constructor(props) {
    super(props)

    this.state = {
     images: [
       {
         'name': 'one',
         'source': require('./assets/images/one.jpg')
       },
       {
         'name': 'six',
         'source': require('./assets/images/six.jpg')
       },

       {
         'name': 'two',
         'source': require('./assets/images/two.jpg')
       },
       {
         'name': 'five',
         'source': require('./assets/images/five.jpg')
       },
       {
         'name': 'seven',
         'source': require('./assets/images/seven.jpg')
       },
       {
         'name': 'four',
         'source': require('./assets/images/four.jpg')
       },
       {
         'name': 'three',
         'source': require('./assets/images/three.jpg')
       },
     ],
     currentIndex: 0,
     translateValue: 0
   }
 }


  goToPrevSlide = () => {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
    console.log('prev')
  }

  goToNextSlide = () => {
    this.setState(nextState => ({
      currentIndex: nextState.currentIndex + 1
    }));
    console.log('next')
  }

    render() {
        return(
          <SliderPageLayout
            {...this.props}
            {...this.state}
            goToPrevSlide = {this.goToPrevSlide}
            goToNextSlide = {this.goToNextSlide}
            translateValue = {this.translateValue}
          />
        );
    }
}
