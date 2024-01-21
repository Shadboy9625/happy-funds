import Head from 'next/head'
import Image from 'next/image'
import HappyFundsWithText from '@/public/HappyFundsWithText.svg'
import shadab from '@/public/shadab.png'
import garvit from '@/public/garvit.png'
import edson from '@/public/edson.png'
import Link from 'next/link'

const whoweare = () => {
  return (
    <div>
      <Head>
        <title>Happy Funds - Who We Are?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center sm:flex-row sm:items-start">
        <div className="m-4">
          <Link href="/">
            <button
              className="bg-transparent border border-[#FF005C] hover:bg-[#ff2775]
                    py-2 px-6 text-[#FF005C] hover:text-white rounded-full
                    transition duration-300 ease-in-out"
              type="button"
            >
              Homepage
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image src={HappyFundsWithText} alt="HappyFunds" width={450} className="mx-auto my-5" />
          </div>
          <br />
          <br />
          <div className="sm:flex-col md:flex-row flex justify-between w-full sm:w-4/6 mx-auto">
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <Image src={garvit} alt="Garvit Jain" width={188} height={188} />
              <div className="text-[#ff005c] text-xl mt-2">Garvit Jain</div>
            </div>
            <div className="flex flex-col items-center mb-4 sm:mb-0">
              <Image src={edson} alt="Edson George Rebello" width={188} height={188} />
              <div className="text-[#ff005c] text-xl mt-2">Edson George Rebello</div>
            </div>
            <div className="flex flex-col items-center">
              <Image src={shadab} alt="Md Shadab Kalim" width={188} height={188} />
              <div className="text-[#ff005c] text-xl mt-2">Md Shadab Kalim</div>
            </div>
          </div>
          <div className="text-center mx-auto w-full sm:w-7/12 text-gray-700 mt-12 text-2xl leading-10">
            We are a group of engineers working together for the betterment of the Society. We
            Prepare Web3 Solutions for Daily Problems. Garvit is Highly Proficient in Figma, while
            Edson and Shadab are Full Stack Developers at DogeCapital
          </div>
        </div>
      </div>
    </div>
  )
}
export default whoweare
