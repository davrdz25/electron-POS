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
    icon: string;
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

export type TMenuCard = {
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
  label: string
  type: 'input' | 'label'
  maxLength?: number
  rows?: number
  direction: 'row' | 'column'
  value: string
  onChange: (e: string) => void
  placeholder?: string
  password?: boolean
  onPressEnter?: () => void
}

export type TOrder = {
  entry?: number;
  date: string;
  totalToPay: number;
  totalOnAcccount: number,
  paymentMethod: number;
}

export type TOrderDetail = {
  entry?: number;
  lineNum?: number;
  item: number;
  color: number;
  tone: number;
  material: number;
  price: number;
  total: number;
}