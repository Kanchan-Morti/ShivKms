const Loader = () => {
    return(
    <>
    
      {/* preloader */}
      <div className="knsl-preloader-frame">
        <div className="knsl-preloader">
          
          <img
            src="../assets/wp-content/uploads/2021/11/logo.png"
            alt="Kinsley – Hotel & Resort WordPress Theme"
          />
          <div className="knsl-preloader-progress">
            <div className="knsl-preloader-bar" />
          </div>
          <div className="knsl-preloader-number-wrap">
            <span className="knsl-preloader-number" data-count={101}>
              0
            </span>
            %
          </div>
        </div>
      </div>
      {/* preloader end */} 
    </>)
}

export default Loader;