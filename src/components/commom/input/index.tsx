interface InputProps {
    onChange?: (value: any) => void
    label: string
    columnClasses?: string
    placeholder?: string
    value?: string

}

export const Input: React.FC<InputProps> = ({
    columnClasses,
    label,
    placeholder,
    value,
    onChange
}: InputProps) => {

    return (
        <div className={`field column ${columnClasses}`}>
            <label className='label' htmlFor={`input${label}`}>{label}</label>
            <div className="control">
                <input className='input'
                    id='inputSku'
                    placeholder={placeholder}
                    value={value}
                    onChange={event => {
                        if (onChange) {
                            onChange(event.target.value)
                        }
                    }}
                />
            </div>
        </div>
    )
}