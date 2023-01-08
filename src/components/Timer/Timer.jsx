import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";
export const Timer = () => {
  let counter = 0;
  let minutes = 0;
  let hours = 0;
  function timer() {
    counter++;
  }

  return (
    <>
      <div>
        {hours}:{minutes} :{counter}
      </div>
    </>
  );
};
