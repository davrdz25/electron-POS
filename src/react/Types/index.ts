import React, { ReactNode } from "react";

export type TFlatListProps<T> = {
  data: T[];
  horizontal?: boolean;
  remSeparation: number;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  renderItem: ({ item, index }: { item: T; index: number }) => ReactNode;
  keyExtractor?: (item: T, index: number) => string;
};

export type TFlatGridProps<T> = {
  data: T[];
  renderItem: ({ item, index }: { item: T; index: number }) => ReactNode;
  keyExtractor?: (item: T, index: number) => string;
  numColumns?: number;
  gap?: number;
};

export type TBadgeProps = {
  icon?: string;
  text: string;
  bgColor: string;
  textColor?: string;
  pressable?: boolean;
  onPress?: () => void;
};

export type TItemCardProps = {
  name: string;
  badgeColor: string;
  badgeFontColor: string;
  image: string;
  category: string;
  price: string;
  onPress: () => void;
};

export type TMenuCardProps = {
  onPress: () => void;
  title: string;
  itemsQty: string;
  selected?: boolean;
  icon: string;
}

export type TOverlay = {
  visible: boolean
}

export type TRoundedButton = {
  icon: string;
  bgColor?: string;
  onPress?: () => void;
  style?: React.CSSProperties
}

export type TSidebar = {
  isOpen: boolean;
  onClose: () => void;
};

export type TSQLConfig = {
  ServerName: string;
  UserName: string;
  Password: string;
  DatabaseName: string;
}

export type TModalMessage = {
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  description: string;
  visible: boolean;
  onClose: () => void;
  duration?: number;
}

export type TCustomInputProps = {
  label?: string
  type: 'input' | 'textarea'
  maxLength?: number
  rows?: number
  direction?: 'row' | 'column'
  value: string
  onChange: (e: string) => void
  placeholder?: string
  password?: boolean
  onPressEnter?: () => void
}

export type TButtonProps = {
    title: string;
    onPress: () => void;
    fontColor: string;
    bgColor: string;
    disabled?: boolean;
    fillWidth?: boolean;
    borderRadious?: string;
}

export type TItemCard = {
  Entry: number;
  Name: string;
  badgeColor: string;
  badgeFontColor: string;
  category: string;
  price: number;
  image: string;
}

export type TMenucard = {
  Entry: number,
  Name: string,
  itemsQuantity: number,
  icon: string
}

export type TTagProps = {
  bgColor: string,
  fontColor: string,
  text: string
}

export type ModalProps = {
  title: string;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export type TCategory = {
  Entry: number,
  Name: string,
  BackgroundColor: string,
  FontColor: string
}

export type TItem = {
  Entry: number;
  Code: string;
  Name: string;
  Description: string;
  Image: string;
  Price: number;
  Category: TCategory;
}

export type TCounterProps = {
    fontSize?: string;
    minValue?: number;
    maxValue?: number;
    onChange: (value: number) => void;
    initialValue: number;
}

export type TOrderLine = {
    LineNum: number;
    ItemEnty: number;
    ItemCode: string;
    ItenName: string;
    Image: string;
    Price: number;
    Comments: string;
    Quantity: number;
    LineTotal: number;
}

export type TOrderLineProps = {
  orderLine: TOrderLine;
  onAdd?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onChangeQuantity: (e: number) => void;
}

export type TOrder = {
  Number: number;
  CustomerCode: string;
  CustomerName: string;
  Date: string;
  Time: string;
  Type: 'D' | 'T' | 'I' | 'P'; //Delivery - Takeout - DineIn - Pickup
  DiscountPercent?: number;
  DiscountAmount?: number;
  Total: number;
}