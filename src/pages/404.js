export default function Custom404() {
  return (
    <div className='h-screen grid place-content-center'>
      <img
        src='/logo-banner.png'
        style={{ 'max-width': '300px' }}
        className='mx-auto mb-8'
      ></img>
      <h2>
        <b className='border-r-2 border-gray-600 pr-4 mr-1'>404</b>{' '}
        <span className='font-small'>This page could not be found.</span>
      </h2>
      <h3 className='text-center font-light'>
        <a href='/' className='transition hover:bg-blue-100 px-2 py-1'>
          Return to Homepage
        </a>
      </h3>
    </div>
  );
}
