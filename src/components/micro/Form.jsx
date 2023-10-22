import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../firebase';
const Form = () => {
  const [email, setEmail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    // Send the email to Firebase Firestore

    const emailCollection = collection(db, 'email');
    try {
      await addDoc(emailCollection, { email }); // Add the email to the collection
      const googleFormUrl =
        'https://forms.gle/aGGQKJjc8i7QA7gQ6';
      window.location.href = googleFormUrl; // Redirect the user immediately

      // Reset the form
      setEmail('');
    } catch (error) {
      console.error('Error adding document: ', error);
      // Handle the error (e.g., show a user-friendly error message)
    }

    // Reset the form
    setEmail('');
  };

  return (
    <form onSubmit={onSubmit} className='relative flex justify-center items-center'>
    <div className='relative focus-within:w-[54%] duration-200 w-[40%]'>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='py-3 px-4 text-4xl rounded-full outline-none w-full'
      />
      <button
        type="submit"
        className='absolute top-0 right-0 m-2 p-3 bg-black w-[20%] hover:scale-105 duration-200 text-white rounded-full'
      >
        Submit
      </button>
    </div>
  </form>
  
  
  );
};

export default Form;
