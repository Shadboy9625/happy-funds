import React, { ChangeEvent, FormEvent, useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { CharityStruct, DonorParams } from '@/utils/type.dt'
import { useAccount } from 'wagmi'
import { toast } from 'react-toastify'

const Donor: React.FC<{ charity: CharityStruct }> = ({ charity }) => {
  const donorsModal = 'scale-0'

  const { address } = useAccount()
  const [donor, setDonor] = useState<DonorParams>({
    id: charity.id,
    fullname: '',
    comment: '',
    amount: '',
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!donor.amount || !donor.comment) return

    if (!address) return toast.warning('Connect wallet first!')

    await toast.promise(
      new Promise<void>((resolve, reject) => {
        console.log(donor)
        resolve()
      }),
      {
        pending: 'Approve transaction...',
        success: 'Donotion received successfully 👌',
        error: 'Encountered error 🤯',
      }
    )
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDonor((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setDonor({
      id: charity.id,
      fullname: '',
      comment: '',
      amount: '',
    })
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
    bg-black bg-opacity-50 transform z-[3000] transition-transform duration-300 ${donorsModal}`}
    >
      <div className="bg-white shadow-lg shadow-slate-900 rounded-xl w-11/12 md:w-1/5 h-7/12 p-6">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between items-center">
            <p className="font-medium text-2xl">Support Us</p>
            <button type="button" className="border-0 bg-transparent focus:outline-none">
              <TfiClose className="text-black" />
            </button>
          </div>

          <div
            className="flex justify-between items-center rounded-xl p-2 w-full
          border border-gray-300 mt-5"
          >
            <input
              className="block w-full text-sm text-slate-500 bg-transparent
              border-0 focus:outline-none focus:ring-0"
              type="text"
              name="fullname"
              placeholder="Your Name (Optional)"
              value={donor.fullname}
              onChange={handleChange}
            />
          </div>

          <div
            className="flex justify-between items-center rounded-xl p-2 w-full
          border border-gray-300 mt-5"
          >
            <input
              className="block w-full text-sm text-slate-500 bg-transparent
              border-0 focus:outline-none focus:ring-0"
              type="text"
              name="comment"
              placeholder="Words of support"
              required
              value={donor.comment}
              onChange={handleChange}
            />
          </div>

          <div
            className="flex justify-between items-center rounded-xl p-2 w-full
          border border-gray-300 mt-5"
          >
            <input
              className="block w-full text-sm text-slate-500 bg-transparent
              border-0 focus:outline-none focus:ring-0"
              type="number"
              step={0.01}
              min={0.01}
              name="amount"
              placeholder="Amount e.g. 0.02 ETH"
              required
              value={donor.amount}
              onChange={handleChange}
            />
          </div>

          <div className="mx-auto">
            <button
              type="submit"
              className="flex flex-row justify-center items-center w-full text-black text-md
            bg-[#ffe700] py-3 px-20 rounded-full drop-shadow-xl border font-medium
            focus:outline-none focus:ring transition-all duration-300 ease-in-out
            hover:bg-[#fff600]"
            >
              Donate Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Donor