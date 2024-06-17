import { Button } from '@/components/ui/button';
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogContent,
  Dialog,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FcOnlineSupport } from 'react-icons/fc';

export default function ContactUsPopOver() {
  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className='flex items-center gap-2 bg-blue-500 text-white rounded-full p-2'
            variant='outline'
          >
            <FcOnlineSupport className='h-6 w-6' />
            <span className='sr-only'>Open Contact Form</span>
          </Button>
        </DialogTrigger>
        <DialogContent className='w-full max-w-md bg-[#DDE6ED] rounded-md'>
          <DialogHeader>
            <DialogTitle className='text-[#526D82] capitalize text-lg md:text-2xl'>
              Get in touch with us
            </DialogTitle>
            <DialogDescription className='text-[#526D82]'>
              We&apos;re here to help! Fill out the form below and we&apos;ll
              get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <form className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-[#526D82] font-medium'>
                Name
              </Label>
              <Input
                id='name'
                placeholder='Enter your name'
                className=''
                required
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-[#526D82] font-medium'>
                Email
              </Label>
              <Input
                id='email'
                placeholder='Enter your email'
                required
                type='email'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='message' className='text-[#526D82] font-medium'>
                Message
              </Label>
              <Textarea
                className='min-h-[100px]'
                id='message'
                placeholder='Enter your message'
                required
              />
            </div>
            <div className='flex justify-center'>
              <Button
                className='w-1/2 bg-[#769dbb] text-white font-semibold hover:bg-[#9DB2BF]'
                type='submit'
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
