import React from "react";

import { ThemeProvider } from "./contexts/ThemeContext";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";

export default function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Form />
      </PageContent>
    </ThemeProvider>
  );
}
