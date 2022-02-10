interface IButtonProps {
    typeButton: string
    title: string
    onClick: (value: any) => void
}

export const Button: React.FC<IButtonProps> = ({
    onClick,
    typeButton,
    title,
}: IButtonProps) => {

    return (
        <div className="control">
            <button className={`button ${typeButton}`} onClick={onClick}>{title}</button>
        </div>

    );
}
