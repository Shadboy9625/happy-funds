import Head from 'next/head'
import HappyFundsWithText from '@/public/HappyFundsWithText.svg'
import Image from 'next/image'
import Hardhat from '@/public/hardhat.png'
import NextJs from '@/public/nextjs.png'
import Polygon from '@/public/polygon.png'
import Replit from '@/public/replit.png'
import Solidity from '@/public/solidity.png'
import Ethers from '@/public/ethers.svg'
import Ethereum from '@/public/ethereum.png'
import Link from 'next/link'

const techused = () => {
  return (
    <div>
      <Head>
        <title>Happy Funds - How It Works?</title>
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
        <div className="flex flex-row">
          <Image src={HappyFundsWithText} alt="HappyFunds" width={500} className="mx-auto my-10" />
        </div>
        <div className="text-[#FF005C] text-5xl my-8">Technologies We Used</div>
        <div className="w-full grid grid-cols-2 gap-4 justify-items-center">
          <Image src={Polygon} alt="Polygon" width={280} className="m-2" />
          <Image src={Ethereum} alt="Ethereum" width={280} className="m-2" />
          <Image src={NextJs} alt="NextJs" width={240} className="m-2" />
          <Image src={Replit} alt="Replit" width={240} className="m-2" />
          <Image src={Hardhat} alt="Hardhat" width={220} className="m-2" />
          <Image src={Ethers} alt="Ethers" width={220} className="m-2" />
        </div>
      </div>
    </div>
  )
}
export default techused