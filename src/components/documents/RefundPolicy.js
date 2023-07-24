import React from "react";

import "./PrivacyPolicy.css";

const RefundPolicy = () => {
  const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Return Policy - Qualido.in</title>
    </head>
    <body>
      <h1>Return Policy - Qualido.in</h1>
      <p>
        At Qualido, our customers' satisfaction is of utmost importance to us, and we aim to provide the best products and services at all times. We understand that circumstances may arise where you may need to return an order, and we have formulated our return policy to ensure a smooth and hassle-free return process for our valued customers.
      </p>
      <br />
      <h2>Returns</h2>
      <p>
        We take great care to ensure that our products are of the highest quality and reach you in perfect condition. In the event that the product you received is correct and meets your expectations, we do not issue refunds. We believe in maintaining transparency and trust with our customers. However, if you have any concerns or questions about the product, please feel free to reach out to our dedicated customer support team at <a href="mailto:help.qualido@gmail.com">help.qualido@gmail.com</a>. Our team is always available to assist you and address any queries you may have.
      </p>
      <br />
    
      <h2>Refunds for Prepaid Orders Not Delivered</h2>
      <p>
        For prepaid orders, we understand that timely delivery is crucial. If, in any unfortunate circumstance, your prepaid order does not reach you within the specified delivery time, we offer a full refund. In such cases, please get in touch with us at <a href="mailto:help.qualido@gmail.com">help.qualido@gmail.com</a> within 2 days of the expected delivery date. Our customer support team will promptly initiate the refund process, ensuring you receive your money back.
      </p>
    
      <!-- Add more sections and details as needed -->
    
      <br />
      <h2>Contact Us</h2>
      <p>
        If you have any questions, feedback, or require assistance regarding our return policy or any other aspect of our services, please do not hesitate to contact our friendly customer support team at <a href="mailto:help.qualido@gmail.com">help.qualido@gmail.com</a>. We are here to assist you and ensure your shopping experience with us is enjoyable and satisfactory.
      </p>
    
      <!-- Add additional contact information or footer as needed -->
    
    </body>
    </html>
    `;

  return (
    <div
      style={{ paddingTop: 50, paddingRight: "25%", paddingLeft: "25%" }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );

  //   return (
  //     <div class="c25 doc-content">
  //       <p class="c3">
  //         <span class="c8">REFUND POLICY</span>
  //       </p>
  //       <p class="c21">
  //         <span class="c4">
  //           We gurantee refund within given duration of the particular product. We
  //           do not entertain any refund in case of damaged product.
  //         </span>
  //       </p>
  //     </div>
  //   );
};

export default RefundPolicy;
