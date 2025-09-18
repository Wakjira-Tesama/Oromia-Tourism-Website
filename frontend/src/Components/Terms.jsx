import React from 'react';
import styled from 'styled-components';
import TermsHeader from './headerTerms';

const TermsContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color:rgb(36,45,66);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #ffff;
  padding-top:50px;
padding-bottom:50px;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const H1 = styled.h1`
  font-size: 2.5rem;

  color: #ffff;
  margin-bottom: 0.5rem;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  color: #ffff;
  margin-bottom: 1rem;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  color: #ffff;
  margin-bottom: 0.5rem;
`;

const P = styled.p`
  font-size: 1.4rem;
  color: #ffff;
  line-height: 1.6;
  margin-bottom: 1rem;
  width:1000px;
  margin:auto;  text-align:left;
`;

const UL = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const LI = styled.li`
  font-size: 1.2rem;
  color: #ffff;
  margin-bottom: 0.5rem;
  margin-left:400px;
  text-align:left;

`;

const TermsPage = () => {
  return (
    <div><TermsHeader/>
    
    <TermsContainer>
      
   
      <Section>
        <H2>1. Introduction</H2>
        <P>Welcome to the Ethiopian Tourism Organization's website ("Website"). These Terms and Conditions ("Terms") govern your use of our Website and services. By accessing or using our Website, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our Website.</P>
      </Section>
      <Section>
        <H2>2. Use of the Website</H2>
        <H3>2.1 Eligibility</H3>
        <P>You must be at least 18 years old to use our Website. By using our Website, you represent and warrant that you are at least 18 years old.</P>
        <H3>2.2 License</H3>
        <P>We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Website for personal, non-commercial use.</P>
        <H3>2.3 Prohibited Activities</H3>
        <P>You agree not to use the Website for any unlawful or prohibited activities, including but not limited to:</P>
        <UL>
          <LI>Engaging in any activity that violates any applicable law or regulation.</LI>
          <LI>Uploading or distributing any content that is unlawful, harmful, defamatory, or otherwise objectionable.</LI>
          <LI>Attempting to gain unauthorized access to our systems or networks.</LI>
          <LI>Engaging in any activity that interferes with or disrupts the operation of the Website.</LI>
        </UL>
      </Section>
      <Section>
        <H2>3. Intellectual Property</H2>
        <P>All content on this Website, including text, graphics, logos, images, and software, is the property of the Ethiopian Tourism Organization or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content on this Website without our prior written permission.</P>
      </Section>
      <Section>
        <H2>4. Disclaimer of Warranties</H2>
        <P>The Website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation or availability of the Website or the information, content, or materials included on the Website.</P>
        <P>We do not warrant that the Website will be free of viruses or other harmful components. You agree that your use of the Website is at your own risk.</P>
      </Section>
      <Section>
        <H2>5. Limitation of Liability</H2>
        <P>To the fullest extent permitted by law, the Ethiopian Tourism Organization shall not be liable for any damages arising out of or in connection with your use of the Website. This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages.</P>
        <P>In no event shall the Ethiopian Tourism Organization be liable for any loss or damage resulting from:</P>
        <UL>
          <LI>The use or inability to use the Website.</LI>
          <LI>Unauthorized access to or alteration of your transmissions or data.</LI>
          <LI>Statements or conduct of any third party on the Website.</LI>
          <LI>Any other matter relating to the Website.</LI>
        </UL>
      </Section>
      <Section>
        <H2>6. Indemnification</H2>
        <P>You agree to indemnify and hold harmless the Ethiopian Tourism Organization, its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of the Website or violation of these Terms.</P>
      </Section>
      <Section>
        <H2>7. Changes to Terms</H2>
        <P>We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Website. Your continued use of the Website after any changes to these Terms constitutes your acceptance of the new Terms.</P>
      </Section>
      <Section>
        <H2>8. Governing Law</H2>
        <P>These Terms are governed by and construed in accordance with the laws of Ethiopia. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Ethiopia.</P>
      </Section>
      <Section>
        <H2>9. Contact Us</H2>
        <P>If you have any questions or concerns about these Terms, please contact us at:</P>
        <P>Ethiopian Tourism Organization<br />123 Tourism St.<br />Addis Ababa, Ethiopia<br />Email: info@ethiopiantourism.org<br />Phone: +251 123 456 789</P>
      </Section>
    </TermsContainer></div>
   
  );
};

export default TermsPage;
