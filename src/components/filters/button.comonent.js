
import React from "react"

const Button = ({ button, filter }) => {


    return (
        <div>

            {
                button.map((cat, i) => {
                    return <button className='mx-3' type="button" onClick={() => filter(cat)} key={cat}>
                        {cat}
                    </button>
                }

                )}
        </div>
    )

}
export default Button;