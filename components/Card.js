import React from "react";
import Image from "next/image";

// images
import cardImage from "@/assets/content-images.png";

export default function Card() {
  return (
    <div className="cards__card">
      <figure className="cards__card-figure">
        <Image layout="responsive" src={cardImage} alt="Card image" />
      </figure>
      <div className="cards__card-copy">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et ad culpa, labore quae tempore eius rerum nostrum. Velit dolore nostrum expedita harum natus consequuntur reprehenderit
          consequatur sed cumque fuga.
        </p>
      </div>
      <div className="cards__card-cta">
        <a href="#">
          <button>READ MORE</button>
        </a>
      </div>
    </div>
  );
}
