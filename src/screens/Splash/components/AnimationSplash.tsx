import React from 'react';
import LottieView from 'lottie-react-native';
import SplashAnime from './SplashAnime.json'
export const AnimationSplash: React.FC=()=>{
    return(
        <LottieView 
        loop= {true}
        autoPlay={true}
        source={SplashAnime}
        speed={1}/>
    )


}