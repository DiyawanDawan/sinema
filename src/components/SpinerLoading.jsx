import ClipLoader from "react-spinners/ClipLoader";
const SpinerLoading = ({ loading }) => {

    const override = {
        display: 'block',
        margin: '100px auto',
        padding: '4rem',
    }
    return (
        <ClipLoader color="#B51B75" loading={loading} cssOverride={override}
            size={150} />
    )

}

export default SpinerLoading