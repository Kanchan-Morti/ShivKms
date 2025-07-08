import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

const FullLayout = () => {
    return(
    <>
    <div className="knsl-app">
        <Loader/>
      {/* datepicker frame */}
      <div className="knsl-datepicker-place" /> {/* top bar */}
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    {/* page wrapper end */} {/* popup */}
    <div className="knsl-popup-frame knsl-popup-frame-2" id="booknow">
      <div className="knsl-book-form knsl-book-form-v knsl-book-popup">
        
        <span className="knsl-close-popup">+</span>
        <h2 className="knsl-mb-40">Search your Room</h2>
        <div className="mphb_sc_search-wrapper '&quot;">
          <form
            method="GET"
            className="mphb_sc_search-form"
            action="https://kinsley.bslthemes.com/search-results/"
          >
            <p className="mphb-required-fields-tip">
              
              <small>
                
                Required fields are followed by <abbr title="required">
                  *
                </abbr>
              </small>
            </p>
            <p className="mphb_sc_search-check-in-date">
              
              <label htmlFor="mphb_check_in_date-mphb-search-form-68652582a044a">
                
                Check-in <abbr title="Formatted as dd/mm/yyyy">*</abbr>
              </label>
              <br />
              <input
                id="mphb_check_in_date-mphb-search-form-68652582a044a"
                data-datepick-group="mphb-search-form-68652582a044a"
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
              
              <label htmlFor="mphb_check_out_date-mphb-search-form-68652582a044a">
                
                Check-out <abbr title="Formatted as dd/mm/yyyy">*</abbr>
              </label>
              <br />
              <input
                id="mphb_check_out_date-mphb-search-form-68652582a044a"
                data-datepick-group="mphb-search-form-68652582a044a"
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
              
              <label htmlFor="mphb_adults-mphb-search-form-68652582a044a">
                
                Adults
              </label>
              <br />
              <select
                id="mphb_adults-mphb-search-form-68652582a044a"
                name="mphb_adults"
              >
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
              
              <label htmlFor="mphb_children-mphb-search-form-68652582a044a">
                Children
              </label>
              <br />
              <select
                id="mphb_children-mphb-search-form-68652582a044a"
                name="mphb_children"
              >
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
            </p>
            <input
              id="mphb_check_in_date-mphb-search-form-68652582a044a-hidden"
              defaultValue=""
              type="hidden"
              name="mphb_check_in_date"
            />
            <input
              id="mphb_check_out_date-mphb-search-form-68652582a044a-hidden"
              defaultValue=""
              type="hidden"
              name="mphb_check_out_date"
            />
            <p className="mphb_sc_search-submit-button-wrapper">
              
              <button type="submit" className="button knsl-btn">
                Search
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
    {/* popup end */} {/* popup */}
    <div className="knsl-popup-frame knsl-popup-frame-2" id="table-reservation">
      <div className="knsl-book-form knsl-book-form-v knsl-book-popup">
        
        <span className="knsl-close-popup">+</span>
        <h2 className="knsl-mb-40">Table Reservation</h2>
        <form
          method="get"
          className="knsl-opentable-form"
          action="http://www.opentable.com/restaurant-search.aspx"
          target="_blank"
        >
          <div className="row">
            <div className="col-12 form-group">
              
              <select id="reservation_party" name="partySize">
                <option value={1}>1 Person</option>
                <option value={2} selected="selected">
                  2 People
                </option>
                <option value={3}>3 People</option>
                <option value={4}>4 People</option>
                <option value={5}>5 People</option>
                <option value={6}>6 People</option>
                <option value={7}>7 People</option>
                <option value={8}>8 People</option>
                <option value={9}>9 People</option>
                <option value={10}>10 People</option>
                <option value={11}>11 People</option>
                <option value={12}>12 People</option>
                <option value={13}>13 People</option>
                <option value={14}>14 People</option>
                <option value={15}>15 People</option>
                <option value={16}>16 People</option>
                <option value={17}>17 People</option>
                <option value={18}>18 People</option>
                <option value={19}>19 People</option>
                <option value={20}>20 People</option>
                <option value={21}>Larger party</option>
              </select>
            </div>
            <div className="col-12 form-group">
              
              <input
                id="reservation_date"
                name="startDate"
                type="date"
                defaultValue="2024-06-28"
                placeholder="Date"
              />
            </div>
            <div className="col-12 form-group">
              
              <select id="reservation_time" name="ResTime">
                <option value="8:00am">8:00 am</option>
                <option value="8:30am">8:30 am</option>
                <option value="9:00am">9:00 am</option>
                <option value="9:30am">9:30 am</option>
                <option value="10:00am">10:00 am</option>
                <option value="10:30am">10:30 am</option>
                <option value="11:00am">11:00 am</option>
                <option value="11:30am">11:30 am</option>
                <option value="12:00pm">12:00 pm</option>
                <option value="12:30pm">12:30 pm</option>
                <option value="1:00pm">1:00 pm</option>
                <option value="1:30pm">1:30 pm</option>
                <option value="2:00pm">2:00 pm</option>
                <option value="2:30pm">2:30 pm</option>
                <option value="3:00pm">3:00 pm</option>
                <option value="3:30pm">3:30 pm</option>
                <option value="4:00pm">4:00 pm</option>
                <option value="4:30pm">4:30 pm</option>
                <option value="5:00pm">5:00 pm</option>
                <option value="5:30pm">5:30 pm</option>
                <option value="6:00pm">6:00 pm</option>
                <option value="6:30pm">6:30 pm</option>
                <option value="7:00pm" selected="selected">
                  7:00 pm
                </option>
                <option value="7:30pm">7:30 pm</option>
                <option value="8:00pm">8:00 pm</option>
                <option value="8:30pm">8:30 pm</option>
                <option value="9:00pm">9:00 pm</option>
                <option value="9:30pm">9:30 pm</option>
                <option value="10:00pm">10:00 pm</option>
                <option value="10:30pm">10:30 pm</option>
                <option value="11:00pm">11:00 pm</option>
                <option value="11:30pm">11:30 pm</option>
              </select>
            </div>
          </div>
          <div className="text-center">
            
            <button className="knsl-btn" type="submit" name="button">
              Reserve a table
            </button>
            <p className="knsl-powered pt-3">
              * Powered by
              <noscript>
                &lt;img src="../assets/wp-content/themes/kinsley/assets/img/opentable.svg"
                alt="Powered by OpenTable" /&gt;
              </noscript>
              <img
                className="lazyload"
                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/opentable.svg"
                alt="Powered by OpenTable"
              />
            </p>
          </div>
          <input
            type="hidden"
            name="RestaurantID"
            className="RestaurantID"
            defaultValue={108955}
          />
          <input type="hidden" name="rid" className="rid" defaultValue={108955} />
          <input type="hidden" name="GeoID" className="GeoID" defaultValue={15} />
          <input
            type="hidden"
            name="txtDateFormat"
            className="txtDateFormat"
            defaultValue="yyyy-mm-dd"
          />
          <input
            type="hidden"
            name="RestaurantReferralID"
            className="RestaurantReferralID"
            defaultValue={108955}
          />
          <input
            type="hidden"
            name="lang"
            className="lang"
            defaultValue="en-US"
          />
        </form>
      </div>
    </div>
    {/* popup end */} {/* btn up */}
    <button id="scrollTop" className="scrollTopStick">
      
      <i className="fas fa-arrow-up" />
    </button>
    </>)
}

export default FullLayout;