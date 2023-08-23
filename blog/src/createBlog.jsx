import React, { useState } from 'react';
import './InputForm.css'; // Import your CSS file

function InputForm() {
  const [formData, setFormData] = useState({
    author: '',
    blog: '',
    quote: '',
    image: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate an asynchronous submission
    setTimeout(() => {
      // Here you can process the formData object, for example, sending it to a server or handling it in some way.
      console.log(formData);
      setSubmitting(false);
      setSubmitted(true);

      // Reset the form after submission
      setFormData({
        author: '',
        blog: '',
        quote: '',
        image: '',
      });

      // Reset the submitted state after a while
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="blog">Blog Post:</label>
          <textarea
            id="blog"
            name="blog"
            value={formData.blog}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quote">Quote:</label>
          <input
            type="text"
            id="quote"
            name="quote"
            value={formData.quote}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className={`submit-button ${
            submitting ? 'submitting' : submitted ? 'submitted' : ''
          }`}
        >
          {submitting ? 'Processing...' : submitted ? 'Submitted!' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default InputForm;
