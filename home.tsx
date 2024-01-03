import { FunctionComponent, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    // Please sync "About us" to the project
  }, []);

  const onProductCornerTextClick = useCallback(() => {
    // Please sync "Product" to the project
  }, []);

  const onContactUsText1Click = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onReadMoreTextClick = useCallback(() => {
    // Please sync "Blog Single " to the project
  }, []);

  const onReadMoreText1Click = useCallback(() => {
    // Please sync "Blog Single " to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[306.56rem] overflow-hidden text-center text-[2.63rem] text-gray-900 font-headdd">
      <section className="absolute h-[16.7%] w-[70.53%] top-[1.28%] right-[-28.11%] bottom-[82.01%] left-[57.58%]">
        <img
          className="absolute h-[89.51%] w-[98.44%] top-[0%] right-[1.56%] bottom-[10.49%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[89.51%] w-[98.44%] top-[2.62%] right-[1.16%] bottom-[7.86%] left-[0.39%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[89.51%] w-[98.44%] top-[5.24%] right-[0.78%] bottom-[5.25%] left-[0.78%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[89.51%] w-[98.44%] top-[7.86%] right-[0.38%] bottom-[2.62%] left-[1.17%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[89.51%] w-[98.44%] top-[10.49%] right-[0%] bottom-[0%] left-[1.56%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
      </section>
      <section className="absolute top-[8.25rem] left-[calc(50%_-_563px)] w-[70.31rem] h-[35.69rem] text-center text-[1rem] text-gray-900 font-headdd">
        <div className="absolute top-[5.28rem] left-[56.73rem] [background:linear-gradient(90deg,_rgba(82,_54,_255,_0.22),_rgba(8,_142,_252,_0.19))] [filter:blur(60px)] w-[8.95rem] h-[3.41rem]" />
        <div className="absolute top-[27.58rem] left-[5.22rem] [background:linear-gradient(90deg,_rgba(82,_54,_255,_0.22),_rgba(8,_142,_252,_0.19))] [filter:blur(60px)] w-[8.95rem] h-[3.41rem]" />
        <div className="absolute top-[4.5rem] left-[25.44rem] w-[19.44rem] h-[2.5rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[60px] bg-gray1-400 [backdrop-filter:blur(14px)] box-border w-[19.44rem] h-[2.5rem] border-[1px] border-solid border-gray-200" />
          <div className="absolute top-[0.5rem] left-[1.38rem] leading-[1.5rem] font-medium">
            Bridging Healthcare, Building Trust.
          </div>
        </div>
        <div className="absolute top-[24.19rem] left-[calc(50%_-_324.5px)] leading-[1.63rem] font-inter-semi-bold-16 text-gray-600 inline-block w-[40.63rem]">
          At Mahalakshmi, we elevate healthcare distribution with a winning
          combination of expert teams, cutting-edge technology, and unparalleled
          customer service.
        </div>
        <div className="absolute top-[30.58rem] left-[calc(50%_-_116.8px)] [background:linear-gradient(90deg,_rgba(68,_188,_255,_0.53),_rgba(68,_176,_255,_0.53)_23.44%,_rgba(82,_54,_255,_0.53)_48.96%,_rgba(167,_15,_239,_0.53)_73.96%,_rgba(253,_185,_49,_0.53))] [filter:blur(45px)] w-[14.61rem] h-[2.17rem]" />
        <div className="absolute top-[10.13rem] left-[4.69rem] flex flex-row items-start justify-start gap-[0.63rem] text-[3.25rem]">
          <h1 className="m-0 relative text-inherit leading-[4.44rem] font-extrabold font-inherit inline-block w-[60.95rem] shrink-0 z-[0]">
            Delivering Quality Healthcare Products with Care and Precision Since
            1991.
          </h1>
          <img
            className="absolute my-0 mx-[!important] top-[3.93rem] left-[23.88rem] w-[12.28rem] h-[1.02rem] object-contain z-[1]"
            alt=""
            src="/vector-10@2x.png"
          />
        </div>
        <div className="absolute top-[27.26rem] left-[4.16rem] w-[11.16rem] h-[5.19rem] text-[0.56rem] text-mediumslateblue">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl box-border w-[11.16rem] h-[5.14rem] border-[1px] border-solid border-mediumslateblue" />
          <div className="absolute top-[3.44rem] left-[4.61rem] leading-[1.75rem] font-extrabold">
            Clients
          </div>
          <div className="absolute top-[1.41rem] left-[1.41rem] w-[8.34rem] h-[2.32rem] text-white">
            <div className="absolute top-[0.01rem] left-[0rem] w-[2.28rem] h-[2.28rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-white box-border w-[2.28rem] h-[2.28rem] border-[0.1px] border-solid border-mediumslateblue" />
              <img
                className="absolute top-[0.53rem] left-[0.43rem] w-[1.43rem] h-[1.41rem] object-cover"
                alt=""
                src="/image-123@2x.png"
              />
            </div>
            <img
              className="absolute top-[0.01rem] left-[1.39rem] rounded-[18.24px] w-[2.29rem] h-[2.28rem] object-cover"
              alt=""
              src="/image-123@2x.png"
            />
            <img
              className="absolute top-[0.01rem] left-[2.94rem] w-[2.31rem] h-[2.31rem] object-cover"
              alt=""
              src="/image001-3@2x.png"
            />
            <img
              className="absolute top-[0.03rem] left-[4.55rem] w-[2.28rem] h-[2.28rem] object-cover"
              alt=""
              src="/group-237618@2x.png"
            />
            <div className="absolute top-[0rem] left-[6.07rem] rounded-[50%] bg-cornflowerblue box-border w-[2.28rem] h-[2.28rem] border-[0.1px] border-solid border-mediumslateblue" />
            <div className="absolute top-[0.26rem] left-[6.64rem] leading-[1.75rem] font-extrabold">
              50+
            </div>
          </div>
        </div>
        <b className="absolute top-[7.75rem] left-[calc(50%_-_154.5px)] text-[1.13rem] leading-[1.63rem] text-mediumslateblue">
          Welcome to Mahalakshmi Agencies
        </b>
        <div className="absolute top-[30.33rem] left-[calc(50%_-_122px)] [background:linear-gradient(90deg,_rgba(68,_188,_255,_0.53),_rgba(68,_176,_255,_0.53)_23.44%,_rgba(82,_54,_255,_0.53)_48.96%,_rgba(167,_15,_239,_0.53)_73.96%,_rgba(253,_185,_49,_0.53))] [filter:blur(45px)] w-[14.61rem] h-[3.08rem]" />
        <Button
          className="w-[12.5rem] absolute top-[29.92rem] left-[calc(50%_-_100px)]"
          variant="primary"
        >
          Contact Us
        </Button>
      </section>
      <img
        className="absolute top-[71.08rem] left-[65.39rem] w-[28.72rem] h-[28.72rem] object-contain"
        alt=""
        src="/group-237650@2x.png"
      />
      <div className="absolute top-[12.18rem] left-[64.59rem] w-[12.88rem] h-[5.14rem] text-[0.56rem] text-base-black">
        <div className="absolute top-[0rem] left-[0rem] rounded-xl box-border w-[12.88rem] h-[5.14rem] border-[1px] border-solid border-mediumslateblue" />
        <div className="absolute top-[1.34rem] left-[1.48rem] w-[10.79rem] h-[2.38rem]">
          <img
            className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[2.28rem] h-[2.28rem] object-cover"
            alt=""
            src="/ellipse-195@2x.png"
          />
          <img
            className="absolute top-[0.08rem] left-[1.33rem] rounded-[18.24px] w-[2.29rem] h-[2.28rem] object-cover"
            alt=""
            src="/image-123@2x.png"
          />
          <img
            className="absolute top-[0.08rem] left-[2.87rem] rounded-[110px] w-[2.31rem] h-[2.31rem] object-cover"
            alt=""
            src="/image001-3@2x.png"
          />
          <img
            className="absolute top-[0.09rem] left-[4.27rem] rounded-[50%] w-[2.28rem] h-[2.28rem] object-cover"
            alt=""
            src="/ellipse-194@2x.png"
          />
          <img
            className="absolute top-[0.06rem] left-[5.99rem] rounded-[50%] w-[2.28rem] h-[2.28rem] object-cover"
            alt=""
            src="/ellipse-195@2x.png"
          />
          <img
            className="absolute top-[0.06rem] left-[7.21rem] w-[2.28rem] h-[2.28rem] object-cover"
            alt=""
            src="/ellipse-195@2x.png"
          />
          <div className="absolute top-[0.08rem] left-[8.51rem] rounded-[50%] bg-cornflowerblue box-border w-[2.28rem] h-[2.28rem] border-[0.1px] border-solid border-mediumslateblue" />
          <div className="absolute top-[0.34rem] left-[8.9rem] leading-[1.75rem] font-extrabold">
            200+
          </div>
        </div>
      </div>
      <div className="absolute top-[131.56rem] left-[calc(50%_-_722px)] bg-aliceblue w-[90.31rem] h-[37.13rem] overflow-hidden">
        <div className="absolute top-[calc(50%_-_114.5px)] left-[calc(50%_-_636.5px)] [background:linear-gradient(90deg,_#1854ef,_#ff13bd_23.44%,_#ab77ff_48.96%,_#53ff44_73.96%,_#e90de0)] [filter:blur(59px)] w-[84.94rem] h-[21.96rem] opacity-[0.4]" />
        <b className="absolute top-[4.13rem] left-[calc(50%_-_364.5px)] leading-[3rem]">
          What our happy clients say about us
        </b>
      </div>
      <section className="absolute bottom-[0rem] left-[calc(50%_-_720px)] bg-white w-[90rem] h-[32.88rem] text-center text-[1.13rem] text-base-black font-headdd">
        <div className="absolute top-[6.94rem] left-[52rem] bg-lightblue [filter:blur(84px)] w-[29.31rem] h-[5.88rem]" />
        <div className="absolute top-[28.92rem] left-[72.9rem] hidden flex-row items-start justify-start gap-[2.5rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/deviconplainlinkedin@2x.png"
          />
          <img
            className="relative rounded w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/icbaselinequora@2x.png"
          />
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/mdiinstagram@2x.png"
          />
        </div>
        <b className="absolute top-[3.31rem] left-[7.75rem] tracking-[1px] leading-[1.75rem] text-dodgerblue-100">
          <span>/</span>
          <span className="text-base-black">Mahalakshmi Agencies 1991</span>
        </b>
        <div className="absolute top-[7.19rem] left-[7.75rem] flex flex-col items-start justify-start gap-[1.94rem]">
          <div className="relative tracking-[1px] leading-[1.75rem] uppercase font-semibold">
            Company
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[1.38rem] text-[1rem] text-gray1-500">
            <a
              className="[text-decoration:none] relative leading-[1.75rem] text-[inherit]"
              target="_blank"
            >
              About Us
            </a>
            <a
              className="[text-decoration:none] relative leading-[1.75rem] text-[inherit]"
              target="_blank"
            >
              News
            </a>
            <a
              className="[text-decoration:none] relative leading-[1.75rem] text-[inherit]"
              target="_blank"
            >
              Product Corner
            </a>
          </div>
        </div>
        <div className="absolute top-[28.58rem] left-[9.17rem] text-[0.88rem] leading-[1.75rem] text-gray1-500">{`@ Copyright 2023, All Rights Reserved. `}</div>
        <div className="absolute top-[7.19rem] left-[20.25rem] flex flex-col items-start justify-start gap-[1.94rem]">
          <div className="relative tracking-[1px] leading-[1.75rem] uppercase font-semibold">
            Support
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[1.38rem] text-[1rem] text-gray1-500">
            <div className="relative leading-[1.75rem]">Privacy Policy</div>
            <div className="relative leading-[1.75rem]">Contact us</div>
          </div>
        </div>
        <div className="absolute top-[7.19rem] left-[33.06rem] flex flex-col items-start justify-start gap-[1.94rem]">
          <div className="relative tracking-[1px] leading-[1.75rem] uppercase font-semibold">
            Resources
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[1.38rem] text-[1rem] text-gray1-500">
            <div className="relative leading-[1.75rem]">Latest News</div>
            <div className="relative leading-[1.75rem]">Quora</div>
            <div className="relative leading-[1.75rem]">Linkedin</div>
          </div>
        </div>
        <div className="absolute top-[12.63rem] left-[61.5rem] flex flex-col items-start justify-start gap-[1.13rem] text-gray1-600">
          <div className="shrink-0 flex flex-row items-center justify-center gap-[0.75rem]">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame@2x.png"
            />
            <div className="relative leading-[1.75rem] uppercase font-semibold">
              EMAIL US
            </div>
          </div>
          <div className="shrink-0 flex flex-row items-center justify-center text-base-black">
            <div className="relative leading-[1.75rem] lowercase font-semibold">
              Info@mahalakshmiagesncies1991.in
            </div>
          </div>
        </div>
        <div className="absolute top-[12.63rem] left-[45.63rem] flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[0.75rem] text-gray1-600">
            <img
              className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame@2x.png"
            />
            <div className="relative leading-[1.75rem] uppercase font-semibold">
              Call US
            </div>
          </div>
          <b className="relative leading-[1.75rem] lowercase">080-42035312</b>
          <div className="relative leading-[1.75rem] lowercase font-semibold">
            +91 6360166226
          </div>
        </div>
        <div className="absolute top-[3.63rem] left-[45.63rem] w-[36.31rem] h-[7.25rem] flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="relative tracking-[1px] leading-[1.75rem] uppercase font-semibold">
            Subscribe to be updated with lates news
          </div>
          <div className="w-[34.56rem] flex flex-row items-start justify-start">
            <Form className="w-[23.13rem] [border:none] bg-[transparent] font-headdd text-[1rem] text-gray1-700">
              <Form.Label>Enter Email Address</Form.Label>
              <Form.Control type="text" />
            </Form>
            <Button className="w-[13.31rem]" variant="primary">
              Join
            </Button>
          </div>
        </div>
        <div className="absolute top-[26.21rem] left-[2.68rem] box-border w-[83.26rem] h-[0.06rem] border-t-[1px] border-solid border-base-black" />
        <div className="absolute top-[28.68rem] left-[70.4rem] flex flex-row items-start justify-start gap-[2.5rem]">
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/deviconplainlinkedin@2x.png"
          />
          <img
            className="relative rounded w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/icbaselinequora@2x.png"
          />
          <img
            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/mdiinstagram@2x.png"
          />
        </div>
      </section>
      <section className="absolute h-[15.62%] w-[65.97%] top-[-2.71%] right-[45.63%] bottom-[87.09%] left-[-11.6%]">
        <img
          className="absolute h-[89.52%] w-[98.44%] top-[0%] right-[1.56%] bottom-[10.48%] left-[0%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[89.52%] w-[98.44%] top-[2.62%] right-[1.17%] bottom-[7.86%] left-[0.39%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[89.52%] w-[98.44%] top-[5.25%] right-[0.78%] bottom-[5.23%] left-[0.78%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[89.52%] w-[98.44%] top-[7.87%] right-[0.39%] bottom-[2.61%] left-[1.17%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
        <img
          className="absolute h-[89.52%] w-[98.44%] top-[10.48%] right-[0%] bottom-[0%] left-[1.56%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/vector@2x.png"
        />
      </section>
      <header className="absolute top-[0.13rem] left-[calc(50%_-_720px)] h-[8.08rem] flex flex-row items-start justify-start gap-[0.63rem]">
        <div className="relative bg-white shadow-[0px_3px_5px_rgba(0,_0,_0,_0.19)] w-[90rem] h-[8.08rem] z-[0]" />
        <nav className="my-0 mx-[!important] absolute top-[0.86rem] left-[calc(50%_-_587.5px)] w-[73.44rem] flex flex-row items-center justify-start gap-[5.81rem] z-[1] text-left text-[1.13rem] text-base-black font-headdd">
          <div className="shrink-0 flex flex-col items-center justify-start py-[0.38rem] px-[0rem] gap-[0.44rem]">
            <img
              className="relative w-[2.86rem] h-[3.31rem] object-cover"
              alt=""
              src="/group-2216@2x.png"
            />
            <b className="relative leading-[1.75rem]">Mahalakshmi Agencies</b>
          </div>
          <nav className="m-0 w-[39.5rem] shrink-0 flex flex-row items-start justify-between text-left text-[1.13rem] text-base-black font-headdd">
            <div className="relative [text-decoration:underline] leading-[1.75rem] font-medium text-mediumslateblue">
              Home
            </div>
            <div
              className="relative leading-[1.75rem] font-medium cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About us
            </div>
            <b
              className="relative leading-[1.75rem] cursor-pointer"
              onClick={onProductCornerTextClick}
            >
              Product corner
            </b>
            <div
              className="relative leading-[1.75rem] font-medium cursor-pointer"
              onClick={onContactUsText1Click}
            >
              Contact us
            </div>
            <div className="relative leading-[1.75rem] font-medium">{`News & More`}</div>
          </nav>
          <Button
            className="w-[9.87rem] relative cursor-pointer"
            variant="primary"
            onClick={onButtonClick}
          >
            Let’s connect
          </Button>
        </nav>
      </header>
      <section className="absolute top-[43.94rem] left-[calc(50%_-_723px)] w-[90.38rem] h-[28.31rem] overflow-hidden bg-[url('/public/frame-48095654@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[0.38rem] text-lightslategray font-jejugothic">
        <img
          className="absolute top-[-6.43rem] left-[-9.49rem] w-[106.88rem] h-[39.09rem] object-cover"
          alt=""
          src="/group-237608@2x.png"
        />
        <div className="absolute top-[11.44rem] left-[calc(50%_-_391px)] w-[48.94rem] flex flex-row flex-wrap items-start justify-start gap-[2.44rem]">
          <div className="shrink-0 flex flex-row flex-wrap items-center justify-start gap-[3.5rem]">
            <img
              className="relative w-[4.77rem] h-[5.19rem] object-cover"
              alt=""
              src="/apolo@2x.png"
            />
            <img
              className="relative w-[8.96rem] h-[3.68rem] object-cover"
              alt=""
              src="/fortis@2x.png"
            />
            <img
              className="relative w-[9.05rem] h-[3.91rem] object-cover"
              alt=""
              src="/narayan@2x.png"
            />
            <img
              className="relative rounded-[50%] w-[5.38rem] h-[5.38rem] object-cover"
              alt=""
              src="/ellipse-215@2x.png"
            />
            <img
              className="relative w-[5.89rem] h-[4.61rem] object-cover"
              alt=""
              src="/sparsh@2x.png"
            />
          </div>
          <div className="shrink-0 flex flex-row flex-wrap items-center justify-start gap-[3.44rem]">
            <div className="relative w-[5.56rem] h-[5.2rem]">
              <img
                className="absolute h-[82.33%] w-[91.68%] top-[4.09%] right-[3.49%] bottom-[13.58%] left-[4.84%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/group@2x.png"
              />
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[22.84%] w-[8.55%] top-[4.09%] right-[47.36%] bottom-[73.08%] left-[44.09%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[12.26%] w-[23.62%] top-[19.71%] right-[24.41%] bottom-[68.03%] left-[51.97%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[12.86%] w-[19.24%] top-[28.25%] right-[55.12%] bottom-[58.89%] left-[25.65%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[25.84%] w-[8.21%] top-[31.61%] right-[46.12%] bottom-[42.55%] left-[45.67%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[20.43%] w-[14.06%] top-[65.99%] right-[81.1%] bottom-[13.58%] left-[4.84%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[20.19%] w-[18.45%] top-[65.99%] right-[61.53%] bottom-[13.82%] left-[20.02%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[20.07%] w-[15.97%] top-[65.99%] right-[42.63%] bottom-[13.94%] left-[41.39%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[19.95%] w-[15.19%] top-[66.11%] right-[24.63%] bottom-[13.94%] left-[60.18%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[20.19%] w-[18.67%] top-[65.99%] right-[3.49%] bottom-[13.82%] left-[77.84%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[6.73%] w-[9%] top-[69.35%] right-[27.78%] bottom-[23.92%] left-[63.22%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[7.69%] w-[6.19%] top-[70.55%] right-[67.83%] bottom-[21.75%] left-[25.98%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <img
                className="absolute h-[7.57%] w-[6.19%] top-[70.67%] right-[9.67%] bottom-[21.75%] left-[84.14%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/vector@2x.png"
              />
              <div className="absolute h-[18.27%] w-[87.85%] top-[76.92%] left-[7.99%] tracking-[2px] leading-[1.75rem] inline-block">
                WORLD HOSPITAL
              </div>
            </div>
            <img
              className="relative w-[8.5rem] h-[3.81rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/global@2x.png"
            />
            <img
              className="relative w-[7.44rem] h-[3.81rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/hcg@2x.png"
            />
            <img
              className="relative w-[8.13rem] h-[5.81rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/baptist@2x.png"
            />
            <img
              className="relative rounded-[14px] w-[5.5rem] h-[5.56rem] object-cover"
              alt=""
              src="/image-149@2x.png"
            />
          </div>
        </div>
        <h1 className="m-0 absolute top-[3.69rem] left-[calc(50%_-_296px)] text-[2.63rem] leading-[3rem] font-bold font-headdd text-gray-900 text-center">
          Top Hospital we worked With
        </h1>
      </section>
      <section className="absolute top-[76.63rem] left-[calc(50%_-_590px)] w-[73.75rem] flex flex-col items-start justify-start gap-[2.25rem] text-left text-[2rem] text-gray1-300 font-headdd">
        <div className="flex flex-row items-end justify-start gap-[6.63rem]">
          <div className="w-[31.25rem] h-[23.69rem] flex flex-row items-end justify-start">
            <div className="w-[31.25rem] h-[23.69rem] flex flex-col items-start justify-start gap-[1.69rem]">
              <h2 className="m-0 relative text-inherit tracking-[-0.25px] font-bold font-inherit inline-block w-[23.85rem]">
                Our Vision
              </h2>
              <div className="relative text-[1.25rem] leading-[2.38rem] text-slategray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:5] [-webkit-box-orient:vertical] w-[31.25rem]">
                Partnering for Healthier Futures: Mahalakshmi Agencies aspires
                to be the preferred distributor, forging strong partnerships
                with healthcare providers and manufacturers to ensure access to
                cutting-edge medical products.
              </div>
            </div>
          </div>
          <img
            className="relative rounded-xl w-[36.88rem] h-[24.19rem] object-cover"
            alt=""
            src="/image-134@2x.png"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[12.44rem]">
          <img
            className="relative rounded-xl w-[36.25rem] h-[24.13rem] object-cover"
            alt=""
            src="/image-133@2x.png"
          />
          <div className="shrink-0 flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-start justify-start">
              <div className="relative w-[26.5rem] h-[23.69rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[26.5rem] flex flex-row items-end justify-start">
                  <div className="h-[23.69rem] shrink-0 flex flex-col items-start justify-start">
                    <b className="relative tracking-[-0.25px] inline-block w-[23.85rem]">
                      Our Mission
                    </b>
                  </div>
                </div>
                <div className="absolute top-[4.19rem] left-[0rem] text-[1.25rem] leading-[2.38rem] text-slategray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:7] [-webkit-box-orient:vertical] w-[23.65rem]">
                  Building Lasting Partnerships: Mahalakshmi Agencies is
                  committed to establishing enduring partnerships with
                  healthcare providers and manufacturers, fostering
                  collaboration to address evolving healthcare needs and
                  challenges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-[168.69rem] left-[-0.44rem] flex flex-col items-start justify-start gap-[0.63rem] text-left text-dodgerblue-200">
        <div className="relative w-[90.63rem] h-[45.44rem] z-[0]">
          <div className="absolute top-[0rem] left-[calc(50%_-_725px)] bg-ghostwhite w-[90.63rem] h-[45.44rem]" />
          <div className="absolute top-[5.06rem] left-[calc(50%_-_640px)] w-[80rem] h-[32rem] flex flex-row flex-wrap items-center justify-start gap-[1.5rem]">
            <div className="flex flex-col items-center justify-start">
              <img
                className="relative w-[43.35rem] h-[24.23rem] object-cover"
                alt=""
                src="/group-237652@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[3.06rem]">
              <b className="relative inline-block w-[35.13rem]">
                Your Trusted Partner for Exceptional Customer Service and
                Just-in-Time Deliveries
              </b>
              <div className="relative text-[1.31rem] text-slategray [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] w-[33.13rem]">
                At Mahalakshmi Agencies, we specialize in seamless healthcare
                supply. Our commitment to excellence ensures swift and reliable
                delivery, meeting the dynamic demands of the industry with
                precision.
              </div>
              <div
                className="relative w-[10.56rem] h-[3.5rem] overflow-hidden shrink-0 cursor-pointer text-center text-[0.88rem] text-white"
                onClick={onButtonContainerClick}
              >
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-mediumslateblue shadow-[0px_16px_24px_rgba(19,_36,_51,_0.24)]" />
                <div className="absolute top-[calc(50%_-_10px)] left-[24.85%] tracking-[1px] font-extrabold">
                  Contact us
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[6.81rem] left-[6.5rem] w-[39.19rem] h-[32.25rem] object-cover z-[1]"
          alt=""
          src="/group-237653@2x.png"
        />
      </div>
      <div className="absolute top-[141.69rem] left-[5.06rem] w-[85.13rem] overflow-x-auto flex flex-row items-start justify-start gap-[1.69rem] text-left text-[1.13rem]">
        <div className="relative w-[23.88rem] h-[23.53rem] shrink-0">
          <div className="absolute top-[0rem] left-[0rem] bg-white shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[23.88rem] h-[23.53rem]" />
          <div className="absolute top-[1.75rem] left-[1.81rem] flex flex-col items-start justify-start gap-[2.13rem]">
            <img
              className="relative w-[6rem] h-[1rem] object-cover"
              alt=""
              src="/favourite31@2x.png"
            />
            <div className="shrink-0 flex flex-col items-start justify-start gap-[3rem]">
              <div className="relative leading-[1.75rem] inline-block w-[20.31rem]">
                “Your quick response, exceptional communication, and
                consistently reliable supply deliveries have made you a standout
                partner for us. We are genuinely pleased with your company and
                the services you provide.”
              </div>
              <div className="shrink-0 flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
                <img
                  className="relative rounded-[50%] w-[2.69rem] h-[2.69rem] object-cover"
                  alt=""
                  src="/oval@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start gap-[0.13rem]">
                  <b className="relative leading-[1.75rem]">Soni Kumari</b>
                  <div className="relative text-[0.88rem] leading-[1.38rem] text-gray-600">
                    Purchase , Narayan Healthcare.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[23.88rem] h-[23.53rem] shrink-0">
          <div className="absolute top-[0rem] left-[0rem] bg-white shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[23.88rem] h-[23.53rem]" />
          <div className="absolute top-[1.75rem] left-[1.81rem] flex flex-col items-start justify-start gap-[2.13rem]">
            <img
              className="relative w-[6rem] h-[1rem] object-cover"
              alt=""
              src="/favourite31@2x.png"
            />
            <div className="h-[16.75rem] shrink-0 flex flex-col items-start justify-start gap-[7.94rem]">
              <div className="relative leading-[1.75rem] inline-block w-[20.31rem]">{`“Thanks for your quick response, great communication, reliable & efficient supply deliveries every single time.”`}</div>
              <div className="shrink-0 flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
                <img
                  className="relative rounded-[50%] w-[2.69rem] h-[2.69rem] object-cover"
                  alt=""
                  src="/oval@2x.png"
                />
                <div className="shrink-0 flex flex-col items-start justify-start gap-[0.13rem]">
                  <b className="relative leading-[1.75rem]">Dinesh Kumar</b>
                  <div className="relative text-[0.88rem] leading-[1.38rem] text-gray-600">
                    Purchase , Sakra Hospital
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px_42.4px_61.31px_rgba(0,_0,_0,_0.08)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[1.75rem] px-[1.75rem] pb-[2rem]">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[2.56rem]">
            <img
              className="relative w-[6rem] h-[1rem] object-cover"
              alt=""
              src="/favourite31@2x.png"
            />
            <div className="relative leading-[1.75rem] inline-block w-[20.31rem]">
              “Your staff's coordination and assistance with supply have been
              invaluable. The support we've received from your team has been
              outstanding, and we hope it continues as we move forward.”
            </div>
            <div className="shrink-0 flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
              <img
                className="relative rounded-[50%] w-[2.69rem] h-[2.69rem] object-cover"
                alt=""
                src="/oval@2x.png"
              />
              <div className="shrink-0 flex flex-col items-start justify-start gap-[0.13rem]">
                <b className="relative leading-[1.75rem]">Mr. Muktesh</b>
                <div className="relative text-[0.88rem] leading-[1.38rem] text-gray-600">
                  Purchase , Aster CMI Hospital
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[23.88rem] h-[23.63rem] shrink-0">
          <div className="absolute top-[0rem] left-[0rem] bg-white shadow-[0px_42.4px_61.31px_rgba(0,_0,_0,_0.08)] w-[23.88rem] h-[23.63rem]" />
          <div className="absolute top-[1.75rem] left-[1.81rem] h-[19.88rem] flex flex-col items-start justify-start gap-[1.88rem]">
            <img
              className="relative w-[6rem] h-[1rem] object-cover"
              alt=""
              src="/favourite31@2x.png"
            />
            <div className="relative leading-[1.75rem] inline-block w-[20.31rem]">
              <ul className="m-0 font-inherit text-inherit pl-[1.33rem]">
                <li className="mb-[false]">Timely Supply - 5</li>
                <li className="mb-[false]">
                  Suppliers behaviour in observing protocols of hospital- 5
                </li>
                <li className="mb-[false]">
                  Expiry / Breakage / Damage replacement -5
                </li>
                <li>Adherence to specification as per PO- 5”</li>
              </ul>
            </div>
            <div className="shrink-0 flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
              <img
                className="relative rounded-[50%] w-[2.69rem] h-[2.69rem] object-cover"
                alt=""
                src="/oval@2x.png"
              />
              <div className="shrink-0 flex flex-col items-start justify-start gap-[0.13rem]">
                <b className="relative leading-[1.75rem]">Mr. Veeresh</b>
                <div className="relative text-[0.88rem] leading-[1.38rem] text-gray-600">
                  Senior Manager at Aster RV Hospital
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[216.59rem] left-[calc(50%_-_722.1px)] w-[90.31rem] h-[54.63rem]">
        <b className="absolute top-[0rem] left-[calc(50%_-_466.5px)] leading-[3rem]">
          Today's Top Stories: Essential News Highlights
        </b>
        <div className="absolute top-[4.94rem] left-[calc(50%_-_722.5px)] w-[90.31rem] h-[49.69rem] flex flex-row items-start justify-center gap-[2.63rem] text-left text-[1.13rem] text-gray1-200">
          <div className="rounded-31xl bg-whitesmoke w-[39.63rem] h-[48.5rem] flex flex-row items-start justify-center p-[2.56rem] box-border">
            <div className="w-[27.81rem] h-[45.94rem] flex flex-col items-center justify-start gap-[2.88rem]">
              <div className="relative w-[27.72rem] h-[17.81rem]">
                <img
                  className="absolute top-[0rem] left-[0rem] w-[27.72rem] h-[17.81rem] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[14.02rem] left-[0.87rem] w-[14.59rem] h-[3.31rem]">
                  <div className="absolute top-[0rem] left-[7.64rem] rounded-11xl bg-silver [backdrop-filter:blur(4px)] w-[6.95rem] flex flex-row items-center justify-center py-[0.94rem] pr-[3rem] pl-[3.31rem] box-border">
                    <b className="relative capitalize">Operation</b>
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-silver [backdrop-filter:blur(4px)] w-[7.13rem] flex flex-row items-center justify-center py-[0.94rem] pr-[3rem] pl-[3.31rem] box-border">
                    <b className="relative capitalize">Surgical</b>
                  </div>
                </div>
              </div>
              <div className="w-[27.81rem] flex flex-col items-start justify-start gap-[1.13rem] text-gray1-100">
                <div className="w-[27.81rem] flex flex-col items-start justify-start gap-[1.13rem]">
                  <div className="relative leading-[157.4%]">
                    November 15, 2023
                  </div>
                  <div className="relative text-[1.38rem] leading-[123%] font-extrabold text-gray1-200 inline-block w-[28.75rem]">
                    Mahalakshmi Agencies: A Holistic Approach to Combat
                    Antibiotic Resistance with Diverse Healthcare Solutions
                  </div>
                </div>
                <div className="w-[32.13rem] flex flex-col items-start justify-start gap-[2.38rem] text-[1rem]">
                  <div className="relative leading-[157.4%] inline-block w-[25.81rem]">
                    In the relentless struggle against antibiotic resistance,
                    Mahalakshmi Agencies stands as a beacon of innovation and
                    commitment, offering a comprehensive portfolio of healthcare
                    solutions aimed at minimising infections.
                  </div>
                  <b
                    className="relative text-[1.13rem] [text-decoration:underline] text-headingggg cursor-pointer"
                    onClick={onReadMoreTextClick}
                  >
                    Read More
                  </b>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-31xl bg-whitesmoke w-[39.63rem] h-[48.5rem] flex flex-row items-start justify-center pt-[2.56rem] pb-[3.88rem] pr-[2.56rem] pl-[3rem] box-border">
            <div className="w-[28.19rem] h-[45.94rem] flex flex-col items-center justify-start gap-[2.88rem]">
              <div className="relative w-[28.13rem] h-[17.81rem]">
                <img
                  className="absolute top-[0rem] left-[0rem] w-[28.13rem] h-[17.81rem] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="absolute top-[13.86rem] left-[0.88rem] w-[13.42rem] h-[3.31rem]">
                  <div className="absolute top-[0rem] left-[7.06rem] rounded-11xl bg-gray1-800 [backdrop-filter:blur(4px)] w-[6.36rem] flex flex-row items-center justify-center py-[0.94rem] pr-[3rem] pl-[3.31rem] box-border">
                    <b className="relative capitalize">Analysis</b>
                  </div>
                  <div className="absolute top-[0rem] left-[0rem] rounded-11xl bg-gray1-800 [backdrop-filter:blur(4px)] w-[6.53rem] flex flex-row items-center justify-center py-[0.94rem] pr-[3rem] pl-[3.31rem] box-border">
                    <b className="relative capitalize">Bbraun</b>
                  </div>
                </div>
              </div>
              <div className="w-[27.94rem] flex flex-col items-start justify-start gap-[1.13rem] text-gray1-100">
                <div className="w-[28.75rem] flex flex-col items-start justify-start gap-[1.13rem]">
                  <div className="relative leading-[157.4%]">
                    December 02, 2023
                  </div>
                  <div className="relative text-[1.38rem] leading-[123%] font-extrabold text-gray1-200 inline-block w-[26.75rem]">
                    Innovating Patient Care: Unveiling B Braun's Cutting-Edge
                    Infusion Solutions
                  </div>
                </div>
                <div className="w-[27.94rem] h-[14.69rem] flex flex-col items-start justify-start gap-[6.88rem] text-[1rem] font-inter-semi-bold-16">
                  <div className="relative leading-[154%] inline-block w-[27.94rem]">
                    In the dynamic realm of healthcare, infusion therapy plays a
                    pivotal role in patient care, and no name resonates more
                    profoundly than B Braun.
                  </div>
                  <b
                    className="relative text-[1.13rem] [text-decoration:underline] font-headdd text-headingggg cursor-pointer"
                    onClick={onReadMoreText1Click}
                  >
                    Read More
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
