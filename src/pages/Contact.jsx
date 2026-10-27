

function Contact() {
  return (
    <div className='max-w-[90%] lg:max-w-3xl mx-auto my-10'>
        <form action="" className='shadow-md p-4'>
            <h1 className='text-3xl text-center font-bold'>Contact Us</h1>
            <div className='mb-3'>
                <label>Name <span className='text-red-600'>*</span></label>
                <input className='w-full p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all' type="text" placeholder='Enter your name' />
            </div>
            <div className='mb-3'>
                <label>Phone<span className='text-red-600'>*</span></label>
                <input className='w-full p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all' type="text" placeholder='Enter your name' />
            </div>
            <div className='mb-3'>
                <label>Massage <span className='text-red-600'>*</span></label>
                <textarea className='w-full p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all' type="text" placeholder='Enter your message' />
            </div>

            <div className='flex justify-end'>
                <button className='py-2 px-8 bg-primary text-white'>Submit</button>
            </div>
        </form>
    </div>

    



    
  )
}

export default Contact


