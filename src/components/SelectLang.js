const SelectLang = ( {color} ) => {
    return (
        <select className="select-lang" style={{ color: color }}>
            <option value="" selected disabled hidden>&#xf0ac; English</option>
            <option>English</option>
            <option>Hindi</option>
        </select>
    )
}
export default SelectLang;