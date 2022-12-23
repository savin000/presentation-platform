import "../styles/components/subscriptions.css"
import SubscriptionCard from "../components/SubscriptionCard";

export default function Subscriptions() {
    const subscriptions = Array.from({length: 10}, (_, index) => {
        let name = "Profile " + index;
        let about = "About " + index;
            return <SubscriptionCard name={name} about={about}/>;
    });

    return (
        <div className="subscriptions">
                { subscriptions }
        </div>
    );
}