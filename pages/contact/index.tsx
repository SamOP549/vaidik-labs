import Hero from '../../components/Hero';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactUs() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')
  const [message, setMessage] = useState('')
  const [startDate, setStartDate] = useState(new Date());

  function GetDateFormat(date: any) {
    var month = (date.getMonth() + 1).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + date.getFullYear();
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    var newDate = GetDateFormat(startDate)
    const user = {
      name,
      email,
      number,
      time,
      reason,
      message,
      newDate
    }
    console.log(user)
    const emailMsg = `
    Name: ${name}
    <br />
    Email: ${email}
    <br />
    Phone Number: ${number}
    <br />
    Date for contact: ${newDate}
    <br />
    Time for contact: ${time}
    <br />
    Reason for contact: ${reason}
    <br />
    Message: ${message}
    <br /> 
    `

    let data = {
      name,
      email,
      number,
      time,
      reason,
      message,
      emailMsg,
      subject: "Query From Contact Form"
    }

    let gmail = await fetch('/api/sendinblue', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let gmailres = await gmail.json()
    if (gmailres.error) {
      toast.error('Something bad happened!', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      toast.success("We'll contact you soon!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setName('')
    setEmail('')
    setNumber('')
    setTime('')
    setReason('')
    setMessage('')
    setStartDate(new Date())
  }

  return (
    <>
      <Hero screen={2} title="Contact Us" bg="/Covers/contact.jpg" />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          <div className='col-span-2'>
            <p>When Can we reach you?</p>
          </div>
          <div className='col-span-1'>
            <label htmlFor="date" className="text-sm">Pick a date:</label>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
            />
          </div>
          <div className='col-span-1'>
            <label htmlFor="time" className="text-sm">Pick a time:</label>

            <select value={time} onChange={(e) => setTime(e.target.value)} name="time" id="time" className='w-full p-1.5 rounded bg-gray-100 border border-black' required>
              <option selected>Please choose a time slot</option>
              <option value="12:00 p.m. - 1:00 p.m.">12:00 p.m. - 1:00 p.m.</option>
              <option value="1:00 p.m. - 2:00 p.m.">1:00 p.m. - 2:00 p.m.</option>
              <option value="2:00 p.m. - 3:00 p.m.">2:00 p.m. - 3:00 p.m.</option>
              <option value="3:00 p.m. - 4:00 p.m.">3:00 p.m. - 4:00 p.m.</option>
              <option value="4:00 p.m. - 5:00 p.m.">4:00 p.m. - 5:00 p.m.</option>
              <option value="5:00 p.m. - 6:00 p.m.">5:00 p.m. - 6:00 p.m.</option>
            </select>
          </div>
          <div className='col-span-2'>
            <label htmlFor="reason" className="text-sm">Purpose of contact</label>
            <select value={reason} onChange={(e) => setReason(e.target.value)} name="reason" id="reason" className='w-full p-3 rounded bg-gray-100 border border-black' required>
              <option selected value="">Please choose a reason</option>
              <option value="Require services">Require services</option>
              <option value="Want to join the Organisation">Want to join the Organisation</option>
            </select>
          </div>
          <div className='col-span-2'>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder='Message' rows={3} className="w-full p-3 rounded bg-gray-100 border border-black"></textarea>
          </div>
          {
            reason == 'Want to join the Organisation' && (
              <div className='col-span-2 text-center text-red-700 flex flex-col'>
                <p className='text-lg'>Please email your resume to -</p>
                <a className='hover:text-blue-500 hover:underline font-bold' href='mailto:ankita_mishra@vaidikinnovation.com'>ankita_mishra@vaidikinnovation.com</a>
                <p className='text-lg'>OR</p>
                <a className='hover:text-blue-500 hover:underline font-bold' href='mailto:pragya.gupta@vaidikinnovation.com'>pragya.gupta@vaidikinnovation.com</a>
              </div>
            )
          }
          <button onClick={handleSubmit} type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#FF7000] text-gray-50 col-span-2">Send Message</button>
        </form>
      </div>
    </>
  );
}