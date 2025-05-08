import { FaChevronCircleLeft } from "react-icons/fa";
export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 left-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <button className="bg-(--mainColor) cursor-pointer text-white rounded-full p-2 shadow-md hover:bg-(--secondaryColor) transition">
        <FaChevronCircleLeft />
      </button>
    </div>
  );
};
