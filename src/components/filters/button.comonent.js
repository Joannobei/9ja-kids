
import React from "react";
import './button.css';

const Button = ({ button, filter }) => {


    return (
        <div>

            {
                button.map((cat, i) => {
                    return <button className='mx-3 rounded-3 text-center buttons' type="button" onClick={() => filter(cat)} key={cat}>
                        {cat}
                    </button>
                }

                )}
        </div>
    )

}
export default Button;