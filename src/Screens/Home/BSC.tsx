import React from "react";

const BSC = () => {

    return (
        <div>

            <div className="intro intro-single route bg-image" style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}>
                <div></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            <h2 className="intro-title mb-4" style={{ paddingTop: "30px" }}>Brendon’s School of Cricket (Ongoing)</h2>
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
                                            <img src="assets/img/bsc.png" alt="" />
                                        </div>

                                        <div className="swiper-slide">
                                            <img src="assets/img/bsc3.png" alt="" />
                                        </div>

                                        <div className="swiper-slide">
                                            <img src="assets/img/bsc2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="portfolio-info">
                                    <h3>Project information</h3>
                                    <ul>
                                        <li><strong>Category</strong>: Client Project</li>
                                        <li><strong>Client</strong>: Brendon’s School of Cricket </li>
                                        <li><strong>Project date</strong>: Sep. 2021 - Present</li>
                                    </ul>
                                </div>
                                <div className="portfolio-description">
                                    <h2>About This Project</h2>
                                    <p>
                                        A web system which allows administrators to track biographical information,
                                        attendance and payments of students and coaches. Players are allowed to maintain
                                        their profile, make payments and receive summary reports. Coaches are allowed
                                        to mark attendance and mark monthly summary reports.
                                    </p><br />
                                    <p>
                                        <strong>Technologies used</strong> : React (Typescript), Context API, firebase, material UI, PayHere
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

export default BSC;