import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./footer.scss";
import {
  CAREERS,
  LOAN_CALCULATOR,
  PARTNER_LINK,
  REACT_APP_MENULINK,
  TERM_CONDITIONS,
  PRIVACY_POLICY,
  GRIEVANCE_REDRESSAL_MECHANISM,
} from "../../../utils/constant";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="800">
      <div className="container">
        <div className="row mb-4 d-flex d-md-none">
          <div className="col-md-12 col-sm-12 col-6">
            <div className="footerLogo ">
              <h1>Being</h1>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-6 mobile-social mt-3">
            <a target="_blank" href="https://www.instagram.com/Being_">
              <InstagramIcon />
            </a>
            <a target="_blank" href="https://www.facebook.com/Being.official">
              <FacebookRoundedIcon />
            </a>
            <a target="_blank" href="https://in.linkedin.com/company/Being">
              <LinkedInIcon />
            </a>
            <a target="_blank" href="https://twitter.com/Being_">
              <TwitterIcon />
            </a>
            <a
              target="_blank"
              href="https://youtube.com/channel/UCyjtuSfqPbbHcu07CZ1eqEg"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 text-left">
            <div className="footerLogo d-none d-md-block">
              <h1>Being</h1>
            </div>
            <p>
              Our loans range from ₹1000 to ₹5,00,000 with repayment periods
              starting from 3 months to 36 months. We offer interest rates
              ranging from 11.99% - 59.99% APR (Annual Percentage Rate), however
              rates may vary case to case. All loans are paid through Equal
              Monthly Instalments (EMIs) via electronic payment. We do charge
              low processing fees and have no other hidden costs.
            </p>
            <p>
              Example: If a customer takes a loan of ₹10,000 for a period of 3
              months, at an annual interest rate of 11.99% APR, then the
              customer will pay an EMI for 3 months of ₹3,400 per month. Total
              payment over 3 months will be ₹10,200 (including principal and
              Interest).
            </p>
          </div>
          <div className="col-md-12 col-lg-6 MobileFooterHide">
            <div className="row">
              <div className="col-md-4 col-lg-3">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/why-us" className="whyUs">
                      Why Us
                    </a>
                  </li>
                  <li>
                    <a href="/aboutus">About</a>
                  </li>
                  <li>
                    <a href={REACT_APP_MENULINK + CAREERS} target="_self">
                      Careers
                    </a>
                  </li>

                  <li>
                    <a href="https://www.Being.com/contact-us">
                      Customer Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-lg-3">
                <h3>Resources</h3>
                <ul>
                  <li>
                    <a href="https://blog.Being.com/" target="_self">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="https://www.Being.com/news" target="_self">
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.Being.com/faqs?tab=personalLoan"
                      target="_self"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href={REACT_APP_MENULINK + LOAN_CALCULATOR}
                      target="_self"
                    >
                      Calculator
                    </a>
                  </li>
                  {/* <li>
                        <a href='/rewards'>Rewards</a>
                      </li> */}
                  <li>
                    <a href={REACT_APP_MENULINK + PARTNER_LINK} target="_self">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-lg-6">
                <h3>Legal</h3>
                <ul>
                  <li>
                    <a href={PRIVACY_POLICY} target="_self">
                      Privacy Policy (EQX)
                    </a>
                  </li>
                  <li>
                    <a href={PRIVACY_POLICY}>Privacy Policy (AKARA)</a>
                  </li>
                  <li>
                    <a href={TERM_CONDITIONS} target="_self">
                      Terms and Conditions
                    </a>
                  </li>

                  <li>
                    <a href="https://www.Being.com/Employee-Expense-Management-Program">
                      Employee Expense Management Program
                    </a>
                  </li>

                  <li>
                    <a href={GRIEVANCE_REDRESSAL_MECHANISM} target="_self">
                      Grievance Redressal Mechanism
                    </a>
                  </li>
                  <li>
                    <a href="https://static.Being.com/pdfs/Akara_Interest_Rate_Policy.pdf">
                      Interest Rate Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12">
                <div className="citiesList">
                  <h3>Cities</h3>
                  <ul>
                    <li>
                      <a
                        href="https://www.Being.com/personal-loan-in-delhi"
                        title="Delhi"
                      >
                        Delhi
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Being.com/personal-loan-in-chandigarh"
                        title="Chandigarh"
                      >
                        Chandigarh
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Being.com/personal-loan-in-bangalore"
                        title="Bangalore"
                      >
                        Bangalore
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Being.com/personal-loan-in-hyderabad"
                        title="Hyderabad"
                      >
                        Hyderabad
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Being.com/personal-loan-in-indore"
                        title="Indore"
                      >
                        Indore
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Being.com/personal-loan-in-mumbai"
                        title="Mumbai"
                      >
                        Mumbai
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Being.com/personal-loan-in-pune"
                        title="Pune"
                      >
                        Pune
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.Being.com/personal-loan-in-chennai"
                        title="Chennai"
                      >
                        Chennai
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-lucknow/"
                        title="Lucknow"
                      >
                        Lucknow
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-bhopal/"
                        title="Bhopal"
                      >
                        Bhopal
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-agra/"
                        title="Agra"
                      >
                        Agra
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-dehradun/"
                        title="Dehradun"
                      >
                        Dehradun
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-kanpur/"
                        title="Kanpur"
                      >
                        Kanpur
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-nagpur/"
                        title="Nagpur"
                      >
                        Nagpur
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-aurangabad/"
                        title="Aurangabad"
                      >
                        Aurangabad
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-madurai/"
                        title="Madurai"
                      >
                        Madurai
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-salem/"
                        title="Salem"
                      >
                        Salem
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-rajkot/"
                        title="Rajkot"
                      >
                        Rajkot
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-kurnool/"
                        title="Kurnool"
                      >
                        Kurnool
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-vellore/"
                        title="Vellore"
                      >
                        Vellore
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-krishna-andhra-pradesh/"
                        title="Krishna, andhra-pradesh"
                      >
                        Krishna, Andhra-Pradesh
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-warangal/"
                        title="Warangal"
                      >
                        Warangal
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-anantapur/"
                        title="Anantapur"
                      >
                        Anantapur
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-patna/"
                        title="Patna"
                      >
                        Patna
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-karimnagar/"
                        title="Karimnagar"
                      >
                        Karimnagar
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.Being.com/credit-line-personal-loans-in-ludhiana/"
                        title="Ludhiana"
                      >
                        Ludhiana
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mobileFooter">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Company</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/why-us" className="whyUs">
                      Why Us
                    </a>
                  </li>
                  <li>
                    <a href="/aboutus">About</a>
                  </li>
                  <li>
                    <a href="https://www.Being.com/careers" target="_self">
                      Careers
                    </a>
                  </li>

                  <li>
                    <a href="https://www.Being.com/contact-us">
                      Customer Service
                    </a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Resources</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="https://blog.Being.com/" target="_self">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="https://www.Being.com/news" target="_self">
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.Being.com/faqs?tab=personalLoan"
                      target="_self"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.Being.com/loan-calculator"
                      target="_self"
                    >
                      Calculator
                    </a>
                  </li>
                  {/* <li>
                        <a href='/rewards'>Rewards</a>
                      </li> */}
                  <li>
                    <a href={REACT_APP_MENULINK + PARTNER_LINK} target="_self">
                      Partners
                    </a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Legal</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href={PRIVACY_POLICY} target="_self">
                      Privacy Policy (EQX)
                    </a>
                  </li>
                  <li>
                    <a href={PRIVACY_POLICY} target="_self">
                      Privacy Policy (AKARA)
                    </a>
                  </li>
                  <li>
                    <a href={TERM_CONDITIONS}>Terms and Conditions</a>
                  </li>

                  <li>
                    <a href="https://www.Being.com/Employee-Expense-Management-Program">
                      Employee Expense Management Program
                    </a>
                  </li>

                  <li>
                    <a href={GRIEVANCE_REDRESSAL_MECHANISM} target="_self">
                      Grievance Redressal Mechanism
                    </a>
                  </li>
                  <li>
                    <a href="https://static.Being.com/pdfs/Akara_Interest_Rate_Policy.pdf">
                      Interest Rate Policy
                    </a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Typography>Cities</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <>
                  <div className="citiesList">
                    <ul>
                      <li>
                        <a
                          href="https://www.Being.com/personal-loan-in-delhi"
                          title="Delhi"
                        >
                          Delhi
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.Being.com/personal-loan-in-chandigarh"
                          title="Chandigarh"
                        >
                          Chandigarh
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://www.Being.com/personal-loan-in-bangalore"
                          title="Bangalore"
                        >
                          {" "}
                          Bangalore
                        </a>{" "}
                      </li>
                      <li>
                        <a
                          href="https://www.Being.com/personal-loan-in-hyderabad"
                          title="Hyderabad"
                        >
                          Hyderabad
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.Being.com/personal-loan-in-indore"
                          title="Indore"
                        >
                          Indore
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.Being.com/personal-loan-in-mumbai"
                          title="Mumbai"
                        >
                          Mumbai
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.Being.com/personal-loan-in-pune"
                          title="Pune"
                        >
                          Pune
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.Being.com/personal-loan-in-chennai"
                          title="Chennai"
                        >
                          {" "}
                          Chennai
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-lucknow/"
                          title="Lucknow"
                        >
                          Lucknow
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-bhopal/"
                          title="Bhopal"
                        >
                          Bhopal
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-agra/"
                          title="Agra"
                        >
                          Agra
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-dehradun/"
                          title="Dehradun"
                        >
                          Dehradun
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-kanpur/"
                          title="Kanpur"
                        >
                          Kanpur
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-nagpur/"
                          title="Nagpur"
                        >
                          Nagpur
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-aurangabad/"
                          title="Aurangabad"
                        >
                          Aurangabad
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-madurai/"
                          title="Madurai"
                        >
                          Madurai
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-salem/"
                          title="Salem"
                        >
                          Salem
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-rajkot/"
                          title="Rajkot"
                        >
                          Rajkot
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-kurnool/"
                          title="Kurnool"
                        >
                          Kurnool
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-vellore/"
                          title="Vellore"
                        >
                          Vellore
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-krishna-andhra-pradesh/"
                          title="Krishna-andhra-pradesh"
                        >
                          Krishna, Andhra-Pradesh
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-warangal/"
                          title="Warangal"
                        >
                          Warangal
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-anantapur/"
                          title="Anantapur"
                        >
                          Anantapur
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-patna/"
                          title="Patna"
                        >
                          Patna
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-karimnagar/"
                          title="Karimnagar"
                        >
                          Karimnagar
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://blog.Being.com/credit-line-personal-loans-in-ludhiana/"
                          title="Ludhiana"
                        >
                          Ludhiana
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-left footerNone">
              <a target="_blank" href="https://www.instagram.com/Being_">
                <InstagramIcon />
              </a>
              <a target="_blank" href="https://www.facebook.com/Being.official">
                <FacebookRoundedIcon />
              </a>
              <a target="_blank" href="https://in.linkedin.com/company/Being">
                <LinkedInIcon />
              </a>
              <a target="_blank" href="https://twitter.com/Being_">
                <TwitterIcon />
              </a>
              <a
                target="_blank"
                href="https://youtube.com/channel/UCyjtuSfqPbbHcu07CZ1eqEg"
              >
                <YouTubeIcon />
              </a>
            </div>
            <div className="col-md-6 text-left">
              <p>© 2022 by Being</p>
              <div className="powered-by-2">
                <p>Trademark of EQX Analytics Private Limited</p>
                <p>
                  Credit enhancements (which may include funding or guarantee)
                  by:
                </p>
                <p>
                  EQX Analytics Private Limited - Business Correspondent to:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
