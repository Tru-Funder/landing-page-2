"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { Button } from "@/ui";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index.store";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Table() {
  const router = useRouter();
  const [list, setList] = useState<Record<string, any>[]>([]);
  const user = useSelector((state: RootState) => state.adminSlice.data);

  const handleGetList = async () => {
    const listArr: any = [];
    const querySnapshot = await getDocs(collection(db, "whitelist"));
    querySnapshot.forEach((doc) => {
      listArr.push(doc.data());
    });

    setList(listArr);
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
        <table className="w-full">
          <thead className="text-neutral-800 text-sm text-left">
            <tr>
              <th className="py-8 bg-white px-5 whitespace-nowrap border-b border-neutral-600">
                Full Name
              </th>
              <th className="py-8 bg-white px-5 whitespace-nowrap border-b border-neutral-600">
                Email
              </th>
              <th className="py-8 bg-white px-5 whitespace-nowrap border-b border-neutral-600">
                Region Of Residence
              </th>
              <th className="py-8 bg-white px-5 whitespace-nowrap border-b border-neutral-600">
                Account Type
              </th>
              <th className="py-8 bg-white px-5 whitespace-nowrap border-b border-neutral-600">
                Preferred Platform
              </th>
              <th className="py-8 bg-white px-5 whitespace-nowrap border-b border-neutral-600">
                Pamyent Address
              </th>
              <th className="py-8 bg-white px-5 whitespace-nowrap border-b border-neutral-600">
                Payment Status
              </th>
              <th className="py-8 bg-white px-5 whitespace-nowrap border-b border-neutral-600"></th>
            </tr>
          </thead>

          <tbody>
            {list.map((user, i) => (
              <tr key={i} className="text-black font-medium">
                <td className="py-8 bg-neutral-400 px-5 border-neutral-600 whitespace-nowrap capitalize">
                  {user.fullName}
                </td>
                <td className="py-8 px-5 bg-neutral-400 border-neutral-600 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="py-8 px-5 bg-neutral-400 border-neutral-600 whitespace-nowrap capitalize">
                  {user.accountType}
                </td>
                <td className="py-8 px-5 bg-neutral-400 border-neutral-600 whitespace-nowrap">
                  {user.regionOfResidence}
                </td>
                <td className="py-8 px-5 bg-neutral-400 border-neutral-600 whitespace-nowrap capitalize">
                  {user.preferredPlatform}
                </td>
                <td className="py-8 px-5 bg-neutral-400 border-neutral-600 whitespace-nowrap">
                  {user.paymentInfo?.address}
                </td>
                <td className="py-8 px-5 bg-neutral-400 border-neutral-600 whitespace-nowrap">
                  {user.payment?.verified ? "Verified" : "Not Verified"}
                </td>

                {!user.payment?.verified && (
                  <td className="border-neutral-600 bg-neutral-400 py-8 px-5">
                    <Button variant="contained" className="whitespace-nowrap">
                      Verify Account
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
