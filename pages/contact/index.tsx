import Hero from '../../components/Hero';
import { FileInput } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import { useState } from 'react';

export default function ContactUs() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')
  const [resume, setResume] = useState<File | null>(null)

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value)
    if (name == 'name')
      setName(value)
    else if (name == 'email')
      setEmail(value)
    else if (name == 'number')
      setNumber(value)
    else if (name == 'time')
      setTime(value)
    else if (name == 'reason')
      setReason(value)
    else if (name == 'message')
      setMessage(value)
    else if (name == 'resume')
      setResume(value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = {
      name,
      email,
      number,
      time,
      reason,
      message,
      resume
    }
  }

  return (
    <>
      <Hero screen={2} title="Contact Us" bg="/Covers/contact.jpg" />
      <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
        <div className="flex flex-col justify-evenly">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&apos;s talk!</h2>
            <div className="text-gray-600">Leave a message and we&apos;ll get back to you.</div>
          </div>
          <img src="/doodle.svg" alt="" className="h-64 md:max-h-80" />
        </div>
        <form className="space-y-6 grid grid-cols-2 gap-x-4">
          <div className='col-span-2'>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required id="name" type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-100 border border-black" />
          </div>
          <div className='col-span-2'>
            <label htmlFor="email" className="text-sm">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} required id="email" type="email" placeholder='E-mail' className="w-full p-3 rounded bg-gray-100 border border-black" />
          </div>
          <div className='col-span-2'>
            <label htmlFor="number" className="text-sm">Phone Number</label>
            <input value={number} onChange={(e) => setNumber(e.target.value)} required id="number" type="number" placeholder='Phone Number' className="w-full p-3 rounded bg-gray-100 border border-black" />
          </div>
          <div className='col-span-1'>
            <label htmlFor="time" className="text-sm">When can we reach you?</label>
            <select value={time} onChange={(e) => setTime(e.target.value)} name="time" id="time" className='w-full p-3 rounded bg-gray-100 border border-black' required>
              <option selected>Please choose a time slot</option>
              <option value="12:00 p.m. - 1:00 p.m.">12:00 p.m. - 1:00 p.m.</option>
              <option value="1:00 p.m. - 2:00 p.m.">1:00 p.m. - 2:00 p.m.</option>
              <option value="2:00 p.m. - 3:00 p.m.">2:00 p.m. - 3:00 p.m.</option>
              <option value="3:00 p.m. - 4:00 p.m.">3:00 p.m. - 4:00 p.m.</option>
              <option value="4:00 p.m. - 5:00 p.m.">4:00 p.m. - 5:00 p.m.</option>
              <option value="5:00 p.m. - 6:00 p.m.">5:00 p.m. - 6:00 p.m.</option>
            </select>
          </div>
          <div className='col-span-1'>
            <label htmlFor="reason" className="text-sm">Purpose of contact</label>
            <select value={reason} onChange={(e) => setReason(e.target.value)} name="reason" id="reason" className='w-full p-3 rounded bg-gray-100 border border-black' required>
              <option selected value="">Please choose a reason</option>
              <option value="services">Require services</option>
              <option value="careers">Want to join the Organisation</option>
            </select>
          </div>
          <div className='col-span-2'>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder='Message' rows={3} className="w-full p-3 rounded bg-gray-100 border border-black"></textarea>
          </div>
          {
            reason == 'careers' && (
              <div className='col-span-2'>
                <label htmlFor="resume" className="text-sm">Upload your resume:</label>
                <FileInput value={resume} onChange={setResume} name='resume' placeholder="Your resume" icon={<IconUpload />} />
              </div>
            )
          }
          <button onClick={handleSubmit} type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#FF7000] text-gray-50 col-span-2">Send Message</button>
        </form>
      </div>
    </>
  );
}