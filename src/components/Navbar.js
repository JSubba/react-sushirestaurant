import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((item) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
