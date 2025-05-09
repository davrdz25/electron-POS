import { CSSProperties, useCallback } from "react";
import { TFlatListProps } from "../Types"; 

const FlatList = <T,>({
    data,
    renderItem,
    keyExtractor = (_, index) => index.toString(),
    horizontal,
    remSeparation,
    showsHorizontalScrollIndicator,
    showsVerticalScrollIndicator,
}: TFlatListProps<T>) => {
    const renderListItem = useCallback(
        (item: T, index: number) => (
            <div key={keyExtractor(item, index)}>{renderItem({ item, index })}</div>
        ),
        [renderItem, keyExtractor]
    );

    const style: CSSProperties = {
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        gap: remSeparation + "rem",
        overflowX: showsHorizontalScrollIndicator ? "scroll" : "hidden",
        overflowY: showsVerticalScrollIndicator ? "scroll" : "hidden",
        paddingLeft: ".2rem",
        paddingRight: ".2rem",
    }
    
    return (
        <div style={style}>
            {data.map(renderListItem)}
        </div>
    );
};

export default FlatList