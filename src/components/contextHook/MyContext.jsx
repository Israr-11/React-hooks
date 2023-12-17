import { createContext, useState } from "react";

// Create a context with a default value (in this case, an empty string)
const MyContext = createContext("");

// The children prop is used to pass the components nested inside the
// MyContextProvider component.

// Create a provider component that will wrap your app
export const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState("");

  // 1. Provide the value to the components down the tree
  // 2. React components form a hierarchy based on their nesting in the JSX structure.
  // By passing children, you allow any components placed within the MyContextProvider
  // tags to be part of its component tree.
  // 3. Using children allows for dynamic composition of components. You can change the
  // components inside MyContextProvider without modifying its code.
  //4. The children prop is a convention in React that allows you to pass
  //components as children to another component.

  return (
    <>
      <MyContext.Provider value={{ value, setValue }}>
        {children}
        {/*Can be replaced with any component and as a result useState will
         be accessible to it */}
      </MyContext.Provider>
    </>
  );
};

export default MyContext;
