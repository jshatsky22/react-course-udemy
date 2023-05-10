// create a componennt
function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: "blue" }}
      />
    </div>
  );
}

export default App;
