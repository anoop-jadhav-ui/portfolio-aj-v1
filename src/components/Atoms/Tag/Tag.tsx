
const Tag = ({ label }: { label: string }) => {
    return (
        <div className="tag" title={label}>
            {label}
        </div>
    )
}

export default Tag
