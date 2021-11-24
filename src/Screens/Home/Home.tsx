import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import fire from "../../Config/FirebaseConfig";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Validator from "../../Common/validations";
import { LinearProgress } from "@mui/material";

interface Feedback {
    name: string;
    email: string;
    subject: string;
    message: string;
    mobileNumber: string;
    nameError: string;
    emailError: string;
    subjectError: string;
    messageError: string;
    mobileNumberError: string;
}

const initFeedback: Feedback = {
    name: "",
    email: "",
    subject: "",
    message: "",
    mobileNumber: "",
    nameError: "",
    emailError: "",
    subjectError: "",
    messageError: "",
    mobileNumberError: "",
}

const Home = () => {

    const [feedback, setFeedback] = useState(initFeedback);
    const [loading, setLoading] = useState(false);

    console.log("feedback", feedback);

    function saveFeedbackInFirestore(userFirestore: any) {
        const db = firebase.firestore();
        if (userFirestore.subject) {
            return db.collection("feedback").add(userFirestore);
        } else {
            throw new Error("Invalid feedback!");
        }
    }


    const handleFeedback = () => {
        setLoading(true);
        return saveFeedbackInFirestore({
            name: feedback.name,
            email: feedback.email,
            subject: feedback.subject,
            message: feedback.message,
        })
            .then((savedUser) => {
                setFeedback(initFeedback);
                console.log("Feedback Sent");
                setLoading(false);
            })
            .catch((errorFirestore) => {
                console.log("Save user in Firestore failed - ", errorFirestore.message);
            }).finally(() => {
                setFeedback(initFeedback);
            });
    };

    const validateFormData = (): boolean => {
        const emValidation = Validator.validateEmail(feedback.email);

        const nameValidation = Validator.validateString(
            feedback.name,
            "Name",
            3,
            100
        );

        const subValidation = Validator.validateString(
            feedback.subject,
            "Subject",
            3,
            100
        );
        const msgValidation = Validator.validateString(
            feedback.message,
            "Message",
            3,
            3000
        );

        const MobValidation = Validator.validatePhoneNumber(feedback.mobileNumber);

        setFeedback({
            ...feedback,
            emailError: emValidation.message,
            nameError: nameValidation.message,
            subjectError: subValidation.message,
            mobileNumberError: MobValidation.message,
            messageError: msgValidation.message,
        });

        return (
            emValidation.isValid &&
            nameValidation.isValid &&
            subValidation.isValid &&
            msgValidation.isValid &&
            MobValidation.isValid
        );
    };

    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">

                    <h1 className="logo"><a href="index.html"></a></h1>
                    {/* <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto " href="#work">Work</a></li>
                            {/* <li><a className="nav-link scrollto " href="#blog">Blog</a></li> */}
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>

            <div id="hero" className="hero route bg-image" style={{ backgroundImage: "url(assets/img/img.jpg)" }}>
                <div className="overlay-itro"></div>
                <div className="hero-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            {/* <!--<p className="display-6 color-d">Hello, world!</p>--> */}
                            <h1 className="hero-title mb-4">Kaveesha Rathnayaka</h1>
                            <p className="hero-subtitle"><span className="typed" data-typed-items="Web Developer"></span></p>
                            {/* <!-- <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> --> */}
                        </div>
                    </div>
                </div>
            </div>

            <main id="main">

                <section id="about" className="about-mf sect-pt4 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="box-shadow-full">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="row">
                                                <div className="col-sm-6 col-md-5">
                                                    <div style={{ borderRadius: "50px" }} className="about-img">
                                                        <img src="assets/img/kaveesha.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-7">
                                                    <div className="about-info">
                                                        <p><span className="title-s">Name: </span> <span>Kaveesha Gayashan Rathnayaka</span></p>
                                                        <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                                                        <p><span className="title-s">Email: </span> <span>kaveesha.rathnaka@gmail.com</span></p>
                                                        <p><span className="title-s">Phone: </span> <span>071-7431641 / 0760205463</span></p>
                                                        <p><span className="title-s">CV   &emsp; : </span> <a href="assets\cv\Kaveesha Rathnayaka_SE.pdf" download> Download my CV</a></p>
                                                    </div>
                                                </div>
                                            </div><br />
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                    WORKING EXPERIENCE
                                                </h5>
                                            </div>
                                            <p className="lead">
                                                <strong> Trainee Associate Software Engineer</strong><br />
                                                &emsp; at <strong>Syntax Genie (Pvt) Ltd </strong><br />
                                                &emsp; 18 / July / 2020 to 15 / January / 2021<br />
                                                &emsp; contributed to the development and bug resolving of two projects<br />
                                                &emsp; (Innovation Nation / Alta Vision Web).<br /><br />
                                                <strong>Freelance Developer</strong><br />
                                                &emsp; April / 2021 to Present. <br />
                                                &emsp; Contributed to 5 projects.
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-me pt-4 pt-md-0">
                                                <div className="title-box-2">
                                                    <h5 className="title-left">
                                                        About me
                                                    </h5>
                                                </div>
                                                <p className="lead">
                                                    I am a dedicated, passionate, and self
                                                    motivated undergraduate with the ability
                                                    to adapt to any technology stack via
                                                    strong fundamental knowledge that I
                                                    have gained. Good at work under
                                                    pressure and excited to learn new
                                                    technologies.

                                                </p><br />
                                                <div className="title-box-2">
                                                    <h5 className="title-left">
                                                        Education
                                                    </h5>
                                                </div>
                                                <p className="lead">
                                                    <div><img style={{height:"60px", width:"60px"}} alt="" src="assets/img/uom.jpg"/></div>
                                                    <strong>University Of Moratuwa : </strong> <br />
                                                    B.Sc. (Hons) Degree in information Technology and Management
                                                </p>
                                                <p className="lead">
                                                <div><img alt="" style={{height:"60px", width:"60px"}} src="assets/img/ac.jpg"/></div>
                                                    <strong>Ananda College – Colombo 10 : </strong> <br />
                                                    G.C.E. Advanced Level (2016) <br /> &emsp; Economics – A, Political Science – A, Logic -B,
                                                    Z score - 1.8534. <br /> G.C.E. Ordinary Level (2013) <br /> &emsp; A – 6, B – 3
                                                </p>
                                                <p className="lead">
                                                <div><img alt="" style={{height:"50px", width:"50px"}} src="assets/img/aq.jpg"/></div>
                                                    <strong>Aquinas University College : </strong> <br />
                                                    &emsp;Associated Diploma in Information and Technology (2017) <br />
                                                    &emsp;English language and Literature – Intermediate level (2017)
                                                </p>
                                                <p className="lead">
                                                <div><img alt="" style={{height:"50px", width:"50px"}} src="assets/img/brit.jpg"/></div>
                                                    <strong>British Way English Academy : </strong> <br />
                                                    &emsp;Diploma in English Language (2014)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="services-mf pt-5 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box text-center">
                                    <h3 className="title-a">
                                        Services
                                    </h3>
                                    <p className="subtitle-a">
                                        Following services will be provided by me.
                                    </p>
                                    <div className="line-mf"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><i className="bi bi-briefcase"></i></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Web Design</h2>
                                        {/* <p className="s-description text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                            provident vitae! Magni
                                            tempora perferendis eum non provident.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Web Development</h2>
                                        {/* <p className="s-description text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                            provident vitae! Magni
                                            tempora perferendis eum non provident.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><i className="bi bi-bar-chart"></i></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Video Editing</h2>
                                        {/* <p className="s-description text-center">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                            provident vitae! Magni
                                            tempora perferendis eum non provident.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="section-counter paralax-mf bg-image" style={{ backgroundImage: "url(assets/img/counters-bg.jpg)" }}>
                    <div className="overlay-mf"></div>
                </div>

                <section id="work" className="portfolio-mf sect-pt4 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box text-center">
                                    <h3 className="title-a">
                                        Portfolio
                                    </h3>
                                    <p className="subtitle-a">
                                        These are some of my completed and ongoing projects.
                                    </p>
                                    <div className="line-mf"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href="assets/img/imp-result3-pic.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img style={{ height: "255px" }} src="assets/img/imp-result3-pic.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Cricket Batting Coaching Automation System
                                                </h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Research Project</span> / <span className="w-date">Jan. 2021 - Present</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <a href="research"> <span className="bi bi-plus-circle"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href="assets/img/bsc1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img src="assets/img/bsc1.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Brendon’s School of Cricket (Ongoing)
                                                </h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Client Project</span> / <span className="w-date">Sep. 2021 - Present</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <a href="/bsc"> <span className="bi bi-plus-circle"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href="assets/img/logo.png" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img style={{ height: "255px" }} src="assets/img/logo.png" alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Titan English School - Web Application</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Client Project</span> / <span className="w-date">July 2021 - Sep 2021</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <a href="/titanengschool"> <span className="bi bi-plus-circle"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href="assets/img/ecom.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img style={{ height: "255px" }} src="assets/img/ecom.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">B and S - An e-commerce platform (Ongoing)</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Personal Project</span> / <span className="w-date">Oct 2021 - Present</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <a href="/bands"> <span className="bi bi-plus-circle"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href="assets/img/car.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img style={{ height: "255px" }} src="assets/img/car.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Online Car Reservation System
                                                </h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Academic Project</span> / <span className="w-date">Oct. 2018 - Oct. 2019</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <a href="/carrental"> <span className="bi bi-plus-circle"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href="assets/img/inn.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img style={{ height: "255px" }} src="assets/img/inn.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Innovation Nation (By Syntax Genie (Pvt) Ltd)</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Intern Project</span> / <span className="w-date">July. 2020 - Nov. 2020</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <a href="/inn-nation"> <span className="bi bi-plus-circle"></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href="assets/img/alta.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img style={{ height: "255px" }} src="assets/img/alta.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Alta Vision Inventory System (By Syntax Genie (Pvt) Ltd)
                                                </h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Intern Project</span> / <span className="w-date"> Nov. 2020 - Jan. 2021</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                {/* <div className="w-like">
                                                    <a href="/carrental"> <span className="bi bi-plus-circle"></span></a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="work-box">
                                    <a href="assets/img/floor.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox">
                                        <div className="work-img">
                                            <img style={{ height: "255px" }} src="assets/img/floor.jpg" alt="" className="img-fluid" />
                                        </div>
                                    </a>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Automated Floor Mopping Machine
                                                </h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Academic Project</span> / <span className="w-date"> Sept. 2017 - Sept. 2018</span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                {/* <div className="w-like">
                                                    <a href="/carrental"> <span className="bi bi-plus-circle"></span></a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <div className="blog-mf sect-pt4 route">
                    {/* <div className="overlay-mf"></div> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-sm-12">
                                    <div className="title-box text-center">
                                        <h3 className="title-a">
                                            Tecnologies
                                        </h3>
                                        <div className="line-mf"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/react.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">React</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/angular.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Angular</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/Firebase.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Firebase</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/python.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Python</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/java.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Java</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/C.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">C</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/ts.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Typescript</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/html.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">HTML</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/css.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">CSS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/js.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Javascript</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/bootstrap.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Bootstrap</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/NodeJS.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">NodeJS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/MongoDB.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">MongoDB</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/sql.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">SQL</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/git.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Git</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="service-box">
                                    <div className="service-ico">
                                        <span className="ico-circle"><img style={{ height: "150px" }} alt="" src="assets/img/trello.jpg" /></span>
                                    </div>
                                    <div className="service-content">
                                        <h2 className="s-title">Trello</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <section id="blog" className="blog-mf sect-pt4 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box text-center">
                                    <h3 className="title-a">
                                        Blog
                                    </h3>
                                    <p className="subtitle-a">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <div className="line-mf"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-blog">
                                    <div className="card-img">
                                        <a href="blog-single.html"><img src="assets/img/post-1.jpg" alt="" className="img-fluid" /></a>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-category-box">
                                            <div className="card-category">
                                                <h6 className="category">Travel</h6>
                                            </div>
                                        </div>
                                        <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                                        <p className="card-description">
                                            Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                            a pellentesque nec,
                                            egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="post-author">
                                            <a href="#">
                                                <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                                                <span className="author">Morgan Freeman</span>
                                            </a>
                                        </div>
                                        <div className="post-date">
                                            <span className="bi bi-clock"></span> 10 min
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-blog">
                                    <div className="card-img">
                                        <a href="blog-single.html"><img src="assets/img/post-2.jpg" alt="" className="img-fluid" /></a>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-category-box">
                                            <div className="card-category">
                                                <h6 className="category">Web Design</h6>
                                            </div>
                                        </div>
                                        <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                                        <p className="card-description">
                                            Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                            a pellentesque nec,
                                            egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="post-author">
                                            <a href="#">
                                                <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                                                <span className="author">Morgan Freeman</span>
                                            </a>
                                        </div>
                                        <div className="post-date">
                                            <span className="bi bi-clock"></span> 10 min
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card card-blog">
                                    <div className="card-img">
                                        <a href="blog-single.html"><img src="assets/img/post-3.jpg" alt="" className="img-fluid" /></a>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-category-box">
                                            <div className="card-category">
                                                <h6 className="category">Web Design</h6>
                                            </div>
                                        </div>
                                        <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                                        <p className="card-description">
                                            Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                                            a pellentesque nec,
                                            egestas non nisi.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="post-author">
                                            <a href="#">
                                                <img src="assets/img/testimonial-2.jpg" alt="" className="avatar rounded-circle" />
                                                <span className="author">Morgan Freeman</span>
                                            </a>
                                        </div>
                                        <div className="post-date">
                                            <span className="bi bi-clock"></span> 10 min
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{ backgroundImage: "url(assets/img/overlay-bg.jpg)" }}>
                    <div className="overlay-mf"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="contact-mf">
                                    <div id="contact" className="box-shadow-full">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
                                                    <div className="container">
                                                        <div className="row d-flex align-items-stretch no-gutters">
                                                                <div>
                                                                    <span style={{ textAlign: "center" }}>
                                                                        <h2>Contact Us.</h2>
                                                                    </span>
                                                                </div>
                                                                <form noValidate>
                                                                    <Grid container spacing={1}>
                                                                        <Grid item xs={12}>
                                                                            <TextField
                                                                                error={feedback.nameError ? true : false}
                                                                                helperText={feedback.nameError}
                                                                                required
                                                                                value={feedback.name}
                                                                                onChange={(e) => {
                                                                                    setFeedback({
                                                                                        ...feedback,
                                                                                        name: e.target.value,
                                                                                        nameError: "",
                                                                                    });
                                                                                }}
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                fullWidth
                                                                                id="name"
                                                                                label="Your Name"
                                                                                name="name"
                                                                                autoComplete="name"
                                                                                multiline
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12}>
                                                                            <TextField
                                                                                error={feedback.emailError ? true : false}
                                                                                helperText={feedback.emailError}
                                                                                required
                                                                                value={feedback.email}
                                                                                onChange={(e) => {
                                                                                    setFeedback({
                                                                                        ...feedback,
                                                                                        email: e.target.value,
                                                                                        emailError: "",
                                                                                    });
                                                                                }}
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                fullWidth
                                                                                id="email"
                                                                                label="Your Email"
                                                                                name="email"
                                                                                autoComplete="email"
                                                                                multiline
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12}>
                                                                            <TextField
                                                                                error={feedback.mobileNumberError ? true : false}
                                                                                helperText={feedback.mobileNumberError}
                                                                                required
                                                                                value={feedback.mobileNumber}
                                                                                onChange={(e) => {
                                                                                    setFeedback({
                                                                                        ...feedback,
                                                                                        mobileNumber: e.target.value,
                                                                                        mobileNumberError: "",
                                                                                    });
                                                                                }}
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                fullWidth
                                                                                id="mobileNumber"
                                                                                label="Your Mobile Number"
                                                                                name="mobileNumber"
                                                                                autoComplete="mobileNumber"
                                                                                multiline
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12}>
                                                                            <TextField
                                                                                error={feedback.subjectError ? true : false}
                                                                                helperText={feedback.subjectError}
                                                                                required
                                                                                value={feedback.subject}
                                                                                onChange={(e) => {
                                                                                    setFeedback({
                                                                                        ...feedback,
                                                                                        subject: e.target.value,
                                                                                        subjectError: "",
                                                                                    });
                                                                                }}
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                fullWidth
                                                                                id="subject"
                                                                                label="Subject"
                                                                                name="subject"
                                                                                autoComplete="subject"
                                                                                multiline
                                                                            />
                                                                        </Grid>
                                                                        <Grid item xs={12}>
                                                                            <TextField
                                                                                error={feedback.messageError ? true : false}
                                                                                helperText={feedback.messageError}
                                                                                required
                                                                                value={feedback.message}
                                                                                onChange={(e) => {
                                                                                    setFeedback({
                                                                                        ...feedback,
                                                                                        message: e.target.value,
                                                                                        messageError: "",
                                                                                    });
                                                                                }}
                                                                                variant="outlined"
                                                                                margin="normal"
                                                                                fullWidth
                                                                                id="message"
                                                                                label="Your Message"
                                                                                name="message"
                                                                                autoComplete="message"
                                                                                minRows={10}
                                                                                multiline
                                                                            />
                                                                        </Grid>
                                                                    </Grid>
                                                                </form>
                                                                {loading && (
                                                                    <div style={{padding:"10px"}}>
                                                                        <LinearProgress color="primary" />
                                                                    </div>
                                                                )}
                                                                <Button
                                                                    type="submit"
                                                                    fullWidth
                                                                    variant="contained"
                                                                    color="primary"
                                                                    onClick={(e: any) => {
                                                                        e.preventDefault();
                                                                        validateFormData() && handleFeedback();
                                                                    }}
                                                                >
                                                                    Send Feedback
                                                                </Button>
                                                            <div className="col-md-6 d-flex align-items-stretch">
                                                                <div id="map"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="title-box-2 pt-4 pt-md-0">
                                                    <h5 className="title-left">
                                                        Get in Touch
                                                    </h5>
                                                </div>
                                                <div className="more-info">
                                                    <p className="lead">
                                                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                                                        expedita aperiam aliquid at.
                                                        Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                                                        mollitia inventore? */}
                                                    </p>
                                                    <ul className="list-ico">
                                                        <li><span className="bi bi-phone"></span>071-7431641 / 0760205463</li>
                                                        <li><span className="bi bi-envelope"></span>kaveesha.rathnaka@gmail.com</li>
                                                    </ul>
                                                </div>
                                                <div className="socials">
                                                    <ul>
                                                        <li><a href="https://github.com/kaveesha31"><span className="ico-circle"><i className="bi bi-github"></i></span></a></li>
                                                        <li><a href="https://www.linkedin.com/in/kaveesha-rathnayaka-a96b26197/"><span className="ico-circle"><i className="bi bi-linkedin"></i></span></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="copyright-box">
                                <p className="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
                                <div className="credits">
                                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <div id="preloader"></div> */}
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        </div>
    )
}

export default Home;