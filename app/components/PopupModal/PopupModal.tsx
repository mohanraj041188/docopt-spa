import "./PopupModal.scss";

import { LogoIcon, CloseIcon } from "../icons";

function PopupModal({ onClose, children }) {
  return (
    <div className="popup-modal">
      <div className="popup-modal__wrapper">
        <div className="popup-modal__header">
          <div className="popup-modal__header-logo">
            <LogoIcon className="header__logo"></LogoIcon>
          </div>
          <button onClick={onClose} className="popup-modal__header-cta">
            <CloseIcon className="popup-modal__header-cta_icon"></CloseIcon>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default PopupModal;
