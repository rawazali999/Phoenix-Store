import { React } from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../app/slices/cartSlice";

export default function CartQuantity(props) {
  const dispatch = useDispatch();

  return (
    <div className="w-32 ">
      <div className="flex flex-row h-10 w-full rounded-lg relative   mt-1">
        <button
          // onClick={() => dispatch(decrement())}
          onClick={() => dispatch(decrementQuantity(props.id))}
          className=" bg-gray-300 text-black hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>

        <span
          className=" px-2 focus:outline-none text-center  bg-gray-300 font-semibold text-md text-black focus:text-black   flex items-center  outline-none"
          name="custom-input-number"
        >
         { props.quantity }
        </span>
        <button
          // onClick={() => dispatch(increment())}
          onClick={() => dispatch(incrementQuantity(props.id))}
          className="bg-gray-300 text-black  hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
