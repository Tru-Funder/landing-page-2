import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
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

export const WelcomeEmail = ({ userData }: WelcomeEmailProps) => {
  const PropDefaults: DefaultsProps = {
    steps: [
      {
        id: 1,
        Description: (
          <li className="mb-20" key={1}>
            <strong>Full Name:</strong> {userData?.fullName}
          </li>
        ),
      },
      {
        id: 2,
        Description: (
          <li className="mb-20" key={2}>
            <strong>Email:</strong> {userData?.email}
          </li>
        ),
      },
      {
        id: 3,
        Description: (
          <li className="mb-20" key={3}>
            <strong>Country:</strong> {userData?.regionOfResidence}
          </li>
        ),
      },
      {
        id: 4,
        Description: (
          <li className="mb-20" key={4}>
            <strong>Amount Paid:</strong> ${userData?.paymentInfo?.amountPaid}
          </li>
        ),
      },
      {
        id: 5,
        Description: (
          <li className="mb-20" key={4}>
            <strong>Account Size:</strong> {userData?.paymentInfo?.accountSize}
          </li>
        ),
      },
      {
        id: 6,
        Description: (
          <li className="mb-20" key={4}>
            <strong>Preferred Trading Platform:</strong>{" "}
            {userData?.preferredPlatform}
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
        <Body className="bg-[#FAF9F6] text-base font-sans">
          <Img
            src={`https://i.ibb.co/DbRxN81/logo-colored.png`}
            width="184"
            height="40"
            alt="TruFunder Logo"
            className="mx-auto my-20"
          />

          <Container className="bg-white py-10 px-5">
            <Heading className="text-center my-0 leading-8">
              Welcome to TruFunder
            </Heading>

            <Section>
              <Row>
                <Text className="text-base capitalize">
                  Dear {userData?.fullName},
                </Text>

                <Text className="text-base">
                  Thank you for choosing TruFunder for your funded trading
                  account needs. We appreciate your interest in joining our
                  platform.
                </Text>

                <Text className="text-base">
                  We have received your purchase request through our whitelist
                  and are currently reviewing it. Please expect a response from
                  us within 15 minutes. Your patience during this process is
                  greatly appreciated.{" "}
                </Text>

                <Text className="text-base">
                  Here are the details of your purchase request:
                </Text>
              </Row>
            </Section>

            <ul>{PropDefaults.steps?.map(({ Description }) => Description)}</ul>

            <Text className="text-base">
              Should we require any additional information or if you have any
              questions, please do not hesitate to contact us at
              support@trufunder.co
            </Text>

            <Text className="text-base">
              Thank you again for choosing TruFunder. We look forward to
              potentially welcoming you to our platform.
            </Text>

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
