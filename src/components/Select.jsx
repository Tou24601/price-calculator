import Option from "../components/Option";

const Select = ({ options, optionValue, selectID, selectLabel }) => {
  return (
    <div className="form-select">
      <label for={selectID}>{selectLabel}</label>
      <select id={selectID} name="">
      {options.map((item) => (
          <Option optionValue={optionValue} />
        ))}
      </select>
    </div>
  );
};
export default Select;
