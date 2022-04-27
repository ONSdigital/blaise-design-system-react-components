import React, {ReactElement, useState} from "react";


interface CheckboxesProps{
    content: string[]
    onChange: (values: string[]) => void
}

function Checkboxes({ content, onChange } : CheckboxesProps): ReactElement {
    const [values, setValues] = useState(new Set<string>());
    function updateCheckbox(event: React.ChangeEvent<HTMLInputElement>){
        const newValues = new Set(values);
        if (event.target.checked) {
            newValues.add(event.target.value);
        } else {
            newValues.delete(event.target.value);
        }
        setValues(newValues)
        onChange(Array.from(newValues.values()))
    }
    return (
        <fieldset className="fieldset">
        <div className="input-items">
            <button type="submit" className="btn u-mb-s js-auto-selector btn--small btn--secondary" data-unselect-all="Unselect all" data-select-all="Select all">
            <span className="btn__inner"><span className="js-button-text">Select all</span><span className="u-vh"> following checkboxes</span></span>
            </button>
            <div className="checkboxes__items">
                {
                content.map((item: string) => (
                <span className="checkboxes__item">
                <span className="checkbox ">
                <input type="checkbox" id={item} className="checkbox__input js-checkbox " value={item} onChange={updateCheckbox}/>
                <label className=" checkbox__label " htmlFor={item} id={item}>{item}</label>
                </span>
                </span>
                ))
                }
            </div>
        </div>
        </fieldset>
        );
};

export default Checkboxes;