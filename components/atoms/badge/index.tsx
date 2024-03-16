export default function Badge({ icon, classExtra = '' }: { icon: string; classExtra?: string }) {
    return (
      <div className='size-[72px] rounded-full color-gradient flex justify-center items-center shadow-lg'>
        <i className={`text-white justify-center items-center flex size-10 ${classExtra}`}>
          <svg xmlns='http://www.w3.org/2000/svg' width='40px' height='40px' viewBox='0 0 24 24'>
            <path width='40px' height='40px' fill='white' d={icon} />
          </svg>
        </i>
      </div>
    );
  }