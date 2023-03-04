import Navbar from '@/Components/Navbar'
import Navigation from '@/Components/Navigation'
import PostCard from '@/Components/PostCard'
import PostForm from '@/Components/PostForm'
import Card from '@/Layouts/Card'
import React from 'react'

const Posts = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-nunito">
      <Navbar />
      <div className="flex justify-center gap-8">
        <div className="hidden lg:block w-1/5">
          <Navigation />
        </div>
        <div className="w-full shrink lg:w-1/2">
          <PostForm />
          <PostCard />
        </div>
      </div>
    </div>
  )
}

export default Posts
