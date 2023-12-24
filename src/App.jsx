import { useRef, useState } from 'react'
import './App.css'
import { Carousel } from 'flowbite-react'
import Typewriter from '../src/hooks/useTypeWriter'

function App() {
  const [slideIndex, setSlideIndex] = useState(0)
  const mainRef = useRef();
  const item1 = useRef();
  const item2 = useRef();
  
  const item3 = useRef();

  const onSlideChange = (index) => {
    setSlideIndex(index)
    if (index == 0) {
      mainRef.current.style.backgroundColor = 'rgb(0, 128, 254, 0.7)'
    } else if (index == 1) {
      mainRef.current.style.backgroundColor = 'rgb(280, 100, 50, 0.7)'
    } else if (index == 2) {
      mainRef.current.style.backgroundColor = 'rgb(11, 169, 11, 0.7)'
    }
  }

  return (
    <>
      <div ref={mainRef} className="main-outer z-0">
        <div className="companyName absolute md:top-20 top-20 md:right-10 right-5 md:text-4xl text-2xl z-30">
          <a className='companyName' href="https://fivehundred.com.au/" target="_blank">Five Hundred Monkeys Pty Ltd</a>
        </div>
        {/* -------- laptop -----   */}
        <div class="relative mx-auto border-gray-800  border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px] z-30">
          <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] ">
            {/* -------- carousel -----   */}
            <div className="h-[156px] md:h-[278px] w-[290px] md:w-[499px]">
              <Carousel slideInterval={4000} indicators={false} onSlideChange={(index) => onSlideChange(index)}>
                <div ref={item1} className="flex items h-full items-center justify-center  text-white md:text-[45px] text-[25px]" style={{ backgroundColor: 'rgb(0, 128, 254, 0.7)' }}>
                  {slideIndex == 0 && <Typewriter text="Wee Listen" />}
                </div>
                <div ref={item2} className="flex items h-full items-center justify-center  text-white md:text-[45px] text-[25px]" style={{ backgroundColor: 'rgb(280, 100, 50, 0.7)' }}>
                  {slideIndex == 1 && <Typewriter text="Wee Build & Implement" />}
                </div>
                <div ref={item3} className="flex items h-full items-center justify-center  text-white md:text-[45px] text-[25px]" style={{ backgroundColor: 'rgb(11, 169, 11, 0.7)' }}>
                  {slideIndex == 2 && <Typewriter text="Wee Achieve Results" />}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="relative mx-auto bg-zinc-300  rounded-b-xl rounded-t-sm h-[17px] md:h-[21px]  w-[350px] md:w-[600px] z-30">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
        {/* -------- Contact Us -----   */}
        <button className='contact-btn md:bottom-20 bottom-40 md:text-2xl text-xl'>
          <a href="mailto:info@fivehundred.com.au">Contact Us</a>
          <span class="first"></span>
          <span class="second"></span>
          <span class="third"></span>
          <span class="fourth"></span>
        </button>
      </div>
    </>
  )
}

export default App
