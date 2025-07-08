import { useEffect } from "react";

const SearchAvailability = () => {
  useEffect(() => {
    document.body.className =
      "wp-singular page-template page-template-template-layout-builder page-template-template-layout-builder-php page page-id-7 wp-theme-kinsley wp-child-theme-kinsley-child theme-kinsley woocommerce-no-js elementor-default elementor-kit-5762 elementor-page elementor-page-7";
    return () => (document.body.className = "");
  }, []);
  return (
    <>
      <>
        <>
          <>
            <div
              id="post-7"
              className="post-7 page type-page status-publish hentry">
              <div
                data-elementor-type="wp-page"
                data-elementor-id={7}
                className="elementor elementor-7">
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-3ec11a1 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                  data-id="3ec11a1"
                  data-element_type="section">
                  <div className="elementor-container elementor-column-gap-no">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bd3d1b7"
                      data-id="bd3d1b7"
                      data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-97cdb82 elementor-widget elementor-widget-kinsley-intro"
                          data-id="97cdb82"
                          data-element_type="widget"
                          data-widget_type="kinsley-intro.default">
                          <div className="elementor-widget-container">
                            {" "}
                            {/* banner */}
                            <section className="knsl-banner-simple knsl-transition-bottom">
                              {" "}
                              <img decoding="async"
                                src="../asset/wp-content/themes/kinsley/assets/img/palm.svg"
                                class="knsl-deco-left" alt="palm" />
                              <img
                                decoding="async"
                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                className="lazyload knsl-deco-left"
                                alt="palm"
                              />{" "}
                              <img decoding="async"
                                src="../asset/wp-content/themes/kinsley/assets/img/palm.svg"
                                class="knsl-deco-right" alt="palm" />
                              <img
                                decoding="async"
                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
                                className="lazyload knsl-deco-right"
                                alt="palm"
                              />
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div className="knsl-center knsl-title-frame">
                                      <h1 className="knsl-title--h knsl-mb-20 knsl-h1-inner">
                                        {" "}
                                        <span>Search Availability </span>
                                      </h1>
                                      <ul className="knsl-breadcrumbs">
                                        <li>
                                          <a
                                            href="../index.html"
                                            title="Kinsley - Hotel & Resort WordPress Theme">
                                            Home
                                          </a>
                                        </li>
                                        <li className="tst-active">
                                          <a>Search Availability</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>{" "}
                            {/* banner end */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-691d587f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="691d587f"
                  data-element_type="section">
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-59b6e012"
                      data-id="59b6e012"
                      data-element_type="column">
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <div
                          className="elementor-element elementor-element-10b30d5 elementor-widget elementor-widget-kinsley-mphb-search-form"
                          data-id="10b30d5"
                          data-element_type="widget"
                          data-widget_type="kinsley-mphb-search-form.default">
                          <div className="elementor-widget-container">
                            <div className="mphb_sc_search-wrapper  knsl-book-form knsl-book-form-v">
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
                                  <label htmlFor="mphb_check_in_date-mphb-search-form-686525a69f57a">
                                    Check-in{" "}
                                    <abbr title="Formatted as dd/mm/yyyy">
                                      *
                                    </abbr>{" "}
                                  </label>
                                  <br />{" "}
                                  <input
                                    id="mphb_check_in_date-mphb-search-form-686525a69f57a"
                                    data-datepick-group="mphb-search-form-686525a69f57a"
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
                                  <label htmlFor="mphb_check_out_date-mphb-search-form-686525a69f57a">
                                    Check-out{" "}
                                    <abbr title="Formatted as dd/mm/yyyy">
                                      *
                                    </abbr>
                                  </label>{" "}
                                  <br />{" "}
                                  <input
                                    id="mphb_check_out_date-mphb-search-form-686525a69f57a"
                                    data-datepick-group="mphb-search-form-686525a69f57a"
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
                                  <label htmlFor="mphb_adults-mphb-search-form-686525a69f57a">
                                    {" "}
                                    Adults
                                  </label>{" "}
                                  <br />{" "}
                                  <select
                                    id="mphb_adults-mphb-search-form-686525a69f57a"
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
                                  <label htmlFor="mphb_children-mphb-search-form-686525a69f57a">
                                    {" "}
                                    Children
                                  </label>{" "}
                                  <br />{" "}
                                  <select
                                    id="mphb_children-mphb-search-form-686525a69f57a"
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
                                  id="mphb_check_in_date-mphb-search-form-686525a69f57a-hidden"
                                  defaultValue=""
                                  type="hidden"
                                  name="mphb_check_in_date"
                                />
                                <input
                                  id="mphb_check_out_date-mphb-search-form-686525a69f57a-hidden"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* #post-7 */} {/* footer */}
          </>
        </>
      </>
    </>
  );
};

export default SearchAvailability;
