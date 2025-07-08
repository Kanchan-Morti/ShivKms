import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    document.body.className =
      "archive post-type-archive post-type-archive-product wp-theme-kinsley wp-child-theme-kinsley-child theme-kinsley woocommerce-shop woocommerce woocommerce-page woocommerce-no-js hfeed elementor-default elementor-kit-5762"
    return () => (document.body.className = "");
  }, []);
    return (
      <>
        <>
          <section className="knsl-banner-simple knsl-transition-bottom">
            {" "}
            <img src="../wp-content/themes/kinsley/assets/img/palm.svg"
              class="knsl-deco-left" alt="palm" />
            <img
              src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
              data-src="https://kinsley.bslthemes.com/wp-content/themes/kinsley/assets/img/palm.svg"
              className="lazyload knsl-deco-left"
              alt="palm"
            />{" "}
            <img src="../wp-content/themes/kinsley/assets/img/palm.svg"
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
                    <div className="knsl-mb-20 knsl-h1-inner">Online Store</div>
                    <p className="knsl-text knsl-mb-30">
                      Consectetur adipisicing elit. Nihil, illum voluptate
                      eveniet ex fugit ea delectus, sed voluptatem. Laborum{" "}
                      <br /> accusantium libero commodi id officiis itaque esse
                      adipisci, necessitatibus asperiores, illo odio.
                      <br /> <br />
                    </p>
                    <ul className="knsl-breadcrumbs">
                      <li>
                        <a href="../index.html">Home</a>
                      </li>
                      <li>Shop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="knsl-p-0-100 shop-page" id="card-shop-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="page-title">Shop</h1>
                  <div className="woocommerce-notices-wrapper" />
                  <p className="woocommerce-result-count">
                    {" "}
                    Showing all 5 results
                  </p>
                  <form className="woocommerce-ordering" method="get">
                    {" "}
                    <select
                      name="orderby"
                      className="orderby"
                      aria-label="Shop order">
                      <option value="menu_order" selected="selected">
                        Default sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>{" "}
                    <input type="hidden" name="paged" defaultValue={1} />
                  </form>
                  <ul className="products columns-3">
                    <li className="product type-product post-2498 status-publish first instock product_cat-rooms has-post-thumbnail featured shipping-taxable purchasable product-type-variable">
                      <a
                        href="../product/classic-room/index.html"
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <img
                          width="600"
                          height="600"
                          src="../assets/wp-content/uploads/2021/12/room-8-600x600.jpg"
                          class="attachment-woocommerce_thumbnail
                          size-woocommerce_thumbnail"
                          alt="Classic Room"
                          decoding="async"
                          srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-600x600.jpg
                          600w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-150x150.jpg
                          150w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-140x140.jpg
                          140w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-256x256.jpg
                          256w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-100x100.jpg
                          100w"
                          sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <img
                          width={600}
                          height={600}
                          src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20600%20600%22%3E%3C/svg%3E"
                          data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-600x600.jpg"
                          className="lazyload attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt="Classic Room"
                          decoding="async"
                          data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-600x600.jpg 600w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-150x150.jpg 150w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-140x140.jpg 140w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-256x256.jpg 256w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-8-100x100.jpg 100w"
                          data-sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <h2 className="woocommerce-loop-product__title">
                          Classic Room
                        </h2>{" "}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              69
                            </bdi>
                          </span>
                          –{" "}
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              345
                            </bdi>
                          </span>
                        </span>
                      </a>
                      <a
                        href="../product/classic-room/index.html"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_2498"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button"
                        data-product_id={2498}
                        data-product_sku=""
                        aria-label="Select options for “Classic Room”"
                        rel="nofollow">
                        Select options
                      </a>{" "}
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_2498"
                        className="screen-reader-text">
                        {" "}
                        This product has multiple variants. The options may be
                        chosen on the product page{" "}
                      </span>
                    </li>
                    <li className="product type-product post-2444 status-publish instock product_cat-rooms has-post-thumbnail featured shipping-taxable purchasable product-type-variable">
                      <a
                        href="../product/deluxe-room/index.html"
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <img
                          width="600"
                          height="600"
                          src="../assets/wp-content/uploads/2021/08/room-1-600x600.jpg"
                          class="attachment-woocommerce_thumbnail
                          size-woocommerce_thumbnail"
                          alt="Deluxe Room"
                          decoding="async"
                          srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-600x600.jpg
                          600w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-150x150.jpg
                          150w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-140x140.jpg
                          140w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-256x256.jpg
                          256w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-100x100.jpg
                          100w"
                          sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <img
                          width={600}
                          height={600}
                          src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20600%20600%22%3E%3C/svg%3E"
                          data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-600x600.jpg"
                          className="lazyload attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt="Deluxe Room"
                          decoding="async"
                          data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-600x600.jpg 600w, https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-150x150.jpg 150w, https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-140x140.jpg 140w, https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-256x256.jpg 256w, https://kinsley.bslthemes.com/wp-content/uploads/2021/08/room-1-100x100.jpg 100w"
                          data-sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <h2 className="woocommerce-loop-product__title">
                          Deluxe Room
                        </h2>{" "}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              49
                            </bdi>
                          </span>
                          –{" "}
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              499
                            </bdi>
                          </span>
                        </span>
                      </a>
                      <a
                        href="../product/deluxe-room/index.html"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_2444"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button"
                        data-product_id={2444}
                        data-product_sku=""
                        aria-label="Select options for “Deluxe Room”"
                        rel="nofollow">
                        Select options
                      </a>{" "}
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_2444"
                        className="screen-reader-text">
                        {" "}
                        This product has multiple variants. The options may be
                        chosen on the product page{" "}
                      </span>
                    </li>
                    <li className="product type-product post-2465 status-publish last instock product_cat-rooms has-post-thumbnail featured shipping-taxable purchasable product-type-variable">
                      <a
                        href="../product/double-room/index.html"
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <img
                          loading="lazy"
                          width="600"
                          height="600"
                          src="../assets/wp-content/uploads/2021/12/room-3-600x600.jpg"
                          class="attachment-woocommerce_thumbnail
                          size-woocommerce_thumbnail"
                          alt="Double Room"
                          decoding="async"
                          srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-600x600.jpg
                          600w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-150x150.jpg
                          150w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-140x140.jpg
                          140w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-256x256.jpg
                          256w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-100x100.jpg
                          100w"
                          sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <img
                          loading="lazy"
                          width={600}
                          height={600}
                          src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20600%20600%22%3E%3C/svg%3E"
                          data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-600x600.jpg"
                          className="lazyload attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt="Double Room"
                          decoding="async"
                          data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-600x600.jpg 600w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-150x150.jpg 150w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-140x140.jpg 140w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-256x256.jpg 256w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-3-100x100.jpg 100w"
                          data-sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <h2 className="woocommerce-loop-product__title">
                          Double Room
                        </h2>{" "}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              39
                            </bdi>
                          </span>
                          –{" "}
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              320
                            </bdi>
                          </span>
                        </span>
                      </a>
                      <a
                        href="../product/double-room/index.html"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_2465"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button"
                        data-product_id={2465}
                        data-product_sku=""
                        aria-label="Select options for “Double Room”"
                        rel="nofollow">
                        Select options
                      </a>{" "}
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_2465"
                        className="screen-reader-text">
                        {" "}
                        This product has multiple variants. The options may be
                        chosen on the product page{" "}
                      </span>
                    </li>
                    <li className="product type-product post-2486 status-publish first instock product_cat-rooms has-post-thumbnail featured shipping-taxable purchasable product-type-variable">
                      <a
                        href="../product/economy-room/index.html"
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <img
                          loading="lazy"
                          width="600"
                          height="600"
                          src="../assets/wp-content/uploads/2021/12/room-4-600x600.jpg"
                          class="attachment-woocommerce_thumbnail
                          size-woocommerce_thumbnail"
                          alt="Economy Room"
                          decoding="async"
                          srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-600x600.jpg
                          600w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-150x150.jpg
                          150w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-140x140.jpg
                          140w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-256x256.jpg
                          256w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-100x100.jpg
                          100w"
                          sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <img
                          loading="lazy"
                          width={600}
                          height={600}
                          src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20600%20600%22%3E%3C/svg%3E"
                          data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-600x600.jpg"
                          className="lazyload attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt="Economy Room"
                          decoding="async"
                          data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-600x600.jpg 600w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-150x150.jpg 150w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-140x140.jpg 140w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-256x256.jpg 256w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-4-100x100.jpg 100w"
                          data-sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <h2 className="woocommerce-loop-product__title">
                          Economy Room
                        </h2>{" "}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              29
                            </bdi>
                          </span>
                          –{" "}
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              320
                            </bdi>
                          </span>
                        </span>
                      </a>
                      <a
                        href="../product/economy-room/index.html"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_2486"
                        data-quantity={1}
                        className="button product_type_variable add_to_cart_button"
                        data-product_id={2486}
                        data-product_sku=""
                        aria-label="Select options for “Economy Room”"
                        rel="nofollow">
                        Select options
                      </a>{" "}
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_2486"
                        className="screen-reader-text">
                        {" "}
                        This product has multiple variants. The options may be
                        chosen on the product page{" "}
                      </span>
                    </li>
                    <li className="product type-product post-2402 status-publish outofstock product_cat-rooms has-post-thumbnail featured shipping-taxable purchasable product-type-variable">
                      <a
                        href="../product/v-neck-t-shirt/index.html"
                        className="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        <img
                          loading="lazy"
                          width="600"
                          height="600"
                          src="../assets/wp-content/uploads/2021/12/room-2-600x600.jpg"
                          class="attachment-woocommerce_thumbnail
                          size-woocommerce_thumbnail"
                          alt="Standart Room"
                          decoding="async"
                          srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-600x600.jpg
                          600w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-150x150.jpg
                          150w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-140x140.jpg
                          140w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-256x256.jpg
                          256w,
                          https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-100x100.jpg
                          100w"
                          sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <img
                          loading="lazy"
                          width={600}
                          height={600}
                          src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20600%20600%22%3E%3C/svg%3E"
                          data-src="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-600x600.jpg"
                          className="lazyload attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                          alt="Standart Room"
                          decoding="async"
                          data-srcset="https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-600x600.jpg 600w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-150x150.jpg 150w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-140x140.jpg 140w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-256x256.jpg 256w, https://kinsley.bslthemes.com/wp-content/uploads/2021/12/room-2-100x100.jpg 100w"
                          data-sizes="(max-width: 600px) 100vw, 600px"
                        />
                        <h2 className="woocommerce-loop-product__title">
                          Standart Room
                        </h2>{" "}
                        <span className="price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              69
                            </bdi>
                          </span>
                          –{" "}
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                €
                              </span>
                              345
                            </bdi>
                          </span>
                        </span>
                      </a>
                      <a
                        href="../product/v-neck-t-shirt/index.html"
                        aria-describedby="woocommerce_loop_add_to_cart_link_describedby_2402"
                        data-quantity={1}
                        className="button product_type_variable"
                        data-product_id={2402}
                        data-product_sku=""
                        aria-label="Select options for “Standart Room”"
                        rel="nofollow">
                        Select options
                      </a>{" "}
                      <span
                        id="woocommerce_loop_add_to_cart_link_describedby_2402"
                        className="screen-reader-text">
                        This product has multiple variants. The options may be
                        chosen on the product page
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>{" "}
          {/* blog end */} {/* footer */}
        </>
      </>
    );
};


export default Shop;