import logo from './images/logo.svg';
import './App.css';
import './all.min.css';
import img1 from './images/asset1.jpeg';
import secimg3 from './images/asset11.jpeg';
// import logo_white from 'https://www.cdmi.in/assets/front/images/creative-logo-white.svg';
// import img_bg from './images/counter_bg.jpg';
import img_shape from './images/asset22.png';
import video_1 from './images/1.mp4';
import video_2 from './images/2.mp4';
import video_3 from './images/3.mp4';
import video_4 from './images/4.mp4';
import video_5 from './images/5.mp4';
import video_6 from './images/6.mp4';
// import video_7 from './https://youtu.be/Vnap7ADkQKA';

function App() {
  return (
    <>
    <header>
      <section class="navbar align-items">
        <div class="container margin-auto">
            <div class="flex space-between align-items">
                <div class="links flex">
                        <div class="email">
                            <a href="#"><i class="fa-regular fa-envelope"></i><span> info@cdmi.in</span></a>
                        </div>
                        <div class="certificate">
                        <a href="#"><i class="fa-solid fa-certificate"></i><span> verify certificate</span></a>
                        </div>
                </div>
                <div class="ques">
                    <span>have any question? +91 90333 16003</span>
                </div>
                <div class="social-media">
                <ul class="flex">
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>      
                    <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>                    
                </ul>
                </div>
        </div>
        </div>
    </section>

     {/* ------------------------------header--------------------------------  */}

    <section class="header">
        <div class="container margin-auto">
            <div class="flex space-between align-items">
              <div class="logo">
                    <img src={logo}></img>
                    </div>
                        <ul class="main-menu flex align-items">
                            <li><a href="#">home</a></li>
                            <li><a href="#">courses<i class="fa-solid fa-chevron-down"></i></a></li>
                            <li><a href="#">college courses</a></li>
                            <li><a href="#">activites<i class="fa-solid fa-chevron-down"></i></a>
                            <ul class="sub-menu">
                                <li><a href="#">gallery</a></li>
                                <li><a href="#">events</a></li>
                            </ul></li>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">know us<i class="fa-solid fa-chevron-down"></i></a>
                            <ul class="sub-menu">
                                <li><a href="#">about us </a></li>
                                <li><a href="#">success stories</a></li>
                                <li><a href="#">placement partners</a></li>
                            </ul></li>
                            <li><a href="#">get in touch</a></li>
                            <li><a href="#">student zone<i class="fa-solid fa-chevron-down"></i></a></li>
                        </ul>
            </div>
        </div>
    </section>
    </header>
    {/* -------------------------------------------------slider------------------------------ */}
    <section class="slider">
        <img src={img1}></img>
    </section>

    {/* -------------------------------------------------section-1 */}
    <section class="section-1">
        <div class="heading-1 relative margin-auto spacert-80 spacerb-80">
            <div class="line"></div>
            <div><h4>creative course</h4>
            <h1>offered courses</h1>
            </div>
        </div>
    </section>

    {/* ------------------------------------------------section-2------------------------------- */}
    <section class="section-2 container margin-auto">
        <div class="flex video-section">
            <div class="video-1">
                <div class="v1">
                    <video src={video_1} autoPlay muted></video>
                </div>
                <div class="v-name">
                    <h2><a href="#">multimedia courses</a></h2>            </div>
                <div class="v-rate flex space-between align-items align-center">
                    <div class="v-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="v-btn">
                        <button>know more..!</button>
                    </div>
                </div>
            </div>
            <div class="video-1">
                <div class="v1">
                <video src={video_2} autoPlay muted></video>
                </div>
                <div class="v-name">
                    <h2><a href="#">UI/UX & graphics design</a></h2>
                </div>
                <div class="v-rate flex space-between align-items align-center">
                    <div class="v-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="v-btn">
                        <button>know more..!</button>
                    </div>
                </div>
            </div>
            <div class="video-1">
            <div class="v1">
                <video src={video_3} autoPlay muted></video>
                </div>
                <div class="v-name">
                    <h2><a href="#">programming IT</a></h2>        
                </div>
                <div class="v-rate flex space-between align-items align-center">
                    <div class="v-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="v-btn">
                        <button>know more..!</button>
                    </div>
                </div>
            </div>
            </div>
        <div class="flex video-section flex-2">

            <div class="video-1">
                <div class="v1">
                    <video src={video_4} autoPlay muted></video>
                </div>
                <div class="v-name">
                    <h2><a href="#">trendy courses</a></h2>        
                </div>
                <div class="v-rate flex space-between align-items align-center">
                    <div class="v-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="v-btn">
                        <button>know more..!</button>
                    </div>
                </div>
            </div>
            <div class="video-1">
                <div class="v1">
                <video src={video_5} autoPlay muted></video>
                </div>
                <div class="v-name">
                    <h2><a href="#">civil-mech.engineering</a></h2>                </div>
                <div class="v-rate flex space-between align-items align-center">
                    <div class="v-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="v-btn">
                        <button>know more..!</button>
                    </div>
                </div>
            </div>
            <div class="video-1">
            <div class="v1">
                <video src={video_6} autoPlay muted></video>
                </div>
                <div class="v-name">
                    <h2><a href="#">business development</a></h2>              </div>
                <div class="v-rate flex space-between align-items align-center">
                    <div class="v-rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="v-btn">
                        <button>know more..!</button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>

        <div class="btn-relative relative spacert-80">
            <button class="btn">view all courses<i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </section>

    {/* --------------------------------------------------------section -3 --------------------------------- */}
    {/* <section class="section-3 spacert-80 spacerb-80">
        <div class="section-3-btn">
            <div class="flex">
                <div class="heading-3 relative">
                    <div class="about-padding"> 
                     <div class="flex">
                        <div class="line"></div>
                        <span>about us</span>
                    </div> 
                    <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
                    <div class="p-3">
                        <p>
                            Creative Design & Multimedia Institute(CDMI)  is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. 
                            Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                        </p>
                    <button>enroll now..!<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
            </div> 
        </div>
        <div class="section-3-img">
            <div class="layer">
                <img src={secimg3}></img>
            </div>
        </div>
        <div class="btn-3 v-btn">
        </div>
        </div>
        </div>
    </section> */}


    <section class="section-about spacert-80">
            <div class="container-1">
                <div class="about flex align-item">
                    <div class="about-1 heading-3">
                        <div class="about-padding">
                            <div class="about-heading">
                            <div class="flex relative">
                        <div class="line"></div>
                        <span>About Us</span>
                    </div> 
                                <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
                            </div>
                            <p>
                                Creative Design &amp; Multimedia Institute(CDMI)  is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing &amp; All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. 
                                Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
                            </p>
                            <button>
                                <a href="#">Enroll Now..!</a>
                            </button>
                        </div>
                    </div>
                    {/* <div class="about-2">
                        <div class="layer">
                            <img src="https://www.cdmi.in/assets/front/images/about-us.jpg"></img>
                        </div>
                    </div> */}
                     <div class="section-3-img">
            <div class="layer">
                <img src={secimg3}></img>
            </div>
        </div>
                </div>
            </div>
      </section>


    {/* -------------------------------------------section-4----------------------------------- */}
    <section class="section-4 spacert-80">
        <div class="section-4-img relative">
            <div class="container flex trans margin-auto">
                <div class="review">
                    <div class="review-img-1 review-img"></div>
                    <div class="review-con">
                        <h1 class="text-align">8000+</h1>
                        <p class="text-align">happy students</p>
                    </div>
                </div>
                <div class="review">
                    <div class="review-img-2 review-img"></div>
                    <div class="review-con">
                        <h1 class="text-align">10+</h1>
                        <p class="text-align">certificate approval</p>
                    </div>
                </div>
                <div class="review">
                    <div class="review-img-3 review-img"></div>
                    <div class="review-con">
                        <h1 class="text-align">60+</h1>
                        <p class="text-align">certified teachers</p>
                    </div>
                </div>
                <div class="review">
                    <div class="review-img-3 review-img"></div>
                    <div class="review-con">
                        <h1 class="text-align">4000+</h1>
                        <p class="text-align">students placed</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* -----------------------------section-4 */}
    <section class="section-4 spacert-80">
       <div class="container margin-auto relative">
         <div class="flex space-between">
            <div class="slider-sec">
                <div class="slider-head">
                    <div class="flex">
                        <div class="line"></div>
                        <div class="line-con">
                            <h4>happy students</h4>
                        </div>
                    </div>
                    <h2>alumni speak</h2>
                    <div class="flex space-between icons">
                        <h1><i class="fa-solid fa-quote-right i-quote"></i></h1>
                        {/* <div class="chevron flex relative"> */}
                        {/* <div class=""><i class="fa-solid fa-chevron-left i-chev"></i></div> */}
                        {/* <div class=""><i class="fa-solid fa-chevron-right i-chev"></i></div> */}
                        {/* </div> */}
                    </div>
                    <div class="slider-p">
                        <p>Currently I’m taking training in Graphics design course in Creative Design & Multimedia Institute(CDMI) and happy to inform that i have been placed in  Xiaomi  as Graphics designer. I think as a fresher this is a very good start for me and thanks to Creative Design & Multimedia Institute(CDMI) for providing such a good opportunity.</p>
                    </div>
                    <div class="para-1 flex align-item">
                            <div class="stu-content-img">
                                <img src="https://www.cdmi.in/student_review/ronak-ui-ux_deign_in_surat.jpg"></img>
                            </div>
                            <div class="img-user">
                                <h6>Ronak V.Kachhadiya</h6>
                                <span class="span-1">UI / UX Designer</span>
                                <span class="span-2"> @ </span>
                                <span class="span-3"> Invints Infotech</span>
                            </div>
                        </div>
                </div>
            </div>
            {/* flex-c */}
            <div class="slider-bg">
                <div class="slider-bg-1 relative">
                    <div class="img-shape">
                        <img src={img_shape}></img>
                    </div>
                    <div class="img-shape-2"></div>
                </div>
            </div>
        </div>
        </div>
    </section>

    {/* -------------------------------------section-4 */}
    <section class="creative spacert-80 spacerb-80">
        <div class="container margin-auto">
            <div class="creative-1 flex">
            <div class="cre-content">
            <div class="flex relative">
                        <div class="line"></div>
                        <span>READ OUR DIFFERENCE</span>
                        <h2>WHY CHOOSE CREATIVE</h2>
                    </div>
                    </div>
            </div>
            <div class="creative-2">
                    <div class="creative-box">
                        <div class="box-content">
                            <div class="content-img co-img-1"></div>
                            <div class="content-img-1">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="creative-box">
                        <div class="box-content">
                            <div class="content-img co-img-2"></div>
                            <div class="content-img-1">
                                <h5>Latest Curriculum</h5>
                                <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a
                                    short time.</p>
                            </div>
                        </div>
                    </div>
                    <div class="creative-box">
                        <div class="box-content">
                            <div class="content-img co-img-3"></div>
                            <div class="content-img-1">
                                <h5>Latest Technology</h5>
                                <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                            </div>
                        </div>
                    </div>
                    <div class="creative-box">
                        <div class="box-content">
                            <div class="content-img co-img-4"></div>
                            <div class="content-img-1">
                                <h5>Interview Assistance</h5>
                                <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                            </div>
                        </div>
                    </div>
                    <div class="creative-box">
                        <div class="box-content">
                            <div class="content-img co-img-5"></div>
                            <div class="content-img-1">
                                <h5>Free Upgradation</h5>
                                <p>We will be provided free upgradation for any newer version of the course you have.</p>
                            </div>
                        </div>
                    </div>
                    <div class="creative-box">
                        <div class="box-content">
                            <div class="content-img co-img-6"></div>
                            <div class="content-img-1">
                                <h5>Lifetime Support</h5>
                                <p>We will provide you lifetime support on all the courses you learned from us.</p>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
    </section>

    {/* ---------------------------------section-5 */}
    <section class="partner">
            <div class="container margin-auto">
                <div class="partner-1">
                    <div class="par-content">

                        <h3>STUDENT PLACEMENT</h3>
                        <h2>OUR RECRUITMENT PARTNERS</h2>
                    </div>
                </div>
                <div class="partner-2 flex">
                    <div class="company">
                        <a href="#">
                            <img src={require('./images/asset28.png')}></img>    
                        </a>
                    </div>
                    <div class="company">
                        <a href="#">
                            <img src={require('./images/asset26.png')}></img>    
                        </a>
                    </div>
                    <div class="company">
                        <a href="#">
                            <img src={require('./images/asset27.png')}></img>    
                        </a>
                    </div>
                    <div class="company">
                        <a href="#">
                            <img src={require('./images/asset26.png')}></img>    
                        </a>
                    </div>
                    <div class="company">
                        <a href="#">
                            <img src={require('./images/asset25.png')}></img>    
                        </a>
                    </div>
                    <div class="company">
                        <a href="#">
                            <img src={require('./images/asset24.png')}></img>    
                        </a>
                    </div>
                </div>
            </div>
      </section>
    {/* ----------------------------section-6 */}
      <section class="demand">
            <div class="container margin-auto">
                <div class="demand-course">
                    <h5>Our Demanded Course -</h5>
                    <div class="tags">
                        <a href="#">PHP Project Company In Surat</a>
                        <a href="#">Computer Training Institute In Surat</a>
                        <a href="#">Spoken English Class In Surat</a>
                        <a href="#">Mechanical Engineering Training In Surat</a>
                        <a href="#">Creo Parametrics Training Institute In Katargam</a>
                        <a href="#">Latest technology course training institute in katargam</a>
                        <a href="#">Lumion training institute in katargam</a>
                        <a href="#">Video editing training institute in katargam</a>
                        <a href="#">Advance Laravel training institute in surat</a>
                        <a href="#">spoken english class in katargam</a>
                        <a href="#">Civil engineering training institute</a>
                        <a href="#">Best it course</a>
                        <a href="#">Android app development institute</a>
                        <a href="#">Latest technology course training institute</a>
                        <a href="#">Best 3ds max training institute</a>
                        <a href="#">Maya 3d animation training institute in surat</a>
                        <a href="#">codeigniter training institute in katargam</a>
                        <a href="#">Autocad civil training course</a>
                        <a href="#">Best Multimedia training institute in surat</a>
                        <a href="#">best php training in adajan</a>
                    </div>
                </div>
            </div>
      </section>



      {/* --------------------------------------------------------------------section-footer */}
      {/* <section class="footer">
        <div class="container margin-auto">
            <div class="flex">
                <div class="f-col-1">
                    <div class="logo-1">
                        <img></img>
                    </div>
                    <div class="f-col-1-con">
                        <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                        <h3>follow us on</h3>
                        <div class="social-icon-2 flex">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div class="f-col-1">
                    <div class="f-col-2-con">
                    <h3>feature links</h3>
                    <ul class="f-links">
                        <li><a href="#">about us</a></li>
                        <li><a href="#">blogs</a></li>
                        <li><a href="#">join us</a></li>
                        <li><a href="#">company login</a></li>
                        <li><a href="#">certificate verification</a></li>
                    </ul>
                    </div>
                </div>
                col-3<div class="f-col-1"></div>
              col-4  <div class="f-col-1"></div>
            </div>
        </div>
      </section> */}

<footer class="site-footer">
            <div class="top-footer">
                <div class="container margin-auto">
                    <div class="t-footer flex">
                        <div class="footer-box-1">
                            <div class="footer-logo">
                                <a href="#">
                                    <img src={logo} class="lo"></img>
                                </a>
                            </div>
                            <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                            <h6>Follow Us On</h6>
                            <div class="social-icon-2 flex">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                        </div>
                        <div class="footer-box-2">
                            <h6>FEATURE LINKS</h6>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Join Us</a></li>
                                <li><a href="#">Company Login</a></li>
                                <li><a href="#">Certificate Verrification</a></li>
                            </ul>
                        </div>
                        <div class="footer-box-2">
                            <h6>TRENDY COURSES</h6>
                            <ul>
                                <li><a href="#">Python course training</a></li>
                                <li><a href="#">Node JS course training</a></li>
                                <li><a href="#">Angular JS course training</a></li>
                                <li><a href="#">React JS course training</a></li>
                                <li><a href="#">Unity 3D course training</a></li>
                                <li><a href="#">Ethical Hacking course training</a></li>
                                <li><a href="#">React Native course training</a></li>
                                <li><a href="#">Desktop App Development course training</a></li>
                                <li><a href="#">Advanced ASP.net development course training</a></li>
                            </ul>
                        </div>
                        <div class="footer-box-3">
                            <h6>OUR BRANCHES</h6>
                            <div class="h-office">
                                <h5>
                                    <a href="#">HEAD OFFICE - YOGICHOWK</a>
                                </h5>
                                <span>401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat</span>
                                <p>Mo : <a href="#">+91 90333 16003</a></p>
                            </div>
                            <div class="h-office">
                                <h5>
                                    <a href="#">BRANCH 1 - KATARGAM</a>
                                </h5>
                                <span>327-334, 3<sup>rd</sup> Floor, Laxmi Enclave, Opp. Gajera School, Katargam, Surat</span>
                                <p>Mo : <a href="#">+91 90 3333 5009</a></p>
                            </div>
                            <div class="h-office">
                                <h5>
                                    <a href="#">BRANCH 2 - MOTA VARACHHA</a>
                                </h5>
                                <span>B 201-203, 2<sup>nd</sup> Floor, Aditya Complex, VIP Circle, Utran Mota Varachha,Surat</span>
                                <p>Mo : <a href="#">+91 945 945 9673</a></p>
                            </div>
                            <div class="btn-3">
                            
                                <a href="#"><span class="relative">
                                    {/* <button>Get Virtual tour</button></span></a> */}
                                    get virtual tour</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer">
                <div class="container margin-auto">
                    <p>© 2022 All Rights Reserved by Creative Design &amp; Multimedia Institute.</p>
                </div>
            </div>
      </footer>


    </>
  );
}

export default App;
