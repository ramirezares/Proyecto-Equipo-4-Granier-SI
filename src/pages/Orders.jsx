import OrderCard from "../components/OrderCard";

function Orders() {
    const ordersData = [
        {
        orderId: 123,
        userName: "UserName",
        deliveryDate: "11/11/11",
        amount: 25,
        deliveryPlace: "Granier",
        products: ["queso", "pan", "messi"]
        }
    ];

    return (
        <div className="max-w-a mx-auto m-10 p-4 bg-white rounded shadow-md border border-gray-300">
        <h1 className="text-3xl font-bold mb-4">Pedidos Pendientes</h1>
        <hr className="h-px mb-5 bg-gray-300 border-0" />

        {ordersData.map((order) => (
            <OrderCard key={order.orderId} order={order} />
        ))}
        </div>
    );
}

export default Orders;