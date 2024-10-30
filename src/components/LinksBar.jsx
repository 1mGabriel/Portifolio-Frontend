import React, { useState ,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./About.css";

// css
import "./LinksBar.css";

const LinksBar = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      once: true,     // Executa a animação apenas uma vez
    });
  }, []);

  return (
    <nav className="links box" data-aos="zoom-in"
    data-aos-duration="1000">
      <div  className="links-bar container">
        <a id="link" target="_blank" href="https://www.linkedin.com/in/gabriel-mata-pereira-a81358302/">
          <span className="circle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.47 -0.00010431H1.53C1.33958 -0.00274893 1.1505 0.0321432 0.973563 0.102579C0.796628 0.173016 0.635301 0.277616 0.498795 0.410408C0.362289 0.543199 0.253279 0.70158 0.177989 0.876505C0.1027 1.05143 0.062606 1.23947 0.0599976 1.4299V18.5699C0.062606 18.7603 0.1027 18.9484 0.177989 19.1233C0.253279 19.2982 0.362289 19.4566 0.498795 19.5894C0.635301 19.7222 0.796628 19.8268 0.973563 19.8972C1.1505 19.9676 1.33958 20.0025 1.53 19.9999H18.47C18.6604 20.0025 18.8495 19.9676 19.0264 19.8972C19.2034 19.8268 19.3647 19.7222 19.5012 19.5894C19.6377 19.4566 19.7467 19.2982 19.822 19.1233C19.8973 18.9484 19.9374 18.7603 19.94 18.5699V1.4299C19.9374 1.23947 19.8973 1.05143 19.822 0.876505C19.7467 0.70158 19.6377 0.543199 19.5012 0.410408C19.3647 0.277616 19.2034 0.173016 19.0264 0.102579C18.8495 0.0321432 18.6604 -0.00274893 18.47 -0.00010431ZM6.09 16.7399H3.09V7.7399H6.09V16.7399ZM4.59 6.4799C4.17626 6.4799 3.77947 6.31554 3.48691 6.02298C3.19435 5.73043 3.03 5.33363 3.03 4.9199C3.03 4.50616 3.19435 4.10937 3.48691 3.81681C3.77947 3.52425 4.17626 3.3599 4.59 3.3599C4.80969 3.33498 5.03217 3.35675 5.24287 3.42378C5.45357 3.49081 5.64774 3.60159 5.81265 3.74886C5.97757 3.89613 6.10952 4.07657 6.19987 4.27838C6.29021 4.48018 6.33692 4.69879 6.33692 4.9199C6.33692 5.141 6.29021 5.35961 6.19987 5.56141C6.10952 5.76322 5.97757 5.94366 5.81265 6.09093C5.64774 6.23821 5.45357 6.34898 5.24287 6.41601C5.03217 6.48304 4.80969 6.50481 4.59 6.4799ZM16.91 16.7399H13.91V11.9099C13.91 10.6999 13.48 9.9099 12.39 9.9099C12.0527 9.91237 11.7242 10.0182 11.4488 10.2131C11.1735 10.408 10.9645 10.6826 10.85 10.9999C10.7717 11.2349 10.7378 11.4825 10.75 11.7299V16.7299H7.75V7.7299H10.75V8.9999C11.0225 8.527 11.4189 8.13741 11.8964 7.8731C12.374 7.60878 12.9146 7.47975 13.46 7.4999C15.46 7.4999 16.91 8.7899 16.91 11.5599V16.7399Z"
                fill="#CCCCCC"
              />
            </svg>
          </span>
        </a>
        {/*  */}
        <a id="link" href="https://www.instagram.com/g__briell/" target="_blank">
          <span className="circle">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 7.20825C9.99439 7.20825 9.02996 7.60773 8.31889 8.31881C7.60781 9.02988 7.20833 9.99431 7.20833 10.9999C7.20833 12.0055 7.60781 12.97 8.31889 13.681C9.02996 14.3921 9.99439 14.7916 11 14.7916C12.0056 14.7916 12.97 14.3921 13.6811 13.681C14.3922 12.97 14.7917 12.0055 14.7917 10.9999C14.7917 9.99431 14.3922 9.02988 13.6811 8.31881C12.97 7.60773 12.0056 7.20825 11 7.20825Z"
                fill="#CCCCCC"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.89833 0.595726C8.95371 0.146477 13.0463 0.146477 17.1017 0.595726C19.3172 0.843059 21.1033 2.58723 21.3635 4.81089C21.8441 8.92301 21.8441 13.0771 21.3635 17.1892C21.1033 19.4129 19.3172 21.1571 17.1028 21.4056C13.0471 21.8549 8.95409 21.8549 4.89833 21.4056C2.68283 21.1571 0.896668 19.4129 0.636501 17.1904C0.155814 13.0779 0.155814 8.92339 0.636501 4.81089C0.896668 2.58723 2.68283 0.843059 4.89833 0.595726ZM16.8333 4.00006C16.5239 4.00006 16.2272 4.12298 16.0084 4.34177C15.7896 4.56056 15.6667 4.85731 15.6667 5.16673C15.6667 5.47615 15.7896 5.77289 16.0084 5.99168C16.2272 6.21048 16.5239 6.33339 16.8333 6.33339C17.1428 6.33339 17.4395 6.21048 17.6583 5.99168C17.8771 5.77289 18 5.47615 18 5.16673C18 4.85731 17.8771 4.56056 17.6583 4.34177C17.4395 4.12298 17.1428 4.00006 16.8333 4.00006ZM5.45833 11.0001C5.45833 9.53032 6.04219 8.12077 7.08145 7.08151C8.12072 6.04225 9.53026 5.45839 11 5.45839C12.4697 5.45839 13.8793 6.04225 14.9186 7.08151C15.9578 8.12077 16.5417 9.53032 16.5417 11.0001C16.5417 12.4698 15.9578 13.8793 14.9186 14.9186C13.8793 15.9579 12.4697 16.5417 11 16.5417C9.53026 16.5417 8.12072 15.9579 7.08145 14.9186C6.04219 13.8793 5.45833 12.4698 5.45833 11.0001Z"
                fill="#CCCCCC"
              />
            </svg>
          </span>
        </a>
        {/*  */}
        <a id="link" href="https://github.com/1mGabriel" target="_blank">
          <span className="circle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.88 1.099C18.1467 0.365668 17.2643 -0.000665758 16.233 9.08265e-07H3.746C2.714 9.08265e-07 1.83167 0.366334 1.099 1.099C0.365668 1.83233 -0.000665758 2.71467 9.08265e-07 3.746V16.233C9.08265e-07 17.265 0.366334 18.1473 1.099 18.88C1.83233 19.6133 2.71467 19.9797 3.746 19.979H6.66C6.85 19.979 6.993 19.9723 7.089 19.959C7.20081 19.9369 7.30171 19.8773 7.375 19.79C7.47033 19.69 7.518 19.545 7.518 19.355L7.511 18.47C7.507 17.906 7.505 17.4593 7.505 17.13L7.205 17.182C7.015 17.2167 6.77467 17.232 6.484 17.228C6.1807 17.2222 5.87837 17.1918 5.58 17.137C5.2621 17.0793 4.9629 16.9455 4.708 16.747C4.44045 16.5447 4.24092 16.2656 4.136 15.947L4.006 15.647C3.89601 15.4106 3.75838 15.188 3.596 14.984C3.40933 14.7413 3.22067 14.5767 3.03 14.49L2.94 14.425C2.87751 14.3797 2.82046 14.3274 2.77 14.269C2.7218 14.2148 2.68233 14.1534 2.653 14.087C2.627 14.0257 2.64867 13.9757 2.718 13.937C2.78733 13.897 2.91333 13.8773 3.096 13.878L3.356 13.918C3.52933 13.952 3.74367 14.0557 3.999 14.229C4.25706 14.4049 4.47263 14.6362 4.63 14.906C4.83 15.2607 5.07067 15.5317 5.352 15.719C5.634 15.9057 5.918 15.999 6.204 15.999C6.49 15.999 6.73733 15.9773 6.946 15.934C7.14809 15.8921 7.34447 15.8263 7.531 15.738C7.609 15.1573 7.82133 14.7107 8.168 14.398C7.71842 14.3536 7.27283 14.2753 6.835 14.164C6.40775 14.0468 5.99687 13.8765 5.612 13.657C5.20925 13.4377 4.85351 13.1415 4.565 12.785C4.28767 12.4383 4.06 11.9833 3.882 11.42C3.70467 10.856 3.616 10.2053 3.616 9.468C3.616 8.41933 3.95833 7.526 4.643 6.788C4.323 5.99933 4.35333 5.11533 4.734 4.136C4.986 4.05733 5.359 4.11567 5.853 4.311C6.347 4.50633 6.709 4.673 6.939 4.811C7.169 4.951 7.35333 5.06833 7.492 5.163C8.30489 4.93635 9.14511 4.82261 9.989 4.825C10.8477 4.825 11.6803 4.93767 12.487 5.163L12.981 4.851C13.361 4.62287 13.7618 4.43134 14.178 4.279C14.6373 4.10567 14.9887 4.058 15.232 4.136C15.622 5.116 15.6563 6.00033 15.335 6.789C16.0203 7.52567 16.363 8.419 16.363 9.469C16.363 10.2063 16.274 10.8587 16.096 11.426C15.9187 11.994 15.689 12.4493 15.407 12.792C15.1126 13.143 14.7555 13.4363 14.354 13.657C13.934 13.891 13.5263 14.06 13.131 14.164C12.6932 14.2757 12.2476 14.3542 11.798 14.399C12.248 14.789 12.4733 15.4043 12.474 16.245V19.355C12.474 19.5017 12.4957 19.6207 12.539 19.712C12.5592 19.7558 12.5881 19.7952 12.6238 19.8276C12.6595 19.8601 12.7014 19.8851 12.747 19.901C12.8423 19.9357 12.927 19.957 13.001 19.965C13.075 19.9743 13.181 19.9787 13.319 19.978H16.233C17.265 19.978 18.1473 19.6117 18.88 18.879C19.6127 18.1463 19.979 17.264 19.979 16.232V3.746C19.979 2.714 19.6133 1.83167 18.88 1.099Z"
                fill="#CCCCCC"
              />
            </svg>
          </span>
        </a>
        {/*  */}
        <a id="link" href="https://wa.me/19984510129" target="_blank">
          <span className="circle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.29797 20.0024 6.62371 19.5686 5.137 18.74L4.832 18.562L1.8 19.454C1.635 19.5026 1.46032 19.5083 1.29252 19.4705C1.12471 19.4327 0.969341 19.3526 0.841138 19.238C0.712934 19.1233 0.616144 18.9778 0.559943 18.8152C0.503743 18.6526 0.489994 18.4784 0.52 18.309L0.546 18.2L1.438 15.168C0.495054 13.6093 -0.00232007 11.8218 4.53452e-07 10C4.53452e-07 4.477 4.477 0 10 0ZM10 2C8.56763 1.99974 7.16146 2.38406 5.92833 3.11281C4.6952 3.84157 3.68036 4.88804 2.98976 6.14294C2.29917 7.39784 1.95816 8.81514 2.00236 10.2468C2.04655 11.6785 2.47432 13.0721 3.241 14.282C3.439 14.594 3.524 14.978 3.457 15.359L3.418 15.522L2.977 17.023L4.478 16.582C4.911 16.454 5.361 16.532 5.718 16.759C6.76633 17.4228 7.95469 17.8336 9.18915 17.959C10.4236 18.0844 11.6703 17.921 12.8307 17.4816C13.9911 17.0422 15.0334 16.3389 15.8752 15.4273C16.717 14.5157 17.3351 13.4208 17.6809 12.2291C18.0266 11.0374 18.0904 9.78168 17.8672 8.56111C17.6441 7.34053 17.14 6.1886 16.395 5.19638C15.6499 4.20415 14.6843 3.39883 13.5744 2.84408C12.4645 2.28933 11.2408 2.00036 10 2ZM7.102 5.184C7.21282 5.13654 7.33402 5.11851 7.45385 5.13165C7.57369 5.14479 7.6881 5.18866 7.786 5.259C8.29 5.627 8.69 6.121 9.034 6.603L9.361 7.077L9.514 7.302C9.6026 7.43096 9.64613 7.58557 9.63781 7.74182C9.62949 7.89806 9.5698 8.04718 9.468 8.166L9.393 8.242L8.469 8.928C8.42503 8.9606 8.39413 9.00781 8.38185 9.06115C8.36957 9.11449 8.37672 9.17046 8.402 9.219C8.612 9.599 8.983 10.166 9.409 10.592C9.836 11.018 10.429 11.414 10.835 11.647C10.923 11.697 11.029 11.681 11.101 11.616L11.139 11.571L11.74 10.656C11.8502 10.5088 12.0131 10.4101 12.1946 10.3806C12.3761 10.3512 12.5619 10.3932 12.713 10.498L13.256 10.877C13.796 11.262 14.315 11.676 14.726 12.201C14.802 12.2997 14.8504 12.4168 14.866 12.5404C14.8817 12.664 14.8641 12.7895 14.815 12.904C14.419 13.828 13.416 14.615 12.374 14.577L12.215 14.567L12.024 14.549L11.916 14.535L11.678 14.495C10.754 14.321 9.273 13.797 7.738 12.263C6.204 10.728 5.68 9.247 5.506 8.323L5.466 8.085L5.441 7.877L5.428 7.702L5.424 7.627C5.386 6.583 6.177 5.58 7.102 5.184Z"
                fill="#CCCCCC"
              />
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default LinksBar;