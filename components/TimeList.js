import { FlatList } from "react-native";
import TimeItem from "./TimeItem";

function renderTimeItem(itemData) {
    return <TimeItem {...itemData.item} />
}

function TimeList({ time }) {
    return (
        <FlatList
            data={time}
            renderItem={renderTimeItem}
            keyExtractor={(item) => item.id}
        />
    );
}

export default TimeList;