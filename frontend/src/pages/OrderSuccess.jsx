import { useParams } from "react-router";

export default function OrderSuccess(){
    const {id} = useParams();

    const goHome = () => {
        window.location.href = "/"
    }

    return(
        <div className="max-w-xl mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold text-green-600"> Order Placed Sucessfully</h1>

            <p className="mt-4">Your Order ID:
            <span className="font-semibold">{id}</span>
            </p>

            <button
                onClick={goHome}
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded"
                >
                    Continue Shopping
                </button>
        </div>
    )
}