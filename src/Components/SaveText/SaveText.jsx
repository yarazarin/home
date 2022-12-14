import "./SaveText.css";

const SaveText = () => {
  const downloadTextFile = () => {
    const element = document.createElement("a", "");
    const file = new Blob([document.getElementById("input").value], {
      type: "data:text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "numbrer.text";
    document.body.appendChild(element);
    element.click();
  };
  return (
    <div className="diary-container">
      <textarea className="diary-input" id="input"></textarea>
      <button className="diary-btn" onClick={downloadTextFile}>
        Save it!
      </button>
    </div>
  );
};

export default SaveText;
