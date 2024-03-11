import './button.scss'
export function Btn({text, callback}: Readonly<{ text: string|number, callback: (ev: any) => void }>) {
    return (
        <button type="button" className="btn-menu" onClick={callback}>{text}</button>
    );
}