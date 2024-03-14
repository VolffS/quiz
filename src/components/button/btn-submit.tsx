import './button.scss'
export function BtnSubmit({text, onBtnClick}: Readonly<{ text: string|number, onBtnClick: () => void }>) {
    return (
        <button type="submit" className="btn-menu" onClick={onBtnClick}>{text}</button>
    );
}