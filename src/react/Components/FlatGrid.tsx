import { useCallback } from "react";
import { TFlatGridProps } from "../Types";
import Style from '../Styles/FlatGrid.module.css'

const FlatGrid = <T,>({
  data,
  renderItem,
  keyExtractor = (_, index) => index.toString(),
}: TFlatGridProps<T>) => {

  const renderListItem = useCallback(
    (item: T, index: number) => (
      <div key={keyExtractor(item, index)}>
        {renderItem({ item, index })}
      </div>
    ),
    [renderItem, keyExtractor]
  );

  return <div className={Style.grid}>{data.map(renderListItem)}</div>;
};

export default FlatGrid