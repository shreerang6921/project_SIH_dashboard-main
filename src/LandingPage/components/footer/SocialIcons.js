import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-white">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#7E74B6] mx-1.5 text-xl hover:text-gray-100 hover:text-3xl hover:z-2
        duration-300 "
        >
          <ion-icon className="hover:text-3xl" name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;