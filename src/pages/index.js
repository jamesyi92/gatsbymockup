import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import OwlCarousel from 'react-owl-carousel2'
import 'react-owl-carousel2/lib/styles.css'
import Modal from '../components/Modal'
import OdometerWrap from '../components/OdometerWrap'

const SectionWrap = styled.section`
  div.section{
    padding: 90px 0px 270px 0px;
    &.purple{
      background-color: #8d15f3
    }
    &.dark-purple{
      background-color: #6919ac;
    }
  }
`

const SectionWrap2 = styled.section`
  div.section{
    h3, h2, p{
      color: #fff;
    }
    h3{
      margin-bottom: 20px;
    }
    p{
      margin-bottom: 30px;
    }
    padding: 270px 0px 270px 0px;
    &.purple{
      background-color: #8d15f3
    }
    &.dark-purple{
      background-color: #6919ac;
    }
  }
`

const SectionCarousel = styled.section`
  position: relative;
  margin-top: -180px;
  margin-bottom: -180px;
`

const MainHeadingCol = styled.div`
  div{
    width: 90%;
  }
  h2{
    font-size: 48px;
    line-height: 1;
    span{
      color: #9813ea;
    }
  }
  p{
    font-size: 20px;
  }
`

const MainHeadingCounter = styled.div`
  h2{
    font-size: 180px;
    color: #444;
    line-height: 0.8;
  }
`

const MainHeadingList = styled.div`
  ul{
    padding: 0;
    margin-left: 0;
    margin-bottom: 20px;
    list-style-type: none;
    li{
      &:first-child{
        font-weight: bold;
      }
      margin-bottom: 6px;
    }
  }
  h4{
    font-size: 18px;
    color: #9813ea;
  }
`

const CarouselCard = styled.div`
  height: 300px;
  background-color: #2b2e3d;
  padding: 50px;
  h3{
    span{
      color: #9813ea;
    }
    color: #fff;
    font-size: 36px;
  }
  p{
    color: #fff;
  }
`

const options = {
    items: 5,
    nav: false,
    rewind: true,
    autoplay: true,
    margin: 20
};

const IndexPage = () => (
  <React.Fragment>
    <SectionWrap>
      <div className="section">
        <div className="container">
          <div className="row">
            <MainHeadingCol className="col">
              <div>
                <h2>Creating a <span>safer world.</span></h2>
                <p>Leaders in background screenings</p>
              </div>
            </MainHeadingCol>
            <MainHeadingCounter className="col-6">
              <h2>
                <OdometerWrap />
              </h2>
            </MainHeadingCounter>
            <MainHeadingList className="col">
              <ul>
                <li>live screenings</li>
                <li>criminals identified</li>
                <li>social security checks</li>
                <li>motor vehicle records</li>
              </ul>
              <h4>See All</h4>
            </MainHeadingList>
          </div>
        </div>
      </div>
    </SectionWrap>
    <SectionCarousel>
      <div className="section">
        <div className="container-fluid">
        <div className="row">
            <OwlCarousel options={options} >
              <CarouselCard>
                <h3><span>4x</span><br /> faster</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex quidem, aut maxime nisi.</p>
              </CarouselCard>
              <CarouselCard>
                <h3><span>90%</span><br /> in 24 hrs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex quidem, aut maxime nisi.</p>
              </CarouselCard>
              <CarouselCard>
                <h3><span>$60M</span><br /> invested</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex quidem, aut maxime nisi.</p>
              </CarouselCard>
              <CarouselCard>
                <h3><span>43</span><br /> years</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex quidem, aut maxime nisi.</p>
              </CarouselCard>
              <CarouselCard>
                <h3><span>4x</span><br /> faster</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex quidem, aut maxime nisi.</p>
              </CarouselCard>
              <CarouselCard>
                <h3><span>4x</span><br /> faster</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex quidem, aut maxime nisi.</p>
              </CarouselCard>
              <CarouselCard>
                <h3><span>4x</span><br /> faster</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ex quidem, aut maxime nisi.</p>
              </CarouselCard>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </SectionCarousel>
    <SectionWrap2>
      <div className="section purple">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h2>
                What's new<br/> with our technology
              </h2>
            </div>
            <div className="col-5">
              <h3>
                Sterling + SureID, help<br/> you meet regulatory requirements
              </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nemo rem expedita minima deserunt dolor voluptatem harum. Veritatis saepe amet nihil quasi dicta expedita labore soluta iste, placeat, aspernatur ipsa.</p>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </SectionWrap2>
    <SectionWrap>
      <div className="section dark-purple">
        <div className="container">
          <div className="row">

          </div>
        </div>
      </div>
    </SectionWrap>
  </React.Fragment>
)

export default IndexPage
