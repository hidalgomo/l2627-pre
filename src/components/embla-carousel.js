import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './embla-carousel-dot-button'
import Autoplay from 'embla-carousel-autoplay'
import { flushSync } from 'react-dom'

import image1 from '../assets/home0001bg.svg'
import image2 from '../assets/home0002bg.svg'
import image3 from '../assets/home0003bg.svg'
import image4 from '../assets/home0004bg.svg'
import { HomeSlide1 } from './home-slide1'
import { HomeSlide2 } from './home-slide2'
import { HomeSlide3 } from './home-slide3'

const images = [image1, image2, image1, image4]
const elements = [<HomeSlide1 />, <HomeSlide2 />, <HomeSlide3 />];
const imageByIndex = (index) => images[index % images.length]

const TWEEN_FACTOR = 1.2

const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 15000 })])
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
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
            <div className="embla__viewport" ref={ emblaRef }>
                <div className="embla__container">
                { 
                    slides.map((index) => (
                        <div className="embla__slide" key={ index }>
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer" style={{ ...(tweenValues.length && { transform: `translateX(${ tweenValues[index] }%)` }) }}>
                                    <div style={{ 
                                        width: '100%',
                                        height: 'calc(100vh - 65px)',
                                        background: `url('${ imageByIndex(index) }') no-repeat center center`,
                                        backgroundSize: 'cover' }}>

                                        { elements[index] }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>

            <div className="embla__dots">
            {
                scrollSnaps.map((_, index) => (
                    <DotButton key={index} onClick={() => onDotButtonClick(index)} 
                        className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '' )} />
                ))
            }
            </div>
        </div>
    )
}

export default EmblaCarousel;
