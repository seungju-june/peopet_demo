import React from 'react'
import styled from 'styled-components'

import { warmGrey2, squash, black, pooBrown, peacockBlue, white, white2, dark } from 'utils/colors'
import rem from 'utils/rem'
import media from 'utils/media'
// import Slider from './Slider'

const Arrow = '/static/images/Arrow.png'

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  background: ${p => p.background};
  color: white;
  display: flex;
  margin: auto;
  position: relative;
  padding: ${rem(200)} 0;

  ${media.mobile`padding: ${rem(50)} 0;`};
`

const ContentWrapper = styled.div`
  display: flex;
  margin: auto;
  transform: translateX(${p => p.translateValue}%);
  transition: transform ease-out 0.6s;
  @keyframes slide-in {
    100% {
      transform: translateX(${p => p.translateValue}%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(${p => p.translateValue}%);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(${p => p.translateValue}%);
    }
    100% {
      transform: translateX(${p => p.translateValue - 100}%);
    }
  }

  @-webkit-keyframes slide-out {
    0% {
      -webkit-transform: translateX(${p => p.translateValue}%);
    }
    100% {
      -webkit-transform: translateX(${p => p.translateValue - 100}%);
    }
  }
`
const Slider = styled.div`
  display: flex;
  width: 100vw;
  text-align: left;
`

const ReviewWrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  ${media.mobile`
    flex-direction: column;
  `};
`

const DogImg = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  margin: auto 0;
  box-shadow: 0 ${rem(2)} ${rem(4)} 0 rgba(0, 0, 0, 0.5);
  ${media.mobile`
  width: 50%;
  height: 50%;
  `};
`

const NameWrapper = styled.div`
  margin-left: 5%;
`

const Name = styled.p`
  font-size: ${rem(25)};
  ${media.mobile`
  font-size: ${rem(20)};  
  `};
`

const Content = styled.div`
  margin: auto;
  font-weight: lighter;
  font-size: ${rem(20)};
  ${media.mobile`
  font-size: ${rem(15)};  
  `};
`

const ImgWrapper = styled.div`
  position: absolute;
  right: 20%;
  bottom: 20%;
  z-index: 999;
  ${media.mobile`
  right: 5%;
  bottom: 40%;
  `};
  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
const ArrowImg = styled.img`
  width: ${rem(41)};
  ${media.mobile`
    width: ${rem(27)};
  `};
`

export default class Review extends React.Component {
  // componentDidMount = () => {
  //   this.setState({
  //     i: this.props.i
  //   })
  // }

  state = {
    index: 0,
    translateValue: 0,
    reviews: []
  }

  // componentDidMount = () => {
  //   this.setState({
  //     reviews: this.props.reviews
  //   })
  // }

  goToPreviousSlide = () => {
    const { index, translateValue } = this.state
    if (index === 0) return

    this.setState({
      translateValue: translateValue + 100,
      index: index - 1
    })
  }

  goToNextSlide = () => {
    const { index, translateValue } = this.state
    const { reviews } = this.props
    if (index === reviews.length - 1) {
      return this.setState({
        translateValue: 0,
        index: 0
      })
    }

    this.setState({
      translateValue: translateValue - this.slideWidth(),
      index: index + 1
    })
  }

  handleDotClick = i => {
    const { index, translateValue } = this.state
    if (i === index) return
    if (i > index) {
      this.setState({
        translateValue: -(i * this.slideWidth()),
        index: i
      })
    } else {
      this.setState({
        translateValue: translateValue + (index - i) * this.slideWidth(),
        index: i
      })
    }
  }

  slideWidth = () => 100

  render() {
    const { translateValue } = this.state
    const { reviews } = this.props
    const Alt = styled.div`
      background: ${warmGrey2};
    `
    return (
      <Wrapper background={dark}>
        <ImgWrapper onClick={this.goToNextSlide}>
          <ArrowImg src={Arrow} alt="Arrow" />
        </ImgWrapper>
        {reviews.map((reviewer, i) => (
          <ContentWrapper key={i} translateValue={translateValue}>
            <Slider>
              <ReviewWrapper>
                <DogImg src={reviewer.dogimage} alt="dogImg" />
                <NameWrapper>
                  <Name>
                    <b>
                      {reviewer.dogname} 보호자 ({reviewer.breed})
                    </b>
                    <br />
                  </Name>
                  <Content>
                    {' " '}
                    {reviewer.review}
                    {' " '}
                  </Content>
                </NameWrapper>
              </ReviewWrapper>
            </Slider>
          </ContentWrapper>
        ))}
      </Wrapper>
    )
  }
}