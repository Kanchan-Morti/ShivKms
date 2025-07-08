import { useEffect } from "react";

const BookingAccount = () => {
  useEffect(() => {
    document.body.className =
      "wp-singular page-template-default page page-id-2729 wp-theme-kinsley wp-child-theme-kinsley-child theme-kinsley woocommerce-no-js elementor-default elementor-kit-5762";
    return () => (document.body.className = "");
  }, []);
  return (
    <>
      <>
        <div className="">
          {" "}
          {/* banner */}
          <section className="knsl-banner-simple knsl-transition-bottom">
            {" "}
            <img src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
              class="knsl-deco-left" alt="palm" />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
              data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
              className="lazyload knsl-deco-left"
              alt="palm"
            />{" "}
            <img src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
              class="knsl-deco-right" alt="palm" />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
              data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
              className="lazyload knsl-deco-right"
              alt="palm"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="knsl-center knsl-title-frame">
                    <h1 className="knsl-mb-20 knsl-h1-inner">
                      Booking Account
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
                        <a>Booking Account</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
          {/* banner end */}
          <div className="knsl-p-0-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="knsl-blog-post knsl-mb-60">
                    <div
                      id="post-2729"
                      className="post-2729 page type-page status-publish hentry">
                      <div className="single-post-text">
                        <div className="mphb_sc_account">
                          <div className="mphb-account-content">
                            <div className="mphb-login-form">
                              <form
                                name="loginform"
                                id="loginform"
                                action="https://kinsley.bslthemes.com/wp-login.php"
                                method="post">
                                <p className="login-username">
                                  {" "}
                                  <label htmlFor="user_login">
                                    Username or Email Address
                                  </label>{" "}
                                  <input
                                    type="text"
                                    name="log"
                                    id="user_login"
                                    autoComplete="username"
                                    className="input"
                                    defaultValue=""
                                    size={20}
                                  />
                                </p>
                                <p className="login-password">
                                  {" "}
                                  <label htmlFor="user_pass">
                                    Password
                                  </label>{" "}
                                  <input
                                    type="password"
                                    name="pwd"
                                    id="user_pass"
                                    autoComplete="current-password"
                                    spellCheck="false"
                                    className="input"
                                    defaultValue=""
                                    size={20}
                                  />
                                </p>
                                <p className="login-remember">
                                  <label>
                                    <input
                                      name="rememberme"
                                      type="checkbox"
                                      id="rememberme"
                                      defaultValue="forever"
                                    />
                                    Remember Me
                                  </label>
                                </p>
                                <p className="login-submit">
                                  {" "}
                                  <input
                                    type="submit"
                                    name="wp-submit"
                                    id="wp-submit"
                                    className="button button-primary"
                                    defaultValue="Log In"
                                  />{" "}
                                  <input
                                    type="hidden"
                                    name="redirect_to"
                                    defaultValue="https://kinsley.bslthemes.com/booking-account/"
                                  />
                                </p>
                              </form>{" "}
                              <a href="../my-account/lost-password/index.html">
                                Lost your password?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* footer */}
      </>
    </>
  );
};

export default BookingAccount;
