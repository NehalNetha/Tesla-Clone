import React from 'react'

export default function ({url, title, price, tax, button_one, button_two}) {
  return (
    <div className='container'>
        <div className='container-main-div' style={{backgroundImage: `url(${url})`}}>
            <div className='container-upper-div'>
                <h1 className='container-h1'>
                    {title}
                </h1>
                <div className='container-p'>
                    <p>
                        {price}
                    </p>
                    {tax && <p>
                        {tax}
                    </p>}
                </div>
                
            </div>
            <div className='container-buttons'>
                <button className='container-button-black'>{button_one}</button>
                {button_two &&
                    <button className='container-button-white'>{button_two}</button>
                }
            </div>`
        </div>
        

    </div>
  )
}
