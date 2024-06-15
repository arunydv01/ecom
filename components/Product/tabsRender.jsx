import Image from "next/image";

export const renderSortItem = (text, idx, handleSorting) => (
  <div
    className="flex justify-between"
    onClick={() => handleSorting(text)}
    key={idx}
  >
    <label htmlFor="age1" className="">
      {text.name}
    </label>
    <input type="radio" id="age1" name="age" value="30" />
  </div>
);

export const renderOfferItem = (type, idx, setType) => (
  <div
    className="flex justify-between"
    key={idx}
    onClick={() => setType(type)}
  >
    <label htmlFor="age1" className="">
      {type}
    </label>
    <input type="radio" id="age1" name="age" value={type} />
  </div>
);

export const rendersizewidth = (text, idx) => (
  <div className="flex justify-between" key={idx}>
    <label for="age1" className="">
      {text.name}
    </label>
    <div className="flex gap-6">
      <label>{text.value}</label>
      <input type="checkbox" id="age6" name="age" value="36" />
    </div>
  </div>
);

export const renderColor = (text, idx, handleColorChange) => (
  <div className="flex justify-between items-center" key={idx}>
    <label for="age1" className="">
      {text}
    </label>
    <div className="flex gap-2">
      <input type="checkbox" id="age6" name="age" value="36" />
    </div>
  </div>
);

export const rendercategory = (text, idx) => (
  <div className="flex justify-between" key={idx}>
    <label for="age1" className="">
      {text.name}
    </label>
    <div className="flex gap-6">
      <label>{text.value}</label>
      <input type="checkbox" id="age6" name="age" value="36" />
    </div>
  </div>
);

export const renderCollection = (text, idx) => (
  <div className="flex justify-between" key={idx}>
    <label for="age1" className="">
      {text.name}
    </label>
    <div>
      <input type="checkbox" id="age6" name="age" value="36" />
    </div>
  </div>
);

export const rendersizeheight = (text, idx) => (
  <div className="flex justify-between" key={idx}>
    <label for="age1" className="">
      {text.name}
    </label>
    <div className="flex gap-6">
      <label>{text.value}</label>
      <input type="checkbox" id="age6" name="age" value="36" />
    </div>
  </div>
);
export const renderTypeContent = (text, idx) => (
  <div className="flex justify-between" key={idx}>
    <label for="age1" className="">
      {text.name}
    </label>
    <div className="flex gap-6">
      <label>{text.value}</label>
      <input type="checkbox" id="age6" name="age" value="36" />
    </div>
  </div>
);

export const renderType = (text, idx) => (
  <div className={`flex justify-between`} key={idx}>
    <label for="age1" className="">
      {text.name}
    </label>
    <div className="flex gap-6">
      <label>{text.value}</label>
      <input type="checkbox" id="age6" name="age" value="36" />
    </div>
  </div>
);
