import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce platform serves as a virtual marketplace where buyers and sellers interact,
                    conduct transactions, and exchange goods or services electronically.
                    These platforms often feature user-friendly interfaces, secure payment gateways,
                    and robust inventory management systems to streamline the buying and selling process.
                </p>
                <p>e-commerce platforms have revolutionized retail by providing global reach and accessibility 24/7.
                    Moreover, e-commerce platforms utilize various marketing and
                     analytics tools to understand consumer behavior and enhance the shopping experience.
                    With the convenience of online shopping,
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox