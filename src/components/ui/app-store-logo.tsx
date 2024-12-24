import Image from 'next/image';
import google from '@/assets/google.png'
import apple from '@/assets/apple.png'

const AppStoreLogo = () => {
    return (
       <div className='flex gap-4 justify-center md:justify-start '>
               <Image
               alt='download-app-from-google-playstore'
               src={google}
               width={150}
               height={48}
       
               />
               <Image
               alt='download-app-from-google-playstore'
               src={apple}
               width={150}
               height={48}
       
               />
             </div>
    );
};

export default AppStoreLogo;