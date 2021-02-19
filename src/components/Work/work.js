import React from "react"
import "./work.scss"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
// import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core"
import PortfolioSlider from "../../components/PortfolioSlider/portfolioSlider"

import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"

// SwiperCore.use([Navigation, Pagination, Scrollbar])

const Work = () => (
  <section className="Work">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="row col-lg-10 justify-content-between">
          <h2 className="section-title" data-aos="fade-up">
            Portfolio
          </h2>
          <div className="align-self-center">
            <Link to="/work" className="see_more">
              See more works
            </Link>
          </div>
        </div>
      </div>

      <section className="Portfolio_slider">
        <PortfolioSlider />
      </section>
    </div>
  </section>
)

export default Work
