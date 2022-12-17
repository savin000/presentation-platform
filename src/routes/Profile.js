import ProfileCard from "../components/ProfileCard";

export default function Profile() {
    const properties = {
        action: "Редактировать профиль",
        name: "John Doe",
        additionalInfo: "Just a person"
    };

    return (
        <ProfileCard
            action={properties.action}
            name={properties.name}
            additionalInfo={properties.additionalInfo}
            image={properties.image}
            statistics={properties.statistics}
            description={properties.description}
        />
    );
}