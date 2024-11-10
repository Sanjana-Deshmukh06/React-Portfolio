import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import LikeButton from './LikeButton'; // Import the LikeButton component




const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs.send(
      'service_pdwq5td',
      'template_8wt6cmf',
      {
        from_name: form.name,
        to_name: 'Anonomous',
        from_email: '20021999sd@gmail.com',
        message: form.message,
      },
      '-Olrh4TXCzrmrYuDt'
    )
      .then(() => {
        setloading(false);
        alert('Thank you.I will get back to you as soon as possible.')

        setform({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setloading(false);
        console.log(error);
        alert('something went wrong')
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-6'
          action="https://formspree.io/f/mwkglqdy" method="post">
          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </lable>
          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Email</span>
            <input
              type='text'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </lable>
          <lable className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message for me?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </lable>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 w-fit text-white font-semibold shadow-primary rounded-xl  shadow-sm 
                     transition-all duration-300 ease-in-out 
                     hover:scale-105 
                     hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                   hover:text-gray-100'>
            Send
          </button>
        </form>
  {/* Like Button Component */}
  <LikeButton />

      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>

  )
}

export default SectionWrapper(Contact, 'contact'); 