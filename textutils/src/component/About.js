import React from "react";

export default function About(props) {
  return (
    <>
      <div
        className={`container text-${
          props.vmode === "light" ? "dark" : "light"
        }`}
      >
        <h1>About us</h1>
        <p>
          TextUtils is a software utility or tool that can be used to perform
          various text-related tasks. These tasks could include things like
          formatting, converting, cleaning, and analyzing text data. There are
          many different types of text utilities available, each with its own
          set of features and capabilities. Some common text utilities include:
          Text editors: Programs that allow you to create and edit text
          documents. These can range from simple text editors like Notepad to
          more advanced programs like Microsoft Word. Text formatting tools:
          Programs that allow you to format text in various ways, such as
          changing the font, size, or color of the text. Examples of these types
          of tools include HTML editors and word processors. Text conversion
          tools: Programs that allow you to convert text from one format to
          another. For example, you might use a text conversion tool to convert
          a Microsoft Word document to a PDF file. Text cleaning tools: Programs
          that allow you to clean up or normalize text data. This could include
          things like removing unwanted characters or formatting, converting
          text to lowercase or uppercase, or removing duplicate lines. Text
          analysis tools: Programs that allow you to analyze text data to
          extract insights or patterns. For example, you might use a text
          analysis tool to identify the most common words or phrases in a
          document. Overall, text utilities can be incredibly useful for anyone
          who works with text data on a regular basis. They can help you save
          time, streamline your workflow, and ensure that your text data is
          clean, well-formatted, and easy to work with.
        </p>
      </div>
    </>
  );
}
