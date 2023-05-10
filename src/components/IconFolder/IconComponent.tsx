interface IconProps {
    icon: string;
    name: string;
    iconClasses: string;
}

const IconComponent = ({ icon, name, iconClasses }: IconProps): JSX.Element => {
    return (
        <>
            <div className="flex flex-col justify-center">
                {/* icon classes: 'h-auto w-14 ml-2' */}
                <img className={iconClasses} src={icon} alt={`${name} icon`} />
                <p className='text-center'>{name}</p>
            </div>
        </>
    )
}

export default IconComponent;