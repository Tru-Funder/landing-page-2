"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { Button } from "@/ui";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index.store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setAdminWhitelist } from "@/store/slices/admin-whitelist";

export default function Table() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.adminSlice.data);

  const whitelist =
    useSelector((state: RootState) => state.adminWhitelistSlice.data) || [];

  const handleGetList = async () => {
    const listArr: any[] = [];
    const querySnapshot = await getDocs(collection(db, "whitelist"));
    querySnapshot.forEach((doc) => {
      listArr.push(doc.data());
    });

    dispatch(setAdminWhitelist(listArr));
  };

  const handleAccountVerification = async (account: Record<string, any>) => {
    const listArr: Record<string, any>[] = whitelist.map((l) => {
      if (l.email === account.email) {
        return {
          ...l,
          paymentInfo: { ...l.paymentInfo, verified: true },
        };
      }
      return l;
    });

    await updateDoc(doc(db, "whitelist", account.email), {
      paymentInfo: {
        ...account.paymentInfo,
        verified: true,
      },
    });

    await fetch(`/api/confirm`, {
      method: "POST",
      body: JSON.stringify(account),
    });

    dispatch(setAdminWhitelist(listArr));
  };

  useEffect(() => {
    handleGetList();
    if (!user) {
      router.push("/admin/login");
    }
  }, []);

  if (!user) {
    return (
      <div className="fixed bg-[#070E2A] top-0 left-0 w-full h-screen grid place-content-center">
        <span className="block relative w-96 animate-pulse">
          <Image
            src="/assets/logo-colored.svg"
            width={500}
            height={500}
            alt="Logo"
          />
        </span>
      </div>
    );
  }

  return (
    <div className="border rounded-2xl overflow-hidden grid">
      <div className="overflow-auto custom-scroll-bar bg-neutral-400">
        {!whitelist ? (
          <div className="w-full h-full grid items-center justify-center">
            <span className="block w-20 h-20 rounded-full border-4 border-neutral-600 border-r-transparent border-b-transparent animate-spin"></span>
          </div>
        ) : (
          <table className="w-full">
            <thead className="text-neutral-800 text-sm">
              <tr>
                <th className="py-5 bg-white font-normal text px-5 whitespace-nowrap border-b border-neutral-600">
                  Full Name
                </th>
                <th className="py-5 bg-white font-normal px-5 whitespace-nowrap border-b border-neutral-600">
                  Email
                </th>
                <th className="py-5 bg-white font-normal px-5 whitespace-nowrap border-b border-neutral-600">
                  Account Type
                </th>
                <th className="py-5 bg-white font-normal px-5 whitespace-nowrap border-b border-neutral-600">
                  Region Of Residence
                </th>
                <th className="py-5 bg-white font-normal px-5 whitespace-nowrap border-b border-neutral-600">
                  Preferred Platform
                </th>
                <th className="py-5 bg-white font-normal px-5 whitespace-nowrap border-b border-neutral-600">
                  Account Size
                </th>
                <th className="py-5 bg-white font-normal px-5 whitespace-nowrap border-b border-neutral-600">
                  AmountPaid
                </th>
                <th className="py-5 bg-white font-normal px-5 whitespace-nowrap border-b border-neutral-600">
                  Pamyent Address
                </th>
                <th className="py-5 bg-white font-normal text-left px-5 whitespace-nowrap border-b border-neutral-600">
                  Payment Status
                </th>
              </tr>
            </thead>

            <tbody>
              {whitelist.map((user, i) => (
                <tr
                  key={i}
                  className="text-black font-medium text-sm sm:text-base text-center"
                >
                  <td className="py-5 bg-n border-b bg-neutral-400 px-5 border-neutral-600 whitespace-nowrap capitalize">
                    {user.fullName}
                  </td>

                  <td className="py-5 px-5 border-b bg-neutral-400 border-neutral-600 whitespace-nowrap">
                    {user.email}
                  </td>

                  <td className="py-5 px-5 border-b bg-neutral-400 border-neutral-600 whitespace-nowrap capitalize">
                    {user.accountType}
                  </td>

                  <td className="py-5 px-5 border-b bg-neutral-400 border-neutral-600 whitespace-nowrap">
                    {user.regionOfResidence}
                  </td>

                  <td className="py-5 px-5 border-b bg-neutral-400 border-neutral-600 whitespace-nowrap capitalize">
                    {user.preferredPlatform === "MT4" ? (
                      <div className="grid grid-cols-[auto_1fr] text-xs w-full rounded-lg py-2 px-3 bg-[#B0DAB2] font-medium items-center gap-4">
                        <span className="block relative w-5">
                          <Image
                            src={"/assets/meta-trader-4.png"}
                            width={100}
                            height={100}
                            alt="MetaTrader 4 Logo"
                          />
                        </span>
                        <p>MetaTrader 4</p>
                      </div>
                    ) : user.preferredPlatform === "MT5" ? (
                      <div className="grid grid-cols-[auto_1fr] w-full rounded-lg py-2 px-3 text-xs bg-[#FED202] font-medium items-center gap-4">
                        <span className="block relative w-5">
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
                      user.preferredPlatform === "CT" && (
                        <div className="grid grid-cols-[auto_1fr] w-full rounded-lg text-xs py-2 px-3 bg-[#2F61DF] text-white font-medium items-center gap-4">
                          <span className="block relative w-5">
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
                  </td>

                  <td className="py-5 px-5 border-b bg-neutral-400 border-neutral-600 whitespace-nowrap">
                    {user.paymentInfo?.accountSize
                      ? user.paymentInfo?.accountSize
                      : "-"}
                  </td>

                  <td className="py-5 px-5 border-b bg-neutral-400 border-neutral-600 whitespace-nowrap">
                    {user.paymentInfo?.amountPaid
                      ? `$${user.paymentInfo?.amountPaid.toLocaleString(
                          "en-US"
                        )}`
                      : "-"}
                  </td>

                  <td className="py-5 px-5 border-b bg-neutral-400 border-neutral-600 whitespace-nowrap">
                    {user.paymentInfo?.address
                      ? user.paymentInfo?.address
                      : "-"}
                  </td>

                  <td className="py-5 px-5 border-b bg-neutral-400 border-neutral-600 whitespace-nowrap">
                    {user.paymentInfo?.verified ? (
                      <span
                        className={`block py-2 px-5 border rounded-lg text-center text-xs border-green-300 text-green-600 bg-green-50`}
                      >
                        Confirmed
                      </span>
                    ) : (
                      <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
                        <span
                          className={`block py-2 px-5 border rounded-lg text-center text-xs border-yellow-300 text-yellow-600 bg-yellow-50`}
                        >
                          Pending
                        </span>
                        {user.paymentInfo?.address && (
                          <button
                            onClick={() => handleAccountVerification(user)}
                            className="block relative w-8 hover:opacity-80"
                          >
                            <Image
                              src={"/assets/icons/arrow-green-right.png"}
                              width={100}
                              height={100}
                              alt="Confirm Icon"
                            />
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
