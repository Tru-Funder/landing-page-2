import {
  Body,
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

export const PaymentConfirmed = ({ userData }: WelcomeEmailProps) => {
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
      <Preview>Payment Confirmed</Preview>
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
            <Heading className="text-center text-xl my-0 leading-8">
              Payment Confirmation for TruFunder Account
            </Heading>

            <Section>
              <Row>
                <Text className="text-base capitalize">
                  Dear {userData?.fullName},
                </Text>

                <Text className="text-base">
                  We hope this email finds you well. We are writing to confirm
                  the successful receipt of your payment for your TruFunder
                  account. Your commitment to trading with us is greatly
                  appreciated.
                </Text>

                <Text className="text-base">
                  Below are the details of your payment:
                </Text>
              </Row>
            </Section>

            <ul>{PropDefaults.steps?.map(({ Description }) => Description)}</ul>

            <Text className="text-base">
              Please note that while your payment has been received, our
              platform is still under development. As you are on our whitelist,
              rest assured that your spot is reserved, and you will be among the
              first to access the platform once it is ready.
            </Text>

            <Text className="text-base">
              We are diligently working on the development process to ensure a
              seamless experience for our users. We will notify you as soon as
              the platform is live and ready for you to start utilizing it for
              your trading needs.
            </Text>

            <Text className="text-base">
              If you have any questions or require further assistance, please
              feel free to reach out to our customer support team at
              support@trufunder.co We&apos;re here to help.
            </Text>

            <Text className="text-base">
              Thank you once again for choosing TruFunder. We look forward to
              providing you with an exceptional trading experience once our
              platform is launched.
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

export default PaymentConfirmed;
