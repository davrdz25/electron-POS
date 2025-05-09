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
