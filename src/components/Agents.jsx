import React from 'react'
import {Link} from 'react-router-dom'  

const Agents = () => {
  return (
    <div>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
        Our team members
      </h2>
      <p className="mt-5 text-lg font-normal text-pink-600 font-pj">
        People who made us successful
      </p>
    </div>
    <div className="grid grid-cols-1 px-12 mx-auto mt-12 lg:max-w-4xl xl:max-w-5xl sm:px-0 sm:mt-16 sm:grid-cols-3 sm:gap-x-16 gap-y-12 sm:gap-x-8 xl:gap-x-36">
      <div>
        <img
          className="object-cover w-full h-60 lg:h-80 rounded-xl"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/2/team-member-1.png"
          alt=""
        />
        <p className="mt-5 text-lg font-bold text-gray-900 sm:mt-10 font-pj">
          Albert Flores
        </p>
        <p className="mt-2 text-base font-normal text-gray-600 font-pj">
          Co founder, Chairman, Executive Director
        </p>
      </div>
      <div>
        <img
          className="object-cover w-full h-60 lg:h-80 rounded-xl"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/2/team-member-2.png"
          alt=""
        />
        <p className="mt-5 text-lg font-bold text-gray-900 sm:mt-10 font-pj">
          Kathryn Murphy
        </p>
        <p className="mt-2 text-base font-normal text-gray-600 font-pj">
          Co founder, Chairman, Executive Director
        </p>
      </div>
      <div>
        <img
          className="object-cover w-full h-60 lg:h-80 rounded-xl"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/team/2/team-member-3.png"
          alt=""
        />
        <p className="mt-5 text-lg font-bold text-gray-900 sm:mt-10 font-pj">
          Jane Cooper
        </p>
        <p className="mt-2 text-base font-normal text-gray-600 font-pj">
          Co founder, Chairman, Executive Director
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Agents
