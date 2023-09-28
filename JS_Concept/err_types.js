try {
    let a = undefinedVariable;
    console.log(a);
  } catch (e) {
    console.log(e instanceof ReferenceError); // true
    console.log(e.message); // "undefinedVariable is not defined"
    console.log(e.name); // "ReferenceError"
    console.log(e.stack); // Stack of the error
  }

  try {
    eval("hoo bar");
  } catch (e) {
    console.log(e instanceof SyntaxError); // true
    console.log(e.message);
    console.log(e.name); // "SyntaxError"
    console.log(e.stack); // Stack of the error
  }
  

  try {
    null.f();
  } catch (e) {
    console.log(e instanceof TypeError); // true
    console.log(e.message); // "null has no properties"
    console.log(e.name); // "TypeError"
    console.log(e.stack); // Stack of the error
  }