import './button.scss'
export function BtnSubmit({text, callback}: Readonly<{ text: string|number, callback: () => void }>) {
    return (
        <button type="submit" className="btn-menu" onClick={callback}>{text}</button>
    );
}