import SelectLang from "./SelectLang";

const Header = () => {
    return (
        <header>
            <h1>NETFLIX</h1>
            <div>
                <SelectLang color='#fff'/>
                <button style={{ background:'red', border: 'none' }}>Sign In</button>
            </div>
        </header>
    )
}
export default Header;