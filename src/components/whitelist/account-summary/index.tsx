"use client";

import { db } from "@/config/firebase";
import { RootState } from "@/store/index.store";
import { Button } from "@/ui";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AccountSummary() {
  const router = useRouter();
  const [isUser, setIsUser] = useState(false);

  const userId = useSelector(
    (state: RootState) => state.wihtelistSlice.data.userId
  );

  const userDetails = useSelector(
    (state: RootState) => state.wihtelistSlice.data.userDetails
  );

  const getUser = async () => {
    const docRef = doc(db, "whitelist", userId || "no-ID");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setIsUser(true);
    } else {
      router.push("/whitelist?step=registration");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="custom-container relative">
      <h2 className="text-4xl sm:text-5xl font-bold capitalize text-center text-white">
        Account Summary
      </h2>

      <div className="bg-[#131B35] text-white px-5 xs:px-10 sm:px-20 py-10 sm:py-20 rounded-xl mt-10 sm:mt-20">
        <div className="text-center">
          <h3 className="text-2xl sm:text-4xl font-semibold">
            Here is your account summary
          </h3>
          <p className="text-base sm:text-lg mt-2 opacity-80">
            please carefully confirm your account details.
          </p>
        </div>

        {userDetails ? (
          <div className="mt-10 text-lg sm:text-xl grid justify-center sm:justify-items-center gap-5">
            {/* Full Name */}
            <div className="grid sm:grid-flow-col w-max sm:gap-5 items-center">
              <p className="font-semibold">Full Name:</p>
              <p className="text-sm sm:text-base opacity-80">
                {userDetails.fullName}
              </p>
            </div>

            {/* Email */}
            <div className="grid sm:grid-flow-col w-max sm:gap-5 items-center">
              <p className="font-semibold">Email:</p>
              <p className="text-sm sm:text-base opacity-80">
                {userDetails.email}
              </p>
            </div>

            {/* Region Of Residence */}
            <div className="grid sm:grid-flow-col w-max sm:gap-5 items-center">
              <p className="font-semibold">Region Of Residence :</p>
              <p className="text-sm sm:text-base opacity-80">
                {userDetails.regionOfResidence}
              </p>
            </div>

            {/* Account Type */}
            <div className="grid sm:grid-flow-col w-max sm:gap-5 items-center">
              <p className="font-semibold">Account Type:</p>
              <p className="text-sm sm:text-base opacity-80 capitalize">
                {userDetails.accountType}
              </p>
            </div>

            {/* Preferred Account */}
            <div className="grid sm:grid-flow-col w-max sm:gap-5 items-center">
              <p className="font-semibold">Preferred Account:</p>
              <div className="mt-3 sm:mt-0">
                {userDetails.preferredPlatform === "MT4" ? (
                  <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-2 px-3 bg-[#B0DAB2] font-medium items-center gap-2">
                    <span className="block relative w-6">
                      <Image
                        src={"/assets/meta-trader-4.png"}
                        width={100}
                        height={100}
                        alt="MetaTrader 4 Logo"
                      />
                    </span>
                    <p>MetaTrader 4</p>
                  </div>
                ) : userDetails.preferredPlatform === "MT5" ? (
                  <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-2 px-3 bg-[#FED202] font-medium items-center gap-2">
                    <span className="block relative w-8">
                      <Image
                        src={"/assets/meta-trader-5.png"}
                        width={100}
                        height={100}
                        alt="MetaTrader 5 Logo"
                      />
                    </span>
                    <p>MetaTrader 5</p>
                  </div>
                ) : (
                  userDetails.preferredPlatform === "CT" && (
                    <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-2 px-3 bg-[#2F61DF] text-white font-medium items-center gap-2">
                      <span className="block relative w-8">
                        <Image
                          src={"/assets/c-trader.png"}
                          width={100}
                          height={100}
                          alt="C Trader Logo"
                        />
                      </span>
                      <p>C Trader</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid place-content-center min-h-64">
            <span className="block w-10 h-10 border-4 border-r-transparent border-b-transparent border-white rounded-full opacity-60 animate-spin"></span>
          </div>
        )}

        <Link href={"/whitelist?step=checkout"}>
          <Button
            variant="contained"
            className="w-full sm:w-max sm:mx-auto mt-16 sm:mt-20 text-xl py-3 px-8"
          >
            Proceed to checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
