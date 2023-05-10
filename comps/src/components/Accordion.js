import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    const handleClick = (index) => {
      // this is a Functional State Update. You can get the most up to date version of state as the first argument in the setter function.
      setExpandedIndex((currentExpandedIndex) => {
        if (index === currentExpandedIndex) {
          return -1;
        } else {
          return index;
        }
      });
    };

    // NOTE on conditional rendering - JS && returns first falsey value or last truthy value. React doesn't show anything for booleans

    return (
      <div key={item.id}>
        <div
          className="flex max-w-sm justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
