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
    <form onSubmit={onSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
