import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

function AccordionItem({ title, content, isActive, onClick }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will trigger once when the element is in view
    threshold: 0.5, // The element will start animating when 50% of it is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const contentStyles = {
    height: isActive ? '6rem' : '0',
    overflow: 'hidden',
    transition: 'height 0.3s ease-in',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: '-10vh' }}
      animate={controls}
      transition={{ type: 'spring', delay: 0.3 }}
      style={{ borderColor: isActive ? 'orange' : null }}
      className="border-b-2 hover:border-orange-600"
    >
      <button
        className="w-full font-bold flex py-6 text-3xl px-5 text-left focus:outline-none transition-transform ease-in"
        onClick={onClick}
      >
        {title}
        <motion.span
          className={`ml-auto ${isActive ? 'text-orange-500' : ''} transition-transform`}
          animate={{ rotate: isActive ? -180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown />
        </motion.span>
      </button>
      <div style={contentStyles} className="">
        <ul>
          {Array.isArray(content) ? (
            <ul>
              <li>{content}</li>
            </ul>
          ) : (
            <p className='text-xl indent-2'>{content}</p>
          )}
        </ul>
      </div>
    </motion.div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (index === prevIndex ? -1 : index));
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: i * 0.1,
      },
    }));
  }, [controls]);

  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: '-10vh' }}
          animate={controls}
          custom={index}
        >
          <AccordionItem
            title={item.title}
            content={item.content}
            isActive={index === activeIndex}
            onClick={() => toggleAccordion(index)}
          />
        </motion.div>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Accordion;
