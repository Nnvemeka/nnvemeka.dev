import React, { useState } from "react";
import Success from "../success/Success";
import './Form.css'

const Form = () => {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setLoading(false);
                setStatus("SUCCESS");
            } else {
                setLoading(false);
                setStatus("ERROR");
            }
        };

        xhr.send(data);
    };

    return (
        <div>
            <form
                name="contact"
                method="post"
                action="https://formspree.io/f/xnqwenkd"
                onSubmit={(e) => submitForm(e)}
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className="form_section">
                    <label>
                        <span>Name*</span>
                        <input type="text" name="name" required autoComplete="name" />
                    </label>
                </div>

                <div className="form_section">
                    <label>
                        <span>Email*</span>
                        <input required type="email" name="email" autoComplete="email" />
                    </label>
                </div>

                <div className="form_section">
                    <label>
                        <span>Message*</span>
                        <textarea
                            required
                            name="message"
                            rows="10"
                            minLength="20"
                        ></textarea>
                    </label>
                </div>

                <div className="form_section">
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>

            {status === "SUCCESS" ? <Success /> : ""}

            {status === "ERROR" && (
                <p style={{ textAlign: "center", color: "red" }}>
                    <b>Oops! An error occured.</b>
                </p>
            )}
        </div>
    );
};

export default Form;