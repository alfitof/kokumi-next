import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Homepage() {
  const [color, setColor] = useState('#2e2d67');
  const click = (color) => {
    setColor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const [image, setImage] = useState('/image/rainbow miring.png');
  const clickImage = (image) => {
    setImage(image);
  };
  useEffect(() => {
    document.body.style.src = image;
  }, [image]);

  const [color2, setColor2] = useState('#ccddef');
  const clickThumb = (color2) => {
    setColor2(color2);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color2;
  }, [color2]);

  return (
    <section>
      <div className="circle11" style={{ background: color2 }}></div>
      <div className="circle" style={{ background: color }}></div>

      <div className="content">
        <div className="textBox">
          <h2>
            <span style={{ color: color }}> KOKUMI コクミ</span>
            <br />
            A Drink That Satisfies Your
            <br />
            Taste Buds and Soul
          </h2>
          <a href="#" style={{ background: color }}>
            Order Now
          </a>
        </div>
        <div className="imgBox">
          <Image src={image} width={'350'} height={'350'} className="kokumi" />
        </div>
      </div>
      <ul className="thumb">
        <li>
          <Image
            src="/image/rainbow mini.png"
            width={60}
            height={60}
            onClick={() => {
              click('#2e2d67');
              clickImage('/image/rainbow miring.png');
              setColor2('#ccddef');
            }}
          />
        </li>
        <li>
          <Image
            src="/image/cheese mini.png"
            width={60}
            height={60}
            onClick={() => {
              click('#ffe108');
              clickImage('/image/cheese miring.png');
              setColor2('rgb(255 241 191)');
            }}
          />
        </li>
        <li>
          <Image
            src="/image/88rising mini.png"
            width={60}
            height={60}
            onClick={() => {
              click('#a0dcea');
              clickImage('/image/88rising miring.png');
              setColor2('rgb(237 251 255)');
            }}
          />
        </li>
        <li>
          <Image
            src="/image/boba mini.png"
            width={60}
            height={60}
            onClick={() => {
              click('#ff7774');
              clickImage('/image/boba miring.png');
              setColor2('#ffedea');
            }}
          />
        </li>
      </ul>
      <ul className="sci">
        <li>
          <a href="https://www.facebook.com/kokumi.indonesia/">
            <Image src="/image/facebook.png" width={21} height={41} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kokumi_id/">
            <Image src="/image/instagram.png" width={41} height={41} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCHqs795i06t2urLkAWidzvg">
            <Image src="/image/youtube.png" width={50} height={39} />
          </a>
        </li>
      </ul>
    </section>
  );
}
