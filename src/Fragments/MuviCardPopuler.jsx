
const MuviCardPopuler = ({ calass,children }) => {
    return (
        
            <div className={`bg-${calass} p-6 rounded-lg shadow-md`}>
                {children}
            
        </div>
    )
}

const MuviCardPopulerHeader = ({cardTitle}) => {
    return (
        <h2 className="text-2xl font-bold ">{cardTitle}</h2>
    )
}

const MuviCardPopulerBody = ({children}) => {
    return (
        <p className="mt-2 mb-4"> {children}</p>
    )
}

const MuviCardPopulerFooter = () => {
    return (
        <a
            href="/jobs.html"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
        >
            Morse
        </a>
    )
}
MuviCardPopuler.MuviCardPopulerBody = MuviCardPopulerBody;
MuviCardPopuler.MuviCardPopulerHeader = MuviCardPopulerHeader;
MuviCardPopuler.MuviCardPopulerFooter = MuviCardPopulerFooter;

export default MuviCardPopuler