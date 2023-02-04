import Image from 'next/image';

export default function Homepage() {
  return (
    <section>
      <div class="circle"></div>

      <div class="content">
        <div class="textBox">
          <h2>
            Its not just Bobba
            <br />
            Its <span> KOKUMI コクミ</span>
          </h2>
          <a href="#">Order Now</a>
        </div>
        <div class="imgBox">
          <Image src="/image/rainbow miring.png" width={'350'} height={'350'} class="kokumi" />
        </div>
      </div>
      <ul class="thumb">
        <li>
          <Image src="/image/rainbow mini.png" width={60} height={60} />
        </li>
        <li>
          <Image src="/image/cheese mini.png" width={60} height={60} />
        </li>
        <li>
          <Image src="/image/88rising mini.png" width={60} height={60} />
        </li>
        <li>
          <Image src="/image/boba mini.png" width={60} height={60} />
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
          <a href="https://twitter.com/KOKUMI_ID">
            <Image src="/image/twitter.png" width={41} height={33} />
          </a>
        </li>
      </ul>
    </section>
  );
}
