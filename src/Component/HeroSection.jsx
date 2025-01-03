import SocialLinks from './SocialLinks'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import Img from "../assets/Img.jpg"

const HeroSection = () => {
  return (
    <div>
      <section className='h-full my-10'>
        <div className='container mx-auto h-full flex flex-col xl:flex-row items-center justify-around xl:pt-8 xl:pb-24'>
          <div className='text-center sm:max-w-[600px] xl:text-left order-2 '>
            <span className='text-xl py-2'>Software Developer </span> <span className='text-gray-400 text-base'>UI/UX Enthusiast</span>
            <h1 className='mb-6 sm:tracking-[13px] text-4xl sm:text-6xl'>
              Hello, I am <br />
              <span className='text-[#00FF99]'>Sheikh Shanto.</span>
            </h1>
            <p className='w-[90%] mx-auto  sm:mx-0 tracking-[0px] leading-6  text-justify mb-9 text-sm sm:text-[22px]'>
              Hi, I'm  Shanto, a frontend developer skilled in HTML, CSS,Tailwind css, Bootstrap Css,JavaScript,TypeScript, and React.js. I create responsive, user-friendly websites with a focus on clean design and functionality.
              With experience in Tailwind CSS, Material UI, and Bootstrap, I build interfaces that look great and work seamlessly.
            </p>

            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Link to={"https://drive.google.com/file/d/1jB0Iqdy4BvF8tBTCzSOvhsJUOEJR91kO/view?usp=sharing"} >

                <button className='rounded-full uppercase tracking-[0.5px] sm:tracking-tighter font-bold transition duration-700 border-2 hover:border-[white] hover:bg-[#00FF99] hover:text-blue-900   border-[#00FF99]  text-accent px-8 h-[56px]  '>
                  Download CV <span className='mx-2 p-1'>╰┈➤</span>
                </button>
              </Link>
              <SocialLinks />
            </div>
          </div>

          <div className='mb-4 sm:mb-0  py-0 xl:mb-0'>
            <div className='w-full h-[90%] relative'>
              {/*  Image */}
              <div className='w-[300px] h-[298px]  sm:w-[510px] sm:h-[600px] mix-blend-lighten absolute'>
                <img
                  src={Img}
                  alt='My Image'
                  className=' w-[290px] h-[280px] sm:w-[470px] mx-auto my-3 sm:my-4 rounded-full sm:h-[470px]'
                  style={{ position: 'absolute', inset: 0 }}
                />
              </div>

              {/* Circle SVG  */}
              <svg
                className='w-[300px]  sm:w-[510px] h-[300px] sm:h-[500px]'
                fill='transparent'
                viewBox='0 0 506 506'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx={253}
                  cy={253}
                  r={250}
                  stroke='#00ff99'
                  strokeWidth={4}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeDasharray='8.63522 163.0896 49.03879 41.31342'
                  style={{
                    transform: 'rotate(332.176deg)',
                    transformOrigin: '253px 253px'
                  }}
                />
              </svg>
            </div>
          </div>
        </div>

        <section className='pt-4 mx-[30px] flex  pb-12 xl:pt-0 xl:pb-0'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
              <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                <span className='text-3xl sm:text-4xl lg:text-6xl font-extrabold'>
                  <CountUp enableScrollSpy={true} delay={1} end={1} />
                </span>
                <p className='max-w-[150px] leading-snug text-white/80 text-sm sm:text-base'>
                  Years of experience
                </p>
              </div>
              <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                <span className='text-3xl sm:text-4xl lg:text-6xl font-extrabold'>
                  <CountUp enableScrollSpy={true} delay={1} end={15} />
                  <span>+</span>{' '}
                </span>
                <p className='max-w-[150px] leading-snug text-white/80 text-sm sm:text-base'>
                  Projects completed
                </p>
              </div>
              <div className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                <span className='text-3xl sm:text-4xl lg:text-6xl font-extrabold  '>
                  <CountUp enableScrollSpy={true} delay={1} end={100} />{' '}
                </span>
                <span className='text-2xl'>+</span>
                <p className='max-w-[150px] leading-snug text-white/80 text-sm sm:text-base'>
                  Problems Solved
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default HeroSection
