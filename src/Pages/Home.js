import React from 'react';
import news from '../images/news.jpg'
import '../styles/style.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h2>Welcome to OP Bank</h2>
        <p>Banking made easy and secure for older users.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="quick-overview">
        <h3>Quick Account Overview</h3>
        <div className="account-summary">
          <div className="account-balance">
            <p>Account Balance:</p>
            <p>$5,000.00</p>
          </div>
          <div className="recent-transactions">
            <p>Recent Transactions:</p>
            <p>Deposit, Bill Payment, Withdrawal</p>
          </div>
        </div>
      </div>
      <div className="contact-support">
        <h3>Contact Us</h3>
        <p>If you need assistance or have questions, please contact our support team at <a href="tel:+1234567890">123-456-7890</a>.</p>
      </div>
      <div className="video-tutorials">
        <h3>Video Tutorials</h3>
        <p>Learn how to use our platform with step-by-step video tutorials.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Video Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="news-updates">
        <h3>News and Updates</h3>
        <div className="news-article">
          <img src={news} alt="News Image" />
          <p>
          Ellison, who dated Bankman-Fried off and on over two years while working at Alameda, pleaded guilty to seven counts of fraud and conspiracy as part of 
          a cooperation deal with prosecutors. Over two days, Ellison offered a version of events in which one person, Bankman-Fried, ordered his inner circle 
          to engage in criminal activity. Even though she was the CEO of Alameda, Bankman-Fried was actively overseeing both it and FTX, she testified. 
          Bankman-Fried could face 110 years in prison if convicted and given the maximum sentence.
          </p>
        </div>
        <div className="news-article">
          <img src={news} alt="News Image" />
          <p>
          The prosecution’s case hinges on evidence that Bankman-Fried stole billions of dollars in FTX customer funds to cover Alameda’s losses and to enrich himself 
          and others. With money siphoned directly from FTX customer accounts, prosecutors say, Bankman-Fried splurged on luxury real estate and funneled millions of 
          dollars in donations to US political campaigns. In setting up a secret facility that allowed Alameda to borrow from FTX, Bankman-Fried and other executives 
          lied to investors and deceived customers who trusted that their money could be withdrawn at any time. Ellison and other witnesses have testified that Alameda, 
          </p>
        </div>
        <a href="/news" className="cta-button">Read More</a>
      </div>
    </div>
  );
}

export default Home;
