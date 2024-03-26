import React from "react";
import Form from "./form";

export default function Registration() {
  return (
    <div className="custom-container relative">
      <h2 className="text-4xl sm:text-5xl font-bold capitalize text-center text-white">
        <span className="text-yellow-500">Whitelist</span> Registration
      </h2>

      <Form />
    </div>
  );
}
