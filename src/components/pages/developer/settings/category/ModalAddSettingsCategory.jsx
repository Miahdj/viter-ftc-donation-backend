import React from "react";
import ModalWrapperSide from "../../../../partials/modal/ModalWrapperSide";

const ModalAddSettingsCategory = (setIsModal) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      setIsModal(false);
    }, 200);
  };
  return (
    <>
      <ModalWrapperSide handleClose={handleClose} className={``} />
    </>
  );
};

export default ModalAddSettingsCategory;
