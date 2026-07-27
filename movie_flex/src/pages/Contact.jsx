import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        reason: "Select Reason",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function validate() {
        const newErrors = {};

        // Full name
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required.";
        }

        // Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Phone (Nepali format: optional +977/977 prefix, then 97/98 + 8 digits)
        const phoneRegex = /^(\+?977[-\s]?)?9[78]\d{8}$/;
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
            newErrors.phone =
                "Enter a valid Nepali phone number (e.g. 98XXXXXXXX).";
        }

        // Reason
        if (formData.reason === "Select Reason") {
            newErrors.reason = "Please select a reason.";
        }

        // Message
        if (!formData.message.trim()) {
            newErrors.message = "Please describe your issue.";
        }

        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Replace with actual submit logic (API call, etc.)
            console.log("Form submitted:", formData);
            setSubmitted(true);
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                reason: "Select Reason",
                message: "",
            });
        } else {
            setSubmitted(false);
        }
    }

    return (
        <div className="contact-container">
            <h1>Contact MovieFlex</h1>

            <div className="contact-wrapper">
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && (
                        <span className="error-text">{errors.fullName}</span>
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <span className="error-text">{errors.phone}</span>}

                    <select name="reason" value={formData.reason} onChange={handleChange}>
                        <option>Select Reason</option>
                        <option>Movie Suggestion</option>
                        <option>Report Bug</option>
                        <option>Account Issue</option>
                        <option>Feedback</option>
                    </select>
                    {errors.reason && (
                        <span className="error-text">{errors.reason}</span>
                    )}

                    <textarea
                        rows="6"
                        name="message"
                        placeholder="Describe your issue..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                        <span className="error-text">{errors.message}</span>
                    )}

                    <button type="submit">Send Message</button>

                    {submitted && (
                        <p className="success-text">
                            Message sent successfully! We'll get back to you soon.
                        </p>
                    )}
                </form>

                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p>📍 Kathmandu, Nepal</p>
                    <p>📧 support@movieflex.com</p>
                    <p>📞 +977-9800000000</p>
                    <p>🕒 Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;