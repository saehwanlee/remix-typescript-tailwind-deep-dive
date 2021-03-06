import { useState } from "react";

import RateComponent from "./RateComponent";

interface IRatingComponent {
  onSubmit: (arg0: number | undefined) => void;
}

const RatingComponent = ({ onSubmit }: IRatingComponent) => {
  const [activeRating, setActiveRating] = useState<number>();

  return (
    <>
      <div className="bg-darkBlue rounded-full p-4 w-12 h-12">
        <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            className="absolute"
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>

      <h1 className="font-bold text-white text-3xl font-overpass mt-10 mb-4">
        How did we do?
      </h1>
      <p className="text-lightGrey font-normal">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="flex flex-row justify-between mt-6 flex-wrap">
        {[...Array(5)].map((_item, index) => {
          return (
            <RateComponent
              key={index}
              keyValue={index}
              content={String(index + 1)}
              isActive={activeRating === index + 1}
              onClick={() => {
                setActiveRating(index + 1);
              }}
            />
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-8 w-full text-white font-bold bg-orange rounded-3xl p-3 uppercase tracking-widest hover:bg-white hover:text-orange"
        onClick={() => onSubmit(activeRating)}
      >
        Submit
      </button>
    </>
  );
};

export default RatingComponent;
