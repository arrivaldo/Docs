import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({data, reference, isDarkMode}) => {
    return (
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.7}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
        className={`relative flex-shrink-0 w-60 h-64 rounded-[40px] text-white px-8 py-10 overflow-hidden ${isDarkMode ? 'bg-zinc-900/90' : 'bg-gray-200'}`}>
      <FaRegFileAlt className={isDarkMode ? 'text-white' : 'text-black'} />
      <p className={`text-sm mt-5 font-semibold leading-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          {/* <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5  className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`} >{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoClose className="text-white" /> : <LuDownload size=".7em" color='#fff' />}
            </span>
          </div> */}
  
          {data.tag.isOpen && (
            <div className='tag w-full py-4 flex items-center justify-center cursor-pointer' 
            style={{ backgroundColor: data.tag.tagColor }}
            onClick={() => window.open(data.tag.tagUrl, '_blank')} // Redirect to the official documentation
>
              <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-black' : 'text-black'}`}>{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    );
  };
  

export default Card;
