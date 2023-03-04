import Navbar from '@/Components/Navbar'
import PostCard from '@/Components/PostCard'
import PostComment from '@/Components/PostComment'
import Card from '@/Layouts/Card'
import React from 'react'

const Post = () => {
  return (
    <div className="font-nunito min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex justify-center">
        <div className="w-full shrink lg:w-1/2">
          <PostCard />
          <PostComment />
        </div>
      </div>
    </div>
  )
}

export default Post
