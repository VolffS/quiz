import './button.scss'
export function Btn({text, callback}: Readonly<{ text: string, callback: () => void }>) {
    return (
        <button type="submit" className="btn-menu" onClick={callback}>{text}</button>
    );
}