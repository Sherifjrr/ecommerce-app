import img from '../assets/Computer.svg';

function Hero() {
  return (
    <section className="flex flex-wrap bg-gray-100">
      <div className="w-full lg:w-1/2 p-5 lg:p-20 space-y-8 ">
        <h1 className="font-extrabold text-4xl lg:text-5xl my-5">
          FIND ELECTRONICS <br />
          THAT MATCHES <br />
          YOUR NEEDS
        </h1>
        <p className="my-5">
          Explore our extensive collection of top-quality electronics, designed{' '}
          <br />
          to enhance your digital experience and match your personal tech
          preferences
        </p>
        <button
          type="button"
          className="rounded-3xl bg-black py-3 px-14 text-white my-5"
        >
          Shop Now
        </button>
        <div className="flex flex-wrap lg:flex-nowrap my-5 justify-center lg:justify-normal">
          <div className="mt-2">
            <h1 className="text-3xl font-medium">200+</h1>
            <h3>International Brands</h3>
          </div>
          <div className="ml-5 mt-2 border-l-2 pl-2">
            <h1 className="text-3xl font-medium">2,000+</h1>
            <h3>High-Quality Products</h3>
          </div>
          <div className="ml-5 mt-2 border-l-2 pl-2">
            <h1 className="text-3xl font-medium">30,000+</h1>
            <h3>Happy Customers</h3>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 justify-center">
        <img src={img} alt="Electronic Products" className="w-4/5 lg:w-2/3" />
      </div>
    </section>
  );
}

export default Hero;
