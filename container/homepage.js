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
  return (
    <section>
      <div class="circle" style={{ background: color }}></div>

      <div class="content">
        <div class="textBox">
          <h2>
            Its not just Bobba
            <br />
            Its <span style={{ color: color }}> KOKUMI コクミ</span>
          </h2>
          <a href="#" style={{ background: color }}>
            Order Now
          </a>
        </div>
        <div class="imgBox">
          <Image src={image} width={'350'} height={'350'} class="kokumi" />
        </div>
      </div>
      <ul class="thumb">
        <li>
          <Image
            src="/image/rainbow mini.png"
            width={60}
            height={60}
            onClick={() => {
              click('#2e2d67');
              clickImage('/image/rainbow miring.png');
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
            }}
          />
        </li>
      </ul>
      <ul class="sci">
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
