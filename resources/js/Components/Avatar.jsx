import React from 'react'

const Avatar = (props) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="avatar btn btn-circle">
        <div className="w-15 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1601412349797-2383bac9c6f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="text-bold text-slate-900">{props.username}</p>
      </div>
    </div>
  )
}

export default Avatar
