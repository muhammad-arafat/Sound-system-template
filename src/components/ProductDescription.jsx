const ProductDescription = () => {
  return (
    <div className=' max-w-7xl mx-auto px-5 flex gap-y-8 md:gap-y-0 md:gap-x-10 flex-col md:flex-row items-center justify-between'>
      <div className=' w-full space-y-5'>
        <h1 className='text-2xl md:text-4xl font-bold mb-2'>
          Easy Acoustic System{" "}
        </h1>
        <div className=' text-lg'>
          We fulfill the acoustic environment creatively, complying to strict
          acoustic standards, practice advance manufacturing technique for all
          of our product design. Our products are applicable to AV room, music
          room, broadcast studio, office spaces, classroom, worship places,
          restaurant, entertainment outlet, commercial and residential.
          <br />
          Our products strike differences from traditional decoration and cater
          to the pickiest ears.
        </div>
        <h3 className='text-2xl md:text-3xl font-bold mb-2'>Soundbox</h3>
        <p className=' text-lg'>
          As a leading company in acoustic field, can meet your high-end
          requirements.
        </p>
      </div>
      <div className=' grid grid-cols-2 w-full items-center justify-center gap-2'>
        <div className=' space-y-2'>
          <h1 className=' text-red-600 text-2xl md:text-5xl font-medium'>
            01.
          </h1>
          <p className=' text-lg'>
            Suitable for all types of interior decoration, easy to install on
            ceilings or walls.
          </p>
        </div>
        <div className=' space-y-2'>
          <h1 className=' text-red-600 text-2xl md:text-5xl font-medium'>
            02.
          </h1>
          <p className=' text-lg'>
            Suitable for all types of interior decoration, easy to install on
            ceilings or walls.
          </p>
        </div>
        <div className=' space-y-2'>
          <h1 className=' text-red-600 text-2xl md:text-5xl font-medium'>
            03.
          </h1>
          <p className=' text-lg'>
            Suitable for all types of interior decoration, easy to install on
            ceilings or walls.
          </p>
        </div>
        <div className=' space-y-2'>
          <h1 className=' text-red-600 text-2xl md:text-5xl font-medium'>
            04.
          </h1>
          <p className=' text-lg'>
            Suitable for all types of interior decoration, easy to install on
            ceilings or walls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
