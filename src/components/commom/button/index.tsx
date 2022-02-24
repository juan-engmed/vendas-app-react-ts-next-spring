interface IButtonProps {
  typeButton: string;
  title: string;
  btnFunction: (value: any) => void;
}

export const Button: React.FC<IButtonProps> = ({
  btnFunction,
  typeButton,
  title,
}: IButtonProps) => {
  return (
    <div className="control">
      <button className={`button ${typeButton}`} onClick={btnFunction}>
        {title}
      </button>
    </div>
  );
};
