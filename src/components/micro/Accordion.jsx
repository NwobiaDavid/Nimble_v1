import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

function AccordionItem({ title, content, isActive, onClick }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
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
        className="w-full font-semibold lg:font-bold flex py-2 lg:py-6 text-xl lg:text-3xl px-2 lg:px-5 text-left focus:outline-none transition-transform ease-in"
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
      <div style={contentStyles}>
        <p className="text-lg lg:text-xl indent-2">{content}</p>
      </div>
    </motion.div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (index === prevIndex ? -1 : index));
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
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
        <motion.div key={index} initial={{ opacity: 0, y: '-10vh' }} animate={controls} custom={index}>
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
