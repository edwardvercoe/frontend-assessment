import React from "react";
import parsedJson from "@/components/data/data.js";
import ExerciseTwoComponent from "@/components/ExerciseTwoComponent";

export default function ExerciseTwo({}) {
  return (
    <main>
      <ExerciseTwoComponent data={parsedJson} />
    </main>
  );
}
