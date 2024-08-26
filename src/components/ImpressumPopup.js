import React from 'react';
import '../styles/ImpressumPopup.css';

const ImpressumPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="impressum-popup-overlay">
      <div className="impressum-popup">
        <h3>Impressum</h3>
        <p><strong>Responsible entity</strong></p>
        <p>Ryan Santos von May<br />
        Thunstrasse 19<br />
        3005 BERN<br />
        Switzerland<br />
        Email: contact@ryanvonmay.com        </p>
        
        <p><strong>Use of contact information</strong></p>
        <p>The use of contact information published within the framework of the impressum for the transmission of not expressly requested advertising and information materials is hereby expressly prohibited.</p>

        <p><strong>Disclaimer</strong></p>
        <p>The author assumes no liability for the correctness, accuracy, timeliness, reliability and completeness of the information. Liability claims against the author for material or immaterial damage resulting from access to, use or non-use of the published information, from misuse of the connection or from technical malfunctions are excluded.</p>

        <p>All offers are non-binding. The author expressly reserves the right to change, add to, or delete parts of the pages or the entire offer without prior notice, or to temporarily or permanently cease publication.</p>

        <p><strong>Disclaimer for content and links</strong></p>
        <p>References and links to third party websites are outside our area of responsibility. It rejects any responsibility for such websites. Access to and use of such websites is at the user's own risk.</p>

        <p><strong>Copyright declaration</strong></p>
        <p>The copyrights and all other rights to content, images, photos or other files on this website belong exclusively to Ryan Santos von May or the specifically named rights holders. The written consent of the copyright holder must be obtained in advance for the reproduction of any elements.</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImpressumPopup;
