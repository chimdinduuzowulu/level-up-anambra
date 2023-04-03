import React from 'react';
import image7 from './assets/images/7.png';
import heroBg from './assets/images/heroBg.jpeg';
import levelupVideo from './assets/videos/MOUSigning.mov';
import regions from './assets/images/5.png';
import three from './assets/images/3.png';
import two from './assets/images/2.png';
import one from './assets/images/1.png';
import four from './assets/images/4.png';
import six from './assets/images/6.png';
import Microsoft from './assets/images/Microsoft.jpeg';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';

function Home() {
  return (
    <>
      {/* <!-- hero section --> */}
      <div
        className='h-[722px] bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className='w-full h-full bg-[rgba(53,88,61,0.85)]'>
          <header className='absolute inset-x-0 top-0 z-50 h-auto'>
            <nav className='grid place-content-left' aria-label='Global'>
              <div className='flex lg:flex-1 h-[auto]'>
                <a href='#' className=''>
                  <img
                    className='h-[175px] w-[auto]'
                    src={image7}
                    alt='logo missing'
                  />
                </a>
              </div>
            </nav>
          </header>
          <div className='relative isolate px-6 pt-[4] lg:px-8 grid place-content-center w-full h-full'>
            <div className='mx-auto max-w-6xl py-12 sm:py-48 lg:py-16'>
              <div className='text-center text-white'>
                <h1 className='my-[23px] text-[29.1161px] leading-[40.7625px] font-bold tracking-tight text-white sm:text-[29.1161px] text-center tracking-normal'>
                  LEVELUP ANAMBRA
                </h1>
                <h1 className="text-2xl font-light tracking-wider text-[#ffffff] sm:text-[51.9454px] leading-[72.7235px] text-center tracking-normal font-['Urbanist', sans-serif] font-light">
                  Digital Entrepreneurship Training for 20,000 ​Anambra Youths
                </h1>
                <div className='mt-16 flex items-center justify-center gap-x-6'>
                  <a
                    href='https://innovation.anambrastate.gov.ng/page/digital-skills-training-registration'
                    target='_blank'
                    className="w-[245px] text-[29.1161px] leading-[40.7625px] text-center font-semibold tracking-normal text-[#215925] bg-white rounded-lg px-[21px] py-[14px] uppercase font-['Urbanist', sans-serif]"
                  >
                    Apply Here <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- stats --> */}
      <div className='w-[100%] lg:w-[85%] h-auto lg:h-[250px] bg-[rgb(33,89,37)] m-auto lg:relative lg:mt-[-75px] grid lg:grid-cols-4 gap-1 lg:gap-4 place-content-center'>
        <div className='col1 grid grid-rows-2 gap-6 place-content-center py-4'>
          <h1 className='text-[49.2442px] leading-[68.9419px] text-center tracking-normal font-bold text-white'>
            <CountUp
              start={0}
              end={14000}
              duration={2.75}
              separator=', '
              // decimals={4}
              decimal=','
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <div>
                    <span ref={countUpRef} />
                    <sup>+</sup>{' '}
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <p className="text-[25.5064px] text-white leading-[35.7089px] text-center tracking-normal font-['Urbanist', sans-serif] font-light">
            Applications received
          </p>
        </div>
        <div className='col1 grid grid-rows-2 gap-6 place-content-center p-4'>
          <h1 className='text-[49.2442px] leading-[68.9419px] text-center tracking-normal font-bold text-white'>
            <CountUp
              start={0}
              end={1}
              duration={8.75}
              separator=', '
              // decimals={4}
              decimal=','
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <div>
                    <span ref={countUpRef} />
                    <sup></sup>{' '}
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <p className="text-[25.5064px] text-white leading-[35.7089px] text-center tracking-normal font-['Urbanist', sans-serif] font-light">
            State
          </p>
        </div>
        <div className='col1 grid grid-rows-2 gap-6 place-content-center p-4'>
          <h1 className='text-[49.2442px] leading-[68.9419px] text-center tracking-normal font-bold text-white'>
            <CountUp
              start={0}
              end={21}
              duration={3.75}
              separator=', '
              // decimals={4}
              decimal=','
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <div>
                    <span ref={countUpRef} />
                    <sup></sup>{' '}
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <p className="text-[25.5064px] text-white leading-[35.7089px] text-center tracking-normal font-['Urbanist', sans-serif] font-light">
            Zones
          </p>
        </div>
        <div className='col1 grid grid-rows-2 gap-6 place-content-center py-4'>
          <h1 className='text-[49.2442px] leading-[68.9419px] text-center tracking-normal font-light text-white'>
            <CountUp
              start={0}
              end={2}
              duration={5.75}
              separator=', '
              // decimals={4}
              decimal=','
            >
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <div>
                    <span ref={countUpRef} />
                    <sup></sup>{' '}
                  </div>
                </VisibilitySensor>
              )}
            </CountUp>
          </h1>
          <p className="text-[25.5064px] text-white leading-[35.7089px] text-center tracking-normal font-['Urbanist', sans-serif] font-light">
            Weeks virtual training
          </p>
        </div>
      </div>
      {/* <!-- video section --> */}
      <div className='w-full sm:h-auto sm:my-[23px] lg:m-auto lg:h-[690px] grid grid-rows-1 lg:grid-cols-2 place-content-center lg:gap-4 font-light'>
        <div className='lg:h-[556px] grid place-content-center gap-4 mx-[25px] px-[20px]'>
          <p className="text-[29.985px] leading-[41.979px] text-justify tracking-normal my-4 font-['Urbanist', sans-serif]">
            About LevelUp Anambra
          </p>
          <p className="text-[24.9878px] leading-[40px] lg:leading-[34.983px] sm:tracking-wide lg:tracking-wider text-start lg:text-justify font-['Urbanist', sans-serif]">
            LevelUp Anambra is designed to equip 20,000 ​youths in Anambra State
            with digital ​entrepreneurship skills in recognition of the
            ​shortfalls in digital skills for employment and other ​livelihood
            opportunities.
          </p>
          <p className="mt-[24px] lg:mt-0 text-[24.9878px] leading-[34.983px] text-start lg:text-justify tracking-wide font-['Urbanist', sans-serif]">
            The “Level Up Anambra” Initiative will be ​implemented virtually in
            cohorts. Each cohort will ​undergo 2-3 weeks of intensive hands-on
            training ​in the following courses; Web Design, Digital and ​Media
            Marketing, Graphics Design, Productivity ​Tools for Office
            Administration and ​Entrepreneurship.
          </p>
        </div>
        {/* <!--  --> */}
        <div className='h-auto lg:h-[556px] grid place-content-center lg:gap-4 lg:mx-[25px] px-[20px] my-12 lg:my-2'>
          <p className="text-[20.1909px] leading-[28.2673px] text-center tracking-wide mt-4 font-['Urbanist', sans-serif]">
            The signing of MoU and Launch Event with the ​Anambra State
            Government
          </p>
          <p className='text-[24.9878px] leading-[34.983px] tracking-normal text-justify sm:h-auto sm:mt-6 mt-4 lg:h-[420px]'>
            <video
              className='h-full'
              src={levelupVideo}
              controls
              autoPlay
            ></video>
          </p>
        </div>
      </div>
      {/* <!--  --> */}
      <div className='w-full mt-[60px] lg:grid lg:place-content-center sm:grid-rows-1 lg:grid-cols-2 gap-4 sm:h-auto lg:h-[497px] font-light lg:my-[35px]'>
        <div className="grid place-content-center text-[24.9878px] leading-[34.983px] text-center tracking-wide px-6 font-['Urbanist', sans-serif]">
          LevelUp Anambra Program will target youth across all ​three senatorial
          zones; Anambra North, Central and ​South
        </div>
        <div className='grid place-content-center'>
          <img src={regions} alt='Anambra regions missing' srcSet='' />
        </div>
      </div>
      {/* <!--  --> */}
      <div className='w-[98%] grid grid-rows-1 lg:w-[94%] m-auto p-6 gap-4 font-font'>
        <h1 className="text-[47.1034px] leading-[65.9447px] text-center tracking-wide font-['Urbanist', sans-serif] font-light">
          We support digital <br />
          ​entrepreneurs
        </h1>
        <p className="text-[19.2596px] leading-[29.9634px] text-center tracking-wide font-['Urbanist', sans-serif] font-light lg:px-12">
          LevelUp Anambra gives Nigerian youth the needed leverage to excel with
          our specially designed curriculum to help ​new digital entrepreneurs
          find their footing and grow in Nigeria’s socio-economic terrain.
        </p>
        <div className='grid place-content-center lg:grid-cols-3 gap-4 p-6'>
          <div className='grid place-content-center gap-4'>
            <img src={three} alt='not found' srcSet='' />
            <h1 className='text-[31.7532px] leading-[44.4545px] text-center tracking-wide font-bold'>
              Training
            </h1>
            <p className="text-[19.2406px] leading-[26.9368px] text-center tracking-wide font-['Urbanist', sans-serif] font-light">
              Our curriculum is designed to help you build ​marketable skills
              required in the digital ​economy
            </p>
          </div>
          <div className='grid place-content-center gap-4'>
            <img src={two} alt='not found' srcSet='' />
            <h1 className='text-[31.7532px] leading-[44.4545px] text-center tracking-wide font-bold'>
              Certification
            </h1>
            <p className="text-[19.2406px] leading-[26.9368px] text-center tracking-normal font-['Urbanist', sans-serif] font-light">
              Access to a Certification of Completion ​accredited by Microsoft
              and Wootlab to boost your profile.
            </p>
          </div>
          <div className='grid place-content-center gap-4'>
            <img src={one} alt='not found' srcSet='' />
            <h1 className='text-[31.7532px] leading-[44.4545px] text-center tracking-normal font-bold'>
              Mentorship
            </h1>
            <p className="text-[19.2406px] leading-[26.9368px] text-center tracking-normal font-['Urbanist', sans-serif] font-light">
              Access to a pool of mentors and business ​experts to provide
              necessary business and ​career mentorship.
            </p>
          </div>
        </div>
        <h1 className='min-w-[60%] lg:min-w-[40%] m-auto bg-[rgb(33,89,37)] rounded-2xl leading-[44.4545px] text-white text-center text-[20px] lg:text-[31.7532px] p-6 px-8 mt-4'>
          <a
            href='https://wootlabacademy.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:cursor-pointer'
          >
            Access our online courses here
          </a>
        </h1>
      </div>
      {/* <!-- Partners --> */}
      <div className='w-full flex flex-wrap justify-center items-center mt-16 lg:grid place-content-center lg:grid-rows-1 lg:gap-4 lg:w-[70%] m-auto lg:mt-[210px] font-bold'>
        <h1 className='text-[31.7532px] leading-[44.4545px] text-center tracking-wide'>
          Our Partners
        </h1>
        <div className='flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:place-content-center'>
          <img src={four} alt='' className='h-[150px] lg:h-[320px]' />
          <img src={six} alt='missing' className='h-[150px] lg:h-[320px]' />
          <img
            src={Microsoft}
            alt='missing'
            className='h-[150px] lg:h-[320px] w-auto'
          />
        </div>
      </div>
      {/* <!-- footer --> */}
      <div className='w-full bg-black h-[70px] text-[13px] leading-[normal] text-center tracking-wide text-white grid place-content-center'>
        wootlab inovations @ copyright 2023
      </div>
    </>
  );
}

export default Home;
