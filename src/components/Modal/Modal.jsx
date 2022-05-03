import React from 'react';
import cls from './Modal.module.css'
const Modal = ({children,visible,setVisible}) => {
    const clasess = [cls.modal]

    if (visible){
        clasess.push(cls.active)
    }
            return (
            <div className={clasess.join(' ')} onClick={() => setVisible(false)}>
            <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;