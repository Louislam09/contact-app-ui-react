import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
	title: string;
    onSearch?:React.ChangeEventHandler<HTMLInputElement>;
}

const Header: React.FC<HeaderProps> = ({ title, onSearch }) => {
    const searchRef = useRef<HTMLInputElement>(null)
	const [ showInput, setShowInput ] = useState(false);

	const _showInput = () => {
        setShowInput(!showInput);
        setTimeout(()=>{
            searchRef?.current?.focus();
        },400)
	};

	return (
		<div className="header">
			{!showInput ? (
				<>
					<div className="header__title">{title}</div>

					<div className="header__items">
						<div className="header__icon" onClick={_showInput}>
							<i className="bx bx-search" />
						</div>
						<div className="header__icon">
							<Link to="/create">
								<i className="bx bx-plus" />
							</Link>
						</div>
					</div>
				</>
			) : (
				<input 
                    ref={searchRef} 
                    className="search__input" 
                    type="text" name="search" 
                    placeholder="Search by name" 
                    id="" onBlur={_showInput}
                    onChange={onSearch}
                />
			)}
		</div>
	);
};

export default Header;
