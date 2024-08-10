import { FaMinus, FaPlus } from "react-icons/fa6";
import { RiExpandUpDownFill } from "react-icons/ri";

interface PropsInterface {
  onClose: () => void;
  onExpand: () => void;
  onMinimise: () => void;
}

function MacButtons({ onClose, onExpand, onMinimise }: PropsInterface) {
  const buttons = [
    {
      color: "#FF6057",
      icon: <FaPlus className="icon expand-icon" onClick={onClose} />,
    },
    {
      color: "#FEBB30",
      icon: <FaMinus className="icon" onClick={onMinimise} />,
    },
    {
      color: "#2ED158",
      icon: (
        <RiExpandUpDownFill className="icon expand-icon" onClick={onExpand} />
      ),
    },
  ];
  return (
    <div className="mac-buttons-flex">
      {buttons.map((button, index) => (
        <div
          key={index}
          className="mac-button"
          style={{ backgroundColor: button.color, color: button.color }}
        >
          {button.icon}
        </div>
      ))}
    </div>
  );
}

export default MacButtons;
