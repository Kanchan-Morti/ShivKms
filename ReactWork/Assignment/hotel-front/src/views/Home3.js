import { useEffect } from "react";

const Home3 = () => {
  useEffect(() => {
    document.body.className =
      "wp-singular page-template page-template-template-layout-builder page-template-template-layout-builder-php page page-id-1120 wp-theme-kinsley wp-child-theme-kinsley-child theme-kinsley woocommerce-no-js elementor-default elementor-kit-5762 elementor-page elementor-page-1120";
    return () => (document.body.className = "");
  }, []);
  return (
    <>
      <>
        <div
          id="post-1120"
          className="post-1120 page type-page status-publish hentry">
          <div
            data-elementor-type="wp-page"
            data-elementor-id={1120}
            className="elementor elementor-1120">
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-bb5256a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="bb5256a"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dec0541"
                  data-id="dec0541"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-608d9f2 elementor-widget elementor-widget-kinsley-hero-banner"
                      data-id="608d9f2"
                      data-element_type="widget"
                      data-widget_type="kinsley-hero-banner.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* banner */}
                        <section className="knsl-banner">
                          <div className="knsl-cover-frame">
                            <video
                              className="knsl-parallax"
                              muted=""
                              playsInline=""
                              autoPlay=""
                              loop="">
                              <source src="https://bslthemes.com/import/kinsley/hotel/uploads/2022/07/hotel.mp4" />
                            </video>
                          </div>
                          <div
                            className="knsl-overlay"
                            style={{ opacity: 1 }}
                          />
                          <div className="knsl-banner-content">
                            <div className="container">
                              <div className="knsl-main-title">
                                <div className="knsl-white">
                                  <ul className="knsl-stars">
                                    <li>
                                      <i className="fas fa-star" />
                                    </li>
                                    <li>
                                      <i className="fas fa-star" />
                                    </li>
                                    <li>
                                      <i className="fas fa-star" />
                                    </li>
                                    <li>
                                      <i className="fas fa-star" />
                                    </li>
                                    <li>
                                      <i className="fas fa-star" />
                                    </li>
                                  </ul>{" "}
                                  {/* main-title */}
                                  <h1 className="knsl-center knsl-main-title--h knsl-mb-10">
                                    <span> Welcome to Kinsley </span>
                                  </h1>
                                  <div className="knsl-main-title--d knsl-mb-30 knsl-center">
                                    <span>
                                      {" "}
                                      Deleniti nostrum laboriosam praesentium
                                      quasi quam voluptate.{" "}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="knsl-banner-buttons knsl-mb-30 knsl-center">
                                {" "}
                                <a
                                  data-magnific-video=""
                                  href="https://www.youtube.com/watch?v=wsq-r8lMMsk"
                                  className="knsl-btn knsl-transparent-border">
                                  {" "}
                                  <span className="img-svg img-svg-play knsl-zoom" />{" "}
                                  <span>Watch Video </span>{" "}
                                </a>{" "}
                                <a
                                  href="#"
                                  className="knsl-btn knsl-btn-book knsl-transparent-border knsl-btn-accent-2">
                                  <span className="img-svg img-svg-bookmark" />{" "}
                                  <span> Book now </span>{" "}
                                </a>
                              </div>
                              <div className="knsl-scroll-hint-frame">
                                <div className="knsl-white knsl-mb-20">
                                  {" "}
                                  <span> Scroll down </span>
                                </div>{" "}
                                <a
                                  href="#knsl-triger-1"
                                  className="knsl-scroll-hint knsk-s-s"
                                />
                              </div>
                            </div>
                          </div>
                        </section>{" "}
                        {/* banner end */} {/* popup */}
                        <div className="knsl-popup-frame knsl-popup-frame-1">
                          <div className="knsl-book-form knsl-book-form-v knsl-book-popup">
                            {" "}
                            <span className="knsl-close-popup">+</span>
                            <h2 className="knsl-mb-40">
                              {" "}
                              <span> Search your Room </span>
                            </h2>
                            <div className="mphb_sc_search-wrapper ">
                              <form
                                method="GET"
                                className="mphb_sc_search-form"
                                action="https://kinsley.bslthemes.com/search-results/">
                                <p className="mphb-required-fields-tip">
                                  {" "}
                                  <small>
                                    {" "}
                                    Required fields are followed by{" "}
                                    <abbr title="required">*</abbr>{" "}
                                  </small>
                                </p>
                                <p className="mphb_sc_search-check-in-date">
                                  {" "}
                                  <label htmlFor="mphb_check_in_date-mphb-search-form-6865259fb8028">
                                    Check-in{" "}
                                    <abbr title="Formatted as dd/mm/yyyy">
                                      *
                                    </abbr>
                                  </label>{" "}
                                  <br />{" "}
                                  <input
                                    id="mphb_check_in_date-mphb-search-form-6865259fb8028"
                                    data-datepick-group="mphb-search-form-6865259fb8028"
                                    defaultValue=""
                                    placeholder="Check-in Date"
                                    required="required"
                                    type="text"
                                    name="mphb_check_in_date"
                                    className="mphb-datepick"
                                    autoComplete="off"
                                    inputMode="none"
                                  />
                                </p>
                                <p className="mphb_sc_search-check-out-date">
                                  {" "}
                                  <label htmlFor="mphb_check_out_date-mphb-search-form-6865259fb8028">
                                    Check-out{" "}
                                    <abbr title="Formatted as dd/mm/yyyy">
                                      *
                                    </abbr>
                                  </label>{" "}
                                  <br />{" "}
                                  <input
                                    id="mphb_check_out_date-mphb-search-form-6865259fb8028"
                                    data-datepick-group="mphb-search-form-6865259fb8028"
                                    defaultValue=""
                                    placeholder="Check-out Date"
                                    required="required"
                                    type="text"
                                    name="mphb_check_out_date"
                                    className="mphb-datepick"
                                    autoComplete="off"
                                    inputMode="none"
                                  />
                                </p>
                                <p className="mphb_sc_search-adults">
                                  {" "}
                                  <label htmlFor="mphb_adults-mphb-search-form-6865259fb8028">
                                    {" "}
                                    Adults
                                  </label>{" "}
                                  <br />{" "}
                                  <select
                                    id="mphb_adults-mphb-search-form-6865259fb8028"
                                    name="mphb_adults">
                                    <option value={1} selected="selected">
                                      1
                                    </option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                    <option value={11}>11</option>
                                    <option value={12}>12</option>
                                    <option value={13}>13</option>
                                    <option value={14}>14</option>
                                    <option value={15}>15</option>
                                    <option value={16}>16</option>
                                    <option value={17}>17</option>
                                    <option value={18}>18</option>
                                    <option value={19}>19</option>
                                    <option value={20}>20</option>
                                    <option value={21}>21</option>
                                    <option value={22}>22</option>
                                    <option value={23}>23</option>
                                    <option value={24}>24</option>
                                    <option value={25}>25</option>
                                    <option value={26}>26</option>
                                    <option value={27}>27</option>
                                    <option value={28}>28</option>
                                    <option value={29}>29</option>
                                    <option value={30}>30</option>
                                  </select>
                                </p>
                                <p className="mphb_sc_search-children">
                                  {" "}
                                  <label htmlFor="mphb_children-mphb-search-form-6865259fb8028">
                                    Children{" "}
                                  </label>{" "}
                                  <br />{" "}
                                  <select
                                    id="mphb_children-mphb-search-form-6865259fb8028"
                                    name="mphb_children">
                                    <option value={0} selected="selected">
                                      0
                                    </option>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                    <option value={9}>9</option>
                                    <option value={10}>10</option>
                                  </select>
                                </p>{" "}
                                <input
                                  id="mphb_check_in_date-mphb-search-form-6865259fb8028-hidden"
                                  defaultValue=""
                                  type="hidden"
                                  name="mphb_check_in_date"
                                />
                                <input
                                  id="mphb_check_out_date-mphb-search-form-6865259fb8028-hidden"
                                  defaultValue=""
                                  type="hidden"
                                  name="mphb_check_out_date"
                                />
                                <p className="mphb_sc_search-submit-button-wrapper">
                                  {" "}
                                  <button
                                    type="submit"
                                    className="button knsl-btn">
                                    Search
                                  </button>
                                </p>
                              </form>
                            </div>
                          </div>
                        </div>{" "}
                        {/* popup end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-790dc46 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="790dc46"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-11af972"
                  data-id="11af972"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-69926f8 elementor-widget elementor-widget-kinsley-features"
                      data-id="69926f8"
                      data-element_type="widget"
                      data-widget_type="kinsley-features.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* features */}
                        <section className="knsl-p-0-100" id="knsl-triger-1">
                          <div className="container">
                            {" "}
                            {/* features card */}
                            <div
                              className="knsl-features-card"
                              style={{ marginTop: "-80px" }}>
                              <div className="row">
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  {/* icon box */}
                                  <div className="knsl-icon-box">
                                    {" "}
                                    <noscript>
                                      &lt;img decoding="async"
                                      src="../assets/wp-content/uploads/2021/12/f-1.png"
                                      alt="Airport transfer" class="knsl-mb-10"
                                      /&gt;
                                    </noscript>
                                    <img
                                      decoding="async"
                                      src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                      data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-1.png"
                                      alt="Airport transfer"
                                      className="lazyload knsl-mb-10"
                                    />
                                    <h5>
                                      {" "}
                                      <span> Airport transfer </span>
                                    </h5>
                                  </div>{" "}
                                  {/* icon box end */}
                                </div>
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  {/* icon box */}
                                  <div className="knsl-icon-box">
                                    {" "}
                                    <noscript>
                                      &lt;img decoding="async"
                                      src="../assets/wp-content/uploads/2021/12/f-2.png"
                                      alt="All inclusive" class="knsl-mb-10"
                                      /&gt;
                                    </noscript>
                                    <img
                                      decoding="async"
                                      src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                      data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-2.png"
                                      alt="All inclusive"
                                      className="lazyload knsl-mb-10"
                                    />
                                    <h5>
                                      {" "}
                                      <span> All inclusive </span>
                                    </h5>
                                  </div>{" "}
                                  {/* icon box end */}
                                </div>
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  {/* icon box */}
                                  <div className="knsl-icon-box">
                                    {" "}
                                    <noscript>
                                      &lt;img decoding="async"
                                      src="../assets/wp-content/uploads/2021/12/f-3.png"
                                      alt="Air-conditioned" class="knsl-mb-10"
                                      /&gt;
                                    </noscript>
                                    <img
                                      decoding="async"
                                      src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                      data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-3.png"
                                      alt="Air-conditioned"
                                      className="lazyload knsl-mb-10"
                                    />
                                    <h5>
                                      {" "}
                                      <span> Air-conditioned </span>
                                    </h5>
                                  </div>{" "}
                                  {/* icon box end */}
                                </div>
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  {/* icon box */}
                                  <div className="knsl-icon-box">
                                    {" "}
                                    <noscript>
                                      &lt;img decoding="async"
                                      src="../assets/wp-content/uploads/2021/12/f-4.png"
                                      alt="Under protection" class="knsl-mb-10"
                                      /&gt;
                                    </noscript>
                                    <img
                                      decoding="async"
                                      src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                      data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/f-4.png"
                                      alt="Under protection"
                                      className="lazyload knsl-mb-10"
                                    />
                                    <h5>
                                      {" "}
                                      <span> Under protection </span>
                                    </h5>
                                  </div>{" "}
                                  {/* icon box end */}
                                </div>
                              </div>
                            </div>{" "}
                            {/* features card end */}
                          </div>
                        </section>{" "}
                        {/* features end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-bcacc7c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="bcacc7c"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-08937c3"
                  data-id="08937c3"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-8f74267 elementor-widget elementor-widget-kinsley-about"
                      data-id="8f74267"
                      data-element_type="widget"
                      data-widget_type="kinsley-about.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* about */}
                        <section className="knsl-p-0-100">
                          <div className="container">
                            <div className="knsl-about-card">
                              <div className="row no-gutters">
                                <div className="col-lg-6">
                                  <div className="knsl-about-photo">
                                    {" "}
                                    <noscript>
                                      &lt;img decoding="async"
                                      src="../assets/wp-content/uploads/2021/09/about-t1.jpg"
                                      alt="" /&gt;
                                    </noscript>
                                    <img
                                      className="lazyload"
                                      decoding="async"
                                      src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                      data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t1.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="knsl-about-text">
                                    <div className="knsl-title-frame">
                                      <h2 className="knsl-mb-20">
                                        {" "}
                                        <span>
                                          {" "}
                                          We have 17+ years
                                          <br />
                                          of Experience{" "}
                                        </span>
                                      </h2>
                                      <div className="knsl-text knsl-mb-30">
                                        <div>
                                          <p>
                                            Consectetur adipisicing elit. Nihil,
                                            illum voluptate eveniet ex fugit ea
                                            delectus, sed voluptatem. Laborum
                                            accusantium libero commodi id
                                            officiis itaque esse adipisci,
                                            necessitatibus asperiores, illo
                                            odio.
                                          </p>
                                        </div>
                                      </div>{" "}
                                      <a
                                        href="../about/index.html"
                                        className="knsl-btn knsl-btn-md">
                                        {" "}
                                        <span> More about us </span>{" "}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 order-lg-2">
                                  <div className="knsl-about-photo">
                                    {" "}
                                    <noscript>
                                      &lt;img decoding="async"
                                      src="../assets/wp-content/uploads/2021/09/about-t2.jpg"
                                      alt="" /&gt;
                                    </noscript>
                                    <img
                                      className="lazyload"
                                      decoding="async"
                                      src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                      data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-t2.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                  <div className="knsl-about-text">
                                    <div className="knsl-title-frame">
                                      <h2 className="knsl-mb-20">
                                        {" "}
                                        <span>
                                          {" "}
                                          Start your Amazing Adventure!{" "}
                                        </span>
                                      </h2>
                                      <div className="knsl-text knsl-mb-30">
                                        <div>
                                          <p>
                                            Consectetur adipisicing elit. Nihil,
                                            illum voluptate eveniet ex fugit ea
                                            delectus, sed voluptatem. Laborum
                                            accusantium libero commodi id
                                            officiis itaque esse adipisci,
                                            necessitatibus asperiores, illo
                                            odio.
                                          </p>
                                        </div>
                                      </div>{" "}
                                      <a
                                        href="../accommodations/index.html"
                                        className="knsl-btn knsl-btn-md">
                                        {" "}
                                        <span> Choose a room </span>{" "}
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>{" "}
                        {/* about end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-1edd412 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="1edd412"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d8a79f3"
                  data-id="d8a79f3"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-4b38713 elementor-widget elementor-widget-kinsley-about-gallery"
                      data-id="4b38713"
                      data-element_type="widget"
                      data-widget_type="kinsley-about-gallery.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* gallery */}
                        <section className="knsl-transition-top knsl-p-0-100">
                          {" "}
                          <noscript>
                            &lt;img decoding="async"
                            src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
                            class="knsl-deco-left" alt="palm" /&gt;
                          </noscript>
                          <img
                            decoding="async"
                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                            data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                            className="lazyload knsl-deco-left"
                            alt="palm"
                          />
                          <div className="container">
                            <div className="row align-items-center">
                              <div className="col-lg-12">
                                <div className="knsl-center knsl-title-frame knsl-scroll-animation knsl-mb-100">
                                  <h2 className="knsl-title--h knsl-mb-20">
                                    {" "}
                                    <span> Kinsley is Waiting for You! </span>
                                  </h2>
                                  <div className="knsl-text knsl-mb-30">
                                    <p>
                                      {" "}
                                      <span>
                                        {" "}
                                        Consectetur adipisicing elit. Nihil,
                                        illum voluptate eveniet ex fugit ea
                                        delectus, sed voluptatem. Laborum
                                        accusantium libero commodi id officiis
                                        itaque esse adipisci, necessitatibus
                                        asperiores, illo odio.{" "}
                                      </span>
                                    </p>
                                  </div>{" "}
                                  <a
                                    href="../gallery/index.html"
                                    className="knsl-btn knsl-btn-md">
                                    {" "}
                                    <span> More our places</span>{" "}
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                {" "}
                                {/* slider */}
                                <div className="swiper-container knsl-about-slider knsl-scroll-animation">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      {" "}
                                      {/* gallery item */}
                                      <div className="knsl-image-frame">
                                        {" "}
                                        <a
                                          data-elementor-lightbox-slideshow="about-gallery-4b38713"
                                          data-elementor-lightbox-title="View from the sea"
                                          href="../assets/wp-content/uploads/2021/09/about-1.jpg">
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/09/about-1.jpg"
                                            alt="View from the sea" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-1.jpg"
                                            alt="View from the sea"
                                          />
                                          <div className="knsl-badge">
                                            {" "}
                                            <span> View from the sea </span>
                                          </div>{" "}
                                          <span className="knsl-zoom">
                                            <i className="fas fa-search-plus" />
                                          </span>
                                        </a>
                                      </div>{" "}
                                      {/* gallery item end */}
                                    </div>
                                    <div className="swiper-slide">
                                      {" "}
                                      {/* gallery item */}
                                      <div className="knsl-image-frame">
                                        {" "}
                                        <a
                                          data-elementor-lightbox-slideshow="about-gallery-4b38713"
                                          data-elementor-lightbox-title="East terrace"
                                          href="../assets/wp-content/uploads/2021/09/about-2.jpg">
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/09/about-2.jpg"
                                            alt="East terrace" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-2.jpg"
                                            alt="East terrace"
                                          />
                                          <div className="knsl-badge">
                                            {" "}
                                            <span> East terrace</span>
                                          </div>{" "}
                                          <span className="knsl-zoom">
                                            <i className="fas fa-search-plus" />
                                          </span>
                                        </a>
                                      </div>{" "}
                                      {/* gallery item end */}
                                    </div>
                                    <div className="swiper-slide">
                                      {" "}
                                      {/* gallery item */}
                                      <div className="knsl-image-frame">
                                        {" "}
                                        <a
                                          data-elementor-lightbox-slideshow="about-gallery-4b38713"
                                          data-elementor-lightbox-title="West terrace"
                                          href="../assets/wp-content/uploads/2021/09/about-3.jpg">
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/09/about-3.jpg"
                                            alt="West terrace" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-3.jpg"
                                            alt="West terrace"
                                          />
                                          <div className="knsl-badge">
                                            {" "}
                                            <span> West terrace</span>
                                          </div>{" "}
                                          <span className="knsl-zoom">
                                            <i className="fas fa-search-plus" />
                                          </span>
                                        </a>
                                      </div>{" "}
                                      {/* gallery item end */}
                                    </div>
                                    <div className="swiper-slide">
                                      {" "}
                                      {/* gallery item */}
                                      <div className="knsl-image-frame">
                                        {" "}
                                        <a
                                          data-elementor-lightbox-slideshow="about-gallery-4b38713"
                                          data-elementor-lightbox-title="View from the beach"
                                          href="../assets/wp-content/uploads/2021/09/about-4.jpg">
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/09/about-4.jpg"
                                            alt="View from the beach" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-4.jpg"
                                            alt="View from the beach"
                                          />
                                          <div className="knsl-badge">
                                            {" "}
                                            <span> View from the beach </span>
                                          </div>{" "}
                                          <span className="knsl-zoom">
                                            <i className="fas fa-search-plus" />
                                          </span>
                                        </a>
                                      </div>{" "}
                                      {/* gallery item end */}
                                    </div>
                                    <div className="swiper-slide">
                                      {" "}
                                      {/* gallery item */}
                                      <div className="knsl-image-frame">
                                        {" "}
                                        <a
                                          data-elementor-lightbox-slideshow="about-gallery-4b38713"
                                          data-elementor-lightbox-title="East terrace"
                                          href="../assets/wp-content/uploads/2021/09/about-5.jpg">
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/09/about-5.jpg"
                                            alt="East terrace" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-5.jpg"
                                            alt="East terrace"
                                          />
                                          <div className="knsl-badge">
                                            {" "}
                                            <span> East terrace</span>
                                          </div>{" "}
                                          <span className="knsl-zoom">
                                            <i className="fas fa-search-plus" />
                                          </span>
                                        </a>
                                      </div>{" "}
                                      {/* gallery item end */}
                                    </div>
                                    <div className="swiper-slide">
                                      {" "}
                                      {/* gallery item */}
                                      <div className="knsl-image-frame">
                                        {" "}
                                        <a
                                          data-elementor-lightbox-slideshow="about-gallery-4b38713"
                                          data-elementor-lightbox-title="West terrace"
                                          href="../assets/wp-content/uploads/2021/09/about-6.jpg">
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/09/about-6.jpg"
                                            alt="West terrace" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-6.jpg"
                                            alt="West terrace"
                                          />
                                          <div className="knsl-badge">
                                            {" "}
                                            <span> West terrace</span>
                                          </div>{" "}
                                          <span className="knsl-zoom">
                                            <i className="fas fa-search-plus" />
                                          </span>
                                        </a>
                                      </div>{" "}
                                      {/* gallery item end */}
                                    </div>
                                    <div className="swiper-slide">
                                      {" "}
                                      {/* gallery item */}
                                      <div className="knsl-image-frame">
                                        {" "}
                                        <a
                                          data-elementor-lightbox-slideshow="about-gallery-4b38713"
                                          data-elementor-lightbox-title="View from the sea"
                                          href="../assets/wp-content/uploads/2021/09/about-7.jpg">
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/09/about-7.jpg"
                                            alt="View from the sea" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-7.jpg"
                                            alt="View from the sea"
                                          />
                                          <div className="knsl-badge">
                                            {" "}
                                            <span> View from the sea </span>
                                          </div>{" "}
                                          <span className="knsl-zoom">
                                            <i className="fas fa-search-plus" />
                                          </span>
                                        </a>
                                      </div>{" "}
                                      {/* gallery item end */}
                                    </div>
                                    <div className="swiper-slide">
                                      {" "}
                                      {/* gallery item */}
                                      <div className="knsl-image-frame">
                                        {" "}
                                        <a
                                          data-elementor-lightbox-slideshow="about-gallery-4b38713"
                                          data-elementor-lightbox-title="East terrace"
                                          href="../assets/wp-content/uploads/2021/09/about-8.jpg">
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/09/about-8.jpg"
                                            alt="East terrace" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/09/about-8.jpg"
                                            alt="East terrace"
                                          />
                                          <div className="knsl-badge">
                                            {" "}
                                            <span> East terrace</span>
                                          </div>{" "}
                                          <span className="knsl-zoom">
                                            <i className="fas fa-search-plus" />
                                          </span>
                                        </a>
                                      </div>{" "}
                                      {/* gallery item end */}
                                    </div>
                                  </div>{" "}
                                  {/* slider navigation */}
                                  <div className="knsl-slider-nav-panel">
                                    {" "}
                                    {/* pagination */}
                                    <div className="knsl-about-slider-1-pagination" />
                                    {/* navigation */}
                                    <div className="knsl-about-slider-nav">
                                      <div className="knsl-about-slider-1-prev">
                                        <i className="fas fa-arrow-left" />
                                      </div>
                                      <div className="knsl-about-slider-1-next">
                                        <i className="fas fa-arrow-right" />
                                      </div>
                                    </div>{" "}
                                    {/* navigation end */}
                                  </div>{" "}
                                  {/* slider navigation end */}
                                </div>{" "}
                                {/* slider end */}
                              </div>
                            </div>
                          </div>
                        </section>{" "}
                        {/* gallery end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-63909ac elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="63909ac"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2b41df9"
                  data-id="2b41df9"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-983b46e elementor-widget elementor-widget-kinsley-numbers"
                      data-id="983b46e"
                      data-element_type="widget"
                      data-widget_type="kinsley-numbers.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* counters */}
                        <section className="knsl-transition-middle knsl-p-0-100">
                          {" "}
                          <noscript>
                            &lt;img decoding="async"
                            src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
                            class="knsl-deco-right" alt="palm" /&gt;
                          </noscript>
                          <img
                            decoding="async"
                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                            data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                            className="lazyload knsl-deco-right"
                            alt="palm"
                          />
                          <div className="container">
                            {" "}
                            {/* features card */}
                            <div className="knsl-features-card knsl-counters-card knsl-scroll-animation">
                              <div className="row">
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  {/* icon box */}
                                  <div className="knsl-icon-box">
                                    {" "}
                                    <span
                                      className="knsl-counter-number knsl-mb-10"
                                      data-count={4}
                                    />
                                    <h5>Hotels</h5>
                                  </div>{" "}
                                  {/* icon box end */}
                                </div>
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  {/* icon box */}
                                  <div className="knsl-icon-box">
                                    {" "}
                                    <span
                                      className="knsl-counter-number knsl-mb-10"
                                      data-count={127}
                                    />
                                    <h5>Rooms</h5>
                                  </div>{" "}
                                  {/* icon box end */}
                                </div>
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  {/* icon box */}
                                  <div className="knsl-icon-box">
                                    {" "}
                                    <span
                                      className="knsl-counter-number knsl-mb-10"
                                      data-count={6}
                                    />
                                    <h5>Beaches</h5>
                                  </div>{" "}
                                  {/* icon box end */}
                                </div>
                                <div className="col-6 col-lg-3">
                                  {" "}
                                  {/* icon box */}
                                  <div className="knsl-icon-box">
                                    {" "}
                                    <span
                                      className="knsl-counter-number knsl-mb-10"
                                      data-count={4586}
                                    />
                                    <h5>Guests</h5>
                                  </div>{" "}
                                  {/* icon box end */}
                                </div>
                              </div>
                            </div>{" "}
                            {/* features card end */}
                          </div>
                        </section>{" "}
                        {/* counters end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-ef5c205 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="ef5c205"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-245eb49"
                  data-id="245eb49"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-97056e4 elementor-widget elementor-widget-kinsley-rooms-carousel"
                      data-id="97056e4"
                      data-element_type="widget"
                      data-widget_type="kinsley-rooms-carousel.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* rooms */}
                        <section className="knsl-transition-bottom knsl-p-0-100">
                          {" "}
                          <noscript>
                            &lt;img decoding="async"
                            src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
                            class="knsl-deco-left" alt="palm" /&gt;
                          </noscript>
                          <img
                            decoding="async"
                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                            data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                            className="lazyload knsl-deco-left"
                            alt="palm"
                          />
                          <div className="container">
                            <div className="row align-items-center">
                              <div className="col-lg-12">
                                <div className="knsl-center knsl-title-frame knsl-scroll-animation knsl-mb-100">
                                  <h2 className="knsl-title--h knsl-mb-20">
                                    {" "}
                                    <span> Our Best Rooms</span>
                                  </h2>
                                  <div className="knsl-text knsl-mb-30">
                                    <p>
                                      {" "}
                                      <span>
                                        {" "}
                                        Consectetur adipisicing elit. Nihil,
                                        illum voluptate eveniet ex fugit ea
                                        delectus, sed voluptatem. Laborum
                                        accusantium libero commodi id officiis
                                        itaque esse adipisci, necessitatibus
                                        asperiores, illo odio.{" "}
                                      </span>
                                    </p>
                                  </div>{" "}
                                  <a
                                    href="../accommodations/index.html"
                                    className="knsl-btn knsl-btn-md">
                                    {" "}
                                    <span> All rooms </span>
                                  </a>
                                </div>
                              </div>
                              <div className="col-lg-12 attr-details-amenity-false attr-details-category-false attr-details-attributes-false attr-details-view-false attr-details-bed-type-false attr-details-children-false">
                                <div className="swiper-container knsl-uni-slider  attr-details-amenity-false attr-details-category-false attr-details-attributes-false attr-details-view-false attr-details-bed-type-false attr-details-children-false">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="mphb_sc_room-wrapper knsl-scroll-animation">
                                        <div className="mphb-room-type post-17 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-luxe mphb_room_type_tag-luxe mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-4 mphb-room-type-children-0 ">
                                          <p className="post-thumbnail mphb-loop-room-thumbnail">
                                            <a href="../accommodation/deluxe-room/index.html">
                                              <img decoding="async"
                                                width="1000" height="666"
                                                src="../assets/wp-content/uploads/2021/08/room-1.jpg"
                                                class="attachment-post-thumbnail
                                                size-post-thumbnail
                                                wp-post-image" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg
                                                1000w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-300x200.jpg
                                                300w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-768x511.jpg
                                                768w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-950x633.jpg
                                                950w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-800x533.jpg
                                                800w" sizes="(max-width: 1000px)
                                                100vw, 1000px" />
                                              <img
                                                decoding="async"
                                                width={1000}
                                                height={666}
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20666%22%3E%3C/svg%3E"
                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg"
                                                className="lazyload attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt=""
                                                data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1.jpg 1000w, https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-300x200.jpg 300w, https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-768x511.jpg 768w, https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-950x633.jpg 950w, https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-800x533.jpg 800w"
                                                data-sizes="(max-width: 1000px) 100vw, 1000px"
                                              />
                                            </a>
                                          </p>
                                          <h2 className="mphb-room-type-title entry-title">
                                            <a
                                              className="mphb-room-type-title"
                                              href="../accommodation/deluxe-room/index.html">
                                              Deluxe room
                                            </a>
                                          </h2>
                                          <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                                            <p>
                                              Image for cattle earth. May one
                                              Which life divide sea. Optio
                                              veniam quibusdam fugit aspernatur
                                              ratione rerum necessitatibus ipsa
                                              eligendi? Laudantium beatae aut
                                              earum ab doloribus tempore
                                              veritatis repellat natus illo,
                                              veniam quibusdam fugit aspernatur
                                              cumque harum quos esse libero
                                              nesciunt, molestiae saepe,
                                              possimus a suscipit.
                                            </p>
                                          </div>
                                          <h3 className="mphb-room-type-details-title">
                                            Details
                                          </h3>
                                          <ul className="mphb-loop-room-type-attributes">
                                            <li className="mphb-room-type-adults-capacity">
                                              <span className="mphb-attribute-title mphb-adults-title">
                                                Adults:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                4
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-facilities">
                                              <span className="mphb-attribute-title mphb-facilities-title">
                                                Amenities:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="facility-4-private-pools">
                                                  <a href="../accommodation-facility/4-private-pools/index.html">
                                                    4 private pools
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-air-conditioning">
                                                  <a href="../accommodation-facility/air-conditioning/index.html">
                                                    Air-conditioned
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-airport-transfer">
                                                  <a href="../accommodation-facility/airport-transfer/index.html">
                                                    Airport transfer
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-all-inclusive">
                                                  <a href="../accommodation-facility/all-inclusive/index.html">
                                                    All inclusive
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-wifi">
                                                  <a href="../accommodation-facility/wifi/index.html">
                                                    Free wi-fi
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-laundry">
                                                  <a href="../accommodation-facility/laundry/index.html">
                                                    Laundry
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-smart-tv">
                                                  <a href="../accommodation-facility/smart-tv/index.html">
                                                    Smart TV
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-under-protection">
                                                  <a href="../accommodation-facility/under-protection/index.html">
                                                    Under protection
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-size">
                                              <span className="mphb-attribute-title mphb-size-title">
                                                Size:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                95ft²{" "}
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-categories">
                                              <span className="mphb-attribute-title mphb-categories-title">
                                                Categories:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="category-luxe">
                                                  <a href="../accommodation-category/luxe/index.html">
                                                    Luxe
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-test mphb-room-type-custom-attribute">
                                              <span className="mphb-attribute-title mphb-test-title">
                                                Test:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="test-1">
                                                  1
                                                </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <p className="mphb-regular-price">
                                            <strong>Prices start at:</strong>{" "}
                                            <span className="mphb-price">
                                              <span className="mphb-currency">
                                                €
                                              </span>
                                              49
                                            </span>
                                            <span
                                              className="mphb-price-period"
                                              title="Choose dates to see relevant prices">
                                              per night
                                            </span>
                                          </p>
                                          <div className="mphb-to-book-btn-wrapper">
                                            <form
                                              action="https://kinsley.bslthemes.com/accommodation/deluxe-room/#booking-form-17"
                                              method="get">
                                              <button
                                                type="submit"
                                                className="button mphb-book-button">
                                                Book
                                              </button>
                                            </form>{" "}
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="mphb_sc_room-wrapper knsl-scroll-animation">
                                        <div className="mphb-room-type post-986 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-economy mphb_room_type_tag-minimal mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-2 mphb-room-type-children-2 ">
                                          <p className="post-thumbnail mphb-loop-room-thumbnail">
                                            <a href="../accommodation/standard-room/index.html">
                                              <img decoding="async"
                                                width="1000" height="667"
                                                src="../assets/wp-content/uploads/2021/12/room-2.jpg"
                                                class="attachment-post-thumbnail
                                                size-post-thumbnail
                                                wp-post-image" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2.jpg
                                                1000w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-300x200.jpg
                                                300w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-768x512.jpg
                                                768w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-950x634.jpg
                                                950w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-800x534.jpg
                                                800w" sizes="(max-width: 1000px)
                                                100vw, 1000px" />
                                              <img
                                                decoding="async"
                                                width={1000}
                                                height={667}
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20667%22%3E%3C/svg%3E"
                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2.jpg"
                                                className="lazyload attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt=""
                                                data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2.jpg 1000w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-300x200.jpg 300w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-768x512.jpg 768w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-950x634.jpg 950w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-800x534.jpg 800w"
                                                data-sizes="(max-width: 1000px) 100vw, 1000px"
                                              />
                                            </a>
                                          </p>
                                          <h2 className="mphb-room-type-title entry-title">
                                            <a
                                              className="mphb-room-type-title"
                                              href="../accommodation/standard-room/index.html">
                                              Standard Room
                                            </a>
                                          </h2>
                                          <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                                            <p>
                                              Image for cattle earth. May one
                                              Which life divide sea. Optio
                                              veniam quibusdam fugit aspernatur
                                              ratione rerum necessitatibus ipsa
                                              eligendi? Laudantium beatae aut
                                              earum ab doloribus tempore
                                              veritatis repellat natus illo,
                                              veniam quibusdam fugit aspernatur
                                              cumque harum quos esse libero
                                              nesciunt, molestiae saepe,
                                              possimus a suscipit.
                                            </p>
                                          </div>
                                          <h3 className="mphb-room-type-details-title">
                                            Details
                                          </h3>
                                          <ul className="mphb-loop-room-type-attributes">
                                            <li className="mphb-room-type-adults-capacity">
                                              <span className="mphb-attribute-title mphb-adults-title">
                                                Adults:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                2
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-children-capacity">
                                              <span className="mphb-attribute-title mphb-children-title">
                                                Children:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                2
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-facilities">
                                              <span className="mphb-attribute-title mphb-facilities-title">
                                                Amenities:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="facility-4-private-pools">
                                                  <a href="../accommodation-facility/4-private-pools/index.html">
                                                    4 private pools
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-air-conditioning">
                                                  <a href="../accommodation-facility/air-conditioning/index.html">
                                                    Air-conditioned
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-airport-transfer">
                                                  <a href="../accommodation-facility/airport-transfer/index.html">
                                                    Airport transfer
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-all-inclusive">
                                                  <a href="../accommodation-facility/all-inclusive/index.html">
                                                    All inclusive
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-wifi">
                                                  <a href="../accommodation-facility/wifi/index.html">
                                                    Free wi-fi
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-laundry">
                                                  <a href="../accommodation-facility/laundry/index.html">
                                                    Laundry
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-smart-tv">
                                                  <a href="../accommodation-facility/smart-tv/index.html">
                                                    Smart TV
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-under-protection">
                                                  <a href="../accommodation-facility/under-protection/index.html">
                                                    Under protection
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-size">
                                              <span className="mphb-attribute-title mphb-size-title">
                                                Size:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                50ft²{" "}
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-categories">
                                              <span className="mphb-attribute-title mphb-categories-title">
                                                Categories:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="category-economy">
                                                  <a href="../accommodation-category/economy/index.html">
                                                    Economy
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <p className="mphb-regular-price">
                                            <strong>Prices start at:</strong>{" "}
                                            <span className="mphb-price">
                                              <span className="mphb-currency">
                                                €
                                              </span>
                                              29
                                            </span>
                                            <span
                                              className="mphb-price-period"
                                              title="Choose dates to see relevant prices">
                                              per night
                                            </span>
                                          </p>
                                          <div className="mphb-to-book-btn-wrapper">
                                            <form
                                              action="https://kinsley.bslthemes.com/accommodation/standard-room/#booking-form-986"
                                              method="get">
                                              <button
                                                type="submit"
                                                className="button mphb-book-button">
                                                Book
                                              </button>
                                            </form>{" "}
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="mphb_sc_room-wrapper knsl-scroll-animation">
                                        <div className="mphb-room-type post-1006 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-economy mphb_room_type_tag-double mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-2 mphb-room-type-children-0 ">
                                          <p className="post-thumbnail mphb-loop-room-thumbnail">
                                            <a href="../accommodation/double-room/index.html">
                                              <img loading="lazy"
                                                decoding="async" width="1000"
                                                height="667"
                                                src="../assets/wp-content/uploads/2021/12/room-3.jpg"
                                                class="attachment-post-thumbnail
                                                size-post-thumbnail
                                                wp-post-image" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3.jpg
                                                1000w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-300x200.jpg
                                                300w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-768x512.jpg
                                                768w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-950x634.jpg
                                                950w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-800x534.jpg
                                                800w" sizes="(max-width: 1000px)
                                                100vw, 1000px" />
                                              <img
                                                loading="lazy"
                                                decoding="async"
                                                width={1000}
                                                height={667}
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20667%22%3E%3C/svg%3E"
                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3.jpg"
                                                className="lazyload attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt=""
                                                data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3.jpg 1000w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-300x200.jpg 300w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-768x512.jpg 768w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-950x634.jpg 950w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-800x534.jpg 800w"
                                                data-sizes="(max-width: 1000px) 100vw, 1000px"
                                              />
                                            </a>
                                          </p>
                                          <h2 className="mphb-room-type-title entry-title">
                                            <a
                                              className="mphb-room-type-title"
                                              href="../accommodation/double-room/index.html">
                                              Double Room
                                            </a>
                                          </h2>
                                          <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                                            <p>
                                              Image for cattle earth. May one
                                              Which life divide sea. Optio
                                              veniam quibusdam fugit aspernatur
                                              ratione rerum necessitatibus ipsa
                                              eligendi? Laudantium beatae aut
                                              earum ab doloribus tempore
                                              veritatis repellat natus illo,
                                              veniam quibusdam fugit aspernatur
                                              cumque harum quos esse libero
                                              nesciunt, molestiae saepe,
                                              possimus a suscipit.
                                            </p>
                                          </div>
                                          <h3 className="mphb-room-type-details-title">
                                            Details
                                          </h3>
                                          <ul className="mphb-loop-room-type-attributes">
                                            <li className="mphb-room-type-adults-capacity">
                                              <span className="mphb-attribute-title mphb-adults-title">
                                                Adults:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                2
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-facilities">
                                              <span className="mphb-attribute-title mphb-facilities-title">
                                                Amenities:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="facility-4-private-pools">
                                                  <a href="../accommodation-facility/4-private-pools/index.html">
                                                    4 private pools
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-air-conditioning">
                                                  <a href="../accommodation-facility/air-conditioning/index.html">
                                                    Air-conditioned
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-airport-transfer">
                                                  <a href="../accommodation-facility/airport-transfer/index.html">
                                                    Airport transfer
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-all-inclusive">
                                                  <a href="../accommodation-facility/all-inclusive/index.html">
                                                    All inclusive
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-wifi">
                                                  <a href="../accommodation-facility/wifi/index.html">
                                                    Free wi-fi
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-laundry">
                                                  <a href="../accommodation-facility/laundry/index.html">
                                                    Laundry
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-smart-tv">
                                                  <a href="../accommodation-facility/smart-tv/index.html">
                                                    Smart TV
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-under-protection">
                                                  <a href="../accommodation-facility/under-protection/index.html">
                                                    Under protection
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-size">
                                              <span className="mphb-attribute-title mphb-size-title">
                                                Size:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                35ft²{" "}
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-categories">
                                              <span className="mphb-attribute-title mphb-categories-title">
                                                Categories:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="category-economy">
                                                  <a href="../accommodation-category/economy/index.html">
                                                    Economy
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <p className="mphb-regular-price">
                                            <strong>Prices start at:</strong>{" "}
                                            <span className="mphb-price">
                                              <span className="mphb-currency">
                                                €
                                              </span>
                                              39
                                            </span>
                                            <span
                                              className="mphb-price-period"
                                              title="Choose dates to see relevant prices">
                                              per night
                                            </span>
                                          </p>
                                          <div className="mphb-to-book-btn-wrapper">
                                            <form
                                              action="https://kinsley.bslthemes.com/accommodation/double-room/#booking-form-1006"
                                              method="get">
                                              <button
                                                type="submit"
                                                className="button mphb-book-button">
                                                Book
                                              </button>
                                            </form>{" "}
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="mphb_sc_room-wrapper knsl-scroll-animation">
                                        <div className="mphb-room-type post-1015 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-standard mphb_room_type_tag-classic mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-3 mphb-room-type-children-0 ">
                                          <p className="post-thumbnail mphb-loop-room-thumbnail">
                                            <a href="../accommodation/classic-room/index.html">
                                              <img loading="lazy"
                                                decoding="async" width="1000"
                                                height="664"
                                                src="../assets/wp-content/uploads/2021/12/room-4.jpg"
                                                class="attachment-post-thumbnail
                                                size-post-thumbnail
                                                wp-post-image" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4.jpg
                                                1000w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-300x199.jpg
                                                300w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-768x510.jpg
                                                768w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-950x631.jpg
                                                950w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-800x531.jpg
                                                800w" sizes="(max-width: 1000px)
                                                100vw, 1000px" />
                                              <img
                                                loading="lazy"
                                                decoding="async"
                                                width={1000}
                                                height={664}
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20664%22%3E%3C/svg%3E"
                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4.jpg"
                                                className="lazyload attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt=""
                                                data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4.jpg 1000w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-300x199.jpg 300w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-768x510.jpg 768w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-950x631.jpg 950w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-800x531.jpg 800w"
                                                data-sizes="(max-width: 1000px) 100vw, 1000px"
                                              />
                                            </a>
                                          </p>
                                          <h2 className="mphb-room-type-title entry-title">
                                            <a
                                              className="mphb-room-type-title"
                                              href="../accommodation/classic-room/index.html">
                                              Classic Room
                                            </a>
                                          </h2>
                                          <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                                            <p>
                                              Image for cattle earth. May one
                                              Which life divide sea. Optio
                                              veniam quibusdam fugit aspernatur
                                              ratione rerum necessitatibus ipsa
                                              eligendi? Laudantium beatae aut
                                              earum ab doloribus tempore
                                              veritatis repellat natus illo,
                                              veniam quibusdam fugit aspernatur
                                              cumque harum quos esse libero
                                              nesciunt, molestiae saepe,
                                              possimus a suscipit.
                                            </p>
                                          </div>
                                          <h3 className="mphb-room-type-details-title">
                                            Details
                                          </h3>
                                          <ul className="mphb-loop-room-type-attributes">
                                            <li className="mphb-room-type-adults-capacity">
                                              <span className="mphb-attribute-title mphb-adults-title">
                                                Adults:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                3
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-facilities">
                                              <span className="mphb-attribute-title mphb-facilities-title">
                                                Amenities:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="facility-4-private-pools">
                                                  <a href="../accommodation-facility/4-private-pools/index.html">
                                                    4 private pools
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-air-conditioning">
                                                  <a href="../accommodation-facility/air-conditioning/index.html">
                                                    Air-conditioned
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-airport-transfer">
                                                  <a href="../accommodation-facility/airport-transfer/index.html">
                                                    Airport transfer
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-all-inclusive">
                                                  <a href="../accommodation-facility/all-inclusive/index.html">
                                                    All inclusive
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-wifi">
                                                  <a href="../accommodation-facility/wifi/index.html">
                                                    Free wi-fi
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-laundry">
                                                  <a href="../accommodation-facility/laundry/index.html">
                                                    Laundry
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-smart-tv">
                                                  <a href="../accommodation-facility/smart-tv/index.html">
                                                    Smart TV
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-under-protection">
                                                  <a href="../accommodation-facility/under-protection/index.html">
                                                    Under protection
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-size">
                                              <span className="mphb-attribute-title mphb-size-title">
                                                Size:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                42ft²{" "}
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-categories">
                                              <span className="mphb-attribute-title mphb-categories-title">
                                                Categories:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="category-standard">
                                                  <a href="../accommodation-category/standard/index.html">
                                                    Standard
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <p className="mphb-regular-price">
                                            <strong>Prices start at:</strong>{" "}
                                            <span className="mphb-price">
                                              <span className="mphb-currency">
                                                €
                                              </span>
                                              35
                                            </span>
                                            <span
                                              className="mphb-price-period"
                                              title="Choose dates to see relevant prices">
                                              per night
                                            </span>
                                          </p>
                                          <div className="mphb-to-book-btn-wrapper">
                                            <form
                                              action="https://kinsley.bslthemes.com/accommodation/classic-room/#booking-form-1015"
                                              method="get">
                                              <button
                                                type="submit"
                                                className="button mphb-book-button">
                                                Book
                                              </button>
                                            </form>{" "}
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="mphb_sc_room-wrapper knsl-scroll-animation">
                                        <div className="mphb-room-type post-1189 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-standard mphb_room_type_tag-classic mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-3 mphb-room-type-children-2 ">
                                          <p className="post-thumbnail mphb-loop-room-thumbnail">
                                            <a href="../accommodation/triple-classic-room/index.html">
                                              <img loading="lazy"
                                                decoding="async" width="1000"
                                                height="563"
                                                src="../assets/wp-content/uploads/2021/12/room-7.jpg"
                                                class="attachment-post-thumbnail
                                                size-post-thumbnail
                                                wp-post-image" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7.jpg
                                                1000w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7-300x169.jpg
                                                300w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7-768x432.jpg
                                                768w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7-950x535.jpg
                                                950w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7-800x450.jpg
                                                800w" sizes="(max-width: 1000px)
                                                100vw, 1000px" />
                                              <img
                                                loading="lazy"
                                                decoding="async"
                                                width={1000}
                                                height={563}
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20563%22%3E%3C/svg%3E"
                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7.jpg"
                                                className="lazyload attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt=""
                                                data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7.jpg 1000w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7-300x169.jpg 300w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7-768x432.jpg 768w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7-950x535.jpg 950w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-7-800x450.jpg 800w"
                                                data-sizes="(max-width: 1000px) 100vw, 1000px"
                                              />
                                            </a>
                                          </p>
                                          <h2 className="mphb-room-type-title entry-title">
                                            <a
                                              className="mphb-room-type-title"
                                              href="../accommodation/triple-classic-room/index.html">
                                              Triple Classic Room
                                            </a>
                                          </h2>
                                          <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                                            <p>
                                              Image for cattle earth. May one
                                              Which life divide sea. Optio
                                              veniam quibusdam fugit aspernatur
                                              ratione rerum necessitatibus ipsa
                                              eligendi? Laudantium beatae aut
                                              earum ab doloribus tempore
                                              veritatis repellat natus illo,
                                              veniam quibusdam fugit aspernatur
                                              cumque harum quos esse libero
                                              nesciunt, molestiae saepe,
                                              possimus a suscipit.
                                            </p>
                                          </div>
                                          <h3 className="mphb-room-type-details-title">
                                            Details
                                          </h3>
                                          <ul className="mphb-loop-room-type-attributes">
                                            <li className="mphb-room-type-adults-capacity">
                                              <span className="mphb-attribute-title mphb-adults-title">
                                                Adults:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                3
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-children-capacity">
                                              <span className="mphb-attribute-title mphb-children-title">
                                                Children:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                2
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-facilities">
                                              <span className="mphb-attribute-title mphb-facilities-title">
                                                Amenities:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="facility-4-private-pools">
                                                  <a href="../accommodation-facility/4-private-pools/index.html">
                                                    4 private pools
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-air-conditioning">
                                                  <a href="../accommodation-facility/air-conditioning/index.html">
                                                    Air-conditioned
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-airport-transfer">
                                                  <a href="../accommodation-facility/airport-transfer/index.html">
                                                    Airport transfer
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-all-inclusive">
                                                  <a href="../accommodation-facility/all-inclusive/index.html">
                                                    All inclusive
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-wifi">
                                                  <a href="../accommodation-facility/wifi/index.html">
                                                    Free wi-fi
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-laundry">
                                                  <a href="../accommodation-facility/laundry/index.html">
                                                    Laundry
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-smart-tv">
                                                  <a href="../accommodation-facility/smart-tv/index.html">
                                                    Smart TV
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-under-protection">
                                                  <a href="../accommodation-facility/under-protection/index.html">
                                                    Under protection
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-size">
                                              <span className="mphb-attribute-title mphb-size-title">
                                                Size:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                42ft²{" "}
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-categories">
                                              <span className="mphb-attribute-title mphb-categories-title">
                                                Categories:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="category-standard">
                                                  <a href="../accommodation-category/standard/index.html">
                                                    Standard
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <p className="mphb-regular-price">
                                            <strong>Prices start at:</strong>{" "}
                                            <span className="mphb-price">
                                              <span className="mphb-currency">
                                                €
                                              </span>
                                              79
                                            </span>
                                            <span
                                              className="mphb-price-period"
                                              title="Choose dates to see relevant prices">
                                              per night
                                            </span>
                                          </p>
                                          <div className="mphb-to-book-btn-wrapper">
                                            <form
                                              action="https://kinsley.bslthemes.com/accommodation/triple-classic-room/#booking-form-1189"
                                              method="get">
                                              <button
                                                type="submit"
                                                className="button mphb-book-button">
                                                Book
                                              </button>
                                            </form>{" "}
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="mphb_sc_room-wrapper knsl-scroll-animation">
                                        <div className="mphb-room-type post-1190 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-luxe mphb_room_type_tag-double mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-2 mphb-room-type-children-0 ">
                                          <p className="post-thumbnail mphb-loop-room-thumbnail">
                                            <a href="../accommodation/business-class-room/index.html">
                                              <img loading="lazy"
                                                decoding="async" width="1000"
                                                height="668"
                                                src="../assets/wp-content/uploads/2021/12/room-8.jpg"
                                                class="attachment-post-thumbnail
                                                size-post-thumbnail
                                                wp-post-image" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8.jpg
                                                1000w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-300x200.jpg
                                                300w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-768x513.jpg
                                                768w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-950x635.jpg
                                                950w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-800x534.jpg
                                                800w" sizes="(max-width: 1000px)
                                                100vw, 1000px" />
                                              <img
                                                loading="lazy"
                                                decoding="async"
                                                width={1000}
                                                height={668}
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20668%22%3E%3C/svg%3E"
                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8.jpg"
                                                className="lazyload attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt=""
                                                data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8.jpg 1000w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-300x200.jpg 300w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-768x513.jpg 768w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-950x635.jpg 950w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-800x534.jpg 800w"
                                                data-sizes="(max-width: 1000px) 100vw, 1000px"
                                              />
                                            </a>
                                          </p>
                                          <h2 className="mphb-room-type-title entry-title">
                                            <a
                                              className="mphb-room-type-title"
                                              href="../accommodation/business-class-room/index.html">
                                              Business Class Room
                                            </a>
                                          </h2>
                                          <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                                            <p>
                                              Image for cattle earth. May one
                                              Which life divide sea. Optio
                                              veniam quibusdam fugit aspernatur
                                              ratione rerum necessitatibus ipsa
                                              eligendi? Laudantium beatae aut
                                              earum ab doloribus tempore
                                              veritatis repellat natus illo,
                                              veniam quibusdam fugit aspernatur
                                              cumque harum quos esse libero
                                              nesciunt, molestiae saepe,
                                              possimus a suscipit.
                                            </p>
                                          </div>
                                          <h3 className="mphb-room-type-details-title">
                                            Details
                                          </h3>
                                          <ul className="mphb-loop-room-type-attributes">
                                            <li className="mphb-room-type-adults-capacity">
                                              <span className="mphb-attribute-title mphb-adults-title">
                                                Adults:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                2
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-facilities">
                                              <span className="mphb-attribute-title mphb-facilities-title">
                                                Amenities:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="facility-4-private-pools">
                                                  <a href="../accommodation-facility/4-private-pools/index.html">
                                                    4 private pools
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-air-conditioning">
                                                  <a href="../accommodation-facility/air-conditioning/index.html">
                                                    Air-conditioned
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-airport-transfer">
                                                  <a href="../accommodation-facility/airport-transfer/index.html">
                                                    Airport transfer
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-all-inclusive">
                                                  <a href="../accommodation-facility/all-inclusive/index.html">
                                                    All inclusive
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-wifi">
                                                  <a href="../accommodation-facility/wifi/index.html">
                                                    Free wi-fi
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-laundry">
                                                  <a href="../accommodation-facility/laundry/index.html">
                                                    Laundry
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-smart-tv">
                                                  <a href="../accommodation-facility/smart-tv/index.html">
                                                    Smart TV
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-under-protection">
                                                  <a href="../accommodation-facility/under-protection/index.html">
                                                    Under protection
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-size">
                                              <span className="mphb-attribute-title mphb-size-title">
                                                Size:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                35ft²{" "}
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-categories">
                                              <span className="mphb-attribute-title mphb-categories-title">
                                                Categories:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="category-luxe">
                                                  <a href="../accommodation-category/luxe/index.html">
                                                    Luxe
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <p className="mphb-regular-price">
                                            <strong>Prices start at:</strong>{" "}
                                            <span className="mphb-price">
                                              <span className="mphb-currency">
                                                €
                                              </span>
                                              59
                                            </span>
                                            <span
                                              className="mphb-price-period"
                                              title="Choose dates to see relevant prices">
                                              per night
                                            </span>
                                          </p>
                                          <div className="mphb-to-book-btn-wrapper">
                                            <form
                                              action="https://kinsley.bslthemes.com/accommodation/business-class-room/#booking-form-1190"
                                              method="get">
                                              <button
                                                type="submit"
                                                className="button mphb-book-button">
                                                Book
                                              </button>
                                            </form>{" "}
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="mphb_sc_room-wrapper knsl-scroll-animation">
                                        <div className="mphb-room-type post-1191 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-luxe mphb_room_type_tag-minimal mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-2 mphb-room-type-children-0 ">
                                          <p className="post-thumbnail mphb-loop-room-thumbnail">
                                            <a href="../accommodation/royal-class-room/index.html">
                                              <img loading="lazy"
                                                decoding="async" width="1000"
                                                height="667"
                                                src="../assets/wp-content/uploads/2021/12/room-6.jpg"
                                                class="attachment-post-thumbnail
                                                size-post-thumbnail
                                                wp-post-image" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6.jpg
                                                1000w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6-300x200.jpg
                                                300w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6-768x512.jpg
                                                768w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6-950x634.jpg
                                                950w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6-800x534.jpg
                                                800w" sizes="(max-width: 1000px)
                                                100vw, 1000px" />
                                              <img
                                                loading="lazy"
                                                decoding="async"
                                                width={1000}
                                                height={667}
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20667%22%3E%3C/svg%3E"
                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6.jpg"
                                                className="lazyload attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt=""
                                                data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6.jpg 1000w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6-300x200.jpg 300w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6-768x512.jpg 768w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6-950x634.jpg 950w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-6-800x534.jpg 800w"
                                                data-sizes="(max-width: 1000px) 100vw, 1000px"
                                              />
                                            </a>
                                          </p>
                                          <h2 className="mphb-room-type-title entry-title">
                                            <a
                                              className="mphb-room-type-title"
                                              href="../accommodation/royal-class-room/index.html">
                                              Royal Class Room
                                            </a>
                                          </h2>
                                          <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                                            <p>
                                              Image for cattle earth. May one
                                              Which life divide sea. Optio
                                              veniam quibusdam fugit aspernatur
                                              ratione rerum necessitatibus ipsa
                                              eligendi? Laudantium beatae aut
                                              earum ab doloribus tempore
                                              veritatis repellat natus illo,
                                              veniam quibusdam fugit aspernatur
                                              cumque harum quos esse libero
                                              nesciunt, molestiae saepe,
                                              possimus a suscipit.
                                            </p>
                                          </div>
                                          <h3 className="mphb-room-type-details-title">
                                            Details
                                          </h3>
                                          <ul className="mphb-loop-room-type-attributes">
                                            <li className="mphb-room-type-adults-capacity">
                                              <span className="mphb-attribute-title mphb-adults-title">
                                                Adults:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                2
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-facilities">
                                              <span className="mphb-attribute-title mphb-facilities-title">
                                                Amenities:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="facility-4-private-pools">
                                                  <a href="../accommodation-facility/4-private-pools/index.html">
                                                    4 private pools
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-air-conditioning">
                                                  <a href="../accommodation-facility/air-conditioning/index.html">
                                                    Air-conditioned
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-airport-transfer">
                                                  <a href="../accommodation-facility/airport-transfer/index.html">
                                                    Airport transfer
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-all-inclusive">
                                                  <a href="../accommodation-facility/all-inclusive/index.html">
                                                    All inclusive
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-wifi">
                                                  <a href="../accommodation-facility/wifi/index.html">
                                                    Free wi-fi
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-laundry">
                                                  <a href="../accommodation-facility/laundry/index.html">
                                                    Laundry
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-smart-tv">
                                                  <a href="../accommodation-facility/smart-tv/index.html">
                                                    Smart TV
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-under-protection">
                                                  <a href="../accommodation-facility/under-protection/index.html">
                                                    Under protection
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-size">
                                              <span className="mphb-attribute-title mphb-size-title">
                                                Size:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                50ft²{" "}
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-categories">
                                              <span className="mphb-attribute-title mphb-categories-title">
                                                Categories:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="category-luxe">
                                                  <a href="../accommodation-category/luxe/index.html">
                                                    Luxe
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <p className="mphb-regular-price">
                                            <strong>Prices start at:</strong>{" "}
                                            <span className="mphb-price">
                                              <span className="mphb-currency">
                                                €
                                              </span>
                                              119
                                            </span>
                                            <span
                                              className="mphb-price-period"
                                              title="Choose dates to see relevant prices">
                                              per night
                                            </span>
                                          </p>
                                          <div className="mphb-to-book-btn-wrapper">
                                            <form
                                              action="https://kinsley.bslthemes.com/accommodation/royal-class-room/#booking-form-1191"
                                              method="get">
                                              <button
                                                type="submit"
                                                className="button mphb-book-button">
                                                Book
                                              </button>
                                            </form>{" "}
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="mphb_sc_room-wrapper knsl-scroll-animation">
                                        <div className="mphb-room-type post-1192 mphb_room_type type-mphb_room_type status-publish has-post-thumbnail mphb_room_type_category-standard mphb_room_type_tag-luxe mphb_room_type_facility-4-private-pools mphb_room_type_facility-air-conditioning mphb_room_type_facility-airport-transfer mphb_room_type_facility-all-inclusive mphb_room_type_facility-wifi mphb_room_type_facility-laundry mphb_room_type_facility-smart-tv mphb_room_type_facility-under-protection mphb-room-type-adults-4 mphb-room-type-children-0 ">
                                          <p className="post-thumbnail mphb-loop-room-thumbnail">
                                            <a href="../accommodation/superior-ocean-room/index.html">
                                              <img loading="lazy"
                                                decoding="async" width="1000"
                                                height="667"
                                                src="../assets/wp-content/uploads/2021/12/room-5.jpg"
                                                class="attachment-post-thumbnail
                                                size-post-thumbnail
                                                wp-post-image" alt=""
                                                srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5.jpg
                                                1000w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5-300x200.jpg
                                                300w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5-768x512.jpg
                                                768w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5-950x634.jpg
                                                950w,
                                                https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5-800x534.jpg
                                                800w" sizes="(max-width: 1000px)
                                                100vw, 1000px" />
                                              <img
                                                loading="lazy"
                                                decoding="async"
                                                width={1000}
                                                height={667}
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201000%20667%22%3E%3C/svg%3E"
                                                data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5.jpg"
                                                className="lazyload attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                alt=""
                                                data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5.jpg 1000w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5-300x200.jpg 300w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5-768x512.jpg 768w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5-950x634.jpg 950w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-5-800x534.jpg 800w"
                                                data-sizes="(max-width: 1000px) 100vw, 1000px"
                                              />
                                            </a>
                                          </p>
                                          <h2 className="mphb-room-type-title entry-title">
                                            <a
                                              className="mphb-room-type-title"
                                              href="../accommodation/superior-ocean-room/index.html">
                                              Superior Ocean Room
                                            </a>
                                          </h2>
                                          <div className="knsl-text-light knsl-text-sm knsl-mb-20">
                                            <p>
                                              Image for cattle earth. May one
                                              Which life divide sea. Optio
                                              veniam quibusdam fugit aspernatur
                                              ratione rerum necessitatibus ipsa
                                              eligendi? Laudantium beatae aut
                                              earum ab doloribus tempore
                                              veritatis repellat natus illo,
                                              veniam quibusdam fugit aspernatur
                                              cumque harum quos esse libero
                                              nesciunt, molestiae saepe,
                                              possimus a suscipit.
                                            </p>
                                          </div>
                                          <h3 className="mphb-room-type-details-title">
                                            Details
                                          </h3>
                                          <ul className="mphb-loop-room-type-attributes">
                                            <li className="mphb-room-type-adults-capacity">
                                              <span className="mphb-attribute-title mphb-adults-title">
                                                Adults:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                {" "}
                                                4
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-facilities">
                                              <span className="mphb-attribute-title mphb-facilities-title">
                                                Amenities:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="facility-4-private-pools">
                                                  <a href="../accommodation-facility/4-private-pools/index.html">
                                                    4 private pools
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-air-conditioning">
                                                  <a href="../accommodation-facility/air-conditioning/index.html">
                                                    Air-conditioned
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-airport-transfer">
                                                  <a href="../accommodation-facility/airport-transfer/index.html">
                                                    Airport transfer
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-all-inclusive">
                                                  <a href="../accommodation-facility/all-inclusive/index.html">
                                                    All inclusive
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-wifi">
                                                  <a href="../accommodation-facility/wifi/index.html">
                                                    Free wi-fi
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-laundry">
                                                  <a href="../accommodation-facility/laundry/index.html">
                                                    Laundry
                                                  </a>
                                                </span>
                                                ,
                                                <span className="facility-smart-tv">
                                                  <a href="../accommodation-facility/smart-tv/index.html">
                                                    Smart TV
                                                  </a>
                                                </span>
                                                ,{" "}
                                                <span className="facility-under-protection">
                                                  <a href="../accommodation-facility/under-protection/index.html">
                                                    Under protection
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-size">
                                              <span className="mphb-attribute-title mphb-size-title">
                                                Size:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                95ft²{" "}
                                              </span>
                                            </li>
                                            <li className="mphb-room-type-categories">
                                              <span className="mphb-attribute-title mphb-categories-title">
                                                Categories:
                                              </span>
                                              <span className="mphb-attribute-value">
                                                <span className="category-standard">
                                                  <a href="../accommodation-category/standard/index.html">
                                                    Standard
                                                  </a>
                                                </span>
                                              </span>
                                            </li>
                                          </ul>
                                          <p className="mphb-regular-price">
                                            <strong>Prices start at:</strong>{" "}
                                            <span className="mphb-price">
                                              <span className="mphb-currency">
                                                €
                                              </span>
                                              19
                                            </span>
                                            <span
                                              className="mphb-price-period"
                                              title="Choose dates to see relevant prices">
                                              per night
                                            </span>
                                          </p>
                                          <div className="mphb-to-book-btn-wrapper">
                                            <form
                                              action="https://kinsley.bslthemes.com/accommodation/superior-ocean-room/#booking-form-1192"
                                              method="get">
                                              <button
                                                type="submit"
                                                className="button mphb-book-button">
                                                Book
                                              </button>
                                            </form>{" "}
                                            <br />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>{" "}
                                  {/* slider navigation */}
                                  <div className="knsl-uni-slider-nav-panel">
                                    <div className="knsl-uni-slider-pagination" />
                                    <div className="knsl-uni-nav">
                                      <div className="knsl-uni-slider-prev">
                                        <i className="fas fa-arrow-left" />
                                      </div>
                                      <div className="knsl-uni-slider-next">
                                        <i className="fas fa-arrow-right" />
                                      </div>
                                    </div>
                                  </div>{" "}
                                  {/* slider navigation end */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>{" "}
                        {/* rooms end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-000b28d elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="000b28d"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5da090b"
                  data-id="5da090b"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-04e9af5 elementor-widget elementor-widget-kinsley-services"
                      data-id="04e9af5"
                      data-element_type="widget"
                      data-widget_type="kinsley-services.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* services */}
                        <section className="knsl-p-0-80">
                          <div className="container">
                            <div className="row ">
                              <div className="col-lg-12">
                                <div className="knsl-center knsl-title-frame knsl-scroll-animation knsl-mb-100">
                                  <h2 className="knsl-title--h knsl-mb-20">
                                    {" "}
                                    <span> Around The Hotel </span>
                                  </h2>
                                  <div className="knsl-text knsl-mb-30">
                                    <p>
                                      {" "}
                                      <span>
                                        {" "}
                                        Consectetur adipisicing elit. Nihil,
                                        illum voluptate eveniet ex fugit ea
                                        delectus, sed voluptatem. Laborum
                                        accusantium libero commodi id officiis
                                        itaque esse adipisci, necessitatibus
                                        asperiores, illo odio.{" "}
                                      </span>
                                    </p>
                                  </div>{" "}
                                  <a
                                    href="../services/index.html"
                                    className="knsl-btn knsl-btn-md">
                                    {" "}
                                    <span> Services </span>
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-4">
                                {" "}
                                {/* service card */}
                                <div className="knsl-ath-card ">
                                  <div className="knsl-cover-frame">
                                    {" "}
                                    <a href="../services/gym/index.html">
                                      {" "}
                                      <noscript>
                                        &lt;img decoding="async"
                                        src="../assets/wp-content/uploads/2021/10/service-6-950x1473.jpg"
                                        alt="Gym"&gt;
                                      </noscript>
                                      <img
                                        className="lazyload"
                                        decoding="async"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-6-950x1473.jpg"
                                        alt="Gym"
                                      />{" "}
                                    </a>
                                    <div className="knsl-badge">
                                      <p className="mphb-price-wrapper">
                                        <strong>Price:</strong>{" "}
                                        <span className="mphb-price">Free</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="knsl-card-description">
                                    <h3 className="knsl-mb-10"> Gym</h3>
                                    <div className="knsl-text knsl-text--h">
                                      <p>
                                        Image for cattle earth. May one Which
                                        life divide sea. Commodi soluta minima
                                        nemo,…
                                      </p>
                                    </div>{" "}
                                    <a
                                      href="../services/gym/index.html"
                                      className="knsl-btn">
                                      {" "}
                                      Read more{" "}
                                      <span className="screen-reader-text">
                                        Read more&nbsp;Gym
                                      </span>{" "}
                                    </a>
                                  </div>
                                </div>{" "}
                                {/* service card end */}
                              </div>
                              <div className="col-md-6 col-lg-4">
                                {" "}
                                {/* service card */}
                                <div className="knsl-ath-card ">
                                  <div className="knsl-cover-frame">
                                    {" "}
                                    <a href="../services/pool/index.html">
                                      {" "}
                                      <noscript>
                                        &lt;img decoding="async"
                                        src="../assets/wp-content/uploads/2021/10/service-2-950x1266.jpg"
                                        alt="Pool"&gt;
                                      </noscript>
                                      <img
                                        className="lazyload"
                                        decoding="async"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-2-950x1266.jpg"
                                        alt="Pool"
                                      />{" "}
                                    </a>
                                    <div className="knsl-badge">
                                      <p className="mphb-price-wrapper">
                                        <strong>Price:</strong>{" "}
                                        <span className="mphb-price">
                                          <span className="mphb-currency">
                                            €
                                          </span>
                                          10
                                        </span>
                                        / Per Instance / Per Guest
                                      </p>
                                    </div>
                                  </div>
                                  <div className="knsl-card-description">
                                    <h3 className="knsl-mb-10"> Pool</h3>
                                    <div className="knsl-text knsl-text--h">
                                      <p>
                                        Image for cattle earth. May one Which
                                        life divide sea. Commodi soluta minima
                                        nemo,…
                                      </p>
                                    </div>{" "}
                                    <a
                                      href="../services/pool/index.html"
                                      className="knsl-btn">
                                      {" "}
                                      Read more{" "}
                                      <span className="screen-reader-text">
                                        Read more&nbsp;Pool
                                      </span>{" "}
                                    </a>
                                  </div>
                                </div>{" "}
                                {/* service card end */}
                              </div>
                              <div className="col-md-6 col-lg-4">
                                {" "}
                                {/* service card */}
                                <div className="knsl-ath-card ">
                                  <div className="knsl-cover-frame">
                                    {" "}
                                    <a href="../services/lounge-bar/index.html">
                                      <noscript>
                                        &lt;img decoding="async"
                                        src="../assets/wp-content/uploads/2021/10/service-1-950x1425.jpg"
                                        alt="Lounge bar"&gt;
                                      </noscript>
                                      <img
                                        className="lazyload"
                                        decoding="async"
                                        src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                        data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/service-1-950x1425.jpg"
                                        alt="Lounge bar"
                                      />{" "}
                                    </a>
                                    <div className="knsl-badge">
                                      <p className="mphb-price-wrapper">
                                        <strong>Price:</strong>{" "}
                                        <span className="mphb-price">Free</span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="knsl-card-description">
                                    <h3 className="knsl-mb-10"> Lounge bar</h3>
                                    <div className="knsl-text knsl-text--h">
                                      <p>
                                        Image for cattle earth. May one Which
                                        life divide sea. Commodi soluta minima
                                        nemo,…
                                      </p>
                                    </div>{" "}
                                    <a
                                      href="../services/lounge-bar/index.html"
                                      className="knsl-btn">
                                      {" "}
                                      Read more{" "}
                                      <span className="screen-reader-text">
                                        Read more&nbsp;Lounge bar
                                      </span>{" "}
                                    </a>
                                  </div>
                                </div>{" "}
                                {/* service card end */}
                              </div>
                            </div>
                          </div>
                        </section>{" "}
                        {/* services end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-27b19fd elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="27b19fd"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c9fb82e"
                  data-id="c9fb82e"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-741770e elementor-widget elementor-widget-kinsley-testimonials"
                      data-id="741770e"
                      data-element_type="widget"
                      data-widget_type="kinsley-testimonials.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* testimonials */}
                        <section className="knsl-transition-none knsl-p-0-80">
                          {" "}
                          <noscript>
                            &lt;img decoding="async"
                            src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
                            class="knsl-deco-left" alt="palm" /&gt;
                          </noscript>
                          <img
                            decoding="async"
                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                            data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                            className="lazyload knsl-deco-left"
                            alt="palm"
                          />
                          <div className="container">
                            <div className="row justify-content-center">
                              <div className="col-lg-12">
                                <div className="knsl-center knsl-title-frame knsl-scroll-animation knsl-mb-80">
                                  <h2 className="knsl-title--h knsl-mb-20">
                                    {" "}
                                    <span> Feedback from our Guests </span>
                                  </h2>
                                  <div className="knsl-text">
                                    <p>
                                      {" "}
                                      <span>
                                        {" "}
                                        Consectetur adipisicing elit. Nihil,
                                        illum voluptate eveniet ex fugit ea
                                        delectus, sed voluptatem. Laborum
                                        accusantium libero commodi id officiis
                                        itaque esse adipisci, necessitatibus
                                        asperiores, illo odio.{" "}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                {" "}
                                {/* slider */}
                                <div className="swiper-slider knsl-testimonials-slider knsl-scroll-animation">
                                  <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                      <div className="knsl-testimonial-card">
                                        <div className="knsl-avatar-frame">
                                          {" "}
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/10/faces-1-140x140.jpg"
                                            alt="Oscar Newman" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/faces-1-140x140.jpg"
                                            alt="Oscar Newman"
                                          />
                                        </div>
                                        <div className="knsl-name-and-text">
                                          <h3 className="knsl-mb-10">
                                            {" "}
                                            <span> Oscar Newman</span>
                                          </h3>
                                          <div className="knsl-subtitle--h">
                                            {" "}
                                            <span> From Poland </span>
                                          </div>
                                          <blockquote>
                                            <ul className="knsl-stars">
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                            </ul>
                                            <div>
                                              {" "}
                                              Dequi folores dolor sit amet,
                                              consectetur adipisicing elit.
                                              Nesciunt illo, delectus totam!
                                              Delectus illo magnam voluptatem a
                                              tempora id vitae dolor, quis natus
                                              iusto molestiae ab nam error vero
                                              possimus ullam facilis porro
                                              veritatis?
                                            </div>
                                          </blockquote>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="knsl-testimonial-card">
                                        <div className="knsl-avatar-frame">
                                          {" "}
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/10/faces-2-140x140.jpg"
                                            alt="Emma Trueman" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/faces-2-140x140.jpg"
                                            alt="Emma Trueman"
                                          />
                                        </div>
                                        <div className="knsl-name-and-text">
                                          <h3 className="knsl-mb-10">
                                            {" "}
                                            <span> Emma Trueman</span>
                                          </h3>
                                          <div className="knsl-subtitle--h">
                                            {" "}
                                            <span> From Poland </span>
                                          </div>
                                          <blockquote>
                                            <ul className="knsl-stars">
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                            </ul>
                                            <div>
                                              <p>
                                                Dequi folores dolor sit amet,
                                                consectetur adipisicing elit.
                                                Nesciunt illo, delectus totam!
                                                Delectus illo magnam voluptatem
                                                a tempora id vitae dolor, quis
                                                natus iusto molestiae ab nam
                                                error vero possimus ullam
                                                facilis porro veritatis?
                                              </p>
                                            </div>
                                          </blockquote>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="knsl-testimonial-card">
                                        <div className="knsl-avatar-frame">
                                          {" "}
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/10/faces-3-scaled-1-140x140.jpg"
                                            alt="Viktoria Freeman" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/faces-3-scaled-1-140x140.jpg"
                                            alt="Viktoria Freeman"
                                          />
                                        </div>
                                        <div className="knsl-name-and-text">
                                          <h3 className="knsl-mb-10">
                                            {" "}
                                            <span> Viktoria Freeman </span>
                                          </h3>
                                          <div className="knsl-subtitle--h">
                                            {" "}
                                            <span> From Ukraine </span>
                                          </div>
                                          <blockquote>
                                            <ul className="knsl-stars">
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                            </ul>
                                            <div>
                                              <p>
                                                Dequi folores dolor sit amet,
                                                consectetur adipisicing elit.
                                                Nesciunt illo, delectus totam!
                                                Delectus illo magnam voluptatem
                                                a tempora id vitae dolor, quis
                                                natus iusto molestiae ab nam
                                                error vero possimus ullam
                                                facilis porro veritatis?
                                              </p>
                                            </div>
                                          </blockquote>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="swiper-slide">
                                      <div className="knsl-testimonial-card">
                                        <div className="knsl-avatar-frame">
                                          {" "}
                                          <img decoding="async"
                                            src="../assets/wp-content/uploads/2021/10/faces-4-140x140.jpg"
                                            alt="Paul Oldman" />
                                          <img
                                            className="lazyload"
                                            decoding="async"
                                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                            data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/faces-4-140x140.jpg"
                                            alt="Paul Oldman"
                                          />
                                        </div>
                                        <div className="knsl-name-and-text">
                                          <h3 className="knsl-mb-10">
                                            {" "}
                                            <span> Paul Oldman</span>
                                          </h3>
                                          <div className="knsl-subtitle--h">
                                            {" "}
                                            <span> From Spain </span>
                                          </div>
                                          <blockquote>
                                            <ul className="knsl-stars">
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                              <li>
                                                <i className="fas fa-star" />
                                              </li>
                                            </ul>
                                            <div>
                                              {" "}
                                              Dequi folores dolor sit amet,
                                              consectetur adipisicing elit.
                                              Nesciunt illo, delectus totam!
                                              Delectus illo magnam voluptatem a
                                              tempora id vitae dolor, quis natus
                                              iusto molestiae ab nam error vero
                                              possimus ullam facilis porro
                                              veritatis?
                                            </div>
                                          </blockquote>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="knsl-testimonials-nav">
                                    <div className="knsl-testimonials-slider-1-prev">
                                      <i className="fas fa-arrow-left" />
                                    </div>
                                    <div className="knsl-testimonials-slider-1-next">
                                      <i className="fas fa-arrow-right" />
                                    </div>
                                  </div>
                                </div>{" "}
                                {/* slider end */}
                              </div>
                            </div>
                          </div>
                        </section>{" "}
                        {/* testimonials end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-6c9ca8c elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="6c9ca8c"
              data-element_type="section">
              <div className="elementor-container elementor-column-gap-no">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ddd7d93"
                  data-id="ddd7d93"
                  data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-1f20111 elementor-widget elementor-widget-kinsley-blog-grid"
                      data-id="1f20111"
                      data-element_type="widget"
                      data-widget_type="kinsley-blog-grid.default">
                      <div className="elementor-widget-container">
                        {" "}
                        {/* blog */}
                        <section className="knsl-transition-none knsl-p-0-80">
                          {" "}
                          <noscript>
                            &lt;img decoding="async"
                            src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
                            class="knsl-deco-right" alt="palm" /&gt;
                          </noscript>
                          <img
                            decoding="async"
                            src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                            data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                            className="lazyload knsl-deco-right"
                            alt="palm"
                          />
                          <div className="container">
                            <div className="row  attr-categories-false attr-readmore-false">
                              <div className="col-lg-12">
                                <div className="knsl-center knsl-title-frame knsl-scroll-animation knsl-mb-100">
                                  <h2 className="knsl-title--h knsl-mb-20">
                                    {" "}
                                    <span> Our Newsletter</span>
                                  </h2>
                                  <p className="knsl-text knsl-mb-30">
                                    {" "}
                                    <span>
                                      {" "}
                                      Consectetur adipisicing elit. Nihil, illum
                                      voluptate eveniet ex fugit ea delectus,
                                      sed voluptatem. Laborum accusantium libero
                                      commodi id officiis itaque esse adipisci,
                                      necessitatibus asperiores, illo odio.
                                    </span>
                                  </p>{" "}
                                  <a
                                    href="../blog/index.html"
                                    className="knsl-btn knsl-btn-md">
                                    {" "}
                                    <span> All Publications</span>{" "}
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6 col-lg-4">
                                {" "}
                                {/* blog card */}
                                <div className="knsl-blog-card">
                                  <div
                                    id="post-1181"
                                    className="post-1181 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-guide tag-places tag-travel tag-trip">
                                    <div className="knsl-cover-frame">
                                      {" "}
                                      <a href="../2021/12/21/the-ultimate-guide-to-traveling-when-you-have-no-money-2/index.html">
                                        <noscript>
                                          &lt;img decoding="async"
                                          src="../assets/wp-content/uploads/2021/10/blog-2-1-950x608.jpg"
                                          alt="The Ultimate Guide to Traveling
                                          When You Have No Money" /&gt;
                                        </noscript>
                                        <img
                                          className="lazyload"
                                          decoding="async"
                                          src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                          data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-2-1-950x608.jpg"
                                          alt="The Ultimate Guide to Traveling When You Have No Money"
                                        />
                                      </a>
                                      <div className="knsl-badge"> Travel</div>
                                    </div>
                                    <div className="knsl-description-frame">
                                      <div className="knsl-room-features">
                                        <div className="knsl-feature knsl-feature-author">
                                          <div className="knsl-icon-frame knsl-icon-author">
<img decoding="async"
                                              src="https://secure.gravatar.com/avatar/d281ad2e46d9968a9aac2ad2d87f0de5d48ae39a4ac3d6b27e7b5b5bfad96acb?s=96&amp;amp;d=mm&amp;amp;r=g"
                                              alt="Hana Evans" />
                                            <img
                                              className="lazyload"
                                              decoding="async"
                                              src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                              data-src="https://secure.gravatar.com/avatar/d281ad2e46d9968a9aac2ad2d87f0de5d48ae39a4ac3d6b27e7b5b5bfad96acb?s=96&d=mm&r=g"
                                              alt="Hana Evans"
                                            />
                                          </div>{" "}
                                          <span>Hana Evans</span>
                                        </div>
                                        <div className="knsl-feature knsl-feature-date">
                                          <div className="knsl-icon-frame">
                                            <span className="img-svg img-svg-time" />
                                          </div>{" "}
                                          <span>December 21, 2021</span>
                                        </div>
                                      </div>{" "}
                                      <a
                                        href="../2021/12/21/the-ultimate-guide-to-traveling-when-you-have-no-money-2/index.html"
                                        className="knsl-title">
                                        <h4 className="knsl-mb-20">
                                          The Ultimate Guide to Traveling When
                                          You Have No Money
                                        </h4>
                                      </a>
                                      <div className="knsl-text-light knsl-text-sm">
                                        <p>
                                          Image for cattle earth. May one Which
                                          life divide sea. Commodi soluta minima
                                          nemo,…{" "}
                                          <span className="knsl-el-more">
                                            <a
                                              href="../2021/12/21/the-ultimate-guide-to-traveling-when-you-have-no-money-2/index.html"
                                              className="knsl-btn">
                                              Read more
                                              <span className="screen-reader-text">
                                                Read more&nbsp;The Ultimate
                                                Guide to Traveling When You Have
                                                No Money
                                              </span>
                                            </a>
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                                {/* blog card end */}
                              </div>
                              <div className="col-md-6 col-lg-4">
                                {" "}
                                {/* blog card */}
                                <div className="knsl-blog-card">
                                  <div
                                    id="post-1182"
                                    className="post-1182 post type-post status-publish format-standard has-post-thumbnail hentry category-travel tag-resort tag-tour tag-travel">
                                    <div className="knsl-cover-frame">
                                      {" "}
                                      <a href="../2021/12/21/the-best-travel-insurance-companies-for-seniors-2/index.html">
                                        <noscript>
                                          &lt;img decoding="async"
                                          src="../assets/wp-content/uploads/2021/10/blog-3-950x634.jpg"
                                          alt="The Best Travel Insurance
                                          Companies for Seniors" /&gt;
                                        </noscript>
                                        <img
                                          className="lazyload"
                                          decoding="async"
                                          src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                          data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-3-950x634.jpg"
                                          alt="The Best Travel Insurance Companies for Seniors"
                                        />
                                      </a>
                                      <div className="knsl-badge"> Travel</div>
                                    </div>
                                    <div className="knsl-description-frame">
                                      <div className="knsl-room-features">
                                        <div className="knsl-feature knsl-feature-author">
                                          <div className="knsl-icon-frame knsl-icon-author">
<img decoding="async"
                                              src="https://secure.gravatar.com/avatar/d281ad2e46d9968a9aac2ad2d87f0de5d48ae39a4ac3d6b27e7b5b5bfad96acb?s=96&amp;amp;d=mm&amp;amp;r=g"
                                              alt="Hana Evans" />
                                            <img
                                              className="lazyload"
                                              decoding="async"
                                              src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                              data-src="https://secure.gravatar.com/avatar/d281ad2e46d9968a9aac2ad2d87f0de5d48ae39a4ac3d6b27e7b5b5bfad96acb?s=96&d=mm&r=g"
                                              alt="Hana Evans"
                                            />
                                          </div>{" "}
                                          <span>Hana Evans</span>
                                        </div>
                                        <div className="knsl-feature knsl-feature-date">
                                          <div className="knsl-icon-frame">
                                            <span className="img-svg img-svg-time" />
                                          </div>{" "}
                                          <span>December 21, 2021</span>
                                        </div>
                                      </div>{" "}
                                      <a
                                        href="../2021/12/21/the-best-travel-insurance-companies-for-seniors-2/index.html"
                                        className="knsl-title">
                                        <h4 className="knsl-mb-20">
                                          The Best Travel Insurance Companies
                                          for Seniors
                                        </h4>
                                      </a>
                                      <div className="knsl-text-light knsl-text-sm">
                                        <p>
                                          Image for cattle earth. May one Which
                                          life divide sea. Commodi soluta minima
                                          nemo,…{" "}
                                          <span className="knsl-el-more">
                                            <a
                                              href="../2021/12/21/the-best-travel-insurance-companies-for-seniors-2/index.html"
                                              className="knsl-btn">
                                              Read more
                                              <span className="screen-reader-text">
                                                Read more&nbsp;The Best Travel
                                                Insurance Companies for Seniors
                                              </span>
                                            </a>
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                                {/* blog card end */}
                              </div>
                              <div className="col-md-6 col-lg-4">
                                {" "}
                                {/* blog card */}
                                <div className="knsl-blog-card">
                                  <div
                                    id="post-1179"
                                    className="post-1179 post type-post status-publish format-standard has-post-thumbnail hentry category-places tag-sea tag-tour tag-travel tag-trip">
                                    <div className="knsl-cover-frame">
                                      {" "}
                                      <a href="../2021/12/21/18-easy-steps-for-planning-your-next-trip-2/index.html">
                                        <noscript>
                                          &lt;img decoding="async"
                                          src="../assets/wp-content/uploads/2021/10/blog-1-950x713.jpg"
                                          alt="18 Easy Steps for Planning Your
                                          Next Trip" /&gt;
                                        </noscript>
                                        <img
                                          className="lazyload"
                                          decoding="async"
                                          src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                          data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/10/blog-1-950x713.jpg"
                                          alt="18 Easy Steps for Planning Your Next Trip"
                                        />
                                      </a>
                                      <div className="knsl-badge"> Places</div>
                                    </div>
                                    <div className="knsl-description-frame">
                                      <div className="knsl-room-features">
                                        <div className="knsl-feature knsl-feature-author">
                                          <div className="knsl-icon-frame knsl-icon-author">
<img decoding="async"
                                              src="https://secure.gravatar.com/avatar/d281ad2e46d9968a9aac2ad2d87f0de5d48ae39a4ac3d6b27e7b5b5bfad96acb?s=96&amp;amp;d=mm&amp;amp;r=g"
                                              alt="Hana Evans" />
                                            <img
                                              className="lazyload"
                                              decoding="async"
                                              src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                              data-src="https://secure.gravatar.com/avatar/d281ad2e46d9968a9aac2ad2d87f0de5d48ae39a4ac3d6b27e7b5b5bfad96acb?s=96&d=mm&r=g"
                                              alt="Hana Evans"
                                            />
                                          </div>{" "}
                                          <span>Hana Evans</span>
                                        </div>
                                        <div className="knsl-feature knsl-feature-date">
                                          <div className="knsl-icon-frame">
                                            <span className="img-svg img-svg-time" />
                                          </div>{" "}
                                          <span>December 21, 2021</span>
                                        </div>
                                      </div>{" "}
                                      <a
                                        href="../2021/12/21/18-easy-steps-for-planning-your-next-trip-2/index.html"
                                        className="knsl-title">
                                        <h4 className="knsl-mb-20">
                                          18 Easy Steps for Planning Your Next
                                          Trip
                                        </h4>
                                      </a>
                                      <div className="knsl-text-light knsl-text-sm">
                                        <p>
                                          Image for cattle earth. May one Which
                                          life divide sea. Commodi soluta minima
                                          nemo,…{" "}
                                          <span className="knsl-el-more">
                                            <a
                                              href="../2021/12/21/18-easy-steps-for-planning-your-next-trip-2/index.html"
                                              className="knsl-btn">
                                              Read more
                                              <span className="screen-reader-text">
                                                Read more&nbsp;18 Easy Steps for
                                                Planning Your Next Trip
                                              </span>
                                            </a>
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>{" "}
                                {/* blog card end */}
                              </div>
                            </div>
                          </div>
                        </section>{" "}
                        {/* blog end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* #post-1120 */} {/* footer */}
      </>
    </>
  );
};

export default Home3;
