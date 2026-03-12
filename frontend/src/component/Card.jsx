import React from 'react';
import Freebook from './Freebook';
function Card({ item }) {
  if (!item) return null;

  return (
    <div className="px-3 py-4 dark:bg-slate-900 dark:text-white">
      
      <div className="card bg-base-100 
                w-full h-full
                shadow-md 
                hover:shadow-2xl 
                hover:-translate-y-2 
                transition-all duration-300 
                rounded-2xl overflow-hidden flex flex-col dark:bg-slate-900 dark:text-white ">

        {/* Image */}
        <figure className="h-[200px] w-full overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
      </figure>

        <div className="card-body p-4 flex flex-col justify-between flex-grow">
          {/* Title */}
                <h2 className="text-lg font-semibold break-words ">
                {item.name}
               
            <div className="mt-1">
    <span className="badge badge-secondary text-xs px-2 py-1 whitespace-nowrap">
      {item.category}
    </span>
  </div>
          </h2>

          {/* Description */}
          <p className="text-sm  line-clamp-2 min-h-[40px]">
            {item.title}
          </p>

          {/* Price + Button */}
          <div className="card-actions justify-between items-center mt-3">
            
            <div className="badge badge-outline font-semibold">
              ${item.price}
            </div>

            <button className="px-3 py-1 text-sm rounded-lg border border-pink-500 text-pink-500 
                               hover:bg-pink-500 hover:text-white transition duration-300">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Card; 
