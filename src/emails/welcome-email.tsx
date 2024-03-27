import {
  Body,
  Button,
  Column,
  Container,
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
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface DefaultsProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
}

interface WelcomeEmailProps {
  userData: Record<string, any>;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const WelcomeEmail = ({ userData }: WelcomeEmailProps) => {
  const PropDefaults: DefaultsProps = {
    steps: [
      {
        id: 1,
        Description: (
          <li className="mb-20" key={1}>
            <strong>Full Name:</strong> {userData.fullName}
          </li>
        ),
      },
      {
        id: 2,
        Description: (
          <li className="mb-20" key={2}>
            <strong>Email:</strong> {userData.email}
          </li>
        ),
      },
      {
        id: 3,
        Description: (
          <li className="mb-20" key={3}>
            <strong>Country:</strong> {userData.regionOfResidence}
          </li>
        ),
      },
      {
        id: 4,
        Description: (
          <li className="mb-20" key={4}>
            <strong>Amount Paid</strong> {userData.paymentInfo.amountPaid}
          </li>
        ),
      },
      {
        id: 5,
        Description: (
          <li className="mb-20" key={4}>
            <strong>Account Size</strong> {userData.paymentInfo.acountSize}
          </li>
        ),
      },
      {
        id: 6,
        Description: (
          <li className="mb-20" key={4}>
            <strong>Preferred Trading Platform</strong>{" "}
            {userData.preferredPlatform}
          </li>
        ),
      },
    ],
  };

  return (
    <Html>
      <Head />
      <Preview>TruFunder Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={`https://ibb.co/ZJMn3Yf`}
            width="184"
            height="75"
            alt="TruFunder Logo"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              Welcome to TruFunder
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Dear {userData.fullName}, Thank you for choosing Tru Funder
                  for your funded trading account needs. We have received your
                  purchase request through our whitelist and are currently
                  reviewing it. Your interest in joining our platform is greatly
                  appreciated.
                </Text>

                <Text className="text-base">
                  Here are the details of your purchase request:
                </Text>
              </Row>
            </Section>

            <ul>{PropDefaults.steps?.map(({ Description }) => Description)}</ul>

            <Text className="mt-10">
              Best regards,
              <br />
              <strong>The TruFunder team</strong>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
