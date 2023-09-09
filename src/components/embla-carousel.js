import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { flushSync } from 'react-dom'

import image1 from '../assets/home0001bg.svg'
import image2 from '../assets/home0002bg.svg'
import image3 from '../assets/home0003bg.svg'
import image4 from '../assets/home0004bg.svg'

export const images = [image1, image2, image3, image4]
const imageByIndex = (index) => images[index % images.length]

const TWEEN_FACTOR = 1.2

const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 4000 })])
    const [tweenValues, setTweenValues] = useState([])

    const onScroll = useCallback(() => {
        if (!emblaApi) return

        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()

        const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
            let diffToTarget = scrollSnap - scrollProgress

            if (engine.options.loop) {
                engine.slideLooper.loopPoints.forEach((loopItem) => {
                    const target = loopItem.target()
                    if (index === loopItem.index && target !== 0) {
                        const sign = Math.sign(target)
                        if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
                        if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
                    }
                })
            }
        
            return diffToTarget * (-1 / TWEEN_FACTOR) * 100
        })
    
        setTweenValues(styles)
    }, [emblaApi, setTweenValues])

    useEffect(() => {
        if (!emblaApi) return
        onScroll()
        emblaApi.on('scroll', () => {
            flushSync(() => onScroll())
        })
        emblaApi.on('reInit', onScroll)
    }, [emblaApi, onScroll])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                { 
                    slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <span>{index + 1}</span>
                            </div>
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer" style={{ ...(tweenValues.length && { transform: `translateX(${tweenValues[index]}%)` }) }}>
                                    <div style={{ 
                                        width: '100%',
                                        height: '100vh',
                                        background: `url('${ imageByIndex(index) }') no-repeat center center`,
                                        backgroundSize: 'cover' }}></div>
                                    {/* <img className="embla__slide__img embla__parallax__img" src={imageByIndex(index)} alt="Your alt text" /> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
