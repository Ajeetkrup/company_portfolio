'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ReCAPTCHA from 'react-google-recaptcha';
import SparklesCore from '../ui/SparklesCore';
import { Textarea } from '@/components/ui/textarea';
import contactImg from '../../../public/contact.jpg';
import { useState } from 'react';

export default function ContactForm() {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(e.target.value);
    setIsValidEmail(isValid);
    setEmail(e.target.value);
    setIsFormValid(
      isValid && isCaptchaVerified && lastName.length > 0 && message.length > 20
    );
  };

  const handleCaptchaChange = (value: string | null) => {
    setIsCaptchaVerified(value !== null);
    setIsFormValid(
      isValidEmail &&
        value !== null &&
        lastName.length > 0 &&
        message.length > 20
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('🚀 ~ handleSubmit ~ name:', name);
    console.log('🚀 ~ handleSubmit ~ message:', message);
    console.log(email);
    if (
      email.length > 0 &&
      message.length > 20 &&
      name.length > 0 &&
      lastName.length > 0
    ) {
      
    } else {
      alert('Please fill in all fields and verify that you are not a robot.');
    }
  };

  return (
    <>
      <div className='h-[20rem] mt-12 md:h-[17rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden mb-4'>
        <div className='w-full absolute inset-0 h-screen'>
          <SparklesCore
            id='tsparticlesfullpage'
            background='transparent'
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className='w-full h-full'
            particleColor='#FFFFFF'
          />
        </div>
        <h1 className='md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20'>
          Contact Us
        </h1>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6 xl:gap-12'>
        <Card>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col h-full space-y-4'>
              <div className='space-y-2 p-6'>
                <h1 className='text-3xl font-bold'>
                  {
                    'Get In Touch With Our Experts To Turn Your Idea Into Reality.'
                  }
                </h1>
                <p className='text-gray-500 dark:text-gray-400'>
                  {
                    'Let’s Discuss Your Requirements & Start Develop Something Unique.'
                  }
                </p>
              </div>
              <div className='flex flex-col gap-4 p-6'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='first-name'>First name</Label>
                    <Input
                      id='first-name'
                      name={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Enter your first name'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='last-name'>Last name</Label>
                    <Input
                      id='last-name'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder='Enter your last name'
                      required
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    placeholder='Enter your email'
                    onChange={handleEmailChange}
                    type='email'
                    email={email}
                    required
                  />
                  {!isValidEmail && (
                    <div>
                      <div />
                      <div>Enter a valid email address.</div>
                    </div>
                  )}
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    className='min-h-[100px]'
                    id='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Enter your message'
                    required
                  />
                </div>
                <div className='space-y-2'>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
                    onChange={handleCaptchaChange}
                  />
                </div>
                <Button className='w-fit' type='submit' disabled={!isFormValid}>
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Card>
        <div className='flex items-center justify-end py-8 md:py-0 '>
          <div className='px-4 md:px-6 w-[100%] h-[600px]'>
            <Image
              src={contactImg}
              alt='Contact Form'
              className='mx-auto w-full aspect-video h-full overflow-hidden rounded-xl object-cover object-center'
              height='822'
              width='550'
              priority={true}
              quality={80}
            />
          </div>
        </div>
      </div>
    </>
  );
}
