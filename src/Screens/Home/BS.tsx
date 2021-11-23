import React from "react";

const BS = () => {

    return (
        <div>

            <div className="intro intro-single route bg-image" style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}>
                <div></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="intro-title mb-4" style={{ paddingTop: "30px" }}>B & S - An e-commerce platform (Ongoing)</h2>
                            <ol className="breadcrumb d-flex justify-content-center">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item active">Portfolio Details</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <main id="main">

                <section id="portfolio-details" className="portfolio-details">
                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-8">
                                <div className="portfolio-details-slider swiper">
                                    <div className="swiper-wrapper align-items-center">

                                        <div className="swiper-slide">
                                            <img src="assets/img/ecom.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Personal Project</li>
                                        <li><strong>Project date</strong>: Oct 2021 - Present</li>
                                    </ul>
                                </div>
                                <div className="portfolio-description">
                                    <h2>About This Project</h2>
                                    <p>
                                    B&S is an online e-commerce platform which can sell any kind of product. 
                                    Administrator has the facility to create categories and products. 

                                    </p><br />
                                    <p>
                                        <strong>Technologies used</strong> : React.js, MongoDB, Express.js, Node.js, Material UI, Redux
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>

            {/* <div id="preloader"></div> */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        </div>
    )
}

export default BS;