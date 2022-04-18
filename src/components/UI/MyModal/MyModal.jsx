import React from 'react';
import cls from './MyModal.Module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cls.myModal];

    if(visible){
        rootClasses.push(cls.active)
    }


	return (
        <div className={rootClasses.join(' ')}>
            <div className={cls.myModalContent}>
                {children}
            </div>
        </div>
    );
};
export default MyModal;