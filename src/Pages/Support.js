import React from 'react';
import '../styles/style.css';

function Support() {
  return (
    <div className="help-support">
      <h2>Help and Support</h2>
      <p>
        If you need assistance or have questions, please contact our support team at{' '}
        <a href="mailto:support@opbank.com">support@opbank.com</a>.
      </p>
      <h3>Additional Resources</h3>
      <ul>
        <li>
          <a href="https://opbank.com/faq">Frequently Asked Questions</a>
        </li>
        <li>
          <a href="https://opbank.com/tutorials">Video Tutorials</a>
        </li>
        <li>
          <a href="https://opbank.com/contact">Contact Information</a>
        </li>
      </ul>
    </div>
  );
}

export default Support;
