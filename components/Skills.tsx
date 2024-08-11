import React from 'react'

const Skills = ({ skill, percent, sub }: { skill: string; percent: string; sub?: string }) => {
    return (
        <div className='w-full flex flex-col gap-1 bg-gradient-to-r from-black-1 p-2 to-black-6/10 rounded-2xl'>
            <p className='text-white-3 mb-1 font-bold'>{percent}</p>
            <h1 className='font-24 text-18 font-extrabold tracking-wider'>{skill}</h1>
            {sub && (
                <p className='text-white-3'>{sub}</p>
            )}
        </div>
    )
}

export default Skills