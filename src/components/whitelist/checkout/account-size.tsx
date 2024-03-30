import { CHALLENGES } from "@/constants/compare-our-challenges";
import { RootState } from "@/store/index.store";
import { setWhitelistUserAccountSize } from "@/store/slices/whitelist";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AccountSize() {
  const dispatch = useDispatch();
  const router = useRouter();

  const accountSize = useSelector(
    (state: RootState) => state.wihtelistSlice.data.accountSize
  );

  const userId = useSelector(
    (state: RootState) => state.wihtelistSlice.data.userId
  );

  const userDetails = useSelector(
    (state: RootState) => state.wihtelistSlice.data.userDetails
  );

  const [accountType, setaccountType] = useState(0);

  const handleSelectAccountSize = (size: Record<string, any>) => {
    if (size) {
      dispatch(setWhitelistUserAccountSize(size));
      return;
    }
  };

  useEffect(() => {
    if (!userId) {
      router.push("/whitelist");
    }

    let acctType;

    userDetails.accountType === "evaluation"
      ? (acctType = 0)
      : userDetails.accountType === "express"
      ? (acctType = 1)
      : (acctType = 2);

    setaccountType(acctType);

    dispatch(setWhitelistUserAccountSize(CHALLENGES[acctType].accountSizes[0]));
  }, []);

  return (
    <div className="w-full bg-[#131B35] p-6 xs:p-10 grid gap-10 rounded-xl relative">
      <h3 className="text-[#E6F3E680] text-2xl">Account Size</h3>

      <div className="grid gap-5">
        {CHALLENGES[accountType].accountSizes.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSelectAccountSize(s)}
            className={`w-full text-left rounded-lg px-5 text-white bg-[#070F2A] transition-all duration-300 border border-transparent hover:border-white ${""}`}
          >
            <div className="grid grid-cols-[auto_1fr] gap-5 py-5 items-center">
              <span
                className={`block w-5 h-5 border rounded-full border-[#437EF7] ${
                  accountSize.size === s.size && "p-1"
                }`}
              >
                <span
                  className={`block w-full h-full rounded-full  ${
                    accountSize.size === s.size ? "bg-[#437EF7]" : "bg-white"
                  }`}
                ></span>
              </span>

              <p className="font-medium text-xl capitalize">
                {CHALLENGES[accountType].accountType} {s.size}
              </p>
            </div>

            <div
              className={`border-t-green-500 transition-all overflow-hidden grid gap-3 ${
                accountSize.size === s.size
                  ? "max-h-96 py-3 border-t"
                  : "max-h-0"
              }`}
            >
              <div className="grid grid-flow-col justify-between items-center">
                <p className="text-[#E6F3E680]">Subtotal</p>
                <p>{s.registrationFee}</p>
              </div>

              <div className="grid grid-flow-col justify-between items-center">
                <p className="text-[#E6F3E680]">Discount</p>
                <p className="text-yellow-500">50% off</p>
              </div>

              <div className="grid grid-flow-col justify-between items-center">
                <p className="text-[#E6F3E680]">Total Amount</p>
                <p className="text-xl font-bold">
                  ${parseInt(s.registrationFee.split("$").join("")) / 2}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
