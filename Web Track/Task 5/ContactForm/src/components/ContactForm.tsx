import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import '../styles/ContactForm.css';

interface FormInputs {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log('Form Submitted:', data);
        alert('Form submitted successfully!');
    };

    return (
        <div className="contact-form-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && <p className="error">{errors.message.message}</p>}
                </div>

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;