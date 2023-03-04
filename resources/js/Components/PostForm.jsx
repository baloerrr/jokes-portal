import Card from '@/Layouts/Card'
import React from 'react'
import Avatar from './Avatar'
import ModalForm from './ModalForm'

const PostForm = () => {
  return (
    <Card>
      <div className="flex gap-2">
        <div>
          <Avatar />
        </div>
        <div className="w-full relative">
          <input
            type="text"
            className="w-full rounded-full"
            placeholder="Keluarkan Jokes terbaik kalian😎"
          />
          <label
            htmlFor="my-modal-3"
            className="btn w-full border-none absolute left-1 p-3 hover:bg-transparent bg-transparent "
          ></label>
          <ModalForm />-
        </div>
      </div>
      <div className="flex gap-3 py-2 justify-between items-center">
        <div className="inline-flex justify-center p-2 text-gray-500 rounded-full cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
          <input className="hidden" type="file" id="file" />
          <label htmlFor="file" className="cursor-pointer">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </label>
        </div>
      </div>
    </Card>
  )
}

export default PostForm
