/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, memo } from "react";
import { Layout } from "components";
import styled from "styled-components";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  section {
    position: absolute;
    max-width: clamp(550px, 80vw, 1000px);
    width: 100%;
    height: 100vh;
    overflow: hidden;
    left: 50%;
    transform: translate(-50%, 0);
    border: 2px solid #000;
  }

  .slide-container {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 50%);
    border: 2px solid gold;
  }

  .img-container {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .img-container img {
    object-fit: cover;
  }
`;

const Work = () => {
  const [iteration, setIteration] = useState(0)
  const data = new Array(30);
  data.fill({ src: "https://loremflickr.com/1000/500/", alt: "workpic" }, 0, 30);

  useEffect(() => {
    const spacing = 0.2
    const snapTime = gsap.utils.snap(spacing)
    const cards = gsap.utils.toArray('.img-container')
    const playHead = { offset: 0 }
    
    gsap.set('.img-container', { xPercent: 400, opacity: 0, scale: 0 })

    const animateFunc = el => {
      const tl = gsap.timeline()
      tl
      .fromTo(el, { scale: 0, opacity: 0 }, {
        scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false
      })
      .fromTo(el, { xPercent: 400 }, { xPercent: -400, duration: 1, ease: "none", immediateRender: false }, 0)
  
      return tl
    }

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc)

    const wrapTime = gsap.utils.wrap(0, seamlessLoop.duration())

    const scrub = gsap.to(playHead, {
      offset: 0,
      onUpdate() {
        seamlessLoop.time(wrapTime(playHead.offset))
      },
      duration: 0.5, ease: "power3", paused: true
    })

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        let scroll = self.scroll()
        if (scroll > self.end - 1) {
          wrap(1, 1)
        } else if (scroll < 1 && self.direction < 0) {
          wrap(-1, self.end - 1)
        } else {
          scrub.vars.offset = (iteration + self.progress) * seamlessLoop.duration()
          scrub.invalidate().restart()
        }
      },
      end: "+=3000",
      pin: "section",
    })

    const progressToScroll = progress => gsap.utils.clamp(1, trigger.end - 1, gsap.utils.wrap(0, 1, progress) * trigger.end)
  
    const wrap = (iterationDelta, scrollTo) => {
      setIteration(iteration += iterationDelta)
      // console.log({ iteration, iterationDelta })
      trigger.scroll(scrollTo)
      trigger.update()
    }

    function scrollToOffset (offset) {
      let snappedTime = snapTime(offset)
      let progress = ((snappedTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration())
      let scroll = progressToScroll(progress)
      
      if (progress >= 1 || progress < 0) {
        return wrap(Math.floor(progress), scroll)
      }
      trigger.scroll(scroll)
    }

    function buildSeamlessLoop(items, spacing, animateFunc) {
      let rawSequence = gsap.timeline({ paused: true })
      let seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          this._time === this._dur && (this._tTime += this._dur - 0.01)
        },
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 100);
        }
      })
      let cycleDuration = spacing * items.length
      let dur
  
      items.concat(items).concat(items).forEach((item, i) => {
        let anim = animateFunc(items[i % items.length])
        rawSequence.add(anim, i * spacing)
        dur || (dur = anim.duration())
      })
  
      seamlessLoop.fromTo(rawSequence, { time: cycleDuration + dur / 2 }, {
        time: "+=" + cycleDuration,
        duration: cycleDuration,
        ease: "none"
      })
  
      return seamlessLoop
    }

    ScrollTrigger.addEventListener('scrollEnd', () => scrollToOffset(scrub.vars.offset))
  }, [])

  return (
    <Layout>
      <Container>
        <section>
          <div className="slide-container">
            {data?.length > 0 &&
              data.map((val, idx) => (
                <div className="img-container" key={val + idx}>
                  <h1>gambar {idx + 1}</h1>
                  <Image
                    src={val?.src + idx + (idx + 1)}
                    alt={val?.alt}
                    height={500}
                    width={500}
                  />
                </div>
              ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default memo(Work);
