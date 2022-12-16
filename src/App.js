import './App.css';
import './styles/colors.css';
import Profile from "./components/Profile";

function App() {
    const properties = {
        action: "Редактировать профиль",
        name: "John Doe",
        additionalInfo: "Just a person"
    };

    return (
        <div className="application">
            <Profile
                action={properties.action}
                name={properties.name}
                additionalInfo={properties.additionalInfo}
                image={properties.image}
                statistics={properties.statistics}
                description={properties.description}
            />
        </div>
    );
}

export default App;
