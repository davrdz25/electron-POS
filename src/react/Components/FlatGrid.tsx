import { useCallback, cloneElement, isValidElement } from "react";
import { TFlatGridProps } from "../Types";
import Style from '../Styles/FlatGrid.module.css'

const FlatGrid = <T,>({
  data,
  renderItem,
  keyExtractor = (_, index) => index.toString(),
}: TFlatGridProps<T>) => {

  const renderListItem = useCallback(
    (item: T, index: number) => {
      const element = renderItem({ item, index });

      if (isValidElement(element)) {
        return cloneElement(element, { key: keyExtractor(item, index) });
      }
      return element;
    },
    [renderItem, keyExtractor]
  );

  return <div className={Style.grid}>{data.map(renderListItem)}</div>;
};

export default FlatGrid;
