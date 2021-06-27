import React, { useState, useEffect } from 'react';

interface MultiSelectProps {
    options: Array<any> | undefined;
    setData: Function;
}

const MultiSelect: React.FC<MultiSelectProps> = ({options,setData}) => {
    const [selectedItems, setselectedItems] = useState<string[]>([]);

    const onChange = ({ currentTarget: { value } }: React.FormEvent<HTMLSelectElement>) => {
        if(!selectedItems.includes(value)){
            setselectedItems(cv=> [...cv,value]);
        }
    }

    const removeItem = (id:string) => {
        const newItems = selectedItems.filter(item => item != id);
        setselectedItems(newItems);
    }

    useEffect(() => {
        setData((cv:any) => ({ ...cv,groups: selectedItems }))
    }, [selectedItems]);

	return (
		<div className="multiselect__container">
			<div className="selected__list">
                {options?.map(({name,id}) =>{
                    if(selectedItems.includes(id)){
                        return <span key={id} onClick={()=> removeItem(id)} className="item__selected">{name}</span>
                    }
                })}
			</div>

			<div className="select__field form__group">
				<i className="bx bx-group" />

				<select name="multiSelect" onChange={onChange}>
                    <option disabled value="0">Groups</option>
                    {options?.map(({name,id}) => (
                        <option key={id} value={id}>{ name }</option>
                    ))}
				</select>
			</div>
		</div>
	);
};

export default MultiSelect;
