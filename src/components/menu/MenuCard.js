import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <section className="main-card--container">
      {menuData.map((item) => {
        const { id, name, category, image, description, price } = item;
        return (
          // <div className="card-container" key={id}>
          //   <div className="card">
          //     <div className="card-body">
          //       <span className="card-number card-circle subtle">
          //         {item.id}
          //       </span>
          //       <span className="card-author subtle">{category}</span>
          //       <h2 className="card-title">{name}</h2>
          //       <span className="card-description subtle">{description}</span>
          //       <div className="card-read">Read</div>
          //     </div>
          //     <img src={image} alt="images" className="card-media" />
          //     <span className="card-tag subtle">Order Now</span>
          //   </div>
          // </div>
          <div className="card-wrapper">
            <div class="card-test">
              <img src={image} alt="Avatar" style={{ width: "100%" }} />
              <div class="container">
                <h4>
                  <b>{name}</b>
                </h4>
                <p>{description}</p>
                <div className="card-footer">
                  <p>{price}</p>
                  <button>ORDER</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuCard;
