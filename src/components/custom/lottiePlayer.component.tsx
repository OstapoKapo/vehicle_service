'use client'

import Lottie from 'lottie-react'

interface LottiePlayerProps {
  animationData: object;
  width?: number;
  height?: number;
}

export const LottiePlayer = ({ 
  animationData, 
  width = 150, 
  height = 150 
}: LottiePlayerProps) => {
  
  const style = {
    width: width,
    height: height,
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={style}
    />
  )
}