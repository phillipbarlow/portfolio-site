import React from 'react';
import svg from '../images/wave-4.svg';
import PropTypes from 'prop-types';
import me from '../images/home-image.png'

export default function Hero({headerName, intro, bio,mainImage,className,headerText}) {
  return (
    // <div className={className}>
    //     <div className="svg-container">
    //         <img src={svg} className='no-underline' alt='decorative svg'/>
    //     </div>
    //   <p className={headerText}>{headerName}</p>
    //   {intro?<p className='intro-text'>{intro}</p>:null}
    //   {bio?<p className='bio-text'>{bio}</p>:null}
    //   {mainImage?<div className="profile-img-container">
    //     <img className='profileImage' src={mainImage} alt="Photo of me looking rather snazzy"/>
    //   </div>:null}
    // </div>
    <div className='hero-container'>
      <img className='home-image' src={me} alt="Digital photo of me" />
    </div>
  )
}
// Hero.propTypes = {
//     headerName: PropTypes.string,
//     intro: PropTypes.string,
//     bio: PropTypes.string,
//     mainImage: PropTypes.string
//   };
