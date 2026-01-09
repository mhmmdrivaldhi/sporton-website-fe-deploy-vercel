type TCardWithHeaderProps = {
    title: string;
    children: React.ReactNode;
}

const CardWithHeader = ({title, children}:TCardWithHeaderProps) => {
    return (
        <div className="bg-white">
            <div className="border-b border-gray-200 py-4 px-5">
                <h2 className="text-lg font-bold">{title}</h2>
            </div>
            {children}
        </div>
    )
}

export default CardWithHeader;