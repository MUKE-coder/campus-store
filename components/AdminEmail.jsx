"use client"
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Link,
    Img,
    Font,
    Tailwind,
    Section,
    Row,
    Column,
  } from "@react-email/components";
  import React from "react";
  
  const Header = () => {
    return (
      <div className="w-full" style={headerStyle}>
        <Section className="py-2">
              <Row>
                <Column className="w-[100%]">
                  <Img
                    src={`https://www.desishub.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.30587acc.png&w=32&q=75`}
                    width="35"
                    height="35"
                    alt="company-logo"
                    className="object-contain"
                  />
                </Column>
                <Column  align="right">
                  <Row align="right">
                    <Column>
                      <Link
                        className="mx-2 text-white no-underline"
                        href="#"
                      >
                        About
                      </Link>
                    </Column>
                    <Column>
                      <Link
                        className="mx-2 text-white no-underline"
                        href="#"
                      >
                        Company
                      </Link>
                    </Column>
                    <Column>
                      <Link
                        className="mx-2 text-white no-underline"
                        href="#"
                      >
                        Blog
                      </Link>
                    </Column>
                    <Column>
                      <Link
                        className="mx-2 text-white no-underline"
                        href="#"
                      >
                        
                      </Link>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Section>
      </div>
    );
  };
  
  export const AdminEmail = () => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily="DM Sans"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/dmsans/v15/rP2Fp2ywxg089UriCZa4ET-DNl0.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="initial"
          />
        </Head>
        <Preview>Payment Confirmation</Preview>
        <Body style={main}>
          <Tailwind>
          <Container className="overflow-hidden" style={container}>
            <Header />
            <div className="text-center">
            <img
                src={`https://cdn.templates.unlayer.com/assets/1594973454042-618167-200.png`}
                alt="Celebration"
                style={{maxHeight: 70,
                maxWidth: "100%", marginBottom:20}}
                className="mx-auto"
              />
            </div>
          
            <div pX={20} style={{ textAlign: "center" }}>
             
              <Heading as="h1" style={headingStyle}>
                Thanks for your payment!
              </Heading>
              <Text style={subTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </Text>
            </div>
  
            <div pX={5}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>ORDER ITEM</th>
                    <th style={thStyle}>#3844</th>
                    <th style={thStyle}>#9844</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>Item One</td>
                    <td style={tdStyle}>$200</td>
                    <td style={tdStyle}>$200</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Item Two</td>
                    <td style={tdStyle}>$300</td>
                    <td style={tdStyle}>$300</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Item Three</td>
                    <td style={tdStyle}>$100</td>
                    <td style={tdStyle}>$100</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Item Four</td>
                    <td style={tdStyle}>$400</td>
                    <td style={tdStyle}>$400</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}><strong>Total</strong></td>
                    <td style={tdStyle}><strong>$1000</strong></td>
                    <td style={tdStyle}><strong>$1000</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div style={{display:"flex"}}
             >
              <div className="px-4">
                <Text style={columnHeadingStyle}>Delivery Address:</Text>
                <Text style={columnTextStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh
                </Text>
              </div>
              <div className="px-4">
                <Text style={columnHeadingStyle}>Shipping Address:</Text>
                <Text style={columnTextStyle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  diam nonummy nibh
                </Text>
              </div>
            </div>
  
            <div pY={20} style={{ textAlign: "center" ,background:"#3598db" }}>
              <Text style={offerTextStyle}>Get <strong>20% </strong>OFF on your next order</Text>
              <Button
                href="#"
                style={{
                  backgroundColor: "#fff",
                  color: "#3598db",
                  borderRadius: "35px",
                  padding: "12px 24px",
                  margin: "8px 0",
                  textDecoration: "none",
                  fontSize:12
                }}
              >
                20SPECIAL
              </Button>
            </div>
  
            <div pX={20} style={{ textAlign: "center", marginTop:20 }}>
              <Heading  as="h2" style={{ margin: "24px 0 12px", color:"#236faa" }}>
                <strong>The Shop</strong>
              </Heading>
              <Text style={{ marginBottom: 14 , color:"#a9a69e" , fontSize:12}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </Text>
            </div>
  
            
            <div pX={30} style={{ textAlign: "center", backgroundColor: "#236fa1", padding: "14px 20px",  marginTop:30 , fontSize:9}}>
              <Link className="text-xs text-center" href="#" style={footerLink}>
                @ Shop. All Rights Reserved
              </Link>
            </div>
          </Container>
          </Tailwind>
        </Body>
      </Html>
    );
  };
  
  export default AdminEmail;
  
  const main = {
    backgroundColor: "#eeeeee",
    fontFamily: '"DM Sans", Verdana',
  };
  
  const container = {
    margin: "0 auto",
    backgroundColor: "#fff",

  };
  
  const logoStyle = {
    maxHeight: 30,
    maxWidth: "100%",
  };
  
  const navStyle = {
    float: "right",
  };
  
  const headerStyle = {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    borderBottom: "1px solid #ccc",
    background:"#3598db",
    marginBottom:"30px",
    padding: "14px 12px"
  };
  
  const navLinkStyle = {
    marginLeft: "20px",
    color: "#fff",
    textDecoration: "none",
  };
  
  const headingStyle = {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 700,
    color: "#000",
  };
  
  const subTextStyle = {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: "1.5",
    margin: "0 0 20px",
  };
  
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 20,
  };
  
  const thStyle = {
    textAlign: "center",
    padding: "10px",
    borderBottom: "2px solid #eee",
    fontSize: 13,
    fontWeight: 700,
  };
  
  const tdStyle = {
    textAlign: "center",
    padding: "10px",
    borderBottom: "1px solid #eee",
    fontSize: 13,
  };
  
  const columnHeadingStyle = {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 3,
  };
  
  const columnTextStyle = {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 10,
  };
  
  const offerTextStyle = {
    fontSize: 20,
    fontWeight: 700,
    color: "#fff",
    marginBottom: 20,
  };
  
  const socialLink = {
    margin: "0 15px",
  };
  
  const footerLink = {
    color: "#fff",
    margin: "0 15px",
    fontSize: 14,
    textDecoration: "none",
  };
  