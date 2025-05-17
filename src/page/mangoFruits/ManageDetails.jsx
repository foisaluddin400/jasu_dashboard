import React from 'react'
import img1 from '../../assets/header/img1.png';
import back from '../../assets/header/back.png';
const ManageDetails = () => {
    return (
        <div className='h-screen'>
            <div className='flex items-center gap-20'>
                <div className=" bg-white relative items-center object-cover p-4 rounded shadow-lg">
                    <img src={img1} alt='fds' className="w-[800px] mb-2" />
                    <img className='absolute w-full top-0 left-0' src={back} alt="" />
                </div>
                <div>
                    <h1 className='text-[#205D39] text-4xl font-bold pb-5'>CPO - Mandarin Green</h1>
                    <p className='font-bold'>Description</p>
                    <p className='pt-5'>Cold Pressed Oil is a compound extracted from plants. The oils capture the plant’s scent and flavor. Unique aromatic compounds give each essential oil its characteristic essence. They are obtained through distillation (via steam and/or water) or mechanical methods, such as cold pressing.</p>
                    <p>Info</p>

                </div>
            </div>
            <div className=' grid grid-cols-2 gap-4 pt-9'>
                <div className='bg-white p-3'>
                    <h1 className='text-xl text-[#16A34A] pb-2'>- Process Type</h1>
                    <p>Puree</p>
                </div>
                 <div className='bg-white p-3' >
                    <h1 className='text-xl text-[#16A34A] pb-2'>- Availability</h1>
                    <p>Available</p>
                </div>

                 <div className='bg-white p-3'>
                    <h1 className='text-xl text-[#16A34A] pb-2'>- Origin</h1>
                    <p>Mexico</p>
                </div>

                 <div className='bg-white p-3'>
                    <h1 className='text-xl text-[#16A34A] pb-2'>- Volume Available</h1>
                    <p>200 UNIT</p>
                </div>
            </div>
        </div>
    )
}

export default ManageDetails