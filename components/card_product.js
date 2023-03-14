import Image from 'next/image';
import Link from 'next/link';

export default function Card() {
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" class="group">
            <div class="h-96 bg-gray-100 rounded-lg" style={{ paddingTop: '10%' }}>
              <Image src="/image/boba miring.png" width={200} height={350} style={{ margin: 'auto' }} alt="product" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Lovers Drink</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">0.0014 $ETH</p>
            <Link href="/overview">
              <button type="button" class="focus:outline-none text-white bg-blue-800 hover:bg-blue-900 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 w-full">
                Buy
              </button>
            </Link>
          </a>

          <a href="#" class="group">
            <div class="h-96 bg-gray-100 rounded-lg" style={{ paddingTop: '10%' }}>
              <Image src="/image/rainbow miring.png" width={200} height={350} style={{ margin: 'auto' }} alt="product" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Unicorn Drink</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">0.0014 $ETH</p>
          </a>

          <a href="#" class="group">
            <div class="h-96 bg-gray-100 rounded-lg" style={{ paddingTop: '10%' }}>
              <Image src="/image/88rising miring.png" width={200} height={350} style={{ margin: 'auto' }} alt="product" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Rainbow Drink</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">0.0015 $ETH</p>
          </a>

          <a href="#" class="group">
            <div class="h-96 bg-gray-100 rounded-lg" style={{ paddingTop: '10%' }}>
              <Image src="/image/cheese miring.png" width={200} height={350} style={{ margin: 'auto' }} alt="product" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">Lemonade Stardust</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">0.00096 $ETH</p>
          </a>
        </div>
      </div>
    </div>
  );
}
