import React from 'react';

const EmpleadoAvatar = ({avatar,alt}) => {
    return (
        <div>
            <img
                    src={avatar}
                    alt={alt}
                    width={"90px"}
                    height={"90px"}
                    className="m-2"
                  />
        </div>
    );
};

export default EmpleadoAvatar;