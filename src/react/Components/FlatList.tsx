import { CSSProperties, cloneElement, isValidElement } from "react";
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
    const style: CSSProperties = {
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        gap: remSeparation + "rem",
        overflowX: showsHorizontalScrollIndicator ? "scroll" : "hidden",
        overflowY: showsVerticalScrollIndicator ? "scroll" : "hidden",
        paddingLeft: ".2rem",
        paddingRight: ".2rem",
    };

    return (
        <div style={style}>
            {data.map((item, index) => {
                const element = renderItem({ item, index });
                if (isValidElement(element)) {
                    return cloneElement(element, {
                        key: keyExtractor(item, index),
                    });
                }
                return element;
            })}
        </div>
    );
};

export default FlatList;
