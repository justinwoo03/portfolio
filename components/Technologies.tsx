import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';

const Technologies = () => {
  return (
    <div className="pt-10 pb-20 ">
        <h1 className="heading">
            My Skills and{" "}
            <span className="text-purple">Technologies</span>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine />
                </div>
            </div>
        </h1>
    </div>
  )
}

export default Technologies