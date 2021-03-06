// 이미지 슬라이더와 비슷한 구성의 리뷰 컴포넌트

import React from 'react'
import styled from 'styled-components'

import { warmGrey2, black, pooBrown, peacockBlue, white, white2, dark } from 'utils/colors'
import rem from 'utils/rem'
import media from 'utils/media'

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

// ie issue 때문에 min, max width, hegiht 설정이 필요
const Slider = styled.div`
  display: flex;
  width: 100vw;
  min-width: 100vw;
  text-align: left;
`

const ReviewWrapper = styled.div`
  width: 40%;
  margin: auto;
  display: flex;
  ${media.pc`
    flex-direction: column;
    width: 50%;
  `};
  ${media.mobile`
    flex-direction: column;
    width: 65%;
  `};
`

// ie issue 때문에 min, max width, hegiht 설정이 필요
const DogImg = styled.img`
  width: 20%;
  height: 20%;
  min-width: ${rem(150)};
  min-height: ${rem(150)};

  border-radius: 50%;
  margin: auto 0;
  ${media.pc`
  width: 30%;
  height: 30%;
  margin: auto;
  min-width: ${rem(100)};
  min-height: ${rem(100)};

  `};
  ${media.mobile`
  width: 50%;
  height: 50%;
  margin: auto;
  `};
`

const NameWrapper = styled.div`
  margin-left: 5%;
  ${media.mobile`
  text-align: center;
  `};
`

const Name = styled.div`
  font-size: ${rem(25)};
  font-weight: ${p => (p.breeder ? 'bold' : 'normal')};

  ${media.mobile`
    display: none;
  `};
`

const MobileName = styled.div`
  display: none;
  ${media.mobile`
    display: inline-block;
    font-size: ${rem(20)};
    font-weight: ${p => (p.breed ? 'lighter' : 'bold')};
    margin: ${p => p.breed && '0'};
    text-align: ${p => p.breed && 'left'};
`};
`

const Content = styled.div`
  margin: auto;
  font-weight: lighter;
  font-size: ${rem(20)};
  text-align: left;
  ${media.mobile`
  font-size: ${rem(15)};
  
  `};
`

const ImgWrapper = styled.div`
  position: absolute;
  ${p => (p.right ? 'right:20%' : 'left:20%')};
  transform: ${p => p.left && 'rotate(180deg)'};
  bottom: 45%;
  z-index: 999;
  ${media.pc`
  ${p => (p.right ? 'right:10%' : 'left:10%')};
  `};
  ${media.mobile`
  ${p => (p.right ? 'right:5%' : 'left:5%')};
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
  state = {
    index: 0,
    translateValue: 0,
    reviews: []
  }

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
        <ImgWrapper left onClick={this.goToPreviousSlide}>
          <ArrowImg src={Arrow} alt="Arrow" />
        </ImgWrapper>
        <ImgWrapper right onClick={this.goToNextSlide}>
          <ArrowImg src={Arrow} alt="Arrow" />
        </ImgWrapper>
        {reviews.map((reviewer, i) => (
          <ContentWrapper key={i} translateValue={translateValue}>
            <Slider>
              <ReviewWrapper>
                <DogImg src={reviewer.dogimage} alt="dogImg" />
                <NameWrapper>
                  <Name>
                    {reviewer.dogname} 보호자 - {reviewer.breed}
                    <br />
                  </Name>
                  <MobileName>
                    {reviewer.dogname} 보호자 <br />
                    <MobileName breed>{reviewer.breed}</MobileName>
                    <br />
                  </MobileName>
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
