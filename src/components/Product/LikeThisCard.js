import React from "react";
import { delimiter } from "../../utilities/delimiter";
export default function LikeThisCard(props) {
  return (
    <>
      <div className="group relative px-8 shadow dark:text-gray-100 ">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-inherit group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={props.product.image}
            alt={props.product.title}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 dark:text-gray-100">
              <a href='/'>
                <span aria-hidden="true" className="absolute inset-0" />
                {delimiter(props.product.title,16)}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">{props.product.category}</p>
          </div>
          <p className="text-lg font-medium text-gray-900 dark:text-gray-50">${props.product.price}</p>
        </div>
      </div>
    </>
  );
}
