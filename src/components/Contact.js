const Contact = () => {
  return (
    <div>
      <h1 className='font-bold m-4 text-3xl'>Contact Us Srujan kumar</h1>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Enter your username'
          className='border-2 border-gray-500 m-4 px-4 py-2'
        />

        <input
          type='text'
          name='password'
          placeholder='Enter your password'
          className='border-2 border-gray-500 m-4 px-4 py-2'
        />
        <button className='border-2 border-black m-4 px-4 py-2 font-semibold'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
