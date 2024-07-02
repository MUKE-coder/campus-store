import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NewOrderEmail = () => (
  <Html>
    <Head />
    <Preview>You Have Received a New Order 😁</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src="https://media.istockphoto.com/id/1324465031/photo/high-angle-view-close-up-asian-woman-using-meal-delivery-service-ordering-food-online-with.jpg?s=612x612&w=0&k=20&c=fvBRmqFb-nYK46nrfC9091HH72a4anMzWoojG7WyDMk="
            width="120"
            height="36"
            alt="Order Notification"
          />
        </Section>
        <Heading style={h1}>New Order Received</Heading>
        <Text style={heroText}>
          Congratulations! You have received a new order. Click the link below to view the details of your order.
        </Text>

        <Section style={buttonContainer}>
          <Link
            href="https://www.kyaja.com/dashboard/orders"
            style={button}
          >
            View Order
          </Link>
        </Section>

        <Text style={text}>
          If you did not expect this email, there's nothing to worry about. You can safely ignore it.
        </Text>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "66%" }}>
              <Img
                src="https://media.istockphoto.com/id/1443492263/photo/distribution-warehouse-with-plexus-automated-guided-vehicles-cardboard-boxes-forklifts-and.jpg?s=612x612&w=0&k=20&c=gwLDALl1Ef1wdn683Vzfgz-fmHN4X4F_KjLlaO1MAFs="
                width="120"
                height="36"
                alt="Order Notification"
              />
            </Column>
            <Column>
              <Section>
                <Row>
                  <Column>
                    <Link href="/">
                      <Img
                        src="https://media.istockphoto.com/id/1582004746/photo/use-mouse-pen-to-developer-for-investment-and-saving-finance-and-invest-has-risk-should-be.jpg?s=612x612&w=0&k=20&c=qDDj46gkP4lFc1EM5LhuNQHMQASPh3yt33N_nhJ_0b8="
                        width="32"
                        height="32"
                        alt="Social Media"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src="https://media.istockphoto.com/id/1407438281/photo/close-up-view-of-organised-pantry-items-with-variety-of-nonperishable-food-staples-and.jpg?s=612x612&w=0&k=20&c=1wT9FfFpTpeL4vN-Yujt0kfVf8cZVHGWpFhZ2mIjywk="
                        width="32"
                        height="32"
                        alt="Social Media"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src="https://media.istockphoto.com/id/1412148116/photo/business-goal-achievement-workflow-and-process-automation-flowchart.jpg?s=612x612&w=0&k=20&c=wjnQeDLGwfNuwy07qflhDOW4h72Ew-bemHvFau1AiZQ="
                        width="32"
                        height="32"
                        alt="Social Media"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                </Row>
              </Section>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            style={footerLink}
            href="https://yourblog.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our blog
          </Link>
        
          <Link
            style={footerLink}
            href="https://yourpolicies.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </Link>
        
          <Link
            style={footerLink}
            href="https://yourhelpcenter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help center
          </Link>
        
          <Link
            style={footerLink}
            href="https://yourcommunity.com"
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            Community
          </Link>
          <Text style={footerText}>
            ©2024 Your Company, LLC. <br />
            123 Your Street, Your City, Your Country <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NewOrderEmail;

const buttonContainer = {
  textAlign: "center",
  marginBottom: "30px",
};

const button = {
  backgroundColor: "#4CAF50",
  color: "#fff",
  padding: "14px 25px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  borderRadius: "4px",
  fontSize: "16px",
  fontWeight: "bold",
};

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left",
  marginBottom: "50px",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const socialMediaIcon = {
  display: "inline",
  marginLeft: "32px",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const logoContainer = {
  marginTop: "32px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
};
