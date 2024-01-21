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

      <Link href="/">
        <button
          className="absolute mt-4 ml-4 bg-transparent border border-[#FF005C] hover:bg-[#ff2775]
              py-2 px-6 text-[#FF005C] hover:text-white rounded-full
              transition duration-300 ease-in-out"
          type="button"
        >
          Go back to homepage
        </button>
      </Link>

      <div className="flex flex-col items-center">
        <div className="relative">
          <Image src={HappyFundsWithText} alt="HappyFunds" width={500} className="mx-auto my-10" />
        </div>
        <div className="text-[#FF005C] text-5xl my-6">Who We Are?</div>
        <div className="flex justify-between w-4/6 mx-auto">
          <div className="flex flex-col items-center">
            <Image src={garvit} alt="Garvit Jain" width={200} height={200} />
            <div className="text-[#ff005c] text-xl mt-2">Garvit Jain</div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={shadab} alt="Md Shadab Kalim" width={200} height={200} />
            <div className="text-[#ff005c] text-xl mt-2">Md Shadab Kalim</div>
          </div>
          <div className="flex flex-col items-center">
            <Image src={edson} alt="Edson George Rebello" width={200} height={200} />
            <div className="text-[#ff005c] text-xl mt-2">Edson George Rebello</div>
          </div>
        </div>
        <div className="text-center mx-auto w-7/12 text-black mt-12 text-3xl leading-10">
          We are a group of engineers working together for the betterment of the Society. We Prepare
          Web3 Solutions for Daily Problems. Garvit is Highly Proficient in Figma, while Edson and
          Shadab are Full Stack Developers at esteemed DogeCapital Company
        </div>
      </div>
    </div>
  )
}
export default whoweare
