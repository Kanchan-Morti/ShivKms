import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    document.body.className = "wp-singular page-template-default page page-id-2390 wp-theme-kinsley wp-child-theme-kinsley-child theme-kinsley woocommerce-cart woocommerce-page woocommerce-no-js elementor-default elementor-kit-5762"
    return () => (document.body.className = "");
  }, []);
    return (
      <>
        <div className="">
          {/* banner */}
          <section className="knsl-banner-simple knsl-transition-bottom">
            <img
              src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
              className="knsl-deco-left"
              alt="palm"
            />
            <img
              src="../assets/wp-content/themes/kinsley/assets/img/palm.svg"
              className="knsl-deco-right"
              alt="palm"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="knsl-center knsl-title-frame">
                    <h1 className="knsl-mb-20 knsl-h1-inner">Cart</h1>
                    <ul className="knsl-breadcrumbs">
                      <li>
                        <a
                          href="../index.html"
                          title="Kinsley - Hotel & Resort WordPress Theme">
                          Home
                        </a>
                      </li>
                      <li className="tst-active">
                        <a>Cart</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* banner end */}
          <div className="knsl-p-0-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="knsl-blog-post knsl-mb-60">
                    <div
                      id="post-2390"
                      className="post-2390 page type-page status-publish hentry">
                      <div className="single-post-text">
                        <div
                          data-block-name="woocommerce/classic-shortcode"
                          className="woocommerce wp-block-group alignwide">
                          <div className="woocommerce-notices-wrapper" />
                          <div className="wc-empty-cart-message">
                            <div className="cart-empty woocommerce-info">
                              Your cart is currently empty.{" "}
                            </div>
                          </div>
                          <p className="return-to-shop">
                            <a
                              className="button wc-backward"
                              href="../shop/index.html">
                              <br />
                              Return to shop{" "}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};


export default Cart;