import React from 'react';
import Footers from '../components/navbar/Footer';
import Navbar from '../components/navbar/NavBar';
import'./faq.css';


const Faq = () => {
return (
	<div>
	
	<Navbar></Navbar>
	
	
	<div className="faq-container">
      <h1 className='faqh'>Frequently Asked Questions</h1><br/><br/>
      <div className="question">
        <h3>1. How does the food sharing app work?</h3>
        <p>Our food sharing app allows users to donate excess food by adding listings with location and images. Volunteers can then deliver the donated food to those in need.</p>
      </div>
      <div className="question">
        <h3>2. How can I donate food through the app?</h3>
        <p>To donate food, simply create a listing on the app with details such as location, description, and an image of the food. Volunteers will then be able to see your listing and arrange for pickup and delivery.</p>
      </div>
      <div className="question">
        <h3>3. Can I donate homemade food through the app?</h3>
        <p>Yes, you can donate homemade food through the app. However, please ensure that the food is safe to eat and properly packaged before donating.</p>
      </div>
      <div className="question">
        <h3>4. Can I donate non-perishable food items?</h3>
        <p>Absolutely! Our app accepts donations of both perishable and non-perishable food items. However, please make sure that non-perishable items are within their expiration dates.</p>
      </div>
      <div className="question">
        <h3>5. How can I become a volunteer for food delivery?</h3>
        <p>If you're interested in becoming a volunteer for food delivery, you can sign up through the app. Once your application is approved, you'll be able to view and select food donation listings to deliver.</p>
      </div>
      <div className="question">
        <h3>6. Can I choose which listings to deliver?</h3>
        <p>Yes, volunteers have the flexibility to choose which food donation listings they want to deliver. You can select listings based on your availability and proximity to the pickup location.</p>
      </div>
      <div className="question">
        <h3>7. Is there a specific time for food pickup?</h3>
        <p>The pickup time for food donations is determined by the donor and volunteer. After selecting a listing, you can coordinate with the donor to arrange a suitable pickup time.</p>
      </div>
      <div className="question">
        <h3>8. Are there any costs associated with using the app?</h3>
        <p>No, our food sharing app is completely free to use for both donors and volunteers. There are no hidden costs or fees involved.</p>
      </div>
      <div className="question">
        <h3>9. How can I ensure the safety of the donated food?</h3>
        <p>We encourage donors to follow proper food safety guidelines when preparing and packaging donated food. Additionally, volunteers are advised to inspect the food upon pickup to ensure its quality and safety.</p>
      </div>
      <div className="question">
        <h3>10. What if I have dietary restrictions or allergies?</h3>
        <p>As a recipient of donated food, it's important to communicate any dietary restrictions or allergies to the donor during the pickup process. This will help ensure that you receive food that is suitable for your needs.</p>
      </div>
      <br/><br/>
    </div>
    <Footers></Footers>
    </div>
);
}

export default Faq;