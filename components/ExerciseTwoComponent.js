import React, { useState, useEffect } from "react";
import { Accordion, Tabs } from "@mantine/core";
import parse from "html-react-parser";
import { motion } from "framer-motion";

export default function ExerciseTwoComponent({ data }) {
  {
    !data && <section>No data found!</section>;
  }

  const accordionItems = data.map((item, index) => (
    <Accordion.Item key={item.title + index} label={item.title}>
      {parse(item.content)}
    </Accordion.Item>
  ));

  return (
    <section className="exercise-two">
      <section className="exercise-two__header">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1.5 }}>
          Exercise 2
        </motion.h1>
      </section>
      <motion.div className="exercise-two__content" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}>
        <Accordion className="exercise-two__accordion" iconPosition="right" initialItem={0}>
          {accordionItems}
        </Accordion>

        <Tabs className="exercise-two__tabs" variant="outline">
          {data.map((item, index) => (
            <Tabs.Tab key={index} label={item.title}>
              {parse(item.content)}
            </Tabs.Tab>
          ))}
        </Tabs>
      </motion.div>
      <motion.hr initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }} />

      <motion.div className="exercise-two__banana" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ease: "easeOut", duration: 1.5 }}>
        <h3>Explain why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana</h3>

        <p>+'a' resolves to NaN ("Not a Number") because it coerces a string to a number, while the character a cannot be parsed as a number.</p>
        <br />
        <p>To lowercase it becomes banana.</p>
        <br />
        <p>Adding NaN to "ba" turns NaN into the string "NaN" due to type conversion, gives baNaN. And then there is an a behind, giving baNaNa.</p>
        <br />
        <p>
          +'a' resolves to NaN ("Not a Number") because it coerces a string to a number, while the character a cannot be parsed as a number. document.write(+'a'); Expand snippet To lowercase it
          becomes banana. Adding NaN to "ba" turns NaN into the string "NaN" due to type conversion, gives baNaN. And then there is an a behind, giving baNaNa.
        </p>
        <br />
        <p>
          The space between + + is to make the first one string concatenation and the second one a unary plus (i.e. "positive") operator. You have the same result if you use 'ba'+(+'a')+'a', resolved
          as 'ba'+NaN+'a', which is equivalent to 'ba'+'NaN'+'a' due to type juggling.
        </p>
        <br />
        <em>
          This explanation was derived from a stackoverflow question posted{" "}
          <a target="_blank" href="https://stackoverflow.com/questions/57456188/why-is-the-result-of-ba-a-a-tolowercase-banana">
            here
          </a>
          .
        </em>
      </motion.div>
    </section>
  );
}
