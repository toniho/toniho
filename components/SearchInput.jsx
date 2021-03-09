import React, { useState } from 'react';

const debounce = (fn, delay=300) => {
    let timeout;
    return (...args) => {
        window.clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn.apply(null, args);
        }, delay);
    }
}
const suggestionsList = ['aaaaa','bbbbb', 'aaaabbb', 'bbbaaa'];
const getSUggestions = (search, cb) => {
    const suggestions = suggestionsList.filter(s => s.startsWith(search) && s !== search);
    cb(suggestions);
}

const SearchInput = () => {
    let [value, setValue] = useState('');
    let [suggestions, setSuggestions] = useState([]);

    const debouncedGetSuggestions = debounce(getSUggestions);
    const onInputChange = event => {
        const value = event.target.value;
        
        setValue(event.target.value);
        if (value.length >= 3) {
            debouncedGetSuggestions(value, setSuggestions);
        } else {
            setSuggestions([]);
        }
        
    };
    const onInputKeyPress = event => {
        if (event.key === 'ArrowRight' && suggestions.length > 0) {
            setValue(suggestions[0]);
            setSuggestions([]);
        }
    };
    const onSuggestionClick = event => {
        setValue(event.target.textContent);
        setSuggestions([]);
    };
    return (
        <div className="search-input">
            <input name="search" type="text" autoComplete="off" value={value} onChange={onInputChange} onKeyDown={onInputKeyPress} />
            <div className="search-suggestions">
                {suggestions.length > 0 && suggestions.map(
                    suggestion => (<div key={`suggestion-${suggestion}`} onClick={onSuggestionClick}>{suggestion}</div>))}
            </div>
        </div>
    )
};

export default SearchInput;