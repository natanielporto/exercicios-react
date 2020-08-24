import React from "react";

const logos = [
  "twitter",
  "facebook",
  "youtube",
  "instagram",
  "pinterest",
  "linkedin",
];
const Social = () => {
  return (
    <div>
      <div>
        <h2 className="text-center m-0">Siga nossas redes sociais</h2>
        <h2 className="social text-center m-0">
          ou solicite por lá o seu orçamento
        </h2>
      </div>
      <div className="d-flex row justify-content-around align-items-center">
        {logos.map((el) => (
          <div className="squareSocial col-2" key={el}>
            <i className={`fab fa-${el}`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
