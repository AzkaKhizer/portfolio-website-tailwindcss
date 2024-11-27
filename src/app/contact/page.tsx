// app/contact/page.tsx

"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email)
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      
      <section className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 p-4">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg mb-6 leading-relaxed text-center">
          Feel free to reach out for any inquiries, collaborations, or just to say hello!
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-100 border border-gray-600 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-100 border border-gray-600 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 bg-gray-100 border border-gray-600 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-1/2 ml-24 p-2 bg-slate-800 hover:bg-blue-600 rounded text-white"
          >
            Send Message
          </button>
        </form>
      </section>
      
    </div>
  );
};

export default Contact;
